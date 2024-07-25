const images = ["img1.jpg","img2.png","img3.jpg"];

const chosenimage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");

bgImage.src = `image//${chosenimage}`;

document.body.appendChild(bgImage);