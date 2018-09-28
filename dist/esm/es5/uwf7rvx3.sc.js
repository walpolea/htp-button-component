/*! Built with http://stenciljs.com */
import{h}from"./htp-button.core.js";var HTPButton=function(){function t(){this.holdTime=750,this.curHoldTime=0,this.holdTimeInterval=10,this.holdProgress=0,this.isHolding=!1}return t.prototype.componentWillLoad=function(){var t=this;this.el.addEventListener("mousedown",function(e){0===e.button&&t.startHold()}),this.el.addEventListener("mouseup",function(e){0===e.button&&t.stopHold()})},t.prototype.startHold=function(){this.isHolding=!0,this.curHoldTime=0,this.scheduleDoHold()},t.prototype.scheduleDoHold=function(){var t=this;setTimeout(function(){t.doHold()},this.holdTimeInterval)},t.prototype.doHold=function(){this.isHolding&&(this.curHoldTime+=this.holdTimeInterval,this.holdProgress=this.holdPct(),this.curHoldTime>this.holdTime?(this.stopHold(),this.doHoldClick()):this.scheduleDoHold())},t.prototype.stopHold=function(){this.isHolding=!1,this.curHoldTime=0,this.holdProgress=0},t.prototype.doHoldClick=function(){this.onHoldClick.emit()},t.prototype.holdPct=function(){return Math.ceil(this.curHoldTime/this.holdTime*100)},t.prototype.render=function(){var t={width:this.holdProgress+"%"};return h("button",null,h("div",{class:"holdbar"},h("div",{class:"holdprogress",style:t})),h("div",{class:"button-content"},h("slot",null)))},Object.defineProperty(t,"is",{get:function(){return"htp-button"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{curHoldTime:{state:!0},el:{elementRef:!0},holdProgress:{state:!0},holdTime:{type:Number,attr:"hold-time"},holdTimeInterval:{state:!0},isHolding:{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"onHoldClick",method:"onHoldClick",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".sc-htp-button-h{--button-color:#ccc;--bar-color:red;--text-color:black;--button-shadow:0px 3px 0px #aaa;--button-radius:5px;--button-height:100%;--button-width:100%;background-color:var(--button-color);-webkit-box-shadow:var(--button-shadow);box-shadow:var(--button-shadow);width:auto;height:auto}.sc-htp-button-h   button.sc-htp-button{width:var(--button-width);height:var(--button-height);margin:0;padding:0;border:0;border-radius:var(--button-radius);background:0 0;text-decoration:none;cursor:pointer;position:relative}.sc-htp-button-h   .holdbar.sc-htp-button{position:absolute;top:0;left:0;width:100%;height:100%;border-bottom-right-radius:var(--button-radius);border-bottom-left-radius:var(--button-radius);bottom:0}.sc-htp-button-h   .holdprogress.sc-htp-button{position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--bar-color);border-bottom-right-radius:var(--button-radius);border-bottom-left-radius:var(--button-radius)}.sc-htp-button-h   .button-content.sc-htp-button{position:relative;z-index:1;margin:5px;color:var(--text-color)}"},enumerable:!0,configurable:!0}),t}();export{HTPButton as HtpButton};