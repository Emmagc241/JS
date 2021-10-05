var filters = ['Todos', 'Anime', 'Música', 'Televisión', 'Jardineria','Programación', 'Futbol','Vistos']

for(let i = 0; i < filters.length;i++){
    let template =
    `
    <div class="filter">
        <a href="" class="link__filters">${filters[i]}</a>
    </div>
    `
    document.write(template);
}