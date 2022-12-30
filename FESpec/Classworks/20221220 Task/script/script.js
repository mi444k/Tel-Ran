const root = document.querySelector("#root");

let sliderIndex = 0;

const images = [
  "https://srisovki.com/wp-content/uploads/2019/08/pejzazhi-29-1024x768.jpg",
  "https://flomaster.club/uploads/posts/2022-01/1641915658_22-flomaster-club-p-morskoi-peizazh-dlya-srisovki-krasivie-ris-24.jpg",
  "https://klike.net/uploads/posts/2021-11/1636618660_1.jpeg",
  "https://st.depositphotos.com/1011976/2540/i/450/depositphotos_25409805-stock-photo-lake-in-the-evening.jpg",
  "https://amiel.club/uploads/posts/2022-03/1647566828_1-amiel-club-p-krasivie-kartinki-peizazh-1.jpg"
];

const frame = document.querySelector(".frame");
const cards = document.querySelector(".cards");

for (let i = 0; i < images.length; i++) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.style.backgroundImage = `url("${images[i]}")`;
  cards.append(card);
}

function slide(to) {
  if (typeof to === "number") {
    sliderIndex = to;
    cards.style.left = `-${sliderIndex * 500}px`;
  } else if (
    (to === "right" && sliderIndex < images.length - 1) ||
    (to === "left" && sliderIndex > 0)
  ) {
    sliderIndex += to === "right" ? 1 : -1;
    cards.style.left = `-${sliderIndex * 500}px`;
  }
}

const leftSide = document.querySelector(".leftSide");
const rightSide = document.querySelector(".rightSide");

leftSide.addEventListener("click", evt => {
  slide("left");
});

rightSide.addEventListener("click", evt => {
  slide("right");
});

function createPegginator() {
  const rounds = document.getElementsByClassName("rounds")[0];
  for (let i = 0; i < images.length; i++) {
    let btn = document.createElement("button");
    btn.classList.add(`bnt${i}`);
    btn.addEventListener("click", evt => {
      allButtons = btn.parentElement.children;
      for (let j = 0; j < allButtons.length; j++) {
        allButtons[j].classList.remove("active");
      }
      evt.target.classList.add("active");
      slide(i);
    });
    rounds.appendChild(btn);
  }
}

createPegginator();
