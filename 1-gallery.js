import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{S as l}from"./assets/vendor-CgTBfC_f.js";const t=[{preview:"path-to-small-image1.jpg",original:"path-to-large-image1.jpg",description:"Image 1"},{preview:"path-to-small-image2.jpg",original:"path-to-large-image2.jpg",description:"Image 2"}],r=document.querySelector(".gallery"),g=t.map(({preview:a,original:e,description:i})=>`<li class="gallery-item">
            <a class="gallery-link" href="${e}">
                <img class="gallery-image" src="${a}" alt="${i}" />
            </a>
        </li>`).join("");r.innerHTML=g;new l(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=1-gallery.js.map
