import{a as d,S as f,i as o}from"./assets/vendor-Db2TdIkw.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const y="49662945-8e09ebd816e6f5a1c3c1cc874",g="https://pixabay.com/api/";async function h(i){return(await d.get(g,{params:{key:y,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}function L(){document.getElementById("loader").classList.add("show")}function w(){document.getElementById("loader").classList.remove("show")}let c;function v(i){const s=document.querySelector(".gallery"),r=i.map(({webformatURL:l,largeImageURL:e,tags:t,likes:a,views:u,comments:m,downloads:p})=>`
    <li class="gallery-item">
      <a href="${e}">
        <img  class="img" src="${l}" alt="${t}" />
         <ul class="statistic-list">
      <li class="statistic-item">
        <p class="statistic-text">Likes</p>
        <p class="statistic-value">${a}</p>
      </li>
      <li class="statistic-item">
        <p class="statistic-text">Views</p>
        <p class="statistic-value">${u}</p>
      </li>
      <li class="statistic-item">
        <p class="statistic-text">Comments</p>
        <p class="statistic-value">${m}</p>
      </li>
      <li class="statistic-item">
        <p class="statistic-text">Downloads</p>
        <p class="statistic-value">${p}</p>
      </li>
    </ul>
      </a>
    </li>
  `).join("");s.innerHTML=r,c?c.refresh():c=new f(".gallery a")}function x(){document.querySelector(".gallery").innerHTML=""}const n=document.querySelector(".form");n.addEventListener("submit",async i=>{i.preventDefault();const s=i.target.elements["search-text"].value.trim();if(!s){o.error({title:"Помилка",message:"Поле пошуку не може бути порожнім"});return}x(),L();try{const r=await h(s);r.hits.length===0?o.warning({title:"Увага",message:"На жаль, за вашим запитом нічого не знайдено. Спробуйте інший запит!"}):v(r.hits)}catch{o.error({title:"Помилка",message:"Сталася помилка під час виконання запиту. Спробуйте ще раз!"})}finally{w(),n.reset()}});
//# sourceMappingURL=index.js.map
