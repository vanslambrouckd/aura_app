define(['text!./todo-list.html', 'text!./todo-item.html', 'underscore'], function(tplList, tplItem, _) {
    return {
        getTasks: function() {
            return [{
                name: 'task1',
                author: 'david',
                }, {
                name: 'task2',
                author: 'ruben'
                }, {
                name: 'task3',
                author: 'bram'
                }
            ];
        },
        initialize: function() {
            this.tasks = [];
            //executed automatically
            //console.log('this', this);
            this.sandbox.on('todos.add', this.addTodo, this);
            this.sandbox.on('todos.delete', this.deleteTodo, this);

            this.tasks = this.getTasks();

            this.render();

            var that = this;
            this.tasks.forEach(function(task) {
                that.addTodo(task);
            });
        },
        render: function() {
            //console.clear();
            console.log('todo-list render');

            /*
            var htmlItems = _.template(tplItem, {
                tasks: this.tasks
            });
            */
            var htmlList = _.template(tplList, {

            });
            //htmlList.append(htmlItems);
            this.html(htmlList);
            this.$list = this.$el.find('ul');

            /*
            var that = this;
            this.tasks.forEach(function(task) {
                that.$el.append('<li>' + task.name + '</li>');
            });
            */
            /*
            tasks.forEach(function(task) {
                console.log('this', this);
                //alert(task);
                this.$el.append('<ul><li>test</li></ul>');
            }).bind(this);
            forEach.apply(tasks, function(task) {
                console.log('this', this, task);
                //console.log(task);
            })
            */
        },
        addTodo: function(todo) {
            //console.log('this', this);
            this.tasks.push(todo);

            var html = _.template(tplItem, todo);
            //console.log(html);
            this.$list.append(html);

            //this.$el.append('<li>' + todo.name + '<a data-action="delete">delete</a></li>');
            //this.render();
            //console.log('this', this);
        },
        deleteTodo: function(todo) {
            console.log('delete todo', todo);
        }
    }
});