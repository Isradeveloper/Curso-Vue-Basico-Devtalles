
const app = Vue.createApp({
  // template: `
  //   <h1>Hola mundo</h1>
  //   <p> desde app.js </p>
  // `

  // methods: {},
  // watch: {},

  // setup() {

  // }


  data() {
    return {
      author: 'Bruce Wayne',
      quote: "I'm Batman"
    }
  },
  methods: {
    changeQuote(){
      console.log('Hola mundo');
      this.author = "Isra";
      this.capitalize();
    },
    capitalize() {
      this.quote = this.quote.toUpperCase();
    }
  }


})


app.mount('#myApp')
