import '../../stencil.core';
import { EventEmitter } from "../../stencil.core";
export declare class HTPButton {
    holdTime: number;
    curHoldTime: number;
    holdTimeInterval: number;
    holdProgress: number;
    isHolding: boolean;
    onHoldClick: EventEmitter;
    el: HTMLElement;
    componentWillLoad(): void;
    startHold(): void;
    scheduleDoHold(): void;
    doHold(): void;
    stopHold(): void;
    doHoldClick(): void;
    holdPct(): number;
    render(): JSX.Element;
}
