
//Image as a link
function addImg(container, page, id, img, alt){
    let element = document.getElementById(container);
    let link = document.createElement('a');
    link.setAttribute('href',page);
    let image = document.createElement('img');
    image.setAttribute('id',id);
    image.setAttribute('src',img);
    image.setAttribute('alt',alt);
    link.appendChild(image);
    element.appendChild(link);
}


//Background music
function music(container,song){
    let element = document.getElementById(container);
    let audio = document.createElement('audio');
    audio.setAttribute('controls','controls');
    let sng = document.createElement('source');
    sng.setAttribute('src',song);
    audio.appendChild(sng);
    element.appendChild(audio);
}

export { addImg, music};