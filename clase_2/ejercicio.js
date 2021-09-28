
/* 
var nombre = prompt('¿Cual es tu nombre?');

var edad = prompt('¿Cual es tu edad?');

if(edad >= 18){
    if(edad == 18){
        document.write('Apenas'+ nombre);
    }else{
        if(edad > 18 && edad < 30) {
            document.write('Ya eres boomer' + nombre);
            }else{                
                document.write('Ansian@' + nombre);
            }
        }
}else{
    document.write('Tas chiki ' + nombre);
}

 */


var nombre = prompt('¿Cual es tu nombre?');

var edad = prompt('¿Cual es tu edad?');

if(edad == 18){
    alert('Apenitas ' + nombre + ' pasasle');
}else if(edad > 18 && edad <= 30){
    alert('Un gustaso verlo mi boomer pasele');
}else if(edad > 30){
    alert('Un gustaso ' + nombre + ', dejen pasar a la leyenda');
}else{
    alert('Eres menor de edad');
}

