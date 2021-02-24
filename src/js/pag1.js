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
};

//Background-music allStar
let audio = document.createElement('audio');
audio.setAttribute('controls','controls');
let allStar = document.createElement('source');
allStar.setAttribute('src','../media/audio/oneMoreLight.mp3');
audio.appendChild(allStar);

function start(){
    addImg('index','../index.html','index','img.cover.png','Cover');
    addImg('pag7','pag7.html','pag7','img/nextDisaster.png','Next Disaster');
    document.body.appendChild(audio);
}

start();