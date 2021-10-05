

var img = ['0','1','2','3','4','5','6','7','8','9','10','11','12','13'];

var titles = ['CREATIVO #156 - ALEX TIENDA', 'Verdad o Shot - EP 34- Javier Ibarreche','3 series de televisión para programadores #shorts','La Cotorrisa - Anecdotario 111 - Me envenene el venoso','CAFÉ Y LAS RUSAS MEXICANAS  - COSAS','¿Te ofenderías si te dijeran esto en TikTok?','ＧＵＩＴＡＲ　ＶＩＢＥＳ','como NO subir ELO en LoL','5 errores que te hacen peor programador','Childish Gambino - Feels Like Summer','JUGUÉ PUBGM CON MIGUEL LAYÚN','wu shang takes literally 1000iq to use','japanese indie rock songs to make your day better | playlist','The answer is in the stars ~ lofi hip hop mix' ];

var channel = ['Roberto Mtz', 'La corporrisa','Fazt','Ricardo Perez','JacoboWong','Dalas Review','MODY','SORRYLAG','HolaMundo','Donald Glover','El Mariana','LordWhiteWolf','mMarukudeibu Playlist','Dreamy'];

var views = ['1,3 M de', '187 k','16 k','426 k','352 k','419 k','708 k','1,4 M de','88 k','240 M de','456 k','161 k','240 k','2 M de']

var dates = ['2 meses', '3 semanas','2 semanas','15 horas','1 semanas','18 horas','4 meses','1 año','1 semana','3 años','3 días','1 semana','1 mes','9 meses']

    
    for(let i = 0; i < img.length;i++){
    
        let template = 
           `
            <div class="card">
                    <figure class="figure">
                        <a href=""><img class="img" src = "img/img${i}.webp"></a>
                    </figure>
                    <div class="text">
                        <a href="" class="icon__link">
                            <img src="img/logo${i}.jpg" class="icon__logo">
                        </a>
                        <h2 class="title"><a href="">${titles[i]}</a></h2>
                    </div>
                    <div class="info">
                        <a href="" class="channel">${channel[i]}</a>
                        <p class="views">${views[i]} vistas</p>
                        <p class="date">hace ${dates[i]}</p>
                    </div>
            </div>
           `
       document.write(template);
   }
   



