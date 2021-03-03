import 'bootstrap/dist/js/bootstrap.js'
import '@fortawesome/fontawesome-free/js/all.js';
import "./scss/index.scss";
import me from './media/img/aboutMe.png';
import * as media from "./js/media";


document.getElementById('aboutMe').src = me;

let chapterOne = document.getElementById('chapterOne');
let chapterTwo = document.getElementById('chapterTwo');
let chapterThree = document.getElementById('chapterThree');
let c1 = document.getElementById('chapter1');
let c2 = document.getElementById('chapter2');
c2.style.top = '48.6%';
let c3 = document.getElementById('chapter3');
c3.style.top = '61%';

chapterOne.addEventListener('mouseover',function(){
    c1.classList.add('animate__animated','animate__fadeInTopLeft');
    c1.innerText = 'Chapter One';
});
chapterOne.addEventListener('mouseout',function (){
    c1.classList.remove('animate__animated','animate__fadeInTopLeft');
    c1.innerText = '';
});

chapterTwo.addEventListener('mouseover',function(){
    c2.classList.add('animate__animated','animate__fadeInTopLeft');
    c2.innerText = 'Chapter Two';
});
chapterTwo.addEventListener('mouseout',function (){
    c2.classList.remove('animate__animated','animate__fadeInTopLeft');
    c2.innerText = '';
});

chapterThree.addEventListener('mouseover',function(){
    c3.classList.add('animate__animated','animate__fadeInTopLeft');
    c3.innerText = 'Chapter Three';
});
chapterThree.addEventListener('mouseout',function (){
    c3.classList.remove('animate__animated','animate__fadeInTopLeft');
    c3.innerText = '';
});

media.bckMusic('music','../src/media/audio/blueSky.mp3');


