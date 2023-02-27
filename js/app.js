const { createApp } = Vue


//prendo url con axios e la sua proprieta' get

axios
.get('https://flynn.boolean.careers/exercises/api/random/mail')
.then((res)=>{
  console.log(res.data.response) //controllo nella console rete, e nello specifico su mail per vedere se la mail viene stampata ogni volta.
})


//stampare nell'html 10 mail randomiche creando un ciclo

  createApp({

    data() {
      return {
        email: '',
      }
    },


    methods:{



    },


  }).mount('#app')