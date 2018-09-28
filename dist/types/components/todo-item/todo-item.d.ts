import '../../stencil.core';
import { EventEmitter } from "../../stencil.core";
export declare class TodoItem {
    label: string;
    done: boolean;
    todoCompleted: EventEmitter;
    check(): void;
    uncheck(): void;
    todoClickHandler(): void;
    render(): JSX.Element;
}
