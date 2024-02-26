import h from"https://cdn.skypack.dev/axios";import{a as n}from"./assets/vendor-ecab3960.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))e(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&e(i)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function e(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();async function y(s){const o=[];try{await Promise.all(s.map(async t=>{const e=`https://books-backend.p.goit.global/books/${t}`,r=await h.get(e);o.push(r.data)})),localStorage.setItem("booksArray",JSON.stringify(o))}catch(t){console.error("Error fetching books:",t)}}const k=["643282b1e85766588626a0dc","643282b1e85766588626a080","643282b1e85766588626a0b2","643282b1e85766588626a086","643282b1e85766588626a085"];y(k);const f=document.querySelector(".shopping-list");function v(s){const o=localStorage.getItem(s);try{const t=JSON.parse(o);console.log(t),t.forEach(e=>{const r=`<li class="shopping-list-item" data-id="${e._id}">

        <button type="button" class="delete-btn" title="Delete"> 
        <svg class="delete-btn-icon" width="16" height="16"> <use href="/svg-sprite.svg#icon-trash"></use> </svg> </button> 

        <div class="shopping-list-div-image"> <img class="shopping-list-image" src="${e.book_image}" alt="${e.title}"> </div> 

        <div class="shopping-list-text"> <h2 class="shopping-list-item-header">${e.title}</h2>
        
        <p class="shopping-list-item-category">${e.list_name}</p> 
        <p class="shopping-list-item-description">${e.description}</p>
        <p class="shopping-list-item-author">${e.author}</p>

        <div class="link-container"> 
        <a class="amazon-icon" href="${e.amazon_product_url}" target="_blank" rel="noopener noreferrer nofollow"> <div class="amazon-logo hover-items-amaz-books"></div> </a>
        <a class="apple-icon" href="${e.buy_links[1].url}" target="_blank" rel="noopener noreferrer nofollow"><div class="apple-books-logo hover-items-amaz-books"></div></a>
        </div>
        </div>
        </li>`;f.insertAdjacentHTML("beforeend",r)})}catch{return o}}v("booksArray");class b{constructor(){this.BASE_URL="https://books-backend.p.goit.global/books",this.CATEGORY_LIST="/category-list",this.TOP_BOOKS="/top-books",this.CATEGORY="/category?category="}async getCategories(){const o=this.BASE_URL+this.CATEGORY_LIST;try{return(await n.get(o)).data}catch(t){console.log(t),iziToast.error({title:"Error",message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${t.message}`,position:"topRight"})}}async getTopBooks(){const o=this.BASE_URL+this.TOP_BOOKS;try{return(await n.get(o)).data}catch(t){console.log(t),iziToast.error({title:"Error",message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${t.message}`,position:"topRight"})}}async getCategory(o){const t=this.BASE_URL+this.CATEGORY+o;try{return(await n.get(t)).data}catch(e){console.log(e),iziToast.error({title:"Error",message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${e.message}`,position:"topRight"})}}async getBook(o){const t=this.BASE_URL+"/"+o;try{return(await n.get(t)).data}catch(e){console.log(e),iziToast.error({title:"Error",message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${e.message}`,position:"topRight"})}}}const g=new b,l={bestBooksSection:document.querySelector(".bs-books-section")};async function $(s){const o=`
      <h1 class="bs-books-title">
        Best Sellers <span class="bs-books-title-blue">Books</span>
      </h1> <ul class="bs-list list"> ${s.map(t=>`
        <li class="bs-books-item"> 
        <h3 class="bs-books-category-title">${t.list_name}</h3>
          <div class="bs-books-thumb" data-list-id="${t.list_name}">
            ${t.books.map(e=>`
  
              <a href="#" class="bs-books-item-link link" rel="noopener noreferrer" data-id='${e._id}'>
        
              <div class="bs-books-card">
                <img
                  src="${e.book_image}"
                  alt="${e.title}"
                  class="bs-books-card-img"
                />
                <div class="bs-books-overlay">
                <p class="bs-books-overlay-title">quick view</p>
                </div>
               </div> 
                <div class="bs-books-item-thumb">
                  <h3 class="bs-books-item-title">${e.title.slice(0,18)}</h3>
                  <p class="bs-books-author">${e.author.slice(0,18)}</p>
                </div>
             </a>`).join("")}
          </div>
          <div class="bs-books-thumb-btn">
          <button class="bs-books-see-more-btn" type="button" data-id="${t.list_name}">see more</button>
          </div>
          
        </li>
        `).join("")}</ul>`;l.bestBooksSection.insertAdjacentHTML("beforeend",o)}async function S(){const s=await g.getTopBooks();$(s)}S();const d=document.querySelector(".bs-list");d.addEventListener("click",async function(s){if(s.target.nodeName!=="BUTTON")return;const o=s.target.dataset.id;try{l.bestBooksSection.innerHTML="";const t=await g.getCategory(o);L(t)}catch(t){console.error(t.message)}});function L(s){let o=s,t=`<h1 class="bs-category-title">${s[0].list_name}</h1>`,e='<ul class="bs-category-list list">';o.forEach(({_id:r,book_image:a,title:i,author:p,list_name:m})=>{e+=`<li class="bs-category-item" id="${r}">
    <div class="bs-books-thumb" data-list-id="${m}">
    <a href="#" class="bs-books-item-link link" rel="noopener noreferrer" data-id='${r}'>
    <div class="bs-category-books-card">  
      <img src="${a}" alt="${i}" class="bs-books-card-img"/>
      <div class="bs-books-overlay">
                <p class="bs-books-overlay-title">quick view</p>
                </div>
      </div>
      <div class="bs-books-item-thumb">
      <h3 class="bs-books-item-title">${i.slice(0,18)}</h3>
      <p class="bs-books-author">${p.slice(0,18)}</p>
      </div>
      </a>
      </li>
      </div>`}),e+="</ul>",t+=e,l.bestBooksSection.insertAdjacentHTML("beforeend",t)}d.addEventListener("mouseover",T);d.addEventListener("mouseout",w);function T(s){s.target.nodeName==="BUTTON"&&(s.target.style.color="white",s.target.style.backgroundColor="rgb(79, 46, 232)")}function w(s){s.target.nodeName==="BUTTON"&&(s.target.style.color="black",s.target.style.backgroundColor="white")}const B=new b,c={list:document.querySelector(".categories-List"),categoriesBox:document.querySelector(".categories-box"),booksSection:document.querySelector(".bs-books-section"),btnList:document.querySelector(".btn-list")};async function E(){const o=(await B.getCategories()).map(t=>` <li class="categories-item" name="${t.list_name}">
         <button class="btn-list" type="button" name="${t.list_name}">${t.list_name}</button>
        </li>
        `).sort().join("");c.list.insertAdjacentHTML("beforeend",o)}E();c.list.addEventListener("click",O);async function O(s){const o=await n.get(`https://books-backend.p.goit.global/books/category?category=${s.target.name}`);_(o.data,s),C(s),localStorage.setItem("currentCategorie",s.target.name)}async function _(s,o){const t=`<h1 class="bs-books-title">
       ${o.target.name} <span class="bs-books-title-blue">Books</span>
      </h1> <div><ul class="bs-list list  ">
       <li class="bs-books-item ">
       <div class="categories-item " data-list-id="${o.target.name}">
       ${s.map(e=>`
             <a href="#" class=" link" rel="noopener noreferrer" data-id='${e._id}'>
        
              <div class="bs-books-card">
                <img
                  src="${e.book_image}"
                  alt="${e.title}"
                  class="bs-books-card-img"
                />
                <div class="bs-books-overlay">
                <p class="bs-books-overlay-title">quick view</p>
                </div>
               </div> 
                <div class="bs-books-item-thumb">
                  <h3 class="bs-books-item-title">${e.title.slice(0,18)}</h3>
                  <p class="bs-books-author">${e.author.slice(0,18)}</p>
                </div>
             </a>
           `).join("")}</div> </li>
      </ul>
      </div>`;c.booksSection.innerHTML="",c.booksSection.insertAdjacentHTML("beforeend",t)}const u=document.querySelector(".js-bac");u.addEventListener("click",A);async function A(){location.reload()}async function C(s){u.classList.remove("back-current");const o=localStorage.getItem("currentCategorie");document.querySelector(`.btn-list[name= "${o}"]`).classList.remove("back-current"),s.target.classList.add("back-current"),localStorage.removeItem("currentCategorie")}
//# sourceMappingURL=commonHelpers.js.map
