import * as media from'./media';

function start(){
    media.music('music','../media/audio/millionMiles.mp3');
    media.addImg('index','index.html','cover','../media/img/cover.png','Cover');
    media.addImg('pag3','pag3.html','chapterThree','../media/img/chapterThree.png','Chapter Three');
}

export {start};