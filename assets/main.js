// Descrizione:
// Creare uno slider di immagini
// Potete usare le immagini che desiderate.
// Per facilitarvi la vita usate immagini delle stesse dimensioni :)
// Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello slider
// In oltre per scorrere le immagini permettere anche l’uso delle frecce sinistra e destra della tastiera
// Utiliziamo una classe first e last  per capire quali sono la prima e ultima immagine dello slider
// Utilizziamo una classe active per aiutarci a capire quale è l’immagine attuale da visualizzare nello slider

// Le variabili riguardanti le immagini sono stati dichiarate all'interno della funzione, perchè servono solo all'interno di essa.
var btnNext = $('div.next');
var btnPrev = $('div.prev');


// Creo la funzione per il pulsante avanti.
btnNext.click(function(){
    console.log("clicked");
    var immagini = $('.active');
    var immaginiNext = immagini.next();

    if(immaginiNext.length){
        immagini.removeClass('active').css('z-index', -10);
        immaginiNext.addClass('active').css('z-index', 10);
    }
})


btnPrev.click(function(){
    console.log("clicked");
    var immagini = $('.active');
    var immaginiPrev = immagini.prev();

    if(immaginiPrev.length){
        immagini.removeClass('active').css('z-index', -10);
        immaginiPrev.addClass('active').css('z-index', 10);
    }
})