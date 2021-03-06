define(['text!./todo-form.html', 'underscore'], function(tpl, _) {
    return {
        initialize: function() {
            this.render();
        },
        render: function() {
            this.html(_.template(tpl, {}));
            this.$input = this.$el.find('input');

            console.log(this.$el);
            this.$input.on('keyup', _.bind(this.checkSubmit, this));
        },
        checkSubmit: function(e) {
            //console.log(e);
            //console.log('thiss', this);

            if (e.which == 13) {
                var val = this.$input.val();
                if (val) {
                    var todo = {
                        name: val,
                        id: 1,
                        author: 'david'
                    }
                    this.sandbox.emit('todos.add', todo);
                }
            }
        }
    };
});