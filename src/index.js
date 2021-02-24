
//Background-music allStar
let audio = document.createElement('audio');
audio.setAttribute('controls','controls');
let allStar = document.createElement('source');
allStar.setAttribute('src','audio/allStar.mp3');
audio.appendChild(allStar);

let figure_element = document.getElementById('figure_element');
let imgStar = document.createElement('img');
imgStar.setAttribute('id','starLef');
imgStar.setAttribute('src','img/star.gif');
figure_element.appendChild(imgStar);
figure_element.appendChild(imgStar);


document.body.appendChild(audio);
document.body.appendChild(figure_element);
