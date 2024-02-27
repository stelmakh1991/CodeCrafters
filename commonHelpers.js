import m from"https://cdn.skypack.dev/axios";import{a as n}from"./assets/vendor-ecab3960.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function e(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(r){if(r.ep)return;r.ep=!0;const a=e(r);fetch(r.href,a)}})();async function h(t){const s=[];try{await Promise.all(t.map(async e=>{const o=`https://books-backend.p.goit.global/books/${e}`,r=await m.get(o);s.push(r.data)})),localStorage.setItem("booksArray",JSON.stringify(s))}catch(e){console.error("Error fetching books:",e)}}const k=["643282b1e85766588626a0dc","643282b1e85766588626a080","643282b1e85766588626a0b2","643282b1e85766588626a086","643282b1e85766588626a085"];h(k);const y=document.querySelector(".shopping-list");function f(){try{const t=JSON.parse(localStorage.getItem("booksArray"))||[];if(!t)return;t.forEach(s=>v(s))}catch(t){console.log(t),iziToast.error({title:"Error",message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${t.message}`,position:"topRight"})}}function v(t){const s=`<li class="shopping-list-item" data-id="${t._id}">

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
        </li>`;y.insertAdjacentHTML("beforeend",s)}f();class d{constructor(){this.BASE_URL="https://books-backend.p.goit.global/books",this.CATEGORY_LIST="/category-list",this.TOP_BOOKS="/top-books",this.CATEGORY="/category?category="}async getCategories(){const s=this.BASE_URL+this.CATEGORY_LIST;try{return(await n.get(s)).data}catch(e){console.log(e),iziToast.error({title:"Error",message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${e.message}`,position:"topRight"})}}async getTopBooks(){const s=this.BASE_URL+this.TOP_BOOKS;try{return(await n.get(s)).data}catch(e){console.log(e),iziToast.error({title:"Error",message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${e.message}`,position:"topRight"})}}async getCategory(s){const e=this.BASE_URL+this.CATEGORY+s;try{return(await n.get(e)).data}catch(o){console.log(o),iziToast.error({title:"Error",message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${o.message}`,position:"topRight"})}}async getBook(s){const e=this.BASE_URL+"/"+s;try{return(await n.get(e)).data}catch(o){console.log(o),iziToast.error({title:"Error",message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${o.message}`,position:"topRight"})}}}const p=new d,c={bestBooksSection:document.querySelector(".bs-books-section")};function $(t){const s=`
      <h1 class="bs-books-title">
        Best Sellers <span class="bs-books-title-blue">Books</span>
      </h1> <ul class="bs-list list"> ${t.map(e=>`
        <li class="bs-books-item"> 
        <h3 class="bs-books-category-title">${e.list_name}</h3>
          <div class="bs-books-thumb" data-list-id="${e.list_name}">
            ${e.books.map(o=>`
  
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
          <button class="bs-books-see-more-btn dark-theme" type="button" data-id="${e.list_name}">see more</button>
          </div>
          
        </li>
        `).join("")}</ul>`;c.bestBooksSection.insertAdjacentHTML("beforeend",s)}async function S(){const t=await p.getTopBooks();$(t)}S();c.bestBooksSection.addEventListener("click",async function(t){if(t.target.nodeName!=="BUTTON")return;const s=t.target.dataset.id;try{c.bestBooksSection.innerHTML="";const e=await p.getCategory(s);L(e)}catch(e){console.error(e.message)}});function L(t){let s=t,e=`<h1 class="bs-category-title">${t[0].list_name}</h1>`,o='<ul class="bs-category-list list">';s.forEach(({_id:r,book_image:a,title:i,author:g,list_name:u})=>{o+=`<li class="bs-category-item" id="${r}">
    <div class="bs-books-thumb" data-list-id="${u}">
    <a href="#" class="bs-books-item-link link" rel="noopener noreferrer" data-id='${r}'>
    <div class="bs-category-books-card">  
      <img src="${a}" alt="${i}" class="bs-books-card-img"/>
      <div class="bs-books-overlay">
                <p class="bs-books-overlay-title">quick view</p>
                </div>
      </div>
      <div class="bs-books-item-thumb">
      <h3 class="bs-books-item-title dark-theme">${i.slice(0,18)}</h3>
      <p class="bs-books-author">${g.slice(0,18)}</p>
      </div>
      </a>
      </li>
      </div>`}),o+="</ul>",e+=o,c.bestBooksSection.insertAdjacentHTML("beforeend",e)}const w=new d,l={list:document.querySelector(".categories-List"),categoriesBox:document.querySelector(".categories-box"),booksSection:document.querySelector(".bs-books-section"),btnList:document.querySelector(".btn-list")};async function E(){const s=(await w.getCategories()).map(e=>` <li class="categories-item" name="${e.list_name}">
         <button class="btn-list" type="button" name="${e.list_name}">${e.list_name}</button>
        </li>
        `).sort().join("");l.list.insertAdjacentHTML("beforeend",s)}E();l.list.addEventListener("click",A);async function A(t){const s=await n.get(`https://books-backend.p.goit.global/books/category?category=${t.target.name}`);T(s.data,t),B(t),localStorage.setItem("currentCategorie",t.target.name)}async function T(t,s){const e=`<h1 class="bs-books-title">
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
      </div>`;l.booksSection.innerHTML="",l.booksSection.insertAdjacentHTML("beforeend",e)}const b=document.querySelector(".js-bac");b.addEventListener("click",_);async function _(){location.reload()}async function B(t){b.classList.remove("back-current");const s=localStorage.getItem("currentCategorie");document.querySelector(`.btn-list[name= "${s}"]`).classList.remove("back-current"),t.target.classList.add("back-current"),localStorage.removeItem("currentCategorie")}
//# sourceMappingURL=commonHelpers.js.map
