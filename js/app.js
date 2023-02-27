const { createApp } = Vue


//prendo url con axios e la sua proprieta' get



//stampare nell'html 10 mail randomiche creando un ciclo
//queste mail verranno pushate nell'array email vuoto dentro data, e dopo il push verranno stampate.

createApp({
  
    data() {
      return {
        email: [],
      }
    },
    
    
    methods:{
      
      generateMailFromApi(){
        axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((res)=>{
          console.log(res.data.response) //controllo nella console rete, e nello specifico su mail per vedere se la mail viene stampata ogni volta.
          //da qui in poi dovro' pushare su this.email[] il contenuto prodotto dalla FAKE API.
          this.email.push(res.data.response)
        })

      }


    },

    mounted() {
    for(let i = 0; i < 10; i++){
      this.generateMailFromApi()
    }
  }

  }).mount('#app')