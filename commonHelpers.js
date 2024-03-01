import{l as h,a as f,b as $,o as w}from"./assets/local-storage-6237a705.js";import{a as c,b as E,i as L}from"./assets/vendor-c29d349d.js";class p{constructor(){this.BASE_URL="https://books-backend.p.goit.global/books",this.CATEGORY_LIST="/category-list",this.TOP_BOOKS="/top-books",this.CATEGORY="/category?category="}async getCategories(){const t=this.BASE_URL+this.CATEGORY_LIST;try{return(await c.get(t)).data}catch(s){console.log(s),iziToast.error({title:"Error",message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${s.message}`,position:"topRight"})}}async getTopBooks(){const t=this.BASE_URL+this.TOP_BOOKS;try{return(await c.get(t)).data}catch(s){console.log(s),iziToast.error({title:"Error",message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${s.message}`,position:"topRight"})}}async getCategory(t){const s=this.BASE_URL+this.CATEGORY+t;try{return(await c.get(s)).data}catch(e){console.log(e),iziToast.error({title:"Error",message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${e.message}`,position:"topRight"})}}async getBook(t){const s=this.BASE_URL+"/"+t;try{return(await c.get(s)).data}catch(e){console.log(e),iziToast.error({title:"Error",message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${e.message}`,position:"topRight"})}}}const B=new p,b={list:document.querySelector(".categories-List"),categoriesBox:document.querySelector(".categories-box"),booksSection:document.querySelector(".bs-books-section"),btnList:document.querySelector(".btn-list")},k=document.querySelector(".js-bac");async function S(){const t=(await B.getCategories()).map(s=>` <li class="categories-item" name="${s.list_name}">
         <button class="btn-list" type="button" name="${s.list_name}">${s.list_name}</button>
        </li>
        `).sort().join("");b.list.insertAdjacentHTML("beforeend",t)}S();b.list.addEventListener("click",_);async function _(o){const t=await c.get(`https://books-backend.p.goit.global/books/category?category=${o.target.name}`);T(t.data,o)}async function T(o,t){if(k.classList.remove("back-current"),t.target.nodeName!=="BUTTON")return;const s=t.target.name.split(" "),e=s[s.length-1],a=`<h1 class="bs-books-title bs-book-title-mg">
  ${s.slice(0,s.length-1).join(" ")} <span class="last-word-color">${e}</span>
      </h1> <div><ul class="bs-list list">
       <li class="bs-books-item">
       <div class="categories-item" data-list-id="${t.target.name}">
       ${o.map(i=>`
             <a href="#" class="link" rel="noopener noreferrer" data-id='${i._id}'>
        
              <div class="bs-books-card">
                <img
                  src="${i.book_image}"
                  alt="${i.title}"
                  class="bs-books-card-img"
                  data-id='${i._id}'
                />
                <div class="bs-books-overlay" data-id='${i._id}'>
                <p class="bs-books-overlay-title" data-id='${i._id}'>quick view</p>
                </div>
               </div> 
                <div class="bs-books-item-thumb">
                  <h3 class="bs-books-item-title">${i.title.slice(0,18)}</h3>
                  <p class="bs-books-author">${i.author.slice(0,18)}</p>
                </div>
             </a>
           `).join("")}</div> </li>
      </ul>
      </div>`;b.booksSection.innerHTML="",b.booksSection.insertAdjacentHTML("beforeend",a)}k.addEventListener("click",O);async function O(){location.reload()}const v=new p,r={bestBooksSection:document.querySelector(".bs-books-section")};function C(o){const t=`
      <h1 class="bs-books-title">
        Best Sellers <span class="bs-books-title-blue">Books</span>
      </h1> <ul class="bs-list list"> ${o.map(s=>`
        <li class="bs-books-item"> 
        <h3 class="bs-books-category-title">${s.list_name}</h3>
          <div class="bs-books-thumb" data-list-id="${s.list_name}">
            ${s.books.map(e=>`
              <a href="#" class="bs-books-item-link link" rel="noopener noreferrer">
              <div class="bs-books-card">
                <img
                  src="${e.book_image}"
                  alt="${e.title}"
                  class="bs-books-card-img"
                  data-id='${e._id}'
                />
                <div class="bs-books-overlay" data-id='${e._id}'>
                <p class="bs-books-overlay-title" data-id='${e._id}'>quick view</p>
                </div>
               </div> 
                <div class="bs-books-item-thumb">
                  <h3 class="bs-books-item-title">${e.title.slice(0,18)}</h3>
                  <p class="bs-books-author">${e.author.slice(0,18)}</p>
                </div>
             </a>`).join("")}
          </div>
          <div class="bs-books-thumb-btn">
          <button class="bs-books-see-more-btn" type="button" data-id="${s.list_name}">see more</button>
          </div>
          
        </li>
        `).join("")}</ul>`;r.bestBooksSection.insertAdjacentHTML("beforeend",t)}async function j(){const o=await v.getTopBooks();C(o)}j();r.bestBooksSection.addEventListener("click",async function(o){if(o.target.nodeName!=="BUTTON")return;const t=o.target.dataset.id;try{r.bestBooksSection.innerHTML="";const s=await v.getCategory(t);R(s)}catch(s){console.error(s.message)}});function R(o){const t=o[0].list_name.split(" "),s=t[t.length-1],e=t.slice(0,t.length-1).join(" ");let d=o,a=`<h1 class="bs-category-title">${e} <span class="last-word-color">${s}</span></h1>`,i='<ul class="bs-category-list list">';d.forEach(({_id:n,book_image:l,title:u,author:y,list_name:A})=>{i+=`<li class="bs-category-item" id="${n}">
    <div class="bs-books-thumb" data-list-id="${A}">
    <a href="#" class="bs-books-item-link link" rel="noopener noreferrer">
    <div class="bs-category-books-card">  
      <img src="${l}" alt="${u}" class="bs-books-card-img" data-id='${n}'/>
        <div class="bs-books-overlay" data-id='${n}'>
          <p class="bs-books-overlay-title" data-id='${n}'>quick view</p>
        </div>          
      </div>
      <div class="bs-books-item-thumb">
      <h3 class="bs-books-item-title">${u.slice(0,18)}</h3>
      <p class="bs-books-author">${y.slice(0,18)}</p>
      </div>
      </a>
      </li>
      </div>`}),i+="</ul>",a+=i,r.bestBooksSection.insertAdjacentHTML("beforeend",a)}const M="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAWFJREFUWEe1l9sNwjAMRd1NYBPYBDZhE8QksAlsAlxUozTEz5r+IErwOXFcp5loeW2I6NHd++vXaY4O8JWIWODyvn8qJu9mBsJiknt8sgDgGMAXBlRKtPCWsWWB52C2VRIjOOO+An0GqjKhwTHBr4A1MLMcWkxMEDVw4yXAjQMRnYXCiy6HCw5WK1Al4YaPBNZKhOCSQFYiDNcEohIpuCXglbg1HW5Uw59ql7pqX4SjcdbTgfYtXSrckwEOrEmk4REBazl6CXPm/AfPErTBPZlww6MZwHir2qMd86cTKvVkwlMbmHcJrJn34u5MeASi8FAmLAELjoJDH0jvopqAB84dzmpW4vuEJBCBe5qVWBMjgQw8LdELrIGnJFqBCnhYggUq4V6JY/tSep8fp/B+rrVOx4uuejBB7NDGIshoj6h6MKmAa8uxOJhwN0Mt4IfP+hjpjf6M2OiYfABe1EA0WNn4F0EsgGGeftv2AAAAAElFTkSuQmCC",q=new p;r.bestBooksSection.addEventListener("click",g);let m=!1;async function g(o){if(o.preventDefault(),o.target.nodeName!=="DIV"&&o.target.nodeName!=="P")return;o.stopPropagation(),r.bestBooksSection.removeEventListener("click",g);const t=o.target.dataset.id;try{const s=await q.getBook(t);let e="Add to shopping list";h.findIndex(i=>i._id===s._id)>-1&&(e="Remove from shopping list");const d=`
    <div class="book-modal-item" id="${s._id}">
    
    <button class="book-modal-close-btn" type="button">
        <img class="book-modal-close-btn-img"   src="${M}" width="24" height="24"/>
    </button>
    
      <div class="book-modal-thumb" data-id="${s.list_name}">
       <div class="book-modal-thumb768">
        <div class="book-modal-card">  
          <img src="${s.book_image}" alt="${s.title}" class="book-modal-card-img" data-id='${s._id}'/>
        </div>
        
        <div class="book-modal-item-thumb">
          <h3 class="book-modal-item-title">${s.title}</h3>
          <p class="book-modal-author">${s.author}</p>
          <p class="book-modal-descr">${s.description}</p>
        
        <div class="book-modal-icon">
          <a href="${s.amazon_product_url}" target="_blank" class="book-modal-link-amazon"><img class="book-modal-icon-amazon" src="${f}"/></a>
          <a href="${s.buy_links[1].url}" target="_blank" class="book-modal-link-apple"><img class="book-modal-icon-apple" src="${$}"/></a>  
        </div>
        </div>
       </div>
        <button class="book-modal-add-btn" type="button">${e}</button>
      </div>
      <p class="modal-text modal-text-closed">Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.</p>
    </div>`,a=i=>{i.code==="Escape"&&instance.close()};if(!m){const i=E.create(d,{className:"modal",onShow:()=>{const n=i.element().querySelector(".modal-text");h.find(l=>l._id===t)&&n.classList.add("modal-text-visible"),document.addEventListener("keydown",a),document.addEventListener("click",w),document.body.style.overflow="hidden",document.addEventListener("click",l=>{l.target.classList.contains("book-modal-close-btn-img")&&i.close()})},onClose:()=>{document.removeEventListener("keydown",a),document.body.style.overflow="auto",r.bestBooksSection.addEventListener("click",g),m=!1}});i.show(),m=!0}}catch(s){console.log(s),L.error({title:"Error",message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${s.message}`,position:"topRight"})}}const I={el:document.querySelector(".btn-up"),scrolling:!1,show(){this.el.classList.contains("btn-up_hide")&&!this.el.classList.contains("btn-up_hiding")&&(this.el.classList.remove("btn-up_hide"),this.el.classList.add("btn-up_hiding"),window.setTimeout(()=>{this.el.classList.remove("btn-up_hiding")},300))},hide(){!this.el.classList.contains("btn-up_hide")&&!this.el.classList.contains("btn-up_hiding")&&(this.el.classList.add("btn-up_hiding"),window.setTimeout(()=>{this.el.classList.add("btn-up_hide"),this.el.classList.remove("btn-up_hiding")},300))},addEventListener(){window.addEventListener("scroll",()=>{const o=window.scrollY||document.documentElement.scrollTop;this.scrolling&&o>0||(this.scrolling=!1,o>400?this.show():this.hide())}),document.querySelector(".btn-up").onclick=()=>{this.scrolling=!0,this.hide(),window.scrollTo({top:0,left:0,behavior:"smooth"})}}};I.addEventListener();
//# sourceMappingURL=commonHelpers.js.map
