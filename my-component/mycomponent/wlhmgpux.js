/*! Built with http://stenciljs.com */

mycomponent.loadStyles("my-component","\nmy-component.hydrated{visibility:inherit}");
mycomponent.loadComponents("wlhmgpux",function(t,n,o,i,e){"use strict";var l=function(){function t(){this.date=new Date}return t.prototype.handleClick=function(t){console.log("(internal) click"),this.onMyClick.emit(t),t.stopPropagation()},t.prototype.render=function(){var t=this;return n("div",{onClick:function(n){return t.handleClick(n)}},"Hello, World! I'm ",this.first," ",this.last," and it's ",this.date.toISOString(),n("slot",null))},t}();t["my-component"]=l},["my-component",[["date",1],["first",1,1],["last",1,1]],{},[["onMyClick"]]]);;