import{a as d,b as L,i as _}from"./assets/vendor-b619ac7a.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(a){if(a.ep)return;a.ep=!0;const i=t(a);fetch(a.href,i)}})();class k{constructor(){this.BASE_URL="https://books-backend.p.goit.global/books",this.CATEGORY_LIST="/category-list",this.TOP_BOOKS="/top-books",this.CATEGORY="/category?category="}async getCategories(){const e=this.BASE_URL+this.CATEGORY_LIST;try{return(await d.get(e)).data}catch(t){console.log(t),iziToast.error({title:"Error",message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${t.message}`,position:"topRight"})}}async getTopBooks(){const e=this.BASE_URL+this.TOP_BOOKS;try{return(await d.get(e)).data}catch(t){console.log(t),iziToast.error({title:"Error",message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${t.message}`,position:"topRight"})}}async getCategory(e){const t=this.BASE_URL+this.CATEGORY+e;try{return(await d.get(t)).data}catch(s){console.log(s),iziToast.error({title:"Error",message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${s.message}`,position:"topRight"})}}async getBook(e){const t=this.BASE_URL+"/"+e;try{return(await d.get(t)).data}catch(s){console.log(s),iziToast.error({title:"Error",message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${s.message}`,position:"topRight"})}}}const E=new k,u={list:document.querySelector(".categories-List"),categoriesBox:document.querySelector(".categories-box"),booksSection:document.querySelector(".bs-books-section"),btnList:document.querySelector(".btn-list")};async function w(){const e=(await E.getCategories()).map(t=>` <li class="categories-item" name="${t.list_name}">
         <button class="btn-list" type="button" name="${t.list_name}">${t.list_name}</button>
        </li>
        `).sort().join("");u.list.insertAdjacentHTML("beforeend",e)}w();u.list.addEventListener("click",B);async function B(o){const e=await d.get(`https://books-backend.p.goit.global/books/category?category=${o.target.name}`);T(e.data,o),O(o),localStorage.setItem("currentCategorie",o.target.name)}async function T(o,e){const t=`<h1 class="bs-books-title">
       ${e.target.name} <span class="bs-books-title-blue">Books</span>
      </h1> <div><ul class="bs-list list  ">
       <li class="bs-books-item ">
       <div class="categories-item " data-list-id="${e.target.name}">
       ${o.map(s=>`
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
      </div>`;u.booksSection.innerHTML="",u.booksSection.insertAdjacentHTML("beforeend",t)}const y=document.querySelector(".js-bac");y.addEventListener("click",C);async function C(){location.reload()}async function O(o){y.classList.remove("back-current");const e=localStorage.getItem("currentCategorie");document.querySelector(`.btn-list[name= "${e}"]`).classList.remove("back-current"),o.target.classList.add("back-current"),localStorage.removeItem("currentCategorie")}const f=new k,c={bestBooksSection:document.querySelector(".bs-books-section")};function A(o){const e=`
      <h1 class="bs-books-title">
        Best Sellers <span class="bs-books-title-blue">Books</span>
      </h1> <ul class="bs-list list"> ${o.map(t=>`
        <li class="bs-books-item"> 
        <h3 class="bs-books-category-title">${t.list_name}</h3>
          <div class="bs-books-thumb" data-list-id="${t.list_name}">
            ${t.books.map(s=>`
              <a href="#" class="bs-books-item-link link" rel="noopener noreferrer">
              <div class="bs-books-card" data-id=''>
                <img
                  src="${s.book_image}"
                  alt="${s.title}"
                  class="bs-books-card-img"
                  data-id='${s._id}'
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
          <button class="bs-books-see-more-btn" type="button" data-id="${t.list_name}">see more</button>
          </div>
          
        </li>
        `).join("")}</ul>`;c.bestBooksSection.insertAdjacentHTML("beforeend",e)}async function x(){const o=await f.getTopBooks();A(o)}x();c.bestBooksSection.addEventListener("click",async function(o){if(o.target.nodeName!=="BUTTON")return;const e=o.target.dataset.id;try{c.bestBooksSection.innerHTML="";const t=await f.getCategory(e);q(t)}catch(t){console.error(t.message)}});function q(o){let e=o,t=`<h1 class="bs-category-title">${o[0].list_name}</h1>`,s='<ul class="bs-category-list list">';e.forEach(({_id:a,book_image:i,title:r,author:l,list_name:m})=>{s+=`<li class="bs-category-item" id="${a}">
    <div class="bs-books-thumb" data-list-id="${m}">
    <a href="#" class="bs-books-item-link link" rel="noopener noreferrer">
    <div class="bs-category-books-card">  
      <img src="${i}" alt="${r}" class="bs-books-card-img" data-id='${a}'/>
        <div class="bs-books-overlay">
          <p class="bs-books-overlay-title">quick view</p>
        </div>          
      </div>
      <div class="bs-books-item-thumb">
      <h3 class="bs-books-item-title">${r.slice(0,18)}</h3>
      <p class="bs-books-author">${l.slice(0,18)}</p>
      </div>
      </a>
      </li>
      </div>`}),s+="</ul>",t+=s,c.bestBooksSection.insertAdjacentHTML("beforeend",t)}const n=JSON.parse(localStorage.getItem("books"))||[];async function P(o){const e=o.target.closest(".book-modal-item");if(!e)return;const t=e.id,s=e.querySelector("h3").textContent,a=e.querySelector(".book-modal-descr").textContent,i=e.querySelector(".book-modal-author").textContent,r=e.querySelector("img").src,l=e.querySelector(".book-modal-link-amazon").href,m=e.querySelector(".book-modal-link-apple").href,v=e.querySelector(".book-modal-thumb").dataset.id,h=e.querySelector(".modal-text");h.style.display="none";const S={_id:t,title:s,description:a,author:i,book_image:r,category:v,amazon_product_url:l,apple_product_url:m};if(o.target.textContent==="Add to shopping list"){if(n.find(b=>b._id===t))return;o.target.textContent="Remove from shopping list",h.style.display="block",n.push(S),localStorage.setItem("books",JSON.stringify(n))}else if(o.target.textContent==="Remove from shopping list"){const b=n.findIndex($=>$._id===t);b!==-1&&(n.splice(b,1),localStorage.setItem("books",JSON.stringify(n)),o.target.textContent="Add to shopping list")}}const R=new k;c.bestBooksSection.addEventListener("click",g);let p=!1;async function g(o){if(o.preventDefault(),o.target.nodeName!=="IMG")return;o.stopPropagation(),c.bestBooksSection.removeEventListener("click",g);const e=o.target.dataset.id;try{const t=await R.getBook(e);let s="Add to shopping list";n.findIndex(r=>r._id===t._id)>-1&&(s="Remove from shopping list");const a=`
    <div class="book-modal-item" id="${t._id}">
    
    <button class="book-modal-close-btn" type="button">
        <img class="book-modal-close-btn-img"   src="../images/x-close.png" width="24" height="24"/>
    </button>
    
      <div class="book-modal-thumb" data-id="${t.list_name}">
       <div class="book-modal-thumb768">
        <div class="book-modal-card">  
          <img src="${t.book_image}" alt="${t.title}" class="book-modal-card-img" data-id='${t._id}'/>
        </div>
        
        <div class="book-modal-item-thumb">
          <h3 class="book-modal-item-title">${t.title.slice(0,25)}</h3>
          <p class="book-modal-author">${t.author.slice(0,25)}</p>
          <p class="book-modal-descr">${t.description}</p>
        
        <div class="book-modal-icon">
          <a href="${t.amazon_product_url}" target="_blank" class="book-modal-link-amazon"><img class="book-modal-icon-amazon" src="../images/amazon1.png"/></a>
          <a href="${t.buy_links[1].url}" target="_blank" class="book-modal-link-apple"><img class="book-modal-icon-apple" src="../images/book1.png"/></a>  
        </div>
        </div>
       </div>
        <button class="book-modal-add-btn" type="button">${s}</button>
      </div>
      <p class="modal-text">Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.</p>
    </div>`,i=r=>{r.code==="Escape"&&instance.close()};if(!p){const r=L.create(a,{className:"modal",onShow:()=>{document.addEventListener("keydown",i),document.addEventListener("click",P),document.body.style.overflow="hidden",document.addEventListener("click",l=>{l.target.classList.contains("book-modal-close-btn-img")&&r.close()})},onClose:()=>{document.removeEventListener("keydown",i),document.body.style.overflow="auto",c.bestBooksSection.addEventListener("click",g),p=!1}});r.show(),p=!0}}catch(t){console.log(t),_.error({title:"Error",message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${t.message}`,position:"topRight"})}}new Pagination(paginationContainer,{totalItems:localStorageItems.length,itemsPerPage:getWindowWidth()<=767?4:3,visiblePages:3,page:1,template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}});
//# sourceMappingURL=commonHelpers.js.map
