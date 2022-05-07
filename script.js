var images = [
  "img/kene.jpeg",
  "img/image1.jpg",
  "img/image2.jpg",
  "img/image3.jpg",
  "img/image4.jpg",
  "img/image5.jpg",
  "img/image6.jpg",
  "img/image7.jpg",
  "img/image8.jpg",
  "img/image9.jpg",
];

var currentIndex = 0;

var img = document.querySelector("img");
var next = document.getElementById("next-button");
var prev = document.getElementById("prev-button");

var incrementIndex = function () {
  currentIndex = currentIndex + 1;
  if (currentIndex > images.length - 1) {
    currentIndex = 0;
  }
  return currentIndex;
};

var decrementIndex = function () {
  currentIndex = currentIndex - 1;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  return currentIndex;
};

next.onclick = function () {
  incrementIndex();
  img.setAttribute("src", images[currentIndex]);
};

prev.onclick = function () {
  decrementIndex();
  img.setAttribute("src", images[currentIndex]);
};
