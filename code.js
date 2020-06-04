// ** THIS SCRIPT IS A MODULE ** //

// IMPORTS

// FORMATAGE BALISE CODE

export function formatCode(){

    let item = document.querySelectorAll('code');

    for(let i=0; i<item.length; i++){

        // contenu de l'item (pour nous <code>)
        let content = item[i].textContent;

        // remplacer les expressions régulières par du balisage <span class="class">...</span>

        // remplacer en °...°
        content = content.replace(/([a-z]{1,})\(/gi, '°f°$1°c°(');
        content = content.replace(/(['"]([^"'\*\;\n\r\t]{1,})['"])/gi, '°s°$1°c°');
        content = content.replace(/([\s\+\=\[\]\/\(\)\|\`\^\{\};,\.\~\:\>\<\%°\-]|^)([0-9]{1,})(\.[0-9]{1,}){0,}([\s\+\=\[\]\/\|\(\)\`\^\{\};,\.\~\:\>\<\%°\-]|$)/gi, '$1°n°$2$3°c°$4');
        content = content.replace(/([\+\=\[\]\|\(\)\`\^\{\};,\.\~\:\>\<\@\&\|\%\-])/gi, '°o°$1°c°');
        content = content.replace(/(\/\*([^\*\/]*)\*\/)/gi, '°i°$1°c°');

        // replacer en span
        content = content.replace(/°f°/gi, '<span class="func">');
        content = content.replace(/°s°/gi, '<span class="string">');
        content = content.replace(/°n°/gi, '<span class="number">');
        content = content.replace(/°o°/gi, '<span class="opp">');
        content = content.replace(/°i°/gi, '<span class="comment">');
        // global close
        content = content.replace(/°c°/gi, '</span>');

        // reserved words
        content = content.replace(/(let |var |function |true|false)/g, '<span class="reserved">$1</span>');
        content = content.replace(/(async |await |default |import |if |else | from |return )/g, '<span class="keyword">$1</span>');
        content = content.replace(/(Array|Math|NodeList|HTMLElement)/g, '<span class="api">$1</span>');

        // HTML balises
        content = content.replace(/\*\°(\s.*\s)\°\*/g, '\*\°<span class="text">$1</span>\°\*');
        content = content.replace(/\°\*(body|header|main|footer|div|section|article|nav|script)/g, '<span class="balise">&lt;</span><span class="reserved">$1</span>');
        content = content.replace(/\°\*\/(body|header|main|footer|div|section|article|nav|script)/g, '<span class="balise">&lt;&sol;</span><span class="reserved">$1</span>');
        content = content.replace(/\*\°/g, '<span class="balise">&gt;</span>');

        // tabs & returns
        content = content.replace(/°r/gi, '<br>');
        content = content.replace(/°st/gi, '<div class="tab">');
        content = content.replace(/°et/gi, '</div>');

        item[i].innerHTML = content;

    }

    let td = document.querySelectorAll('th, td');

    for(let i=0; i<td.length; i++){
        
        if(td[i].getAttribute('data-code')){

            let colorName = td[i].getAttribute('data-code');

            td[i].style.color = 'var(--code-'+colorName+')';

        }

    }

}