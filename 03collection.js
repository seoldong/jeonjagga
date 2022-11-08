"use strict";

// import { nav, navColorObserver } from './01index'

//nav color

const main = document.querySelector(`#main`);

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

// 