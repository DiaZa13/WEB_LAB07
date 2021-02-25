import * as media from'./media';

function start(){
    media.music('music','../media/audio/tearInmyHeart.mp3');
    media.addImg('index','index.html','cover','../media/img/cover.png');
    media.addImg('pag5','pag5.html','epilogue','../media/img/epilogue.png','Epilogue');
}

export {start}