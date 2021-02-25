import * as media from './media.js';

let figure_element = document.getElementById('figure_element');
let imgStar = document.createElement('img');
imgStar.setAttribute('id','starLef');
imgStar.setAttribute('src','../media/img/star.gif');
figure_element.appendChild(imgStar);
figure_element.appendChild(imgStar);


function start(){
    media.addImg('pag1','pag1.html','chapterOne','../media/img/chapterOne.png','Chapter One');
    media.addImg('pag2','../src/pag3.html','chapterTwo','../media/img/chapterTwo.png','Chapter Two');
    media.addImg('pag3','../src/pag2.html','chapterThree','../media/img/chapterThree.png','Chapter Three');
    media.addImg('pag4','../src/pag5.html','epilogue','../media/img/epilogue.png','Epilogue');
    media.addImg('pag5','../src/pag4.html','aboutMe','../media/img/aboutMe.png','About Me');
    media.addImg('pag6','../src/pag6.html','uxDesign','../media/img/uxDesign.png','UX Design');
    media.music('music','../media/audio/allStar.mp3');
    document.body.appendChild(figure_element);
}

export {start};



