/*! Built with http://stenciljs.com */
import{h}from"./htp-button.core.js";var TodoItem=function(){function e(){this.done=!1}return e.prototype.check=function(){this.done=!0},e.prototype.uncheck=function(){this.done=!1},e.prototype.todoClickHandler=function(){this.done?this.uncheck():(this.check(),this.todoCompleted.emit({label:this.label,done:this.done}))},e.prototype.render=function(){var e=this;return h("li",{"data-checked":this.done},h("input",{type:"checkbox",onClick:function(){return e.todoClickHandler()}}),h("slot",null))},Object.defineProperty(e,"is",{get:function(){return"todo-item"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{done:{type:Boolean,attr:"done",mutable:!0},label:{type:String,attr:"label"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"todoCompleted",method:"todoCompleted",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-todo-item-h   li[data-checked].sc-todo-item{text-decoration:line-through;color:#ccc}"},enumerable:!0,configurable:!0}),e}(),TodoList=function(){function e(){this.todos=[]}return e.prototype.componentWillLoad=function(){this.addTodo("hello world"),this.addTodo("world"),this.addTodo("mary")},e.prototype.makeTodo=function(e){return{label:e,done:!0}},e.prototype.addTodo=function(e){this.todos=this.todos.concat([this.makeTodo(e)])},e.prototype.render=function(){var e=this.todos.map(function(e){return h("todo-item",{done:e.done},e.label)});return console.log(e),h("div",null,h("header",null,h("h1",null,"To Do: ",this.listTitle)),h("section",null,h("ul",{class:"todo-list"},e)))},Object.defineProperty(e,"is",{get:function(){return"todo-list"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{listTitle:{type:String,attr:"list-title"},todos:{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"\@import url(https://use.fontawesome.com/releases/v5.3.1/css/all.css);.sc-todo-list-h > div.sc-todo-list{font-family:arial,helvetica,sans-serif;background-color:red;max-width:280px}.sc-todo-list-h   header.sc-todo-list{text-align:center}.sc-todo-list-h   header.sc-todo-list   h1.sc-todo-list{display:inline-block}.sc-todo-list-h   header.sc-todo-list   i.sc-todo-list{font-size:1.5rem;margin:0 5px}.sc-todo-list-h   ul.sc-todo-list{margin:0;padding:0}.sc-todo-list-h   li.sc-todo-list{list-style:none}"},enumerable:!0,configurable:!0}),e}();export{TodoItem,TodoList};