const { createApp } = Vue

createApp({
data() {
    return {
        emails: [],
        }
    },

    methods: {
        newEmail(n){
            for(let i = 0; i < n; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((res) => {
                    const mailCasuale = res.data.response
                    this.emails.push(mailCasuale)
                })
            }
        }
    },

    created(){
        this.newEmail(10)
    }

}).mount('#app')