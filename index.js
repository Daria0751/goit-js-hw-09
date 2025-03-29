import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{S as s}from"./assets/vendor-CgTBfC_f.js";const i=[{preview:"images/small-1.jpg",original:"images/large-1.jpg",description:"Image 1 description"},{preview:"images/small-2.jpg",original:"images/large-2.jpg",description:"Image 2 description"}],m=document.querySelector(".gallery"),o=i.map(({preview:a,original:t,description:r})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${t}">
          <img class="gallery-image" src="${a}" alt="${r}" />
        </a>
      </li>`).join("");m.innerHTML=o;new s(".gallery a",{captionsData:"alt",captionDelay:250});const l=document.querySelector(".feedback-form"),g=l.querySelector('[name="email"]'),n=l.querySelector('[name="message"]'),e=JSON.parse(localStorage.getItem("feedback-form-state"))||{email:"",message:""};g.value=e.email;n.value=e.message;l.addEventListener("input",a=>{e[a.target.name]=a.target.value.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(e))});l.addEventListener("submit",a=>{if(a.preventDefault(),!e.email||!e.message){alert("Fill please all fields");return}console.log(e),l.reset(),localStorage.removeItem("feedback-form-state")});
//# sourceMappingURL=index.js.map
