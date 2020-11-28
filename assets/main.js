// Descrizione:
// Creare uno slider di immagini
// Potete usare le immagini che desiderate.
// Per facilitarvi la vita usate immagini delle stesse dimensioni :)
// Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello slider
// In oltre per scorrere le immagini permettere anche l’uso delle frecce sinistra e destra della tastiera
// Utiliziamo una classe first e last  per capire quali sono la prima e ultima immagine dello slider
// Utilizziamo una classe active per aiutarci a capire quale è l’immagine attuale da visualizzare nello slider

$(function(){

    var btnNext = $('div.next');
    var btnPrev = $('div.prev');
    
    
    
    // Creo la funzione per il pulsante next.
    btnNext.click(function () {
        var activeImg = $('img.active');
        var firstImg = $('img.first');
        var dots = $('i.active')
        var firstDot = $ ('i.first');
        var immaginiNext = activeImg.next();
        
        // SE L'IMMAGINE HA CLASSE ACTIVE ED ANCHE LAST ALLORA RIMUOVERO LA CLASSE ACTIVE  E LA AGGIUGERO' ALL'IMMAGINE CHE HA CLASSE FIRST.
        
        if(activeImg.hasClass('last active')){
            activeImg.removeClass('active') && firstImg.addClass('active');
        }else{ // ALTRIMENTI RIMUOVO LA CLASSE ACTIVE DALL'IMMAGINE CORRENTE E LA AGGIUNGO ALLA PROSSIMA.
            activeImg.removeClass('active')
            immaginiNext.addClass('active')
        }
        // LO STESSO PROCEDIMENTO DESCRITTO SOPRA LO APPLICO AI CERCHI. 
        if(dots.hasClass('last active')){
            dots.removeClass('active') && firstDot.addClass('active');
        }else{
            dots.removeClass('active')
            dots.next().addClass('active')
        }


    });
    
    
    // Creo la funzione per il pulsante prev.

    btnPrev.click(function () {
        var activeImg = $('img.active');
        var lastImg =$('img.last');
        var lastDot = $ ('i.last');
        var dots = $('i.active')
        var immaginiPrev = activeImg.prev();

        // SE L'IMMAGINE HA CLASSE ACTIVE MA NON HA CLASSE FIRST, ALLORA RIMUOVO LA CLASSE ACTIVE E LA AGGIUNGO ALLA PRECEDENTE.
        if(activeImg.hasClass('active') && !activeImg.hasClass('first')){
            activeImg.removeClass('active') && immaginiPrev.addClass('active');
        }else{ // ALTRIMENTI RIMUOVO LA CLASSE ACTIVE DALL'A PRIMA IMMAGINE, A LA ASSEGNO ALL'ULTIMA IN MODO TALE DA VISUALIZZARLA SE MI TROVO IN POSIZIONE 1 DEL CONTENITORE DELLE IMMAGINI.
            activeImg.removeClass('active')
            lastImg.addClass('active')
        }
        

        // LO STESSO PROCEDIMENTO DESCRITTO SOPRA LO APPLICO AI CERCHI.
        if(dots.hasClass('active') && !dots.hasClass('first')){
             dots.removeClass('active') && dots.prev().addClass('active');
         }else{
             dots.removeClass('active')
             lastDot.addClass('active')
         }
        
    });
    
});
