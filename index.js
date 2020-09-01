var app = new Vue({
    el: '#app',
    data: {
        title: "To do application",
        todo: '',
        allTasks: [],
    },
    methods: {
        addTodo: function() {
            this.allTasks.push({
                title: this.todo,
                done: false
            })

            this.todo = '';
        }
    }
})