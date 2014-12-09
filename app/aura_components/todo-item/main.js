/*
nog  niet gebruikt
*/
define(['text!./todo-list.html', 'underscore'], function(tpl, _) {
    return {
        initialize: function() {
            this.render();
            console.log('todo-item initialized');
            this.sandbox.on('todos.add', this.showTodo, this)
        },
        render: function() {},
        showTodo: function(todo) {
            console.log('show todo');
        }
    };
});