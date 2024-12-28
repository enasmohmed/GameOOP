import { Details } from "./details.module.js";
import { Ui } from "./ui.module.js";

export class Home {

    constructor(){


        document.querySelectorAll('.nav-link').forEach(link=>{
            link.addEventListener('click', ()=>{   
                this.changeLinkActive(link);

                const category = link.dataset.category
                this.getGames(category);             
            });
        });

        this.loader = document.querySelector('.loader');
        this.details = document.getElementById('details');
        this.games = document.getElementById('games');

        this.ui = new Ui();


        this.getGames('MMORPG');
    }


    changeLinkActive(link) {
        document.querySelector('.navbar-nav .active').classList.remove('active');
        link.classList.add('active');
    
    }


    async getGames(cat){

        this.loader.classList.remove('d-none');

        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '589d62bdf5mshdc575f57234714bp179d99jsnd70839029e4b',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cat}`, options);
        
        const data = await api.json();

        this.loader.classList.add('d-none');

        console.log(data);

        this.ui.displayGamesCard(data);

        document.querySelectorAll('.card').forEach((card) =>{
            card.addEventListener('click',()=>{
                
                this.details.classList.remove('d-none');
                this.games.classList.add('d-none');

                new Details(card.dataset.id);
            });
        });
        
    }
}