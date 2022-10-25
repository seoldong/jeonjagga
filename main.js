'use strict'

const nav = document.querySelector(`#nav`);
const main = document.querySelector(`#main`);
const contact = document.querySelector(`#contact`);

const obOption = {
    root: null,
    rootMargin: `0px`,
    threshold: 0.8,
}

const obCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting == true) {
            nav.style.backgroundColor = 'transparent'
        } else {
            nav.style.backgroundColor = `rgb(175, 96, 0)`
        }
    });
}

const observer = new IntersectionObserver(obCallback, obOption);

observer.observe(main)
observer.observe(contact)
