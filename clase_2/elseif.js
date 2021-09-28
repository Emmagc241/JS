var nombre = prompt('¿Cual es tu nombre?');

var edad = prompt('¿Cual es tu edad?');

if(edad == 18){
    alert('Felicidades apenas y puedes pasar');
}else if(edad > 18 && edad <= 30){
    alert('Es mayor que 18');
}else if(edad > 30){
    alert('Es mayor que 30');
}else{
    alert('Eres menor de edad');
}

