import { report } from './index.js';

const observer = new IntersectionObserver((entries) => {
    entries.filter(isIntersecting).forEach(loadImage);
});

const isIntersecting = (entry) => {
    return entry.isIntersecting
}

export const registerImage = (imagen) => {
    observer.observe(imagen);
}

let img = 0

export const loadImage = (entry) => {
    const nodo = entry.target;
    nodo.src = nodo.dataset.src;
    img++;
    report()
    observer.unobserve(nodo);
}

export const loadedImg = () => {
    return img;
}

export const img0 = () =>{
    return img = 0;
}





