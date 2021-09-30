//var x = 11;


/* switch (x) {
    
    case 0:
        document.write('X vale : ' + x);
        
        break;

    case 1:
        document.write('X vale : ' + x);
        
        break;

    case 2:+
        document.write('X vale : ' + x);
        
        break;

    case 3:
        document.write('X vale : ' + x);
        
        break;
        
    default:
         document.write('Ingresa un valor valido');
            
        break;
} */


//Bucles
/*for(let contador = 0; contador < 5;  contador++){
   document.write(' <img src="like.png" alt="">' + 'Hola mundo x '+ contador + "<br/>")
}*/

/*

let contador = 1;
while(contador <= 5) {
    document.write('<img src="like.png" alt="">' + 'Hola mundo x '+ contador + "<br/>");
    contador++;
}

*/

/*
let contador = 1;
//Se ejecuta una vez por defecto sin importar el valor de la variable

do{
    document.write('<img src="like.png" alt="">' + 'Hola mundo x '+ contador + "<br/>");
    contador++;
} while (contador <= 5)
*/


/*
for (let index = 0; index < 1 ; index++){

    for(let index = 1; index <= 10 ;index++){
        document.write('<img src="like.png" alt="">' + 'Hola mundo x '+ index + "<br/>");
    }
}

*/


var numero = prompt('Dame un numero');

for(let i = 1;  i <= numero; i++){

    for(let i_2 = 1 ; i_2 <= i; i_2++){
        document.write("𓀓");    
    }
    document.write("<br/>")
}