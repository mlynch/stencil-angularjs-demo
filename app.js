angular.module('app', [])

.controller('RootCtrl', function() {
  this.data = {}
  this.myDate = new Date(1987, 9, 19);
  this.handleSubmit = function(e) {
    e.preventDefault();
  }

  this.componentClick = function($event) { console.log('COMPONENT CLIIII', $event); }
});

var createComponent = function(componentName, props, events) {
  var bindings = {};
  props.forEach(function(p) {
    bindings[p] = '<'
  });
  events.forEach(function(e) {
    bindings[e] = '&'
  });
  return {
    template: `<${componentName} ng-transclude></${componentName}>`,
    transclude: true,
    bindings: bindings,
    controller: function($element) {
      var self = this;
      var e = angular.element($element.children()[0]);
      events.forEach(function(en) {
        e.on(en, function(e) {
          console.log('E ON', e);
          return self[en]({ $event: e });
        })
      });

      // Update props on component
      // from Angular bindings changes
      this.$onChanges = function(c) {
        console.log('CHANGES', c);
        for(let i in c) {
          e[0][i] = c[i].currentValue;
        }
      }
    }
  }
}

var createDirective = function(componentName, props, events) {
  var cap = x => x.substr(0, 1).toUpperCase() + x.substring(1);
  var decap = x => x.substr(0, 1).toLowerCase() + x.substring(1);
  var bindings = {};
  props.forEach(function(p) {
    bindings['prop' + cap(p)] = '<'
  });
  events.forEach(function(e) {
    bindings['prop' + cap(e)] = '&'
  });
  return function() {
    return {
      restrict: 'E',
      replace: false,
      //scope: false,
      scope: bindings,
      bindToController: true,
      controller: ['$element', '$scope', function($element, $scope) {
        var self = this;
        var wc = $element[0];

        this.$onChanges = function(c) {
          console.log('Changes', c);
          for(let i in c) {
            const propName = decap(i.substr(4));
            wc[propName] = c[i].currentValue;
          }
        }
        events.forEach(function(en) {
          $element.on(en, function(e) {
            return self['prop' + cap(en)]({ $event: e });
          });
        });
      }],
    }
  }
};



angular.module('app')
.directive('myComponent', createDirective('my-component',
  ['first','last','date'],
  ['onMyClick']
))