import {pps} from "https://unpkg.com/purplesand/pps.js";


pps({
    $: 'main button',
    event: {
        on: 'click',
        sleep: 2400,
        func: (ev, item)=>{

            let value = document.querySelector('main .new article').textContent;
            let other = document.querySelector('main .basic article').textContent;

            pps({
                $: '.custom',
                css: [1000, {marginLeft: 'calc(100% - 50px)'}, value],
                delay: 400,
                css_2: [1000, {marginLeft: '0px'}, value]
            });

            pps({
                $: '.base',
                css: [1000, {marginLeft: 'calc(100% - 50px)'}, other],
                delay: 400,
                css_2: [1000, {marginLeft: '0px'}, other]
            });

        }
    }
});

pps({

    $: 'main .select',
    event: {
        on: 'click',
        func: (ev, item, params)=>{

            let li = item.querySelectorAll('div');
            let values;

            if(typeof params.menu === 'undefined' || params.menu === 'invisible'){
                params.menu = 'visible';
                values = ['1', 'translateY(0px)', 'bounce'];
                item.style.overflow = 'visible';
            }else{
                params.menu = 'invisible';
                values = ['0', 'translateY(-20px)', 'impulse'];
            }

            pps({
                $: li,
                interval: 40,
                css: [400, {opacity: values[0], transform: values[1]}, values[2]],
                func:()=>{if(params.menu === "invisible"){item.style.overflow = 'hidden';}}
            });
        }
    }

});

pps({
    $: 'main .new div',
    event: {
        on: 'click',
        func: (ev, item)=>{

            let label = document.querySelector('main .new article');
            let value = item.getAttribute('data-value');
            let other = document.querySelector('main .basic article').textContent;
            label.textContent = value;

            pps({
                $: '.custom',
                dly: 1000,
                css: [1000, {marginLeft: 'calc(100% - 50px)'}, value],
                delay: 400,
                css_2: [1000, {marginLeft: '0px'}, value]
            });

            pps({
                $: '.base',
                dly: 1000,
                css: [1000, {marginLeft: 'calc(100% - 50px)'}, other],
                delay: 400,
                css_2: [1000, {marginLeft: '0px'}, other]
            });

        }
    }
});

pps({
    $: 'main .basic div',
    event: {
        on: 'click',
        func: (ev, item)=>{

            let label = document.querySelector('main .basic article');
            let value = item.getAttribute('data-value');
            let other = document.querySelector('main .new article').textContent;

            label.textContent = value;

            pps({
                $: '.custom',
                dly: 1000,
                css: [1000, {marginLeft: 'calc(100% - 50px)'}, other],
                delay: 400,
                css_2: [1000, {marginLeft: '0px'}, other]
            });

            pps({
                $: '.base',
                dly: 1000,
                css: [1000, {marginLeft: 'calc(100% - 50px)'}, value],
                delay: 400,
                css_2: [1000, {marginLeft: '0px'}, value]
            });

        }
    }
});