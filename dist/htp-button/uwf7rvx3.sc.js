/*! Built with http://stenciljs.com */
const{h:t}=window.HtpButton;class o{constructor(){this.holdTime=750,this.curHoldTime=0,this.holdTimeInterval=10,this.holdProgress=0,this.isHolding=!1}componentWillLoad(){this.el.addEventListener("mousedown",t=>{0===t.button&&this.startHold()}),this.el.addEventListener("mouseup",t=>{0===t.button&&this.stopHold()})}startHold(){this.isHolding=!0,this.curHoldTime=0,this.scheduleDoHold()}scheduleDoHold(){setTimeout(()=>{this.doHold()},this.holdTimeInterval)}doHold(){this.isHolding&&(this.curHoldTime+=this.holdTimeInterval,this.holdProgress=this.holdPct(),this.curHoldTime>this.holdTime?(this.stopHold(),this.doHoldClick()):this.scheduleDoHold())}stopHold(){this.isHolding=!1,this.curHoldTime=0,this.holdProgress=0}doHoldClick(){this.onHoldClick.emit()}holdPct(){return Math.ceil(this.curHoldTime/this.holdTime*100)}render(){const o={width:`${this.holdProgress}%`};return t("button",null,t("div",{class:"holdbar"},t("div",{class:"holdprogress",style:o})),t("div",{class:"button-content"},t("slot",null)))}static get is(){return"htp-button"}static get encapsulation(){return"shadow"}static get properties(){return{curHoldTime:{state:!0},el:{elementRef:!0},holdProgress:{state:!0},holdTime:{type:Number,attr:"hold-time"},holdTimeInterval:{state:!0},isHolding:{state:!0}}}static get events(){return[{name:"onHoldClick",method:"onHoldClick",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return".sc-htp-button-h{--button-color:#ccc;--bar-color:red;--text-color:black;--button-shadow:0px 3px 0px #aaa;--button-radius:5px;--button-height:100%;--button-width:100%;background-color:var(--button-color);-webkit-box-shadow:var(--button-shadow);box-shadow:var(--button-shadow);width:auto;height:auto}.sc-htp-button-h   button.sc-htp-button{width:var(--button-width);height:var(--button-height);margin:0;padding:0;border:0;border-radius:var(--button-radius);background:0 0;text-decoration:none;cursor:pointer;position:relative}.sc-htp-button-h   .holdbar.sc-htp-button{position:absolute;top:0;left:0;width:100%;height:100%;border-bottom-right-radius:var(--button-radius);border-bottom-left-radius:var(--button-radius);bottom:0}.sc-htp-button-h   .holdprogress.sc-htp-button{position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--bar-color);border-bottom-right-radius:var(--button-radius);border-bottom-left-radius:var(--button-radius)}.sc-htp-button-h   .button-content.sc-htp-button{position:relative;z-index:1;margin:5px;color:var(--text-color)}"}}export{o as HtpButton};