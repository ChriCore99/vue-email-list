const { createApp } = Vue

createApp({
data() {
    return {
        emails: [],
        numeroMails: 10
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
        this.newEmail(this.numeroMails)
    }

}).mount('#app')