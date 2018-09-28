import { Component, Prop, State, Event, EventEmitter, Element } from "@stencil/core";

@Component({
  tag: "htp-button",
  styleUrl: "htp-button.scss",
  shadow: true
})
export class HTPButton {
  @Prop()
  holdTime: number = 750;

  @State()
  curHoldTime: number = 0;
  @State()
  holdTimeInterval: number = 10;
  @State()
  holdProgress: number = 0;
  @State()
  isHolding: boolean = false;

  @Event()
  onHoldClick: EventEmitter;
  @Element()
  el: HTMLElement;

  componentWillLoad() {
    this.el.addEventListener("mousedown", e => {
      if (e.button === 0) this.startHold();
    });

    this.el.addEventListener("mouseup", e => {
      if (e.button === 0) this.stopHold();
    });

    this.el.addEventListener("touchstart", () => {
      this.startHold();
    });

    this.el.addEventListener("touchend", () => {
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
      } else {
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

  holdPct(): number {
    return Math.ceil((this.curHoldTime / this.holdTime) * 100);
  }

  render() {
    const holdAsWidth = { width: `${this.holdProgress}%` };

    const content = (
      <button>
        <div class="holdbar">
          <div class="holdprogress" style={holdAsWidth} />
        </div>
        <div class="button-content">
          <slot />
        </div>
      </button>
    );

    return content;
  }
}
