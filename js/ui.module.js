export class Ui {
    constructor() { }

    displayGamesCard(data) {

        let gamesCard = '';

        for(let i = 0; i <data.length; i++) {
            gamesCard += `
        
            <div class="col-lg-3 col-md-4 col-sm-6 mb-4 d-flex justify-content-center align-items-center">
                <div data-id="${data[i].id}" class="card h-100">
                    <img src="${data[i].thumbnail}" class="card-img-top" alt="${data[i].title}">
                    <div class="card-body">
                        <div class="d-flex flex-row align-items-center justify-content-between">
                            <h3 class="card-title small">${data[i].title}</h3>
                            <span class="badge text-bg-primary p-2 ms-auto">Free</span>
                        </div>
                        <p class="card-text text-center opacity-50 small">${data[i].short_description.split(" ", 8)}</p>
                    </div>
                    <div class="card-footer text-muted d-flex flex-row align-items-center justify-content-between">
                        <span class="badge small badge-color p-2 me-auto">${data[i].publisher}</span>
                        <span class="badge small badge-color p-2 ms-auto">${data[i].platform}</span>
                    </div>
                </div>
            </div>
        
        `
        }

        document.getElementById('gamesContainer').innerHTML = gamesCard;

    }


    displayDetailsGames(data){
        const detailsBox = `
            <div class="col-md-4">
                <img src="${data.thumbnail}" class="w-100" alt="image details">
            </div>
            <div class="col-md-8">
                <h3>Title: ${data.title}</h3>
                <p>Category: <span class=" badge text-bg-info"> ${data.genre}</span></p>
                <p>Platform: <span class=" badge text-bg-info"> ${data.platform}</span></p>
                <p>Status: <span class=" badge text-bg-info"> ${data.platform}</span></p>
                <p class="small">${data.short_description}</p>
                <a class="btn btn-outline-warning" target="_blank" href="${data.game_url}">Show Game</a>
            </div>
        `

        document.getElementById('detailsContent').innerHTML = detailsBox;
    }

}