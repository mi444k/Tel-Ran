const imgs_db = [
  'https://www.gorilladoctors.org/wp-content/uploads/2014/10/empowering2-300x300.jpg',
  'https://i.pinimg.com/originals/7f/a1/0f/7fa10fdd13baa44a73f0a77ed32e8566.jpg',
  'https://dogtowndogtraining.com/wp-content/uploads/2012/06/300x300-061-e1340955308953.jpg',
  'https://dogtowndogtraining.com/wp-content/uploads/2012/06/300x300-03.jpg',
];

const img_div = document.querySelector('.images');
imgs_db.forEach((url) => {
  let img = document.createElement('img');
  img.src = url;
  img.style.height = '200px';
  img.style.width = 'auto';
  // img.addEventListener('click', () => {
  //   alert(url);
  // });
  img.onclick = () => {
    alert(url);
  };
  img_div.appendChild(img);
});
