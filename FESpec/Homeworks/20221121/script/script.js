const imageURLs = [
  'https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg',
  'https://thumbs.dreamstime.com/b/autumn-fall-nature-scene-autumnal-park-beautiful-77869343.jpg',
  'https://thumbs.dreamstime.com/b/bee-flower-27533578.jpg',
  'https://thumbs.dreamstime.com/b/landscape-nature-mountan-alps-rainbow-76824355.jpg',
  'https://thumbs.dreamstime.com/b/zen-meditation-landscape-calm-spiritual-nature-environment-stone-balance-41286757.jpg',
  'https://thumbs.dreamstime.com/b/landscape-nature-view-background-view-window-landscape-nature-view-background-view-window-wonderful-landscape-121459679.jpg',
  'https://thumbs.dreamstime.com/b/amazing-nature-landscape-famous-waterfall-skradinski-buk-sunrise-croatia-outdoor-travel-background-amazing-nature-landscape-147189513.jpg',
];

const carusel = document.querySelector('.carusel');
const bigImage = document.querySelector('.bigimage');

function changeImage(self) {
  bigImage.style.backgroundImage = `url(${self.target.src})`;
}

for (const idx in imageURLs) {
  let img = document.createElement('img');
  img.src = imageURLs[idx];
  img.classList.add('thumbs');
  img.style.width = `calc(90vw / ${imageURLs.length})`;
  img.setAttribute('alt', `Image #${idx + 1}`);
  img.addEventListener('click', changeImage);
  carusel.appendChild(img);
}
