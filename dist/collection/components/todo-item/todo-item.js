export class TodoItem {
    constructor() {
        this.done = false;
    }
    check() {
        this.done = true;
    }
    uncheck() {
        this.done = false;
    }
    todoClickHandler() {
        if (this.done) {
            this.uncheck();
        }
        else {
            this.check();
            this.todoCompleted.emit({ label: this.label, done: this.done });
        }
    }
    render() {
        const content = (h("li", { "data-checked": this.done },
            h("input", { type: "checkbox", onClick: () => this.todoClickHandler() }),
            h("slot", null)));
        return content;
    }
    static get is() { return "todo-item"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "done": {
            "type": Boolean,
            "attr": "done",
            "mutable": true
        },
        "label": {
            "type": String,
            "attr": "label"
        }
    }; }
    static get events() { return [{
            "name": "todoCompleted",
            "method": "todoCompleted",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "/**style-placeholder:todo-item:**/"; }
}
