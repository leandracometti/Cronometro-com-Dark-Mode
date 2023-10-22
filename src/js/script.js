'use strict';

//criando variáveis que armazenarão o tempo
var $h = 0;
var $m = 0;
var $s = 0;

//relacionando os elementos do HTML
var $relogio = document.getElementById('js-relogio')
var $btnIniciar = document.getElementById('js-btn_iniciar');
var $btnPausar = document.getElementById('js-btn_pausar');
var $btnResetar = document.getElementById('js-btn_resetar');
const $container = document.querySelector('.container');

var $cronometro; //variável contadora


//evento que inicia a contagem
$btnIniciar.addEventListener('click',function(){
    $cronometro = setInterval(timer, 1000);
})

//evento que pausa a contagem
$btnPausar.addEventListener('click', function(){
    clearInterval($cronometro);
})

//evento que reseta a contagem
$btnResetar.addEventListener('click', function(){
    clearInterval($cronometro);
    $h = 0; $m = 0; $s = 0;
    
    $relogio.innerText = '00:00:00';
})

//função que trata os segundos
function timer(){
    $s++;
    if($s == 60){
        $s = 0;
        $m++;
        
        if($m == 60){
            $m = 0;
            $h++;
        }
    }

    
    //formatando o tempo
    var $tempoFormatado = ($h < 10 ? '0' + $h : $h) + ':' + ($m < 10 ? '0' + $m : $m) + ':' + ($s < 10? '0' + $s : $s);
    $relogio.innerText = $tempoFormatado;
    
    return $tempoFormatado;
}


/// dark  mode////
//evento de click que altera o modo da página
const $body = document.querySelector('body');
const $btnModo = document.getElementById('checkbox');

$btnModo.addEventListener('change', function(){
    $body.classList.toggle('modo_noturno');
});

