let a = document.querySelectorAll('div');

pps.pps({
    $: a,
    ppg: 'reverse',
    start: 'center',
    shift: 0,
    intv: 500,
    css: [  1000, {transform: 'translateX({index*20}px)'},
            500, {backgroundColor: 'red', delay: 200}],

    func: function(){console.log('finished')},

    css_2: [1000, {transform: 'translateX(80px)'}, 1000, {backgroundColor: 'blue'}]
});