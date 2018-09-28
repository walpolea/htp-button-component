export class HTPButton {
    constructor() {
        this.holdTime = 750;
        this.curHoldTime = 0;
        this.holdTimeInterval = 10;
        this.holdProgress = 0;
        this.isHolding = false;
    }
    componentWillLoad() {
        this.el.addEventListener("mousedown", e => {
            if (e.button === 0)
                this.startHold();
        });
        this.el.addEventListener("mouseup", e => {
            if (e.button === 0)
                this.stopHold();
        });
    }
    startHold() {
        this.isHolding = true;
        this.curHoldTime = 0;
        this.scheduleDoHold();
    }
    scheduleDoHold() {
        setTimeout(() => {
            this.doHold();
        }, this.holdTimeInterval);
    }
    doHold() {
        if (this.isHolding) {
            this.curHoldTime += this.holdTimeInterval;
            this.holdProgress = this.holdPct();
            if (this.curHoldTime > this.holdTime) {
                this.stopHold();
                this.doHoldClick();
            }
            else {
                this.scheduleDoHold();
            }
        }
    }
    stopHold() {
        this.isHolding = false;
        this.curHoldTime = 0;
        this.holdProgress = 0;
    }
    doHoldClick() {
        this.onHoldClick.emit();
    }
    holdPct() {
        return Math.ceil((this.curHoldTime / this.holdTime) * 100);
    }
    render() {
        const holdAsWidth = { width: `${this.holdProgress}%` };
        const content = (h("button", null,
            h("div", { class: "holdbar" },
                h("div", { class: "holdprogress", style: holdAsWidth })),
            h("div", { class: "button-content" },
                h("slot", null))));
        return content;
    }
    static get is() { return "htp-button"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "curHoldTime": {
            "state": true
        },
        "el": {
            "elementRef": true
        },
        "holdProgress": {
            "state": true
        },
        "holdTime": {
            "type": Number,
            "attr": "hold-time"
        },
        "holdTimeInterval": {
            "state": true
        },
        "isHolding": {
            "state": true
        }
    }; }
    static get events() { return [{
            "name": "onHoldClick",
            "method": "onHoldClick",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "/**style-placeholder:htp-button:**/"; }
}
