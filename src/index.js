import { registerImage, loadedImg, img0} from './lazy'

let url = "https://randomfox.ca/floof/";

const container = document.querySelector('#containerImg')

const button = document.createElement('button');
button.textContent = 'Obten un nuevo Zorro';
button.className = 'boton';
container.appendChild(button);

const clean = document.createElement('button');
clean.textContent = 'Limpiar';
clean.className = 'clean';
container.appendChild(clean);

let imgContainer = document.createElement('div');
container.appendChild(imgContainer);

let imagen;

let totalImg = 0;

export let report = () => {
    console.log(`
    Imagenes cargadas ${totalImg}
    Imagenes Vistas ${loadedImg()}
    `);
}

async function fetchData() {
    let response = await fetch(url);
    let jsonConv = await response.json();
    let urlImg = jsonConv.image;

    imagen = document.createElement('img');
    imagen.dataset.src = urlImg;
    imagen.classList = 'image mx-auto'
    imgContainer.appendChild(imagen);

    totalImg++;

    registerImage(imagen);
    report();
}

function removeImg() {
    const extractImg = container.children[2].childNodes;
    const imgs = [...extractImg];
    imgs.forEach((i) => i.remove())

    console.clear();

    totalImg = 0;

    img0();
}

button.addEventListener('click', (e) => fetchData());
clean.addEventListener('click', (e) => removeImg());












