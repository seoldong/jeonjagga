"use strict";

// import { nav, navColorObserver } from './01index'

//nav color

const main = document.querySelector(`#main`);
const contact = document.querySelector(`#contact`);

const nav = document.querySelector(`#nav`);

function navColorObserver(target) {
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

// view detail btn

const viewBtn = document.querySelector(`.viewBtn`);
const description = document.querySelector(`#description`);

const viewBtnCallback = ()=>{
  description.scrollIntoView({behavior: 'smooth'});
}

viewBtn.addEventListener('click', viewBtnCallback)
