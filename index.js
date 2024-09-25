/* empty css                      */import{i as a}from"./assets/vendor-17o45ynk.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const p="46177713-58a5ba69e9c8cb46785531260",g="https://pixabay.com/api/";async function h(s,t=1){const i=`${g}?key=${p}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true&page=${t}`,o=await fetch(i);if(!o.ok)throw new Error(o.statusText);return await o.json()}const u=document.querySelector(".gallery");let l;function y(s){const t=s.map(({webformatURL:i,largeImageURL:o,tags:e,likes:r,views:n,comments:d,downloads:m})=>`
      <li class="gallery__item">
        <a href="${o}">
          <img class="gallery__image" src="${i}" alt="${e}" loading="lazy" />
        </a>
        <div class="info">
          <p><b>Likes</b> ${r}</p>
          <p><b>Views</b> ${n}</p>
          <p><b>Comments</b> ${d}</p>
          <p><b>Downloads</b> ${m}</p>
        </div>
      </li>
    `).join("");u.innerHTML=t,l?l.refresh():l=new SimpleLightbox(".gallery a")}function b(){u.innerHTML=""}const L=document.querySelector("#search-form"),f=document.querySelector(".loader");let c="",$=1;L.addEventListener("submit",w);function w(s){if(s.preventDefault(),c=s.currentTarget.elements.searchQuery.value.trim(),c===""){a.error({title:"Error",message:"Please enter a search query."});return}b(),q(),h(c,$).then(t=>{t.hits.length===0?a.warning({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!"}):y(t.hits)}).catch(t=>{a.error({title:"Error",message:"Failed to fetch images. Please try again later."})}).finally(()=>{P()})}a.settings({position:"topRight"});function q(){f.classList.remove("hidden")}function P(){f.classList.add("hidden")}
//# sourceMappingURL=index.js.map
