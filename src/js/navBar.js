import '../../node_modules/bootstrap/dist/js/bootstrap.js'

function navbarBasicitem(href, name){
    let item = document.createElement('li');
    item.classList.add('nav-item');
    let itemName = document.createElement('a');
    itemName.classList.add('nav-link');
    itemName.setAttribute('href',href);
    itemName.innerText = name;
    item.appendChild(itemName);
    return item;
}


export function createNabvar (){
    let navBar = document.getElementById('navBar');
    navBar.classList.add('navbar','navbar-expand-md','navbar-light');
    let home = document.createElement('a');
    home.classList.add('nav-item', 'nav-link');
    home.innerText = 'HOME';
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
    ulNavbaritems.appendChild(navbarBasicitem('#','Chapter One'));
    ulNavbaritems.appendChild(navbarBasicitem('#','Chapter Two'));
    ulNavbaritems.appendChild(navbarBasicitem('#','Chapter Three'));
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
    specialItemname.innerText = 'Songs';
    specialNavbaritem.appendChild(specialItemname);
    //Songs as items of a dropdown menu
    let ddmItems = document.createElement('div');
    ddmItems.classList.add('dropdown-menu');
    ddmItems.setAttribute('aria-labelledby','navbarSongs');
    let s1 = document.createElement('a');
    s1.classList.add('dropdown-item');
    s1.setAttribute('href','#');
    s1.innerText = 'Song1';
    ddmItems.appendChild(s1);
    let s2 = document.createElement('a');
    s2.classList.add('dropdown-item');
    s2.setAttribute('href','#');
    s2.innerText = 'Song2';
    ddmItems.appendChild(s2);
    specialNavbaritem.appendChild(ddmItems);
    ulNavbaritems.appendChild(specialNavbaritem);
    navbarItems.appendChild(ulNavbaritems);
    navBar.appendChild(navbarItems);
}