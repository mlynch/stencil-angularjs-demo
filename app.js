angular.module('app', [])

.controller('RootCtrl', function() {
  this.data = {}
  this.myDate = new Date(1987, 9, 19);
  this.handleSubmit = function(e) {
    e.preventDefault();
  }

  this.componentClick = function() {
    console.log('COMPONENT CLIIII');
  }
})

.component('myNameNg', {
  template: '<my-name></my-name>',
  bindings: {
    first: '<',
    last: '<',
    date: '<',
    onMyClick: '&'
  },
  controller: function($scope, $element, $attrs) {
    var self = this;

    const wc = $element.children()[0];
    const wc$ = angular.element(wc);

    wc$.on('onMyClick', function(e) {
      console.log('Got WC event, calling ours', self);
      return self.onMyClick();
    });

    this.$onChanges = function(c) {
      for(let i in c) {
        console.log(i, c);
        wc[i] = c[i].currentValue;
      }
    }
  }
});