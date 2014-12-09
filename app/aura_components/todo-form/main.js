define([], function() {
    return {
        initialize: function() {
            //console.log('this', this);
            this.$input = this.$el.find('input');
            this.render();
        },
        render: function() {
            //console.log('this', this);
            //console.log('el', this.$el);
            //console.log(this.$input);
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