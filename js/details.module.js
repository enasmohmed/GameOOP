import { Ui } from "./ui.module.js";

export class Details {
    constructor(id) {

        document.getElementById("btnClose").addEventListener('click',()=>{
            document.getElementById('details').classList.add('d-none');
            document.getElementById('games').classList.remove('d-none');
        });


        this.loader = document.querySelector('.loader');
        
        this.getDetails(id);

    }

    async getDetails(id){
        this.loader.classList.remove('d-none');
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '589d62bdf5mshdc575f57234714bp179d99jsnd70839029e4b',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options);
        const data = await api.json();
        this.loader.classList.add('d-none');
        console.log(data);

        new Ui().displayDetailsGames(data);
    }
}