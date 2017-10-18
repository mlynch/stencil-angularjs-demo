import { EventEmitter } from '@stencil/core';
var MyComponent = /** @class */ (function () {
    function MyComponent() {
        this.date = new Date();
    }
    MyComponent.prototype.handleClick = function (e) {
        console.log('(internal) click');
        this.onMyClick.emit(e);
        e.stopPropagation();
    };
    MyComponent.prototype.render = function () {
        var _this = this;
        return (h("div", { onClick: function (e) { return _this.handleClick(e); } },
            "Hello, World! I'm ",
            this.first,
            " ",
            this.last,
            " and it's ",
            this.date.toISOString(),
            h("slot", null)));
    };
    return MyComponent;
}());
export { MyComponent };
