
import * as media from "./media.js";

export function menuAnimation(img){
    let chapterOne = document.getElementById('chapterOne');
    let chapterTwo = document.getElementById('chapterTwo');
    let chapterThree = document.getElementById('chapterThree');
    let music = document.getElementById('music')
    let c1 = document.getElementById('chapter1');
    let c2 = document.getElementById('chapter2');
    c2.style.top = '50.6%';
    let c3 = document.getElementById('chapter3');
    c3.style.top = '64%';
    let musicInfo = document.getElementById('musicInfo');
    musicInfo.style.top ='89%';
    musicInfo.style.width ='13rem';
    musicInfo.style.height ='fit-content';
    musicInfo.style.backgroundColor ='#F4EEED';


    chapterOne.addEventListener('mouseover',function(){
        c1.classList.add('animate__animated','animate__fadeInTopLeft');
        c1.innerHTML = '<b>' + 'Chapter One' + '</b>';
    });
    chapterOne.addEventListener('mouseout',function (){
        c1.classList.remove('animate__animated','animate__fadeInTopLeft');
        c1.innerHTML = '';
    });

    chapterTwo.addEventListener('mouseover',function(){
        c2.classList.add('animate__animated','animate__fadeInTopLeft');
        c2.innerHTML = '<b>' + 'Chapter Two' + '</b>';
    });
    chapterTwo.addEventListener('mouseout',function (){
        c2.classList.remove('animate__animated','animate__fadeInTopLeft');
        c2.innerHTML = '';
    });

    chapterThree.addEventListener('mouseover',function(){
        c3.classList.add('animate__animated','animate__fadeInTopLeft');
        c3.innerHTML = '<b>' + 'Chapter Three' + '</b>';
    });
    chapterThree.addEventListener('mouseout',function (){
        c3.classList.remove('animate__animated','animate__fadeInTopLeft');
        c3.innerHTML = '';
    });

    music.addEventListener('mouseover',function(){
        musicInfo.classList.add('animate__animated','animate__fadeInTopLeft');
        media.musicInfo('musicInfo',img,'It Aint Me','Kygo, Selena Gomez')
    });
    music.addEventListener('mouseout',function (){
        musicInfo.classList.remove('animate__animated','animate__fadeInTopLeft');
        musicInfo.innerHTML = '';
    });

}

function test(x = "hello", { a, b }, ...args) {
    console.log(x, a, b, args);
}
