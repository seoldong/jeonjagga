"use strict";

//nav color

const main = document.querySelector(`#main`);
const contact = document.querySelector(`#contact`);

export const nav = document.querySelector(`#nav`);
export function navColorObserver(target) {
  const option = { root: null, rootMargin: `0px`, threshold: 0.8 };

  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting == true) {
        nav.style.backgroundColor = "transparent";
      } else {
        nav.style.backgroundColor = `black`;
      }
    });
  };

  const observer = new IntersectionObserver(callback, option);

  return observer.observe(target)
}

navColorObserver(main)
navColorObserver(contact)

// 



//introduce img slide

const slideList = [...document.querySelectorAll(".slideList")];
const slideArr = slideList.map((v) => v.classList[1]);

function slideTimer() {
  let count = 0;

  const leftBtn = document.querySelector('.leftBtn')
  const rightBtn = document.querySelector('.rightBtn')

  leftBtn.addEventListener('click', () => {
    if (count <= 0) { count = 0; }
    slideList.forEach((v) => { v.classList.remove(`active`); });
    const target = document.querySelector(`.${slideArr[count]}`);
    target.classList.add(`active`);
    count--
    console.log(count);
  })

  rightBtn.addEventListener('click', () => {
    if (count >= slideList.length) { count = 6 }
    slideList.forEach((v) => { v.classList.remove(`active`); });
    const target = document.querySelector(`.${slideArr[count]}`);
    target.classList.add(`active`);
    count++
    console.log(count);
  })

  setInterval(() => {
    if (count >= slideList.length) { count = 0; }
    slideList.forEach((v) => { v.classList.remove(`active`); });
    const target = document.querySelector(`.${slideArr[count]}`);
    target.classList.add(`active`);

    count++;
    console.log(count);
  }, 1000);
}

slideTimer();

//

// view my work BTN

const main_nextBtn = document.querySelector(`.main_nextBtn`);
const line1 = document.querySelector(`.line1`);

const viewBtnCallback = () => {
  line1.scrollIntoView({ behavior: 'smooth' });
}

main_nextBtn.addEventListener('click', viewBtnCallback)

// 

