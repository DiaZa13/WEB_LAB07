//Background music
export function bckMusic(element, melody, container) {
  let sound = false;
  let audio = document.createElement('audio');
  let song = document.createElement('source');
  song.setAttribute('src', melody);
  song.setAttribute('controls', 'controls');
  audio.appendChild(song);
  let music = document.getElementById(element);
  let icon_music = document.getElementById(container);
  icon_music.setAttribute('id', 'icon_music');
  icon_music.classList.add('bi', 'bi-play-circle');
  icon_music.style.fontSize = '42px';
  icon_music.addEventListener('click', function () {
    if (!sound) {
      audio.play();
      icon_music.classList.remove('bi-play-circle');
      icon_music.classList.add('bi-pause-circle');
      sound = true;
    } else {
      audio.pause();
      icon_music.classList.remove('bi-pause-circle');
      icon_music.classList.add('bi-play-circle');
      sound = false;
    }
  });
  music.appendChild(icon_music);
}
export function musicInfo(element, img, name, artist) {
  let container = document.getElementById(element);
  container.style.display = 'flex';
  let image = document.createElement('div');
  image.style.paddingRight = '0px';
  let fig = document.createElement('img');
  fig.src = img;
  fig.style.width = '67px';
  image.appendChild(fig);
  container.appendChild(image);
  let description = document.createElement('div');
  description.style.marginLeft = '2px';
  let songName = document.createElement('div');
  songName.innerHTML = '<b>' + name + '</b>';
  description.appendChild(songName);
  let artistName = document.createElement('div');
  artistName.innerHTML = artist;
  artistName.style.marginTop = '-5px';
  artistName.style.fontSize = '17px';
  description.appendChild(artistName);
  container.appendChild(description);
}
export function menu(element, container) {
  let music = document.getElementById(element);
  let icon_music = document.getElementById(container);
  icon_music.style.fontSize = '42px';
  icon_music.setAttribute('id', 'icon_music');
  icon_music.classList.add('bi', 'bi-grid');
  icon_music.addEventListener('mouseover', function () {
    icon_music.classList.remove('bi-grid');
    icon_music.classList.add('bi-grid-fill');
  });
  icon_music.addEventListener('mouseout', function () {
    icon_music.classList.remove('bi-grid-fill');
    icon_music.classList.add('bi-grid');
  });
  music.appendChild(icon_music);
}