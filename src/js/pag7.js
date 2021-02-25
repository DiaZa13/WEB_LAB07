import * as media from'./media';

function start(){
    media.music('music','../media/audio/dontGiveupOnme.png');
    media.addImg('index','index.html','cover','../media/img/cover.png','Cover');
    media.addImg('pag2','pag2.html','chapterTwo','../media/img/chapterTwo.png','Chapter Two');
}

export {start};