import{a as d,S as y,i as g}from"./assets/vendor-BjRz3xa9.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const h="49662945-8e09ebd816e6f5a1c3c1cc874";function L(i){const s=new URLSearchParams({key:h,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0});return d(`https://pixabay.com/api/?${s}`)}const u=document.querySelector(".gallery"),f=document.querySelector(".loader-js");function v(i){u.innerHTML=i.map(({webformatURL:s,largeImageURL:a,tags:r,likes:e,views:t,comments:o,downloads:p})=>`<li class="gallery-item">
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
        <p class="statistic-value">${p}</p>
      </li>
    </ul></a
  >
</li>`).join(""),new y(".gallery li a",{captionsData:"alt",captionDelay:250}).refresh()}function c(){u.innerHTML=""}function l(){f.classList.add("loader")}function n(){f.classList.remove("loader")}document.querySelector(".span.loader").classList.remove("loader");const m=document.querySelector(".form");m.addEventListener("submit",S);function S(i){i.preventDefault(),l();const s=i.target.elements.text.value.trim();s&&(l(),c(),L(s).then(a=>{const r=a.data.hits;if(!r.length){g.warning({message:"На жаль, за вашим запитом нічого не знайдено. Спробуйте інший запит!",messageColor:"#ffffff"}),c(),n();return}v(r),n()}).catch(a=>console.log(a.message)),m.reset())}
//# sourceMappingURL=index.js.map
