import L from"https://cdn.skypack.dev/axios";import{a as g,i as l}from"./assets/vendor-f33d0746.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(r){if(r.ep)return;r.ep=!0;const a=o(r);fetch(r.href,a)}})();async function w(e){const t=[];try{await Promise.all(e.map(async o=>{const s=`https://books-backend.p.goit.global/books/${o}`,r=await L.get(s);t.push(r.data)})),localStorage.setItem("booksArray",JSON.stringify(t))}catch(o){console.error("Error fetching books:",o)}}const T=["643282b1e85766588626a0dc","643282b1e85766588626a080","643282b1e85766588626a0b2","643282b1e85766588626a086","643282b1e85766588626a085"];w(T);const _=document.querySelector(".shopping-list");function B(e){const t=localStorage.getItem(e);try{const o=JSON.parse(t);console.log(o),o.forEach(s=>{const r=`<li class="shopping-list-item" data-id="${s._id}">

        <button type="button" class="delete-btn" title="Delete"> 
        <svg class="delete-btn-icon" width="16" height="16"> <use href="/svg-sprite.svg#icon-trash"></use> </svg> </button> 

        <div class="shopping-list-div-image"> <img class="shopping-list-image" src="${s.book_image}" alt="${s.title}"> </div> 

        <div class="shopping-list-text"> <h2 class="shopping-list-item-header">${s.title}</h2>
        
        <p class="shopping-list-item-category">${s.list_name}</p> 
        <p class="shopping-list-item-description">${s.description}</p>
        <p class="shopping-list-item-author">${s.author}</p>

        <div class="link-container"> 
        <a class="amazon-icon" href="${s.amazon_product_url}" target="_blank" rel="noopener noreferrer nofollow"> <div class="amazon-logo hover-items-amaz-books"></div> </a>
        <a class="apple-icon" href="${s.buy_links[1].url}" target="_blank" rel="noopener noreferrer nofollow"><div class="apple-books-logo hover-items-amaz-books"></div></a>
        </div>
        </div>
        </li>`;_.insertAdjacentHTML("beforeend",r)})}catch{return t}}B("booksArray");class u{constructor(){this.BASE_URL="https://books-backend.p.goit.global/books",this.CATEGORY_LIST="/category-list",this.TOP_BOOKS="/top-books",this.CATEGORY="/category?category="}async getCategories(){const t=this.BASE_URL+this.CATEGORY_LIST;try{return(await g.get(t)).data}catch(o){console.log(o),iziToast.error({title:"Error",message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${o.message}`,position:"topRight"})}}async getTopBooks(){const t=this.BASE_URL+this.TOP_BOOKS;try{return(await g.get(t)).data}catch(o){console.log(o),iziToast.error({title:"Error",message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${o.message}`,position:"topRight"})}}async getCategory(t){const o=this.BASE_URL+this.CATEGORY+t;try{return(await g.get(o)).data}catch(s){console.log(s),iziToast.error({title:"Error",message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${s.message}`,position:"topRight"})}}async getBook(t){const o=this.BASE_URL+"/"+t;try{return(await g.get(o)).data}catch(s){console.log(s),iziToast.error({title:"Error",message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${s.message}`,position:"topRight"})}}}const h=new u,m={bestBooksSection:document.querySelector(".bs-books-section")};async function E(e){const t=`
      <h1 class="bs-books-title">
        Best Sellers <span class="bs-books-title-blue">Books</span>
      </h1> <ul class="bs-list list"> ${e.map(o=>`
        <li class="bs-books-item"> 
        <h3 class="bs-books-category-title">${o.list_name}</h3>
          <div class="bs-books-thumb" data-list-id="${o.list_name}">
            ${o.books.map(s=>`
  
              <a href="#" class="bs-books-item-link link" rel="noopener noreferrer" data-id='${s._id}'>
        
              <div class="bs-books-card">
                <img
                  src="${s.book_image}"
                  alt="${s.title}"
                  class="bs-books-card-img"
                />
                <div class="bs-books-overlay">
                <p class="bs-books-overlay-title">quick view</p>
                </div>
               </div> 
                <div class="bs-books-item-thumb">
                  <h3 class="bs-books-item-title">${s.title.slice(0,18)}</h3>
                  <p class="bs-books-author">${s.author.slice(0,18)}</p>
                </div>
             </a>`).join("")}
          </div>
          <div class="bs-books-thumb-btn">
          <button class="bs-books-see-more-btn" type="button" data-id="${o.list_name}">see more</button>
          </div>
          
        </li>
        `).join("")}</ul>`;m.bestBooksSection.insertAdjacentHTML("beforeend",t)}async function O(){const e=await h.getTopBooks();E(e)}O();const b=document.querySelector(".bs-list");b.addEventListener("click",async function(e){if(e.target.nodeName!=="BUTTON")return;const t=e.target.dataset.id;try{m.bestBooksSection.innerHTML="";const o=await h.getCategory(t);A(o)}catch(o){console.error(o.message)}});function A(e){let t=e,o=`<h1 class="bs-category-title">${e[0].list_name}</h1>`,s='<ul class="bs-category-list list">';t.forEach(({_id:r,book_image:a,title:i,author:v,list_name:S})=>{s+=`<li class="bs-category-item" id="${r}">
    <div class="bs-books-thumb" data-list-id="${S}">
    <a href="#" class="bs-books-item-link link" rel="noopener noreferrer" data-id='${r}'>
    <div class="bs-category-books-card">  
      <img src="${a}" alt="${i}" class="bs-books-card-img"/>
      <div class="bs-books-overlay">
                <p class="bs-books-overlay-title">quick view</p>
                </div>
      </div>
      <div class="bs-books-item-thumb">
      <h3 class="bs-books-item-title">${i.slice(0,18)}</h3>
      <p class="bs-books-author">${v.slice(0,18)}</p>
      </div>
      </a>
      </li>
      </div>`}),s+="</ul>",o+=s,m.bestBooksSection.insertAdjacentHTML("beforeend",o)}b.addEventListener("mouseover",C);b.addEventListener("mouseout",R);function C(e){e.target.nodeName==="BUTTON"&&(e.target.style.color="white",e.target.style.backgroundColor="rgb(79, 46, 232)")}function R(e){e.target.nodeName==="BUTTON"&&(e.target.style.color="black",e.target.style.backgroundColor="white")}const M=new u,d={list:document.querySelector(".categories-List"),categoriesBox:document.querySelector(".categories-box"),booksSection:document.querySelector(".bs-books-section"),btnList:document.querySelector(".btn-list")};async function N(){const t=(await M.getCategories()).map(o=>` <li class="categories-item" name="${o.list_name}">
         <button class="btn-list" type="button" name="${o.list_name}">${o.list_name}</button>
        </li>
        `).sort().join("");d.list.insertAdjacentHTML("beforeend",t)}N();d.list.addEventListener("click",P);async function P(e){const t=await g.get(`https://books-backend.p.goit.global/books/category?category=${e.target.name}`);j(t.data,e),I(e),localStorage.setItem("currentCategorie",e.target.name)}async function j(e,t){const o=`<h1 class="bs-books-title">
       ${t.target.name} <span class="bs-books-title-blue">Books</span>
      </h1> <div><ul class="bs-list list  ">
       <li class="bs-books-item ">
       <div class="categories-item " data-list-id="${t.target.name}">
       ${e.map(s=>`
             <a href="#" class=" link" rel="noopener noreferrer" data-id='${s._id}'>
        
              <div class="bs-books-card">
                <img
                  src="${s.book_image}"
                  alt="${s.title}"
                  class="bs-books-card-img"
                />
                <div class="bs-books-overlay">
                <p class="bs-books-overlay-title">quick view</p>
                </div>
               </div> 
                <div class="bs-books-item-thumb">
                  <h3 class="bs-books-item-title">${s.title.slice(0,18)}</h3>
                  <p class="bs-books-author">${s.author.slice(0,18)}</p>
                </div>
             </a>
           `).join("")}</div> </li>
      </ul>
      </div>`;d.booksSection.innerHTML="",d.booksSection.insertAdjacentHTML("beforeend",o)}const y=document.querySelector(".js-bac");y.addEventListener("click",H);async function H(){location.reload()}async function I(e){y.classList.remove("back-current");const t=localStorage.getItem("currentCategorie");document.querySelector(`.btn-list[name= "${t}"]`).classList.remove("back-current"),e.target.classList.add("back-current"),localStorage.removeItem("currentCategorie")}const p=new u,f=document.querySelector(".categories-list"),c=document.querySelector(".category"),k=document.querySelector(".shopping-list"),n=JSON.parse(localStorage.getItem("books"))||[];async function z(){try{const t=(await p.getCategories()).map(({list_name:o})=>`<a class="category-link" href=""><li>${o}</li></a>`).join("");f.insertAdjacentHTML("beforeend",t)}catch(e){console.log(e),l.error({title:"Error",message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${e.message}`,position:"topRight"})}}async function q(){try{(await p.getTopBooks()).forEach(t=>{const o=`<h2>${t.list_name}</h2>`,s=`<button class="category-btn" data-category="${t.list_name}" type="button">See more</button>`,r=t.books.map(i=>`
        <div class="book" id="${i._id}">
          <img src="${i.book_image}" alt="${i.title}">
          <h3>${i.title}</h3>
          <p>Author: ${i.author}</p>
          <p>Publisher: ${i.publisher}</p>
          <a href="${i.amazon_product_url}" target="_blank">Buy on Amazon</a>
        </div>`).join(""),a=o+s+r;c.insertAdjacentHTML("beforeend",a)})}catch(e){console.log(e),l.error({title:"Error",message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${e.message}`,position:"topRight"})}}async function $(e){try{const t=await p.getCategory(e),o=`<h2>${e}</h2>`,s=t.map(a=>`
      <div class="book" id="${a._id}">
        <img src="${a.book_image}" alt="${a.title}">
        <h3>${a.title}</h3>
        <p>Author: ${a.author}</p>
        <p>Publisher: ${a.publisher}</p>
        <a href="${a.amazon_product_url}" target="_blank">Buy on Amazon</a>
      </div>`).join(""),r=o+s;c.insertAdjacentHTML("beforeend",r)}catch(t){console.log(t),l.error({title:"Error",message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${t.message}`,position:"topRight"})}}async function x(e){try{const t=await p.getBook(e),o=`
  <li id="${t._id}">
    <img src="${t.book_image}" alt="${t.title}">
    <h3>${t.title}</h3>
    <p>Author: ${t.author}</p>
    <p>Publisher: ${t.publisher}</p>
    <a href="${t.amazon_product_url}" target="_blank">Buy on Amazon</a>
    <button type="button">Add to shopping list</button>
  </li>`;c.insertAdjacentHTML("beforeend",o)}catch(t){console.log(t),l.error({title:"Error",message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${t.message}`,position:"topRight"})}}function U(e){e.preventDefault(),c.innerHTML="";const t=e.target.textContent;$(t)}function G(e){if(!e.target.classList.contains("category-btn"))return;const t=e.target.dataset.category;c.innerHTML="",$(t)}function J(e){if(e.target.nodeName!=="IMG")return;e.preventDefault(),e.stopPropagation();const t=e.target.parentNode.id;c.innerHTML="",x(t)}function F(e){if(e.target.textContent==="Add to shopping list"){const t=e.target.parentNode.id;if(n.includes(t))return;e.target.textContent="Remove from shopping list",n.push(t),localStorage.setItem("books",JSON.stringify(n));return}if(e.target.textContent==="Remove from shopping list"){const t=e.target.parentNode.id,o=n.indexOf(t);if(o!==-1){n.splice(o,1),localStorage.setItem("books",JSON.stringify(n)),e.target.textContent="Add to shopping list";return}}}function D(){try{const e=JSON.parse(localStorage.getItem("books"));if(!e)return;e.forEach(t=>Y(t))}catch(e){console.log(e),l.error({title:"Error",message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${e.message}`,position:"topRight"})}}async function Y(e){try{const t=await p.getBook(e),o=`
  <li id="${t._id}">
    <img src="${t.book_image}" alt="${t.title}">
    <h3>${t.title}</h3>
    <p>Author: ${t.author}</p>
    <p>Publisher: ${t.publisher}</p>
    <a href="${t.amazon_product_url}" target="_blank">Buy on Amazon</a>
    <button type="button">Remove from shopping list</button>
  </li>`;k.insertAdjacentHTML("beforeend",o)}catch(t){console.log(t),l.error({title:"Error",message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${t.message}`,position:"topRight"})}}function K(e){if(e.target.nodeName!=="BUTTON")return;const t=e.target.parentNode,o=t.id,s=n.indexOf(o);n.splice(s,1),localStorage.setItem("books",JSON.stringify(n)),t.remove()}f.addEventListener("click",U);c.addEventListener("click",G);c.addEventListener("click",J);c.addEventListener("click",F);k.addEventListener("click",K);z();q();D();
//# sourceMappingURL=commonHelpers.js.map
