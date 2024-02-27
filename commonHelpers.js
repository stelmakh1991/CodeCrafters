import k from"https://cdn.skypack.dev/axios";import{a as c}from"./assets/vendor-ecab3960.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=e(r);fetch(r.href,i)}})();async function f(t){const s=[];try{await Promise.all(t.map(async e=>{const o=`https://books-backend.p.goit.global/books/${e}`,r=await k.get(o);s.push(r.data)})),localStorage.setItem("booksArray",JSON.stringify(s))}catch(e){console.error("Error fetching books:",e),iziToast.error({title:"Error",message:"Oops! Something went wrong while fetching books. Please try again later or contact support if the issue persists.",position:"topRight"})}}const v=["643282b1e85766588626a0dc","643282b1e85766588626a080","643282b1e85766588626a0b2","643282b1e85766588626a086","643282b1e85766588626a085"];f(v);const S=document.querySelector(".shopping-list"),p=document.querySelector(".shop-list-placeholder"),n=JSON.parse(localStorage.getItem("booksArray"))||[];function $(){try{if(!n)return;n.forEach(t=>L(t))}catch(t){console.log(t),iziToast.error({title:"Error",message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${t.message}`,position:"topRight"})}}function L(t){const s=`<li class="shopping-list-item" data-id="${t._id}">

        <button type="button" class="delete-btn" title="Delete"> 
        <div class="delete-btn-icon"> </div> </div> </button> 

        <div class="shopping-list-div-image"> <img class="shopping-list-image" src="${t.book_image}" alt="${t.title}"> </div> 

        <div class="shopping-list-text"> <h2 class="shopping-list-item-header">${t.title}</h2>
        
        <p class="shopping-list-item-category">${t.list_name}</p> 
        <div class="description-wrapper"><p class="shopping-list-item-description">${t.description}</p></div>
        
        <div class="link-container"> 
        <p class="shopping-list-item-author">${t.author}</p>
        <div class=""link-wrapper>
            <a class="amazon-icon" href="${t.amazon_product_url}" target="_blank" rel="noopener noreferrer nofollow"> <div class="amazon-logo hover-items-amaz-books"> <img src="./png/amazon-1x.png" alt="Amazon" />
            </div> </a>
            <a class="apple-icon" href="${t.buy_links[1].url}" target="_blank" rel="noopener noreferrer nofollow"> <div class="apple-books-logo hover-items-amaz-books">
            <img src="./png/amazon-book-1x.png" alt="Apple book"/>
            </div> </a>
        </div>
        </div>
        </div>
        </li>`;S.insertAdjacentHTML("beforeend",s)}$();function g(){n.length===0?p.style.display="block":p.style.display="none"}g();const w=document.querySelectorAll(".delete-btn");w.forEach(t=>{t.addEventListener("click",E)});function E(t){const e=t.currentTarget.closest(".shopping-list-item"),o=e.dataset.id,r=n.filter(a=>a._id!==o);localStorage.setItem("booksArray",JSON.stringify(r)),e.remove();const i=n.findIndex(a=>a._id===o);n.splice(i,1),r.length===0&&localStorage.removeItem("booksArray"),g()}class b{constructor(){this.BASE_URL="https://books-backend.p.goit.global/books",this.CATEGORY_LIST="/category-list",this.TOP_BOOKS="/top-books",this.CATEGORY="/category?category="}async getCategories(){const s=this.BASE_URL+this.CATEGORY_LIST;try{return(await c.get(s)).data}catch(e){console.log(e),iziToast.error({title:"Error",message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${e.message}`,position:"topRight"})}}async getTopBooks(){const s=this.BASE_URL+this.TOP_BOOKS;try{return(await c.get(s)).data}catch(e){console.log(e),iziToast.error({title:"Error",message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${e.message}`,position:"topRight"})}}async getCategory(s){const e=this.BASE_URL+this.CATEGORY+s;try{return(await c.get(e)).data}catch(o){console.log(o),iziToast.error({title:"Error",message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${o.message}`,position:"topRight"})}}async getBook(s){const e=this.BASE_URL+"/"+s;try{return(await c.get(e)).data}catch(o){console.log(o),iziToast.error({title:"Error",message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${o.message}`,position:"topRight"})}}}const A=new b,l={list:document.querySelector(".categories-List"),categoriesBox:document.querySelector(".categories-box"),booksSection:document.querySelector(".bs-books-section"),btnList:document.querySelector(".btn-list")};async function T(){const s=(await A.getCategories()).map(e=>` <li class="categories-item" name="${e.list_name}">
         <button class="btn-list" type="button" name="${e.list_name}">${e.list_name}</button>
        </li>
        `).sort().join("");l.list.insertAdjacentHTML("beforeend",s)}T();l.list.addEventListener("click",_);async function _(t){const s=await c.get(`https://books-backend.p.goit.global/books/category?category=${t.target.name}`);O(s.data,t),C(t),localStorage.setItem("currentCategorie",t.target.name)}async function O(t,s){const e=`<h1 class="bs-books-title">
       ${s.target.name} <span class="bs-books-title-blue">Books</span>
      </h1> <div><ul class="bs-list list  ">
       <li class="bs-books-item ">
       <div class="categories-item " data-list-id="${s.target.name}">
       ${t.map(o=>`
             <a href="#" class=" link" rel="noopener noreferrer" data-id='${o._id}'>
        
              <div class="bs-books-card">
                <img
                  src="${o.book_image}"
                  alt="${o.title}"
                  class="bs-books-card-img"
                />
                <div class="bs-books-overlay">
                <p class="bs-books-overlay-title">quick view</p>
                </div>
               </div> 
                <div class="bs-books-item-thumb">
                  <h3 class="bs-books-item-title">${o.title.slice(0,18)}</h3>
                  <p class="bs-books-author">${o.author.slice(0,18)}</p>
                </div>
             </a>
           `).join("")}</div> </li>
      </ul>
      </div>`;l.booksSection.innerHTML="",l.booksSection.insertAdjacentHTML("beforeend",e)}const u=document.querySelector(".js-bac");u.addEventListener("click",B);async function B(){location.reload()}async function C(t){u.classList.remove("back-current");const s=localStorage.getItem("currentCategorie");document.querySelector(`.btn-list[name= "${s}"]`).classList.remove("back-current"),t.target.classList.add("back-current"),localStorage.removeItem("currentCategorie")}const m=new b,d={bestBooksSection:document.querySelector(".bs-books-section")};function I(t){const s=`
      <h1 class="bs-books-title">
        Best Sellers <span class="bs-books-title-blue">Books</span>
      </h1> <ul class="bs-list list"> ${t.map(e=>`
        <li class="bs-books-item"> 
        <h3 class="bs-books-category-title">${e.list_name}</h3>
          <div class="bs-books-thumb" data-list-id="${e.list_name}">
            ${e.books.map(o=>`
  
              <a href="#" class="bs-books-item-link link" rel="noopener noreferrer" data-id='
              '>
        
              <div class="bs-books-card" data-id=''>
                <img
                  src="${o.book_image}"
                  alt="${o.title}"
                  class="bs-books-card-img"
                  data-id='${o._id}'
                />
                <div class="bs-books-overlay">
                <p class="bs-books-overlay-title">quick view</p>
                </div>
               </div> 
                <div class="bs-books-item-thumb">
                  <h3 class="bs-books-item-title">${o.title.slice(0,18)}</h3>
                  <p class="bs-books-author">${o.author.slice(0,18)}</p>
                </div>
             </a>`).join("")}
          </div>
          <div class="bs-books-thumb-btn">
          <button class="bs-books-see-more-btn" type="button" data-id="${e.list_name}">see more</button>
          </div>
          
        </li>
        `).join("")}</ul>`;d.bestBooksSection.insertAdjacentHTML("beforeend",s)}async function R(){const t=await m.getTopBooks();I(t)}R();d.bestBooksSection.addEventListener("click",async function(t){if(t.target.nodeName!=="BUTTON")return;const s=t.target.dataset.id;try{d.bestBooksSection.innerHTML="";const e=await m.getCategory(s);q(e)}catch(e){console.error(e.message)}});function q(t){let s=t,e=`<h1 class="bs-category-title">${t[0].list_name}</h1>`,o='<ul class="bs-category-list list">';s.forEach(({_id:r,book_image:i,title:a,author:h,list_name:y})=>{o+=`<li class="bs-category-item" id="${r}">
    <div class="bs-books-thumb" data-list-id="${y}">
    <a href="#" class="bs-books-item-link link" rel="noopener noreferrer" data-id='${r}'>
    <div class="bs-category-books-card">  
      <img src="${i}" alt="${a}" class="bs-books-card-img"/>
      <div class="bs-books-overlay">
                <p class="bs-books-overlay-title">quick view</p>
                </div>
      </div>
      <div class="bs-books-item-thumb">
      <h3 class="bs-books-item-title">${a.slice(0,18)}</h3>
      <p class="bs-books-author">${h.slice(0,18)}</p>
      </div>
      </a>
      </li>
      </div>`}),o+="</ul>",e+=o,d.bestBooksSection.insertAdjacentHTML("beforeend",e)}
//# sourceMappingURL=commonHelpers.js.map
