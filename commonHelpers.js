import L from"https://cdn.skypack.dev/axios";import{P as w,a as c}from"./assets/vendor-66c610f0.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function e(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(a){if(a.ep)return;a.ep=!0;const i=e(a);fetch(a.href,i)}})();async function E(t){const s=[];try{await Promise.all(t.map(async e=>{const o=`https://books-backend.p.goit.global/books/${e}`,a=await L.get(o);s.push(a.data)})),localStorage.setItem("booksArray",JSON.stringify(s))}catch(e){console.error("Error fetching books:",e),iziToast.error({title:"Error",message:"Oops! Something went wrong while fetching books. Please try again later or contact support if the issue persists.",position:"topRight"})}}const B=["643282b1e85766588626a0dc","643282b1e85766588626a080","643282b1e85766588626a0b2","643282b1e85766588626a086","643282b1e85766588626a085","643282b1e85766588626a085","643282b1e85766588626a0dc","643282b1e85766588626a086"];E(B);const d=document.querySelector(".shopping-list"),b=document.querySelector(".shop-list-placeholder"),r=JSON.parse(localStorage.getItem("booksArray"))||[],m=document.querySelector(".tui-pagination");function T(){try{if(!r)return;r.forEach(t=>h(t))}catch(t){console.log(t),iziToast.error({title:"Error",message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${t.message}`,position:"topRight"})}}function h(t){const s=`<li class="shopping-list-item" data-id="${t._id}">

        <button type="button" class="delete-btn" title="Delete"> 
        <div class="delete-btn-icon"> </div> </button> 

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
        </li>`;d.insertAdjacentHTML("beforeend",s)}T();function y(){r.length===0?b.style.display="block":b.style.display="none"}y();const l=new w(m,{totalItems:r.length,itemsPerPage:A()<=767?4:3,visiblePages:3,page:1,template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}});function A(){return window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth}l.on("afterMove",function(t){u(t.page)});function u(t){d.innerHTML="";const s=(t-1)*l._options.itemsPerPage,e=s+l._options.itemsPerPage;r.slice(s,e).forEach(a=>{h(a)})}function _(t){const s=t.target;if(s.classList.contains("delete-btn-icon")||s.classList.contains("delete-btn")){const e=s.closest(".delete-btn"),o=e.parentNode.dataset.id,a=r.findIndex(i=>i._id===o);a!==-1&&(r.splice(a,1),localStorage.setItem("booksArray",JSON.stringify(r)),u(l.getCurrentPage()),l.reset(r.length)),e.parentNode.remove(),y(),r.length===0&&(localStorage.removeItem("booksArray"),m.style.display="none")}}d.addEventListener("click",_);u(1);class f{constructor(){this.BASE_URL="https://books-backend.p.goit.global/books",this.CATEGORY_LIST="/category-list",this.TOP_BOOKS="/top-books",this.CATEGORY="/category?category="}async getCategories(){const s=this.BASE_URL+this.CATEGORY_LIST;try{return(await c.get(s)).data}catch(e){console.log(e),iziToast.error({title:"Error",message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${e.message}`,position:"topRight"})}}async getTopBooks(){const s=this.BASE_URL+this.TOP_BOOKS;try{return(await c.get(s)).data}catch(e){console.log(e),iziToast.error({title:"Error",message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${e.message}`,position:"topRight"})}}async getCategory(s){const e=this.BASE_URL+this.CATEGORY+s;try{return(await c.get(e)).data}catch(o){console.log(o),iziToast.error({title:"Error",message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${o.message}`,position:"topRight"})}}async getBook(s){const e=this.BASE_URL+"/"+s;try{return(await c.get(e)).data}catch(o){console.log(o),iziToast.error({title:"Error",message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${o.message}`,position:"topRight"})}}}const P=new f,p={list:document.querySelector(".categories-List"),categoriesBox:document.querySelector(".categories-box"),booksSection:document.querySelector(".bs-books-section"),btnList:document.querySelector(".btn-list")};async function O(){const s=(await P.getCategories()).map(e=>` <li class="categories-item" name="${e.list_name}">
         <button class="btn-list" type="button" name="${e.list_name}">${e.list_name}</button>
        </li>
        `).sort().join("");p.list.insertAdjacentHTML("beforeend",s)}O();p.list.addEventListener("click",C);async function C(t){const s=await c.get(`https://books-backend.p.goit.global/books/category?category=${t.target.name}`);I(s.data,t),q(t),localStorage.setItem("currentCategorie",t.target.name)}async function I(t,s){const e=`<h1 class="bs-books-title">
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
      </div>`;p.booksSection.innerHTML="",p.booksSection.insertAdjacentHTML("beforeend",e)}const k=document.querySelector(".js-bac");k.addEventListener("click",R);async function R(){location.reload()}async function q(t){k.classList.remove("back-current");const s=localStorage.getItem("currentCategorie");document.querySelector(`.btn-list[name= "${s}"]`).classList.remove("back-current"),t.target.classList.add("back-current"),localStorage.removeItem("currentCategorie")}const v=new f,g={bestBooksSection:document.querySelector(".bs-books-section")};function z(t){const s=`
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
        `).join("")}</ul>`;g.bestBooksSection.insertAdjacentHTML("beforeend",s)}async function M(){const t=await v.getTopBooks();z(t)}M();g.bestBooksSection.addEventListener("click",async function(t){if(t.target.nodeName!=="BUTTON")return;const s=t.target.dataset.id;try{g.bestBooksSection.innerHTML="";const e=await v.getCategory(s);j(e)}catch(e){console.error(e.message)}});function j(t){let s=t,e=`<h1 class="bs-category-title">${t[0].list_name}</h1>`,o='<ul class="bs-category-list list">';s.forEach(({_id:a,book_image:i,title:n,author:S,list_name:$})=>{o+=`<li class="bs-category-item" id="${a}">
    <div class="bs-books-thumb" data-list-id="${$}">
    <a href="#" class="bs-books-item-link link" rel="noopener noreferrer" data-id='${a}'>
    <div class="bs-category-books-card">  
      <img src="${i}" alt="${n}" class="bs-books-card-img"/>
      <div class="bs-books-overlay">
                <p class="bs-books-overlay-title">quick view</p>
                </div>
      </div>
      <div class="bs-books-item-thumb">
      <h3 class="bs-books-item-title">${n.slice(0,18)}</h3>
      <p class="bs-books-author">${S.slice(0,18)}</p>
      </div>
      </a>
      </li>
      </div>`}),o+="</ul>",e+=o,g.bestBooksSection.insertAdjacentHTML("beforeend",e)}new Pagination(paginationContainer,{totalItems:localStorageItems.length,itemsPerPage:getWindowWidth()<=767?4:3,visiblePages:3,page:1,template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}});
//# sourceMappingURL=commonHelpers.js.map
