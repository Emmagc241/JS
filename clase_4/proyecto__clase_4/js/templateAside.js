
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


var newAside = document.getElementsByClassName('main')[0];

var asideJs = document.createElement('aside');

newAside.appendChild(asideJs);
document.getElementsByTagName('aside')[1].classList.add("aside__js");
document.getElementsByTagName('aside')[1].classList.add("move");
var menu = document.querySelector('.menu');

menu.addEventListener('click',function(){
    document.getElementsByClassName('aside__js')[0].classList.toggle('move')
});