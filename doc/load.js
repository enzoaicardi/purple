// ** THIS SCRIPT IS A MODULE ** //

// IMPORTS

import {pps} from '../../purplesand/pps.js';
import {formatCode} from '../code.js';

// CHANGEMENT DE PAGE

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const page = urlParams.get('page');

if(queryString && urlParams && page){
    
    document.title = 'PurpleSand > doc > ' + page;

    pps({
        $: '.body_doc',
        load: 'doc/page/' + page + '.html',
        func: ()=>{createSummary();formatCode();}
    });

}else{
    
    pps({
        $: '.body_doc',
        load: 'doc/page/pps.html',
        func: ()=>{createSummary();formatCode();}
    });

}

// LOAD HEADER

let body = document.querySelector('body');

pps({
    selector: 'header',
    load: 'header.html',
    $: '.menu_right .theme_choice div',
    event: {
        on: 'click',
        passive: true,
        func: (e, item)=>{
            if(item.classList.contains('theme_light')){  body.classList.replace('dark', 'light');localStorage.setItem('theme', 'light');  }
            else if(item.classList.contains('theme_dark')){  body.classList.replace('light', 'dark');localStorage.setItem('theme', 'dark');  }
        }
    },
    $_2: 'footer',
    load_2: 'footer.html'
})

// CREATE SUMMARY

function createSummary(){

    // on selectionne tous les titres sauf le titre principal (h1)
    let titles = document.querySelectorAll('.body_doc h2, .body_doc h3, .body_doc h4');

    // on récupère le sommaire
    let summary = document.querySelector('.body_doc .sum');

    // on initie le innerHTML
    let innerSummary = '<h5>Sommaire</h5>';

    // on initie la boucle (u234 = numéros des titres)
    for(let i=0, u2=0, u3=0, u4=0; i<titles.length; i++){

        // on capture le textContent
        let text = titles[i].textContent;

        // on remplace tout ce qui pourrait faire bugger les id
        text = text.replace(/[^a-z0-9]/gi, '');

        // on change l'id pour text
        titles[i].setAttribute('id', i + text);

        if(titles[i].tagName === 'H2'){

            // le numéro des titres H2 change
            u2++;

            // on reset les numéros de sous-titres
            u3 = 0;
            u4 = 0;

            innerSummary += '<a href="doc/?page=' + page + '#' + i + text + '">' + u2 + '. ' + titles[i].textContent + '</a>';

        }

        else if(titles[i].tagName === 'H3'){

            // le numéro des titres H3 change
            u3++;

            // on reset les sous-sous-titres
            u4 = 0;

            innerSummary += '<a class="tab" href="doc/?page=' + page + '#' + i + text + '">' + u2 + '.' + u3 + '. ' + titles[i].textContent + '</a>';

        }

        else if(titles[i].tagName === 'H4'){

            // le numéro des titres H4 change
            u4++;

            innerSummary += '<a class="tab2" href="doc/?page=' + page + '#' + i + text + '">' + u2 + '.' + u3 + '.' + u4 + '. ' + titles[i].textContent + '</a>';

        }

    }

    // on change le contenu du sommaire
    summary.innerHTML = innerSummary;

}
