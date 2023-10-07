const images = [
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg"
];

//이미지 랜덤으로 뽑기
const chooseImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chooseImage}`;


document.body.appendChild(bgImage);

