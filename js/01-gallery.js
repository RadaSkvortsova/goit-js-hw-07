import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryListMarkup = document.querySelector('.gallery');

const galleryImages = createGallery(galleryItems);
galleryListMarkup.insertAdjacentHTML('beforeend', galleryImages);

function createGallery(items) {
    return items
        .map(
            ({ preview, original, description }) =>
                `<li><a class="gallery__item" href=${original}>
  <img class="gallery__image" src=${preview} data-source="${original}" alt="${description}" />
</a></li>`,
        )
        .join('');
}

galleryListMarkup.addEventListener('click', event => {
    if (event.target.nodeName !== 'IMG') {
        return;
    }
    event.preventDefault();
    const imgOriginal = event.target.getAttribute('data-source');
    basicLightbox.create(`<img src='${imgOriginal}' width='1280' >`).show();
});

let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox', function () {
    // do something…
});
