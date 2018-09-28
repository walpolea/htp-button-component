/*! Built with http://stenciljs.com */
const{h:t}=window.HtpButton;class e{constructor(){this.done=!1}check(){this.done=!0}uncheck(){this.done=!1}todoClickHandler(){this.done?this.uncheck():(this.check(),this.todoCompleted.emit({label:this.label,done:this.done}))}render(){return t("li",{"data-checked":this.done},t("input",{type:"checkbox",onClick:()=>this.todoClickHandler()}),t("slot",null))}static get is(){return"todo-item"}static get encapsulation(){return"shadow"}static get properties(){return{done:{type:Boolean,attr:"done",mutable:!0},label:{type:String,attr:"label"}}}static get events(){return[{name:"todoCompleted",method:"todoCompleted",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return":host li[data-checked]{text-decoration:line-through;color:#ccc}"}}class o{constructor(){this.todos=[]}componentWillLoad(){this.addTodo("hello world"),this.addTodo("world"),this.addTodo("mary")}makeTodo(t){return{label:t,done:!0}}addTodo(t){this.todos=[...this.todos,this.makeTodo(t)]}render(){const e=this.todos.map(e=>t("todo-item",{done:e.done},e.label));return console.log(e),t("div",null,t("header",null,t("h1",null,"To Do: ",this.listTitle)),t("section",null,t("ul",{class:"todo-list"},e)))}static get is(){return"todo-list"}static get encapsulation(){return"shadow"}static get properties(){return{listTitle:{type:String,attr:"list-title"},todos:{state:!0}}}static get style(){return"\@import url(https://use.fontawesome.com/releases/v5.3.1/css/all.css);:host>div{font-family:arial,helvetica,sans-serif;background-color:red;max-width:280px}:host header{text-align:center}:host header h1{display:inline-block}:host header i{font-size:1.5rem;margin:0 5px}:host ul{margin:0;padding:0}:host li{list-style:none}"}}export{e as TodoItem,o as TodoList};