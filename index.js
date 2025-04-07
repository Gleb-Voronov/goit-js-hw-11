import{a as m,S as d,i as p}from"./assets/vendor-BjRz3xa9.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const y="49626853-35a7cc777388834eb6e89d08d";function g(i){const s=new URLSearchParams({key:y,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0});return m(`https://pixabay.com/api/?${s}`)}const c=document.querySelector(".gallery"),n=document.querySelector(".loader-js");function h(i){c.innerHTML=i.map(({webformatURL:s,largeImageURL:a,tags:r,likes:e,views:t,comments:o,downloads:f})=>`<li class="gallery-item">
  <a class="item-link" href="${a}">
    <img class="img" src="${s}" alt="${r}" />
    <ul class="statistic-list">
      <li class="statistic-item">
        <p class="statistic-text">Likes</p>
        <p class="statistic-value">${e}</p>
      </li>
      <li class="statistic-item">
        <p class="statistic-text">Views</p>
        <p class="statistic-value">${t}</p>
      </li>
      <li class="statistic-item">
        <p class="statistic-text">Comments</p>
        <p class="statistic-value">${o}</p>
      </li>
      <li class="statistic-item">
        <p class="statistic-text">Downloads</p>
        <p class="statistic-value">${f}</p>
      </li>
    </ul></a
  >
</li>`).join(""),new d(".gallery li a",{captionsData:"alt",captionDelay:250}).refresh()}function L(){c.innerHTML=""}function v(){n.classList.add("loader")}function l(){n.classList.remove("loader")}document.querySelector(".span.loader").classList.remove("loader");const u=document.querySelector(".form");u.addEventListener("submit",S);function S(i){i.preventDefault(),v();const s=i.target.elements.text.value.trim();s&&(g(s).then(a=>{const r=a.data.hits;if(!r.length){p.warning({message:"На жаль, за вашим запитом нічого не знайдено. Спробуйте інший запит!",messageColor:"#ffffff"}),L(),l();return}h(r),l()}).catch(a=>console.log(a.message)),u.reset())}
//# sourceMappingURL=index.js.map
