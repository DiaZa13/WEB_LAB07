
//Image as a link
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