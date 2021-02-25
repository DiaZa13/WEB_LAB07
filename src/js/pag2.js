import * as media from './media.js';


function start(){
    media.addImg('index','index.html','index','../media/img/cover.png','Cover');
    media.addImg('pag8','pag8.html','nextAdventure','../media/img/nextAdventure.png','Next Adventure');
    media.music('music','../media/audio/goPeace.mp3');
}

export {start};