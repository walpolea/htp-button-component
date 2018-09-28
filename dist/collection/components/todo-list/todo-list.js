export class TodoList {
    constructor() {
        this.todos = [];
    }
    componentWillLoad() {
        this.addTodo("hello world");
        this.addTodo("world");
        this.addTodo("mary");
    }
    makeTodo(label) {
        return { label, done: true };
    }
    addTodo(item) {
        this.todos = [...this.todos, this.makeTodo(item)];
    }
    render() {
        const todoitems = this.todos.map(item => {
            return h("todo-item", { done: item.done }, item.label);
        });
        console.log(todoitems);
        const content = (h("div", null,
            h("header", null,
                h("h1", null,
                    "To Do: ",
                    this.listTitle)),
            h("section", null,
                h("ul", { class: "todo-list" }, todoitems))));
        return content;
    }
    static get is() { return "todo-list"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "listTitle": {
            "type": String,
            "attr": "list-title"
        },
        "todos": {
            "state": true
        }
    }; }
    static get style() { return "/**style-placeholder:todo-list:**/"; }
}
