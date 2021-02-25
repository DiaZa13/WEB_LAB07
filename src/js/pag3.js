import * as media from'./media';

function start(){
    media.music('music','../media/audio/blueSky.mp3');
    media.addImg('index','index.html','index','../media/img/cover.png','Cover');
    media.addImg('pag9','pag9.html','nextReview','../media/img/nextReview','Next Review');
}

export{start};