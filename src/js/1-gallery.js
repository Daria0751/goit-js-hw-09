import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const images = [
    {
        preview: 'path-to-small-image1.jpg',
        original: 'path-to-large-image1.jpg',
        description: 'Image 1',
    },
    {
        preview: 'path-to-small-image2.jpg',
        original: 'path-to-large-image2.jpg',
        description: 'Image 2',
    }
];

const galleryContainer = document.querySelector('.gallery');

const markup = images
    .map(({ preview, original, description }) => 
        `<li class="gallery-item">
            <a class="gallery-link" href="${original}">
                <img class="gallery-image" src="${preview}" alt="${description}" />
            </a>
        </li>`
    )
    .join('');

galleryContainer.innerHTML = markup;

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});
