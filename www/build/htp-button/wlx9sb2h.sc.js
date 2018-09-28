/*! Built with http://stenciljs.com */
const{h:t}=window.HtpButton;class e{constructor(){this.done=!1}check(){this.done=!0}uncheck(){this.done=!1}todoClickHandler(){this.done?this.uncheck():(this.check(),this.todoCompleted.emit({label:this.label,done:this.done}))}render(){return t("li",{"data-checked":this.done},t("input",{type:"checkbox",onClick:()=>this.todoClickHandler()}),t("slot",null))}static get is(){return"todo-item"}static get encapsulation(){return"shadow"}static get properties(){return{done:{type:Boolean,attr:"done",mutable:!0},label:{type:String,attr:"label"}}}static get events(){return[{name:"todoCompleted",method:"todoCompleted",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return".sc-todo-item-h   li[data-checked].sc-todo-item{text-decoration:line-through;color:#ccc}"}}class o{constructor(){this.todos=[]}componentWillLoad(){this.addTodo("hello world"),this.addTodo("world"),this.addTodo("mary")}makeTodo(t){return{label:t,done:!0}}addTodo(t){this.todos=[...this.todos,this.makeTodo(t)]}render(){const e=this.todos.map(e=>t("todo-item",{done:e.done},e.label));return console.log(e),t("div",null,t("header",null,t("h1",null,"To Do: ",this.listTitle)),t("section",null,t("ul",{class:"todo-list"},e)))}static get is(){return"todo-list"}static get encapsulation(){return"shadow"}static get properties(){return{listTitle:{type:String,attr:"list-title"},todos:{state:!0}}}static get style(){return"\@import url(https://use.fontawesome.com/releases/v5.3.1/css/all.css);.sc-todo-list-h > div.sc-todo-list{font-family:arial,helvetica,sans-serif;background-color:red;max-width:280px}.sc-todo-list-h   header.sc-todo-list{text-align:center}.sc-todo-list-h   header.sc-todo-list   h1.sc-todo-list{display:inline-block}.sc-todo-list-h   header.sc-todo-list   i.sc-todo-list{font-size:1.5rem;margin:0 5px}.sc-todo-list-h   ul.sc-todo-list{margin:0;padding:0}.sc-todo-list-h   li.sc-todo-list{list-style:none}"}}export{e as TodoItem,o as TodoList};