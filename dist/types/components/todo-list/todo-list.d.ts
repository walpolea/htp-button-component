import '../../stencil.core';
export declare class TodoList {
    listTitle: string;
    todos: Todo[];
    componentWillLoad(): void;
    makeTodo(label: string): {
        label: string;
        done: boolean;
    };
    addTodo(item: string): void;
    render(): JSX.Element;
}
interface Todo {
    done: boolean;
    label: string;
}
export {};
