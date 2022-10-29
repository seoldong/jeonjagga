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
        nav.style.backgroundColor = `rgb(175, 96, 0)`;
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
  let count = 1;
  setInterval(() => {
    if (count >= slideList.length) { count = 0; }
    slideList.forEach((v) => { v.classList.remove(`active`); });
    const target = document.querySelector(`.${slideArr[count]}`);
    target.classList.add(`active`);
    count++;
  }, 3000);
}

slideTimer();

//

// view my work BTN

const nextBtnText = document.querySelector(`.nextBtnText`);
const introduce = document.querySelector(`#introduce`);

const viewBtnCallback = ()=>{
  introduce.scrollIntoView({behavior: 'smooth'});
}

nextBtnText.addEventListener('click', viewBtnCallback)

// 



