/*! Built with http://stenciljs.com */
HtpButton.loadBundle("nh6jk5dt",["exports"],function(t){var o=window.HtpButton.h,e=function(){function t(){this.holdTime=750,this.curHoldTime=0,this.holdTimeInterval=10,this.holdProgress=0,this.isHolding=!1}return t.prototype.componentWillLoad=function(){var t=this;this.el.addEventListener("mousedown",function(o){console.log("omd",o.button),0===o.button&&t.startHold()}),this.el.addEventListener("mouseup",function(o){console.log("omu",o.button),0===o.button&&t.stopHold()})},t.prototype.startHold=function(){this.isHolding=!0,console.log("start hold"),this.curHoldTime=0,this.scheduleDoHold()},t.prototype.scheduleDoHold=function(){var t=this;setTimeout(function(){t.doHold()},this.holdTimeInterval)},t.prototype.doHold=function(){console.log("interval",this.curHoldTime,this.holdTime),this.isHolding&&(this.curHoldTime+=this.holdTimeInterval,this.holdProgress=this.holdPct(),this.curHoldTime>=this.holdTime?(this.stopHold(),this.doHoldClick()):this.scheduleDoHold())},t.prototype.stopHold=function(){this.isHolding=!1,this.curHoldTime=0,this.holdProgress=0},t.prototype.doHoldClick=function(){this.onHoldClick.emit(),console.log("CLICKED!")},t.prototype.holdPct=function(){return Math.ceil(this.curHoldTime/this.holdTime*100)},t.prototype.render=function(){var t={width:this.holdProgress+"%"};return o("button",null,o("div",{class:"button-content"},o("slot",null)),o("div",{class:"holdbar"},o("div",{class:"holdprogress",style:t})))},Object.defineProperty(t,"is",{get:function(){return"htp-button"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{curHoldTime:{state:!0},el:{elementRef:!0},holdProgress:{state:!0},holdTime:{type:Number,attr:"hold-time"},holdTimeInterval:{state:!0},isHolding:{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"onHoldClick",method:"onHoldClick",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{--button-color:#ccc;--bar-color:red;--text-color:black;--button-shadow:0px 3px 0px #aaa;--button-radius:5px;background-color:var(--button-color);-webkit-box-shadow:var(--button-shadow);box-shadow:var(--button-shadow)}:host button{border:0;background:0 0;text-decoration:none;width:100%;margin:0;padding:0;cursor:pointer;border-radius:var(--button-radius)}:host .holdbar{width:100%;height:10px;border-bottom-right-radius:var(--button-radius);border-bottom-left-radius:var(--button-radius)}:host .holdprogress{background-color:var(--bar-color);height:10px;border-bottom-right-radius:var(--button-radius);border-bottom-left-radius:var(--button-radius)}:host .button-content{margin:5px;color:var(--text-color)}"},enumerable:!0,configurable:!0}),t}();t.HtpButton=e,Object.defineProperty(t,"__esModule",{value:!0})});