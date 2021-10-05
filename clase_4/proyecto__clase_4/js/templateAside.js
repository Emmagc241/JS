
var iconsAside = ['home-alt','globe-alt', 'id-card','movie-play','history',];
var titlesAside = ['Inicio','Explorar' ,'Suscripciones', 'Biblioteca','Historial'];

for(let i = 0; i < iconsAside.length; i++){
        let template = 
    `
        <div class="card__aside">
            <a class="card__link" href="">
                <box-icon name='${iconsAside[i]}' color='#ffffff'></box-icon>
                <p class = "card__aside--title">${titlesAside[i]}</p>
            </a>
        </div>
    `;
    document.write(template);
}

