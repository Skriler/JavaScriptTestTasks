const inputApp = new Vue({
    el: '#inputApp',
    data: {
        number: 10,
    },
    methods: {
        getContent: function() {
            const numbers = [];
            let sum = 0;

            for (let i = 1; i <= this.number; i++) {
                numbers.push(i);
                sum += i;
            }

            const line = numbers.join(' + ') + ` = ${sum}`;
            return line;
        },
    },
});
