let oldingi = null;    
let amal = null;
let raqamyangila=true;

const tvman2=document.getElementById("next");
const hisob=document.getElementById("tvman");
const qoshuv=document.getElementById("qosh");
const ayir=document.getElementById("ayir");
const ochir=document.getElementById("ochir");
const kopaytir=document.getElementById("kopaytir");
const bol=document.getElementById("bol");
const teng=document.getElementById("teng");
const nuqta=document.getElementById("nuqta");
const bochir=document.getElementById("bochir");

document.querySelectorAll('[data-number]').forEach(function(tugma){
    tugma.addEventListener("click", function(){
        if (raqamyangila===true||hisob.textContent==='0'){
            hisob.textContent=tugma.dataset.number;
            raqamyangila=false;
        } else {
            hisob.textContent=hisob.textContent+tugma.dataset.number;
        }
    });
});

qoshuv.addEventListener("click", function(){
    if (hisob.textContent==='error'){
        return;
    }

    oldingi=Number(hisob.textContent);
    amal='+';
    raqamyangila=true;
    tvman2.textContent=oldingi+' +';
});

ayir.addEventListener('click', function(){
    if (hisob.textContent==='error'){
        return;
    }

    oldingi=Number(hisob.textContent);
    amal='-';
    raqamyangila=true;
    tvman2.textContent=oldingi+' -';
});

ochir.addEventListener('click',function(){
    hisob.textContent='0';
    oldingi=null;
    amal=null;
    raqamyangila=true;
    tvman2.textContent=''
});

bochir.addEventListener('click',function(){
    if (raqamyangila===true){
        return;
    }

    if (hisob.textContent.length===1){
        hisob.textContent='0';
        raqamyangila=true;
    } else {
        hisob.textContent=hisob.textContent.slice(0, -1);
    }
});

kopaytir.addEventListener('click', function(){
    if (hisob.textContent==='error'){
        return;
    }

    oldingi=Number(hisob.textContent);
    amal='*';
    raqamyangila=true;
    tvman2.textContent=oldingi+' *';
});

bol.addEventListener('click', function(){
    if (hisob.textContent==='error'){
        return;
    }

    oldingi=Number(hisob.textContent);
    amal='÷';
    raqamyangila=true;
    tvman2.textContent=oldingi+' ÷';
});

nuqta.addEventListener('click', function(){
    if (raqamyangila===true){
        return;
    }

    if (hisob.textContent.includes('.')===false){
        hisob.textContent=hisob.textContent+'.';
    }
});

teng.addEventListener("click", function(){
    if (hisob.textContent==='error'){
        return;
    }

    const ikki = Number(hisob.textContent);
    tvman2.textContent=oldingi+''+amal+''+ikki+'=';

    if (amal==='+'){
        hisob.textContent=oldingi+ikki;
    } else if(amal==='-'){
        hisob.textContent=oldingi-ikki;
    } else if (amal==='*'){
        hisob.textContent=oldingi*ikki;
    } else if (amal==='÷'){
        if (ikki===0){
            hisob.textContent='error';
         } else {
            hisob.textContent=oldingi/ikki;
         }
    }

         if (amal!==null){
            raqamyangila=true;
        };
});



