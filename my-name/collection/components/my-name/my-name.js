var MyName = /** @class */ (function () {
    function MyName() {
        this.date = new Date();
    }
    MyName.prototype.handleClick = function (e) {
        console.log('My Click (internal)');
        this.onMyClick.emit(e);
    };
    MyName.prototype.render = function () {
        var _this = this;
        return (h("div", { onClick: function (e) { return _this.handleClick(e); } },
            "Hello, my name is ",
            this.first,
            " ",
            this.last,
            " on ",
            this.date.toISOString()));
    };
    return MyName;
}());
export { MyName };
