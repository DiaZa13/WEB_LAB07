



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
function bckMusic(element,melody){
    let sound = false;
    let audio = document.createElement('audio');
    let song = document.createElement('source');
    song.setAttribute('src',melody);
    song.setAttribute('controls','controls');
    audio.appendChild(song);
    let music = document.getElementById(element);
    let icon_music = document.createElement('span');
    icon_music.setAttribute('id', 'icon_music');
    icon_music.classList.add('material-icons');
    icon_music.innerHTML = 'play_circle_outline';
    icon_music.style.cursor = 'default';
    icon_music.style.fontSize = '42px';
    icon_music.style.position = 'fixed';
    icon_music.style.transform = 'translate(-11.5px, 137px)';
    icon_music.addEventListener('click',function (){
        if(!sound){
            audio.play();
            icon_music.innerHTML = '';
            icon_music.innerHTML = 'pause_circle_outline';
            sound = true;
        }else {
            audio.pause();
            icon_music.innerHTML = '';
            icon_music.innerHTML = 'play_circle_outline';
            sound = false;
        }
    });
    music.appendChild(icon_music);
}

export {addImg, bckMusic};