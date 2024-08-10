const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const img = document.querySelector(".img");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const secondQuestion = document.querySelectorAll(".question")[1];
const yesBtn2 = document.querySelector(".yes-btn-2");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "I still love you";
  secondQuestion.innerHTML = "How about you?"; 
  img.src =
    "https://stickermaker.s3.eu-west-1.amazonaws.com/storage/uploads/sticker-pack/sad-cats-1/sticker_1.png?fb875473ab21e1ad8373e1447b46e55c&d=200x200";

  // Move to the next slide (slide 2)
  document.getElementById('slide1').classList.remove('active');
  document.getElementById('slide2').classList.add('active');
});

yesBtn2.addEventListener("click", () => {
  // Move to the next slide (slide 3)
  document.getElementById('slide2').classList.remove('active');
  document.getElementById('slide3').classList.add('active');
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
