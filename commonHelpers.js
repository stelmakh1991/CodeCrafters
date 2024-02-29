import{l as u,o as h}from"./assets/local-storage-ccfb2ea2.js";import{a as r,b as k,i as B}from"./assets/vendor-c29d349d.js";class g{constructor(){this.BASE_URL="https://books-backend.p.goit.global/books",this.CATEGORY_LIST="/category-list",this.TOP_BOOKS="/top-books",this.CATEGORY="/category?category="}async getCategories(){const t=this.BASE_URL+this.CATEGORY_LIST;try{return(await r.get(t)).data}catch(s){console.log(s),iziToast.error({title:"Error",message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${s.message}`,position:"topRight"})}}async getTopBooks(){const t=this.BASE_URL+this.TOP_BOOKS;try{return(await r.get(t)).data}catch(s){console.log(s),iziToast.error({title:"Error",message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${s.message}`,position:"topRight"})}}async getCategory(t){const s=this.BASE_URL+this.CATEGORY+t;try{return(await r.get(s)).data}catch(o){console.log(o),iziToast.error({title:"Error",message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${o.message}`,position:"topRight"})}}async getBook(t){const s=this.BASE_URL+"/"+t;try{return(await r.get(s)).data}catch(o){console.log(o),iziToast.error({title:"Error",message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${o.message}`,position:"topRight"})}}}const v=new g,c={list:document.querySelector(".categories-List"),categoriesBox:document.querySelector(".categories-box"),booksSection:document.querySelector(".bs-books-section"),btnList:document.querySelector(".btn-list")};async function S(){const t=(await v.getCategories()).map(s=>` <li class="categories-item" name="${s.list_name}">
         <button class="btn-list-item" type="button" name="${s.list_name}">${s.list_name}</button>
        </li>
        `).sort().join("");c.list.insertAdjacentHTML("beforeend",t)}S();c.list.addEventListener("click",y);async function y(e){const t=await r.get(`https://books-backend.p.goit.global/books/category?category=${e.target.name}`);w(t.data,e)}async function w(e,t){const s=`<h1 class="bs-books-title">
       ${t.target.name}
      </h1> <div><ul class="bs-list list">
       <li class="bs-books-item ">
       <div class="categories-item" data-list-id="${t.target.name}">
       ${e.map(o=>`
             <a href="#" class="link" rel="noopener noreferrer" data-id='${o._id}'>
        
              <div class="bs-books-card">
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
             </a>
           `).join("")}</div> </li>
      </ul>
      </div>`;c.booksSection.innerHTML="",c.booksSection.insertAdjacentHTML("beforeend",s)}const E=document.querySelector(".js-bac");E.addEventListener("click",R);async function R(){location.reload()}const m=new g,i={bestBooksSection:document.querySelector(".bs-books-section")};function f(e){const t=`
      <h1 class="bs-books-title">
        Best Sellers <span class="bs-books-title-blue">Books</span>
      </h1> <ul class="bs-list list"> ${e.map(s=>`
        <li class="bs-books-item"> 
        <h3 class="bs-books-category-title">${s.list_name}</h3>
          <div class="bs-books-thumb" data-list-id="${s.list_name}">
            ${s.books.map(o=>`
              <a href="#" class="bs-books-item-link link" rel="noopener noreferrer">
              <div class="bs-books-card">
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
          <button class="bs-books-see-more-btn" type="button" data-id="${s.list_name}">see more</button>
          </div>
          
        </li>
        `).join("")}</ul>`;i.bestBooksSection.insertAdjacentHTML("beforeend",t)}async function C(){const e=await m.getTopBooks();f(e)}C();i.bestBooksSection.addEventListener("click",async function(e){if(e.target.nodeName!=="BUTTON")return;const t=e.target.dataset.id;try{i.bestBooksSection.innerHTML="";const s=await m.getCategory(t);I(s)}catch(s){console.error(s.message)}});function I(e){let t=e,s=`<h1 class="bs-category-title">${e[0].list_name}</h1>`,o='<ul class="bs-category-list list">';t.forEach(({_id:l,book_image:n,title:a,author:d,list_name:p})=>{o+=`<li class="bs-category-item" id="${l}">
    <div class="bs-books-thumb" data-list-id="${p}">
    <a href="#" class="bs-books-item-link link" rel="noopener noreferrer">
    <div class="bs-category-books-card">  
      <img src="${n}" alt="${a}" class="bs-books-card-img" data-id='${l}'/>
        <div class="bs-books-overlay">
          <p class="bs-books-overlay-title">quick view</p>
        </div>          
      </div>
      <div class="bs-books-item-thumb">
      <h3 class="bs-books-item-title">${a.slice(0,18)}</h3>
      <p class="bs-books-author">${d.slice(0,18)}</p>
      </div>
      </a>
      </li>
      </div>`}),o+="</ul>",s+=o,i.bestBooksSection.insertAdjacentHTML("beforeend",s)}const L="data:image/png;base64,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",O="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAYAAACcuBHKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOOSURBVHgB7VdLaBRBEH3Vsx/FqFH8hBjBD0TjwQ8oKvhB4kUFRRFvHhU8iuIHD55E/CJe/KF3vQmCoBgRFFGDGC96kKigrmJETSAmu5kua2dms90zszMbSG4paGar+nXX66rqzwLj4gsldfL1fKurhtY5GZ6hWeXByfjoBLooQ7452n1F+/AOIyHBN7GIkb0tP5eJBozQdzwhdFOp1E4H8CmVBF/DYjjZ5+K6EaMtjBKBVtK+4lvTnIngKHcfegwI+JJlxh1pbUReiD1RJmLoam6XsJgHLQGqNA5ajM7a6ONQ0zH2sg5a5F5ztph+LRLEzibWgudyI/+rg8aI6PB0E0e18QYOnNtm+rXSQZoX2Bsg+O1MARbKuEyDTOACvR+BLx3STQZO2pwNwOQFgs8B/QXgR6d8v0XmU6Sba5LQTHli2LLqKGj5QVB+imXm753gB3uF0GegoQW0+QaoZaM9dvAP9MszQNdlP2wVP1ANJsxKB1zRzRzO2wG1+mSEgLemppXi+FZ5RtD2u1ECZck3Qq0/DVq4O1QzrGpGwiPL1XTQpBYkCTWvBU9tA01vS8RhwuygKCt+7JPBJuEqI89RcKxMW5qOKS9O157LIsEu2QkSEqk0VDYN4e80jfpI+HvZ1JEuug5MOBKUSAJ2CuogwfUQDZNQSTWhlc2y3lWmYshenIskEmSTqNdBmmiEdgfSSVQwVK+DNAnSUX0UcG0S3hliJnnUCjO47CpTUuI5YQLYDvXAX3BPt7cUmrPCclAdXwL/Esy/v6BZrcDExuGp/HQEsUjaHRJ+rkbCLyb+2gV97zi48FomGvJ75DimNfuh2o8MR0t3XAS/uALu/x3cZ3LGNK+A2nnZ2PrmhWf4NZXSiRkP5bN5uLNhpkz6RyYoIU5U+zHwjw+gaXOhn16K369iowlTwYO9prUje6qnPTYSwrjPUvt64rgOi350HjR/HfSbO3J9OzVwEs2BPqtPgjJoIuzC1FSotR/Cz11f1+APT+RHJrZAuSYtfDR160pVrO5x8GyrNv9VhJC9qitEx1DsmOrrix+HSFnMqXi46T0Rt2KMRCrkU/7c9/mmzd4dgilqZw/I7UTMS3wUGPQiQ1vDZhU25C5+7XLLkWDqtl7d4cYJr3EdsnkNb5lodf5sIfJPLPFcHjzUtIS0s4pZHqZM2QhjrxqV8a3avDplLhLRT87ws/yFwnuMS4r8B1Xvwi1OZ3iDAAAAAElFTkSuQmCC",U="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAWFJREFUWEe1l9sNwjAMRd1NYBPYBDZhE8QksAlsAlxUozTEz5r+IErwOXFcp5loeW2I6NHd++vXaY4O8JWIWODyvn8qJu9mBsJiknt8sgDgGMAXBlRKtPCWsWWB52C2VRIjOOO+An0GqjKhwTHBr4A1MLMcWkxMEDVw4yXAjQMRnYXCiy6HCw5WK1Al4YaPBNZKhOCSQFYiDNcEohIpuCXglbg1HW5Uw59ql7pqX4SjcdbTgfYtXSrckwEOrEmk4REBazl6CXPm/AfPErTBPZlww6MZwHir2qMd86cTKvVkwlMbmHcJrJn34u5MeASi8FAmLAELjoJDH0jvopqAB84dzmpW4vuEJBCBe5qVWBMjgQw8LdELrIGnJFqBCnhYggUq4V6JY/tSep8fp/B+rrVOx4uuejBB7NDGIshoj6h6MKmAa8uxOJhwN0Mt4IfP+hjpjf6M2OiYfABe1EA0WNn4F0EsgGGeftv2AAAAAElFTkSuQmCC",T=new g;i.bestBooksSection.addEventListener("click",A);let b=!1;async function A(e){if(e.preventDefault(),e.target.nodeName!=="IMG")return;e.stopPropagation(),i.bestBooksSection.removeEventListener("click",A);const t=e.target.dataset.id;try{const s=await T.getBook(t);let o="Add to shopping list";u.findIndex(a=>a._id===s._id)>-1&&(o="Remove from shopping list");const l=`
    <div class="book-modal-item" id="${s._id}">
    
    <button class="book-modal-close-btn" type="button">
        <img class="book-modal-close-btn-img"   src="${U}" width="24" height="24"/>
    </button>
    
      <div class="book-modal-thumb" data-id="${s.list_name}">
       <div class="book-modal-thumb768">
        <div class="book-modal-card">  
          <img src="${s.book_image}" alt="${s.title}" class="book-modal-card-img" data-id='${s._id}'/>
        </div>
        
        <div class="book-modal-item-thumb">
          <h3 class="book-modal-item-title">${s.title.slice(0,25)}</h3>
          <p class="book-modal-author">${s.author.slice(0,25)}</p>
          <p class="book-modal-descr">${s.description}</p>
        
        <div class="book-modal-icon">
          <a href="${s.amazon_product_url}" target="_blank" class="book-modal-link-amazon"><img class="book-modal-icon-amazon" src="${L}"/></a>
          <a href="${s.buy_links[1].url}" target="_blank" class="book-modal-link-apple"><img class="book-modal-icon-apple" src="${O}"/></a>  
        </div>
        </div>
       </div>
        <button class="book-modal-add-btn" type="button">${o}</button>
      </div>
      <p class="modal-text modal-text-closed">Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.</p>
    </div>`,n=a=>{a.code==="Escape"&&instance.close()};if(!b){const a=k.create(l,{className:"modal",onShow:()=>{document.addEventListener("keydown",n),document.addEventListener("click",h),document.body.style.overflow="hidden",document.addEventListener("click",d=>{d.target.classList.contains("book-modal-close-btn-img")&&a.close()})},onClose:()=>{document.removeEventListener("keydown",n),document.body.style.overflow="auto",i.bestBooksSection.addEventListener("click",A),b=!1}});a.show(),b=!0}}catch(s){console.log(s),B.error({title:"Error",message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${s.message}`,position:"topRight"})}}
//# sourceMappingURL=commonHelpers.js.map
