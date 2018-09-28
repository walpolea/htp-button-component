// HtpButton: Custom Elements Define Library, ES Module/ES5 Target
import { defineCustomElement } from './htp-button.core.js';
import {
  HTPButton,
  MyComponent,
  TodoItem,
  TodoList
} from './htp-button.components.js';

export function defineCustomElements(window, opts) {
  defineCustomElement(window, [
    HTPButton,
    MyComponent,
    TodoItem,
    TodoList
  ], opts);
}