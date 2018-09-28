/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLElement {
    componentOnReady?: () => Promise<this | null>;
  }

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}


declare global {

  namespace StencilComponents {
    interface HtpButton {
      'holdTime': number;
    }
  }

  interface HTMLHtpButtonElement extends StencilComponents.HtpButton, HTMLStencilElement {}

  var HTMLHtpButtonElement: {
    prototype: HTMLHtpButtonElement;
    new (): HTMLHtpButtonElement;
  };
  interface HTMLElementTagNameMap {
    'htp-button': HTMLHtpButtonElement;
  }
  interface ElementTagNameMap {
    'htp-button': HTMLHtpButtonElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'htp-button': JSXElements.HtpButtonAttributes;
    }
  }
  namespace JSXElements {
    export interface HtpButtonAttributes extends HTMLAttributes {
      'holdTime'?: number;
      'onOnHoldClick'?: (event: CustomEvent) => void;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface MyComponent {
      'first': string;
      'last': string;
    }
  }

  interface HTMLMyComponentElement extends StencilComponents.MyComponent, HTMLStencilElement {}

  var HTMLMyComponentElement: {
    prototype: HTMLMyComponentElement;
    new (): HTMLMyComponentElement;
  };
  interface HTMLElementTagNameMap {
    'my-component': HTMLMyComponentElement;
  }
  interface ElementTagNameMap {
    'my-component': HTMLMyComponentElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'my-component': JSXElements.MyComponentAttributes;
    }
  }
  namespace JSXElements {
    export interface MyComponentAttributes extends HTMLAttributes {
      'first'?: string;
      'last'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface TodoItem {
      'done': boolean;
      'label': string;
    }
  }

  interface HTMLTodoItemElement extends StencilComponents.TodoItem, HTMLStencilElement {}

  var HTMLTodoItemElement: {
    prototype: HTMLTodoItemElement;
    new (): HTMLTodoItemElement;
  };
  interface HTMLElementTagNameMap {
    'todo-item': HTMLTodoItemElement;
  }
  interface ElementTagNameMap {
    'todo-item': HTMLTodoItemElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'todo-item': JSXElements.TodoItemAttributes;
    }
  }
  namespace JSXElements {
    export interface TodoItemAttributes extends HTMLAttributes {
      'done'?: boolean;
      'label'?: string;
      'onTodoCompleted'?: (event: CustomEvent) => void;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface TodoList {
      'listTitle': string;
    }
  }

  interface HTMLTodoListElement extends StencilComponents.TodoList, HTMLStencilElement {}

  var HTMLTodoListElement: {
    prototype: HTMLTodoListElement;
    new (): HTMLTodoListElement;
  };
  interface HTMLElementTagNameMap {
    'todo-list': HTMLTodoListElement;
  }
  interface ElementTagNameMap {
    'todo-list': HTMLTodoListElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'todo-list': JSXElements.TodoListAttributes;
    }
  }
  namespace JSXElements {
    export interface TodoListAttributes extends HTMLAttributes {
      'listTitle'?: string;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }

export declare function defineCustomElements(window: any): void;