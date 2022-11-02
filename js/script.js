/*
Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Utilizzare almeno una classe CSS in modo dinamico
Bonus:
1. Aggiungere alla pagina un’immagine, presa anch’essa da un data.
2. Cambiare dinamicamente l’immagine
3. Al click di un bottone nascondere l’immagine e mostrare un testo
*/

const {createApp} = Vue;

createApp({
    data(){
        return{
            messaggio: 'Bentornato!',
            mainColor:'default',
            mainImg:'../img/',
            img:'cat1.jpg',
            show:'',
            textShow:'',
            moreText:'',
            moreTextBtn:'true'
        }
    },
    methods:{
        btnInput(){
            this.mainColor = 'color';
            this.img = 'cat2.jpg';
            this.show= 'true'
        },
        showText(){
            this.textShow='true'
        },
        showMore(){
            this.moreTextBtn='',
            this.moreText='true'
        }
    }
}).mount('#app');