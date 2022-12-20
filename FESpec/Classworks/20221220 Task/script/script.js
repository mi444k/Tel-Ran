const root = document.querySelector("#root");

let sliderIndex = 0;

const images = [
  "https://srisovki.com/wp-content/uploads/2019/08/pejzazhi-29-1024x768.jpg",
  "https://flomaster.club/uploads/posts/2022-01/1641915658_22-flomaster-club-p-morskoi-peizazh-dlya-srisovki-krasivie-ris-24.jpg",
  "https://klike.net/uploads/posts/2021-11/1636618660_1.jpeg",
  "https://st.depositphotos.com/1011976/2540/i/450/depositphotos_25409805-stock-photo-lake-in-the-evening.jpg",
  "https://amiel.club/uploads/posts/2022-03/1647566828_1-amiel-club-p-krasivie-kartinki-peizazh-1.jpg"
];

const frame = document.createElement("div");
const cards = document.createElement("div");
frame.classList.add("frame");
cards.classList.add("cards");

for (let i = 0; i < images.length; i++) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.style.backgroundImage = `url("${images[i]}")`;
  cards.append(card);
}

frame.append(cards);
root.append(frame);

function slide(left = true) {
  if (
    (left === true && sliderIndex < images.length - 1) ||
    (left === false && sliderIndex > 0)
  ) {
    sliderIndex += left ? 1 : -1;
    cards.style.left = `-${sliderIndex * 500}px`;
  }
}

const leftSide = document.querySelector(".leftSide");
const rightSide = document.querySelector(".rightSide");

leftSide.addEventListener("click", evt => {
  slide(false);
});

rightSide.addEventListener("click", evt => {
  slide(true);
});
