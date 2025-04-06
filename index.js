import{a as m,S as f,i as o}from"./assets/vendor-Db2TdIkw.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const y="49662945-8e09ebd816e6f5a1c3c1cc874",g="https://pixabay.com/api/",h=async i=>(await m.get(g,{params:{key:y,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data,n=document.querySelector(".gallery"),u=document.querySelector(".loader");let L=new f(".gallery a",{captionsData:"alt",captionDelay:250});function b(i){const s=i.map(({webformatURL:a,largeImageURL:c,tags:e,likes:t,views:r,comments:p,downloads:d})=>`
      <li class="gallery-item">
        <a href="${c}">
          <img class="img" src="${a}" alt="${e}" />
        </a>
         <ul class="statistic-list">
      <li class="statistic-item">
        <p class="statistic-text">Likes</p>
        <p class="statistic-value">${t}</p>
      </li>
      <li class="statistic-item">
        <p class="statistic-text">Views</p>
        <p class="statistic-value">${r}</p>
      </li>
      <li class="statistic-item">
        <p class="statistic-text">Comments</p>
        <p class="statistic-value">${p}</p>
      </li>
      <li class="statistic-item">
        <p class="statistic-text">Downloads</p>
        <p class="statistic-value">${d}</p>
      </li>
    </ul>
      </a>
    </li>
  `).join("");n.insertAdjacentHTML("beforeend",s),L.refresh()}function v(){n.innerHTML=""}function x(){u.classList.remove("is-hidden")}function w(){u.classList.add("is-hidden")}const l=document.querySelector(".form");l.addEventListener("submit",async i=>{i.preventDefault();const s=i.target.elements["search-text"].value.trim();if(!s){o.error({title:"Помилка",message:"Поле пошуку не може бути порожнім"});return}v(),x();try{const a=await h(s);a.hits.length===0?o.warning({title:"Увага",message:"На жаль, за вашим запитом нічого не знайдено. Спробуйте інший запит!"}):b(a.hits)}catch{o.error({title:"Помилка",message:"Сталася помилка під час виконання запиту. Спробуйте ще раз!"})}finally{w(),l.reset()}});
//# sourceMappingURL=index.js.map
