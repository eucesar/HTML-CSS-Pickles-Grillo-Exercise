//slide passando altomatico
let contador = 1;

//cada vzs q checked vai contar 1
//uma função ocorra a cada espaço de tempo (setinterval)
setInterval( function(){
    //vai dar um checked para cada elemento
    document.getElementById('slide' + contador).checked = true;
    //soma 1 no contador
    contador++;

    /*reinicia - para n ficar em loop - condicional*/
    if(contador > 4 ) {
        contador = 1;

    }
//em 2milisegundos essa função vai ocorrer
}, 2000 );