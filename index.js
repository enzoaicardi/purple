// ** THIS SCRIPT IS A MODULE ** //

// IMPORTS

import {pps, vars} from 'https://unpkg.com/purplesand@0.0.1/pps.js';
import {formatCode} from '../pps-demo/code.js';

// formatCode

formatCode();

// CONTENT

let body = pps('body');
let inc = 0;

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
});

// ANIMATION accueil

let p = 1;
vars('p').set(1);
function pv(){return p;}

let pass = document.querySelector('.pass-animation');

document.body.addEventListener('keyup',(e)=>{
    if(e.code == 'Space'){
        vars('p').set(0);
        p=0;
        body.style.visibility = 'hidden';
    }
});

pass.addEventListener('click',()=>{
    vars('p').set(0);
    p=0;
    body.style.visibility = 'hidden';
});


pps(

{

    $: '.accueil h1 i',
    delay: 1000,
    interval: '{100*p}',
    anime: [
        200, {transform: 'translate(0px, 0px) rotate(-45deg)', color: '#555555'}, 'ease',
        300, {transform: 'translate(0px, 0px) rotate(0deg)'}, 'ease'
    ]
    

},

{

    $: '.accueil h1 span i',
    propagation: 'center',
    start: 6,
    interval: '{130*p}',

    each: async (item)=>{
        let parent = item.parentElement.classList;
        item.style.transition = 'color ' + 1*pv() +'s linear 0s';

        if(parent.contains('purple')){
            item.style.color = 'var(--purple)';
        }
        else if(parent.contains('sand')){
            item.style.color = 'var(--sand)';
        }
    },

    delay: '{1000*p}'

},

{

    $: {
        $: '.logo img',
        values: [2,1,3]
    },
    delay: '{300*p}',
    interval: '{500*p}',
    anime: [
        '{800*p}', {transform: 'translateY(0px)', opacity: '1'}, 'ease'
    ]

},

{

    delay: '{400*p}',
    $: 'header',
    anime: [
        '{1000*p}', {transform: 'translateY(0px)'}, 'bounce'
    ],

    $_2: 'main',
    anime_2: [
        '{500*p}', {backgroundColor: 'transparent'}, 'ease'
    ],

    $_3: '.accueil',
    anime_3: [
        '{700*p}', {height: '300px'}, 'impulse',
    ],

},

{

    $: '.page, .demos, footer',
    delay: '{200*p}',
    anime: [0, {display: 'flex'}]
    
},

{

    $: '.pass-animation',
    anime: [0,{display: 'none'}],

    $_2: 'body',
    func: (item)=>{item.style.visibility = 'visible'},
    dly: '{400*p}'

},

{

    $: '.page section',
    observer: {
        container: null,
        visibility: 0.7,
        margin: '0px 0px -40px 0px',
        side: 'y',
        once: true,
        func: (entry, item)=>{

            let value;
            if(item.classList.contains('left')){  value = '-30px'; }
            else{  value = '30px'; }

            pps({
                $: item,
                anime: [
                    0, {transform: 'translateX(' + value + ')'},
                    500, {delay: 100, transform: 'translateX(0px)', filter: 'opacity(1)'}, 'ease'
                ]
            });

        }
    }

},

{
    func: ()=>repeat()
},

{
    $: '.feuille-morte',
    observer: {
        container: null,
        visibility: 0.5,
        margin: '0px 0px 0px 0px',
        side: 'y',
        once: true,
        func: (entry, item)=>{

            pps({
                $: item,
                anime: [3000, {offsetDistance: '100%'}, 'ease']
            });

        }
    }
    

}


);

// animation arbres

let anime_arbre = [
    1000, {transform: 'translateY(-10px)'}, 'ease',
    1000, {transform: 'translateY(0px)'}, 'ease',
];


function repeat(){
 
pps({

    $: '.s2 .feuille',
    delay: 4000,
    interval: 100,
    anime: anime_arbre

},{

    $: '.bao .feuille',
    delay: 2000,
    interval: 100,
    anime: anime_arbre

},{

    $: '.s1 .feuille',
    delay: 2000,
    ppg: 'invert',
    interval: 100,
    anime: anime_arbre

},{

    $: '.demos > svg',
    anime: [2400,{strokeDashoffset: '-200%'}, 'ease',
            0,{strokeDashoffset: '20%'}]

},{

    $: '.fe1 .feuille',
    delay: 2000,
    interval: 100,
    anime: anime_arbre

},{

    $: '.seco .feuille',
    delay: 2000,
    interval: 100,
    anime: anime_arbre

},{

    $: '.fe2 .feuille',
    delay: 2000,
    ppg: 'invert',
    interval: 100,
    anime: anime_arbre,
    func: ()=>repeat()

}

);

}