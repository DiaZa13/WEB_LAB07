import { createNabvar } from "../../js/navBar";
import "../../scss/index.scss";
import 'bootstrap-icons/font/bootstrap-icons.css'; //MEDIA

import parrot from '../../media/img/parrot.png';
import tortuga from '../../media/img/tortoise.jpg';
import s1 from "../../media/audio/badLiar.mp3";
import s1Img from '../../media/img/badLiar.jpg';
import s2 from "../../media/audio/howDoyou.mp3";
import s2Img from '../../media/img/howDoyouSleep.jpg';
document.getElementById('perica').src = parrot;
document.getElementById('tortuga').src = tortuga;
createNabvar(s1, s2, s1Img, s2Img, 'Bad Liar', 'How Do You Sleep?', 'Imagine Dragons', 'Sam Smith');