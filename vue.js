var app = new Vue({
    el : '#app',
    data : {
        message : 'Hello World',
        bind_title : 'You loaded this page on ' + new Date(),
        seen : true,
        todos: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue' },
            { text: 'Build something awesome' }
        ]
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
})