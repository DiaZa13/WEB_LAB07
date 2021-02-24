/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/


function addImg(pag, ref, id, img, alt){
    let page = document.getElementById(pag);
    let link = document.createElement('a');
    link.setAttribute('href',ref);
    let image = document.createElement('img');
    image.setAttribute('id',id);
    image.setAttribute('src',img);
    image.setAttribute('alt',alt);
    link.appendChild(image);
    page.appendChild(link);
}


//Background-music allStar
let audio = document.createElement('audio');
audio.setAttribute('controls','controls');
let allStar = document.createElement('source');
allStar.setAttribute('src','media/audio/allStar.mp3');
audio.appendChild(allStar);

let figure_element = document.getElementById('figure_element');
let imgStar = document.createElement('img');
imgStar.setAttribute('id','starLef');
imgStar.setAttribute('src','media/img/star.gif');
figure_element.appendChild(imgStar);
figure_element.appendChild(imgStar);


addImg('pag1','pag1.html','chapterOne','media/img/chapterOne.png','Chapter One');
addImg('pag2','pag2.html','chapterTwo','media/img/chapterTwo.png','Chapter Two');
addImg('pag3','pag3.html','chapterThree','media/img/chapterThree.png','Chapter Three');
addImg('pag4','pag4.html','epilogue','media/img/epilogue.png','Epilogue');
addImg('pag5','pag5.html','aboutMe','media/img/aboutMe.png','About Me');
addImg('pag6','pag6.html','uxDesign','media/img/uxDesign.png','UX Design');


document.body.appendChild(audio);
document.body.appendChild(figure_element);

/******/ })()
;