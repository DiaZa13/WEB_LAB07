import 'bootstrap/dist/js/bootstrap.js'
import "../../scss/index.scss";
import 'bootstrap-icons/font/bootstrap-icons.css';
import * as media from "../../js/media";
import {menuAnimation} from "../../js/animations";
// MEDIA
import efimero from '../../media/img/efimero.png';
import indeleble from '../../media/img/indeleble.png';
import inefable from '../../media/img/inefable.png';
import melifluo from '../../media/img/melifluo.png';
import petricor from '../../media/img/petricor.png';
import superfluo from '../../media/img/superfluo.png';
import me from '../../media/img/aboutMe.png';
import song from '../../media/audio/itAintme.mp3'
import img from '../../media/img/itAintme.jpg'

document.getElementById('efimero').src = efimero;
document.getElementById('indeleble').src = indeleble;
document.getElementById('inefable').src = inefable;
document.getElementById('melifluo').src = melifluo;
document.getElementById('petricor').src = petricor;
document.getElementById('superfluo').src = superfluo;
document.getElementById('aboutMe').src = me;

document.getElementById('chapter_one').href= 'pag1.html';
document.getElementById('chapter_two').href= 'pag2.html';
document.getElementById('chapter_three').href= 'pag3.html';
//document.getElementById('chapter_one').href= 'pag4.html';


media.bckMusic('music',song,'icon_music');
media.menu('menu','icon_menu');
menuAnimation(img);


