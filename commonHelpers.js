import{l as u,a as $,b as f,o as E}from"./assets/local-storage-81a8139f.js";import{a as c,b as w,i as B}from"./assets/vendor-c29d349d.js";class p{constructor(){this.BASE_URL="https://books-backend.p.goit.global/books",this.CATEGORY_LIST="/category-list",this.TOP_BOOKS="/top-books",this.CATEGORY="/category?category="}async getCategories(){const t=this.BASE_URL+this.CATEGORY_LIST;try{return(await c.get(t)).data}catch(s){console.log(s),iziToast.error({title:"Error",message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${s.message}`,position:"topRight"})}}async getTopBooks(){const t=this.BASE_URL+this.TOP_BOOKS;try{return(await c.get(t)).data}catch(s){console.log(s),iziToast.error({title:"Error",message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${s.message}`,position:"topRight"})}}async getCategory(t){const s=this.BASE_URL+this.CATEGORY+t;try{return(await c.get(s)).data}catch(e){console.log(e),iziToast.error({title:"Error",message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${e.message}`,position:"topRight"})}}async getBook(t){const s=this.BASE_URL+"/"+t;try{return(await c.get(s)).data}catch(e){console.log(e),iziToast.error({title:"Error",message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${e.message}`,position:"topRight"})}}}const S=new p,b={list:document.querySelector(".categories-List"),categoriesBox:document.querySelector(".categories-box"),booksSection:document.querySelector(".bs-books-section"),btnList:document.querySelector(".btn-list")},h=document.querySelector(".js-bac");async function L(){const t=(await S.getCategories()).map(s=>` <li class="categories-item" name="${s.list_name}">
         <button class="btn-list" type="button" name="${s.list_name}">${s.list_name}</button>
        </li>
        `).sort().join("");b.list.insertAdjacentHTML("beforeend",t)}L();b.list.addEventListener("click",T);async function T(o){const t=await c.get(`https://books-backend.p.goit.global/books/category?category=${o.target.name}`);_(t.data,o)}async function _(o,t){if(h.classList.remove("back-current"),t.target.nodeName!=="BUTTON")return;const s=t.target.name.split(" "),e=s[s.length-1],i=`<h1 class="bs-books-title bs-book-title-mg">
  ${s.slice(0,s.length-1).join(" ")} <span class="last-word-color">${e}</span>
      </h1> <div><ul class="bs-list list">
       <li class="bs-books-item">
       <div class="categories-item" data-list-id="${t.target.name}">
       ${o.map(a=>`
             <a href="#" class="link" rel="noopener noreferrer" data-id='${a._id}'>
        
              <div class="bs-books-card">
                <img
                  src="${a.book_image}"
                  alt="${a.title}"
                  class="bs-books-card-img"
                  data-id='${a._id}'
                />
                <div class="bs-books-overlay">
                <p class="bs-books-overlay-title">quick view</p>
                </div>
               </div> 
                <div class="bs-books-item-thumb">
                  <h3 class="bs-books-item-title">${a.title.slice(0,18)}</h3>
                  <p class="bs-books-author">${a.author.slice(0,18)}</p>
                </div>
             </a>
           `).join("")}</div> </li>
      </ul>
      </div>`;b.booksSection.innerHTML="",b.booksSection.insertAdjacentHTML("beforeend",i)}h.addEventListener("click",O);async function O(){location.reload()}const v=new p,r={bestBooksSection:document.querySelector(".bs-books-section")};function C(o){const t=`
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
          <button class="bs-books-see-more-btn" type="button" data-id="${s.list_name}">see more</button>
          </div>
          
        </li>
        `).join("")}</ul>`;r.bestBooksSection.insertAdjacentHTML("beforeend",t)}async function j(){const o=await v.getTopBooks();C(o)}j();r.bestBooksSection.addEventListener("click",async function(o){if(o.target.nodeName!=="BUTTON")return;const t=o.target.dataset.id;try{r.bestBooksSection.innerHTML="";const s=await v.getCategory(t);M(s)}catch(s){console.error(s.message)}});function M(o){const t=o[0].list_name.split(" "),s=t[t.length-1],e=t.slice(0,t.length-1).join(" ");let l=o,i=`<h1 class="bs-category-title">${e} <span class="last-word-color">${s}</span></h1>`,a='<ul class="bs-category-list list">';l.forEach(({_id:d,book_image:n,title:k,author:y,list_name:A})=>{a+=`<li class="bs-category-item" id="${d}">
    <div class="bs-books-thumb" data-list-id="${A}">
    <a href="#" class="bs-books-item-link link" rel="noopener noreferrer">
    <div class="bs-category-books-card">  
      <img src="${n}" alt="${k}" class="bs-books-card-img" data-id='${d}'/>
        <div class="bs-books-overlay">
          <p class="bs-books-overlay-title">quick view</p>
        </div>          
      </div>
      <div class="bs-books-item-thumb">
      <h3 class="bs-books-item-title">${k.slice(0,18)}</h3>
      <p class="bs-books-author">${y.slice(0,18)}</p>
      </div>
      </a>
      </li>
      </div>`}),a+="</ul>",i+=a,r.bestBooksSection.insertAdjacentHTML("beforeend",i)}const R="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAWFJREFUWEe1l9sNwjAMRd1NYBPYBDZhE8QksAlsAlxUozTEz5r+IErwOXFcp5loeW2I6NHd++vXaY4O8JWIWODyvn8qJu9mBsJiknt8sgDgGMAXBlRKtPCWsWWB52C2VRIjOOO+An0GqjKhwTHBr4A1MLMcWkxMEDVw4yXAjQMRnYXCiy6HCw5WK1Al4YaPBNZKhOCSQFYiDNcEohIpuCXglbg1HW5Uw59ql7pqX4SjcdbTgfYtXSrckwEOrEmk4REBazl6CXPm/AfPErTBPZlww6MZwHir2qMd86cTKvVkwlMbmHcJrJn34u5MeASi8FAmLAELjoJDH0jvopqAB84dzmpW4vuEJBCBe5qVWBMjgQw8LdELrIGnJFqBCnhYggUq4V6JY/tSep8fp/B+rrVOx4uuejBB7NDGIshoj6h6MKmAa8uxOJhwN0Mt4IfP+hjpjf6M2OiYfABe1EA0WNn4F0EsgGGeftv2AAAAAElFTkSuQmCC",q=new p;r.bestBooksSection.addEventListener("click",g);let m=!1;async function g(o){if(o.preventDefault(),o.target.nodeName!=="IMG")return;o.stopPropagation(),r.bestBooksSection.removeEventListener("click",g);const t=o.target.dataset.id;try{const s=await q.getBook(t);let e="Add to shopping list";u.findIndex(a=>a._id===s._id)>-1&&(e="Remove from shopping list");const l=`
    <div class="book-modal-item" id="${s._id}">
    
    <button class="book-modal-close-btn" type="button">
        <img class="book-modal-close-btn-img"   src="${R}" width="24" height="24"/>
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
          <a href="${s.amazon_product_url}" target="_blank" class="book-modal-link-amazon"><img class="book-modal-icon-amazon" src="${$}"/></a>
          <a href="${s.buy_links[1].url}" target="_blank" class="book-modal-link-apple"><img class="book-modal-icon-apple" src="${f}"/></a>  
        </div>
        </div>
       </div>
        <button class="book-modal-add-btn" type="button">${e}</button>
      </div>
      <p class="modal-text modal-text-closed">Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.</p>
    </div>`,i=a=>{a.code==="Escape"&&instance.close()};if(!m){const a=w.create(l,{className:"modal",onShow:()=>{const d=a.element().querySelector(".modal-text");u.find(n=>n._id===t)&&d.classList.add("modal-text-visible"),document.addEventListener("keydown",i),document.addEventListener("click",E),document.body.style.overflow="hidden",document.addEventListener("click",n=>{n.target.classList.contains("book-modal-close-btn-img")&&a.close()})},onClose:()=>{document.removeEventListener("keydown",i),document.body.style.overflow="auto",r.bestBooksSection.addEventListener("click",g),m=!1}});a.show(),m=!0}}catch(s){console.log(s),B.error({title:"Error",message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${s.message}`,position:"topRight"})}}
//# sourceMappingURL=commonHelpers.js.map
