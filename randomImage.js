const images = ['dog1.jpg', 'dog2.jpg', 'dog3.jpg', 'cat1.jpg', 'cat2.jpg'];
const random = Math.floor(Math.random()*images.length);
const img = document.querySelector('#image');

img.innerHTML = `<img src=./imgs/${images[random]}></img>`;