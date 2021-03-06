import '../../node_modules/bootstrap/dist/js/bootstrap.js'
import * as media from "./media.js";

let basicItem = (href,name) => {
    let item = document.createElement('li');
    item.classList.add('nav-item');
    let div = document.createElement('div');
    let itemName = document.createElement('a');
    itemName.classList.add('nav-link');
    itemName.setAttribute('href',href);
    itemName.innerText = name;
    div.appendChild(itemName);
    item.appendChild(div);
    return item;
}

export function createNabvar (sng1, sng2, s1Img, s2Img, s1Name, s2Name, s1Artist, s2Artist){
    let navBar = document.getElementById('navBar');
    navBar.classList.add('navbar','navbar-expand-md');
    let home = document.createElement('a');
    home.classList.add('nav-link');
    home.setAttribute('href','index.html');
    let circle = document.createElement('div');
    circle.classList.add('rounded-circle');
    circle.style.border = '2px solid #1F1E2C';
    circle.style.width = '80px';
    circle.style.height = '80px';
    circle.style.display = 'flex';
    circle.style.justifyContent = 'center';
    circle.style.alignItems = 'center';
    let msg = document.createElement('div');
    msg.innerHTML = 'HOME';
    circle.addEventListener('mouseover',function(){
        msg.classList.add('animate__animated','animate__fadeInTopLeft');
        msg.style.fontWeight ='bold';
    });
    circle.addEventListener('mouseout',function (){
        msg.classList.remove('animate__animated','animate__fadeInTopLeft');
        msg.style.fontWeight ='normal';
    });
    circle.appendChild(msg);
    home.appendChild(circle);
    navBar.appendChild(home);
    //Dropdown menu
    let dropdownMenu = document.createElement('button');
    dropdownMenu.classList.add('navbar-toggler');
    dropdownMenu.setAttribute('type','button');
    dropdownMenu.setAttribute('data-toggle','collapse');
    dropdownMenu.setAttribute('data-target','#navbarItems');
    dropdownMenu.setAttribute('aria-controls','navbarItems');
    dropdownMenu.setAttribute('aria-expanded','false');
    dropdownMenu.setAttribute('aria-label','Toggle navigatio');
    let menuIcon = document.createElement('span');
    menuIcon.classList.add('navbar-toggler-icon');
    dropdownMenu.appendChild(menuIcon);
    navBar.appendChild(dropdownMenu);
    //Navbar Items
    let navbarItems = document.createElement('div');
    navbarItems.setAttribute('id','navbarItems');
    navbarItems.classList.add('collapse','navbar-collapse');
    let ulNavbaritems = document.createElement('ul');
    ulNavbaritems.classList.add('navbar-nav','ml-auto');
    //Song navbar item
    let specialNavbaritem = document.createElement('li');
    specialNavbaritem.classList.add('nav-item','dropdown');
    let specialItemname = document.createElement('a');
    specialItemname.setAttribute('id','navbarSongs');
    specialItemname.classList.add('nav-link');
    specialItemname.setAttribute('href','#');
    specialItemname.setAttribute('data-toggle','dropdown');
    specialItemname.setAttribute('aria-haspopup','true');
    specialItemname.setAttribute('aria-expanded','false');
    specialItemname.innerText = 'SONGS';
    specialNavbaritem.appendChild(specialItemname);
    //Songs as items of a dropdown menu
    let ddmItems = document.createElement('div');
    ddmItems.classList.add('dropdown-menu');
    ddmItems.setAttribute('aria-labelledby','navbarSongs');
    ddmItems.style.minWidth = '19.5rem';
    let s1 = document.createElement('div');
    s1.setAttribute('id','s1');
    s1.classList.add('dropdown-item');
    s1.style.display = 'flex';
    s1.style.paddingLeft = '8px';
    s1.style.paddingRight = '8px';
    let song1 = document.createElement('span');
    song1.setAttribute('id','song1');
    song1.style.alignSelf = 'center';
    song1.style.marginRight = '5px';
    song1.style.cursor = 'default';
    s1.appendChild(song1);
    let song1_description = document.createElement('div');
    song1_description.setAttribute('id','song1D');
    ddmItems.appendChild(s1);
    let s2 = document.createElement('div');
    s2.setAttribute('id','s2');
    s2.classList.add('dropdown-item');
    s2.style.display = 'flex';
    s2.style.paddingLeft = '8px';
    s2.style.paddingRight = '8px';
    let song2 = document.createElement('span');
    song2.setAttribute('id','song2');
    song2.style.alignSelf = 'center';
    song2.style.marginRight = '5px';
    song2.style.cursor = 'default';
    s2.appendChild(song2);
    let song2_description = document.createElement('div');
    song2_description.setAttribute('id','song2D');
    ddmItems.appendChild(s2);
    specialNavbaritem.appendChild(ddmItems);
    ulNavbaritems.appendChild(specialNavbaritem);
    ulNavbaritems.appendChild(basicItem('pag1.html','CHAPTER ONE'));
    ulNavbaritems.appendChild(basicItem('pag2.html#','CHAPTER TWO'));
    ulNavbaritems.appendChild(basicItem('pag3.html','CHAPTER THREE'));

    navbarItems.appendChild(ulNavbaritems);
    navBar.appendChild(navbarItems);
    media.bckMusic('s1',sng1,'song1');
    s1.appendChild(song1_description);
    media.bckMusic('s2',sng2,'song2');
    s2.appendChild(song2_description);
    media.musicInfo('song1D',s1Img,s1Name,s1Artist);
    media.musicInfo('song2D',s2Img,s2Name,s2Artist);

}