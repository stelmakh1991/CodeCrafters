import y from"https://cdn.skypack.dev/axios";import{a as c}from"./assets/vendor-ecab3960.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();async function f(e){const s=[];try{await Promise.all(e.map(async t=>{const o=`https://books-backend.p.goit.global/books/${t}`,r=await y.get(o);s.push(r.data)})),localStorage.setItem("booksArray",JSON.stringify(s))}catch(t){console.error("Error fetching books:",t),iziToast.error({title:"Error",message:"Oops! Something went wrong while fetching books. Please try again later or contact support if the issue persists.",position:"topRight"})}}const v=["643282b1e85766588626a0dc","643282b1e85766588626a080","643282b1e85766588626a0b2","643282b1e85766588626a086","643282b1e85766588626a085"];f(v);const S=document.querySelector(".shopping-list"),p=document.querySelector(".shop-list-placeholder"),n=JSON.parse(localStorage.getItem("booksArray"))||[];function $(){try{if(!n)return;n.forEach(e=>L(e))}catch(e){console.log(e),iziToast.error({title:"Error",message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${e.message}`,position:"topRight"})}}function L(e){const s=`<li class="shopping-list-item" data-id="${e._id}">

        <button type="button" class="delete-btn" title="Delete"> 
        <div class="delete-btn-icon"> </div> </div> </button> 

        <div class="shopping-list-div-image"> <img class="shopping-list-image" src="${e.book_image}" alt="${e.title}"> </div> 

        <div class="shopping-list-text"> <h2 class="shopping-list-item-header">${e.title}</h2>
        
        <p class="shopping-list-item-category">${e.list_name}</p> 
        <div class="description-wrapper"><p class="shopping-list-item-description">${e.description}</p></div>
        
        <div class="link-container"> 
        <p class="shopping-list-item-author">${e.author}</p>
        <div class=""link-wrapper>
            <a class="amazon-icon" href="${e.amazon_product_url}" target="_blank" rel="noopener noreferrer nofollow"> <div class="amazon-logo hover-items-amaz-books"> <img src="./png/amazon-1x.png" alt="Amazon" />
            </div> </a>
            <a class="apple-icon" href="${e.buy_links[1].url}" target="_blank" rel="noopener noreferrer nofollow"> <div class="apple-books-logo hover-items-amaz-books">
            <img src="./png/amazon-book-1x.png" alt="Apple book"/>
            </div> </a>
        </div>
        </div>
        </div>
        </li>`;S.insertAdjacentHTML("beforeend",s)}$();function g(){n.length===0?p.style.display="block":p.style.display="none"}g();const w=document.querySelectorAll(".delete-btn");w.forEach(e=>{e.addEventListener("click",E)});function E(e){const t=e.currentTarget.closest(".shopping-list-item"),o=t.dataset.id,r=n.filter(a=>a._id!==o);localStorage.setItem("booksArray",JSON.stringify(r)),t.remove();const i=n.findIndex(a=>a._id===o);n.splice(i,1),r.length===0&&localStorage.removeItem("booksArray"),g()}class b{constructor(){this.BASE_URL="https://books-backend.p.goit.global/books",this.CATEGORY_LIST="/category-list",this.TOP_BOOKS="/top-books",this.CATEGORY="/category?category="}async getCategories(){const s=this.BASE_URL+this.CATEGORY_LIST;try{return(await c.get(s)).data}catch(t){console.log(t),iziToast.error({title:"Error",message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${t.message}`,position:"topRight"})}}async getTopBooks(){const s=this.BASE_URL+this.TOP_BOOKS;try{return(await c.get(s)).data}catch(t){console.log(t),iziToast.error({title:"Error",message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${t.message}`,position:"topRight"})}}async getCategory(s){const t=this.BASE_URL+this.CATEGORY+s;try{return(await c.get(t)).data}catch(o){console.log(o),iziToast.error({title:"Error",message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${o.message}`,position:"topRight"})}}async getBook(s){const t=this.BASE_URL+"/"+s;try{return(await c.get(t)).data}catch(o){console.log(o),iziToast.error({title:"Error",message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${o.message}`,position:"topRight"})}}}const A=new b,l={list:document.querySelector(".categories-List"),categoriesBox:document.querySelector(".categories-box"),booksSection:document.querySelector(".bs-books-section"),btnList:document.querySelector(".btn-list")};async function T(){const s=(await A.getCategories()).map(t=>` <li class="categories-item" name="${t.list_name}">
         <button class="btn-list" type="button" name="${t.list_name}">${t.list_name}</button>
        </li>
        `).sort().join("");l.list.insertAdjacentHTML("beforeend",s)}T();l.list.addEventListener("click",_);async function _(e){const s=await c.get(`https://books-backend.p.goit.global/books/category?category=${e.target.name}`);O(s.data,e),C(e),localStorage.setItem("currentCategorie",e.target.name)}async function O(e,s){const t=`<h1 class="bs-books-title">
       ${s.target.name} <span class="bs-books-title-blue">Books</span>
      </h1> <div><ul class="bs-list list  ">
       <li class="bs-books-item ">
       <div class="categories-item " data-list-id="${s.target.name}">
       ${e.map(o=>`
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
      </div>`;l.booksSection.innerHTML="",l.booksSection.insertAdjacentHTML("beforeend",t)}const u=document.querySelector(".js-bac");u.addEventListener("click",B);async function B(){location.reload()}async function C(e){u.classList.remove("back-current");const s=localStorage.getItem("currentCategorie");document.querySelector(`.btn-list[name= "${s}"]`).classList.remove("back-current"),e.target.classList.add("back-current"),localStorage.removeItem("currentCategorie")}const m=new b,d={bestBooksSection:document.querySelector(".bs-books-section")};function I(e){const s=`
      <h1 class="bs-books-title">
        Best Sellers <span class="bs-books-title-blue">Books</span>
      </h1> <ul class="bs-list list"> ${e.map(t=>`
        <li class="bs-books-item"> 
        <h3 class="bs-books-category-title">${t.list_name}</h3>
          <div class="bs-books-thumb" data-list-id="${t.list_name}">
            ${t.books.map(o=>`
  
              <a href="#" class="bs-books-item-link link" rel="noopener noreferrer" data-id='${o._id}'>
        
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
                  <h3 class="bs-books-item-title dark-theme">${o.title.slice(0,18)}</h3>
                  <p class="bs-books-author">${o.author.slice(0,18)}</p>
                </div>
             </a>`).join("")}
          </div>
          <div class="bs-books-thumb-btn">
          <button class="bs-books-see-more-btn dark-theme" type="button" data-id="${t.list_name}">see more</button>
          </div>
          
        </li>
        `).join("")}</ul>`;d.bestBooksSection.insertAdjacentHTML("beforeend",s)}async function R(){const e=await m.getTopBooks();I(e)}R();d.bestBooksSection.addEventListener("click",async function(e){if(e.target.nodeName!=="BUTTON")return;const s=e.target.dataset.id;try{d.bestBooksSection.innerHTML="";const t=await m.getCategory(s);q(t)}catch(t){console.error(t.message)}});function q(e){let s=e,t=`<h1 class="bs-category-title">${e[0].list_name}</h1>`,o='<ul class="bs-category-list list">';s.forEach(({_id:r,book_image:i,title:a,author:h,list_name:k})=>{o+=`<li class="bs-category-item" id="${r}">
    <div class="bs-books-thumb" data-list-id="${k}">
    <a href="#" class="bs-books-item-link link" rel="noopener noreferrer" data-id='${r}'>
    <div class="bs-category-books-card">  
      <img src="${i}" alt="${a}" class="bs-books-card-img"/>
      <div class="bs-books-overlay">
                <p class="bs-books-overlay-title">quick view</p>
                </div>
      </div>
      <div class="bs-books-item-thumb">
      <h3 class="bs-books-item-title dark-theme">${a.slice(0,18)}</h3>
      <p class="bs-books-author">${h.slice(0,18)}</p>
      </div>
      </a>
      </li>
      </div>`}),o+="</ul>",t+=o,d.bestBooksSection.insertAdjacentHTML("beforeend",t)}
//# sourceMappingURL=commonHelpers.js.map
