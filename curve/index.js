
let main = document.querySelector('main');
let navt = document.querySelector('nav');
let h1 = document.querySelectorAll('h1');
let btn = document.querySelectorAll('button');
let txt = document.querySelectorAll('main input');
let point = document.querySelectorAll('main .graph > div');
let pos_point = document.querySelectorAll('main .graph > article');
let mstxt = document.querySelector('.nav > input');

let mode = 'xy';
let md = false;

updatePoint();
updateGraph();

function updateGraph() {

    let p0 = txt[0].value.split(',');
    let p1 = txt[1].value.split(',');
    let p2 = txt[2].value.split(',');
    let p3 = txt[3].value.split(',');

    h1[0].innerHTML = 'iterator : [<span class="p0">' + txt[0].value + '</span> <span class="p1">' + txt[1].value + '</span> <span class="p2">' + txt[2].value + '</span> <span class="p3">' + txt[3].value + '</span>]';
    h1[1].innerHTML = 'easing : cubic-bezier(<span class="p1">' + txt[1].value + '</span>,<span class="p2">' + txt[2].value + '</span>)';

    // on parcours toutes les divs

    for(let i=0; i<point.length; i++){

        // xasis -> 3at+(3c−6a)t^2+(1+3a−3c)t^3
        // yasis -> 3bt+(3d−6b)t^2+(1+3b−3d)t^3
        // wiki -> P0(1-t)^3 + 3P1t(1-t)^2 + 3P2t^2(1-t) + P3t^3
        // let curve_x = (3 * p1[0] * t) + ((3 * p2[0] - 6 * p1[0]) * t**2) + ((1 + 3 * p1[0] - 3 * p2[0]) * t**3);
        // let curve_y = (3 * p1[1] * t) + ((3 * p2[1] - 6 * p1[1]) * t**2) + ((1 + 3 * p1[1] - 3 * p2[1]) * t**3);

        let t = i/point.length;

        let curve_x = p0[0]*(1-t)**3 + 3*p1[0]*t*(1-t)**2 + 3*p2[0]*t**2*(1-t) + p3[0]*t**3;
        let curve_y = p0[1]*(1-t)**3 + 3*p1[1]*t*(1-t)**2 + 3*p2[1]*t**2*(1-t) + p3[1]*t**3;

        if(mode === 'xy'){
            point[i].style.left = curve_x * 390 + 'px';
            point[i].style.bottom = curve_y * 390 + 'px';
        }
        else if(mode === 'x'){
            point[i].style.left = curve_x * 390 + 'px';
            point[i].style.bottom = i*10 + 'px';      
        }
        else if(mode === 'y'){
            point[i].style.left = i*10 + 'px';
            point[i].style.bottom = curve_y * 390 + 'px';        
        }
        else if(mode === 'x*y'){
            point[i].style.left = i*10 + 'px';
            point[i].style.bottom = (curve_y*curve_x) * 390 + 'px';        
        }


        bezier = '0,0 2,2 3,3 4,4';

    }

}

function updatePoint(){

    let p0 = txt[0].value.split(',');
    let p1 = txt[1].value.split(',');
    let p2 = txt[2].value.split(',');
    let p3 = txt[3].value.split(',');

    pos_point[0].style.left = p0[0] * 400 - 15 + 'px';
    pos_point[0].style.bottom = p0[1] * 400 - 15 + 'px';

    pos_point[1].style.left = p1[0] * 400 - 15 + 'px';
    pos_point[1].style.bottom = p1[1] * 400 - 15 + 'px';

    pos_point[2].style.left = p2[0] * 400 - 15 + 'px';
    pos_point[2].style.bottom = p2[1] * 400 - 15 + 'px';

    pos_point[3].style.left = p3[0] * 400 - 15 + 'px';
    pos_point[3].style.bottom = p3[1] * 400 - 15 + 'px';

}



btn[0].addEventListener('click', ()=>{mode='x';updateGraph();});
btn[1].addEventListener('click', ()=>{mode='y';updateGraph();});
btn[2].addEventListener('click', ()=>{mode='xy';updateGraph();});
btn[3].addEventListener('click', ()=>{mode='x*y';updateGraph();});

let clickable = true;

navt.addEventListener('click', ()=>{
    if(clickable === true){
        clickable = false;
        let ball = navt.querySelector('.ball');
        let bezier = h1[1].textContent.match(/cubic\-bezier\(.*\)/)[0];
        ball.style.transition = 'all ' + mstxt.value + 'ms ' + bezier + ' 0ms';
        ball.style.marginLeft = '330px';
        setTimeout(() => {
        setTimeout(() => {
            ball.style.transition = 'all 0ms linear 0ms';
            ball.style.marginLeft = '0px';
            clickable = true;
        }, mstxt.value);
        }, 500);
    }
});

document.addEventListener('keydown',(e)=>{

    if(e.key == 'Enter'){

        if(e.target.tagName == 'INPUT'){

            updateGraph();
            updatePoint();

        }

    }

});

document.addEventListener('mousedown', (e)=>{

    if(e.target.hasAttribute('data-point')){
        
        md = true;
        e.target.style.zIndex = '12';
        
    }

});

document.addEventListener('mouseup', (e)=>{  
    
    md = false;
    for(let i=0; i<pos_point.length; i++){
        pos_point[i].style.zIndex = '10';
    }

});

document.addEventListener('mousemove', (e)=>{

    if(md === true && e.target.hasAttribute('data-point')){

        let rect = main.getBoundingClientRect();
        
        let x = (e.target.offsetLeft + 15) / 40;
        let y = ((400 - e.target.offsetTop) - 15) / 40;

        let sx = e.clientX - rect.left;
        let sy = e.clientY - rect.top;

        e.target.style.left = sx - 15 + 'px';
        e.target.style.top = sy - 15 + 'px';

        let num = e.target.getAttribute('data-point');

        if(txt[num].value != Math.round(x)/10 + ',' + Math.round(y)/10){

            txt[num].value = Math.round(x)/10 + ',' + Math.round(y)/10;

            updateGraph();

        }
        
    }

});