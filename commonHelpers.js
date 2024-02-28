import"./assets/supportUkraine-19a8eb42.js";import{a as d,b as _,i as E}from"./assets/vendor-c29d349d.js";class k{constructor(){this.BASE_URL="https://books-backend.p.goit.global/books",this.CATEGORY_LIST="/category-list",this.TOP_BOOKS="/top-books",this.CATEGORY="/category?category="}async getCategories(){const o=this.BASE_URL+this.CATEGORY_LIST;try{return(await d.get(o)).data}catch(t){console.log(t),iziToast.error({title:"Error",message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${t.message}`,position:"topRight"})}}async getTopBooks(){const o=this.BASE_URL+this.TOP_BOOKS;try{return(await d.get(o)).data}catch(t){console.log(t),iziToast.error({title:"Error",message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${t.message}`,position:"topRight"})}}async getCategory(o){const t=this.BASE_URL+this.CATEGORY+o;try{return(await d.get(t)).data}catch(s){console.log(s),iziToast.error({title:"Error",message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${s.message}`,position:"topRight"})}}async getBook(o){const t=this.BASE_URL+"/"+o;try{return(await d.get(t)).data}catch(s){console.log(s),iziToast.error({title:"Error",message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${s.message}`,position:"topRight"})}}}const L=new k,m={list:document.querySelector(".categories-List"),categoriesBox:document.querySelector(".categories-box"),booksSection:document.querySelector(".bs-books-section"),btnList:document.querySelector(".btn-list")};async function w(){const o=(await L.getCategories()).map(t=>` <li class="categories-item" name="${t.list_name}">
         <button class="btn-list" type="button" name="${t.list_name}">${t.list_name}</button>
        </li>
        `).sort().join("");m.list.insertAdjacentHTML("beforeend",o)}w();m.list.addEventListener("click",B);async function B(e){const o=await d.get(`https://books-backend.p.goit.global/books/category?category=${e.target.name}`);T(o.data,e),A(e),localStorage.setItem("currentCategorie",e.target.name)}async function T(e,o){const t=`<h1 class="bs-books-title">
       ${o.target.name} <span class="bs-books-title-blue">Books</span>
      </h1> <div><ul class="bs-list list  ">
       <li class="bs-books-item ">
       <div class="categories-item " data-list-id="${o.target.name}">
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
      </div>`;m.booksSection.innerHTML="",m.booksSection.insertAdjacentHTML("beforeend",t)}const y=document.querySelector(".js-bac");y.addEventListener("click",C);async function C(){location.reload()}async function A(e){y.classList.remove("back-current");const o=localStorage.getItem("currentCategorie");document.querySelector(`.btn-list[name= "${o}"]`).classList.remove("back-current"),e.target.classList.add("back-current"),localStorage.removeItem("currentCategorie")}const v=new k,r={bestBooksSection:document.querySelector(".bs-books-section")};function O(e){const o=`
      <h1 class="bs-books-title">
        Best Sellers <span class="bs-books-title-blue">Books</span>
      </h1> <ul class="bs-list list"> ${e.map(t=>`
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
        `).join("")}</ul>`;r.bestBooksSection.insertAdjacentHTML("beforeend",o)}async function x(){const e=await v.getTopBooks();O(e)}x();r.bestBooksSection.addEventListener("click",async function(e){if(e.target.nodeName!=="BUTTON")return;const o=e.target.dataset.id;try{r.bestBooksSection.innerHTML="";const t=await v.getCategory(o);R(t)}catch(t){console.error(t.message)}});function R(e){let o=e,t=`<h1 class="bs-category-title">${e[0].list_name}</h1>`,s='<ul class="bs-category-list list">';o.forEach(({_id:n,book_image:l,title:a,author:c,list_name:g})=>{s+=`<li class="bs-category-item" id="${n}">
    <div class="bs-books-thumb" data-list-id="${g}">
    <a href="#" class="bs-books-item-link link" rel="noopener noreferrer">
    <div class="bs-category-books-card">  
      <img src="${l}" alt="${a}" class="bs-books-card-img" data-id='${n}'/>
        <div class="bs-books-overlay">
          <p class="bs-books-overlay-title">quick view</p>
        </div>          
      </div>
      <div class="bs-books-item-thumb">
      <h3 class="bs-books-item-title">${a.slice(0,18)}</h3>
      <p class="bs-books-author">${c.slice(0,18)}</p>
      </div>
      </a>
      </li>
      </div>`}),s+="</ul>",t+=s,r.bestBooksSection.insertAdjacentHTML("beforeend",t)}const i=JSON.parse(localStorage.getItem("books"))||[];async function q(e){const o=e.target.closest(".book-modal-item");if(!o)return;const t=o.id,s=o.querySelector("h3").textContent,n=o.querySelector(".book-modal-descr").textContent,l=o.querySelector(".book-modal-author").textContent,a=o.querySelector("img").src,c=o.querySelector(".book-modal-link-amazon").href,g=o.querySelector(".book-modal-link-apple").href,f=o.querySelector(".book-modal-thumb").dataset.id,h=o.querySelector(".modal-text");h.style.display="none";const S={_id:t,title:s,description:n,author:l,book_image:a,category:f,amazon_product_url:c,apple_product_url:g};if(e.target.textContent==="Add to shopping list"){if(i.find(b=>b._id===t))return;e.target.textContent="Remove from shopping list",h.style.display="block",i.push(S),localStorage.setItem("books",JSON.stringify(i))}else if(e.target.textContent==="Remove from shopping list"){const b=i.findIndex($=>$._id===t);b!==-1&&(i.splice(b,1),localStorage.setItem("books",JSON.stringify(i)),e.target.textContent="Add to shopping list")}}const I=new k;r.bestBooksSection.addEventListener("click",u);let p=!1;async function u(e){if(e.preventDefault(),e.target.nodeName!=="IMG")return;e.stopPropagation(),r.bestBooksSection.removeEventListener("click",u);const o=e.target.dataset.id;try{const t=await I.getBook(o);let s="Add to shopping list";i.findIndex(a=>a._id===t._id)>-1&&(s="Remove from shopping list");const n=`
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
    </div>`,l=a=>{a.code==="Escape"&&instance.close()};if(!p){const a=_.create(n,{className:"modal",onShow:()=>{document.addEventListener("keydown",l),document.addEventListener("click",q),document.body.style.overflow="hidden",document.addEventListener("click",c=>{c.target.classList.contains("book-modal-close-btn-img")&&a.close()})},onClose:()=>{document.removeEventListener("keydown",l),document.body.style.overflow="auto",r.bestBooksSection.addEventListener("click",u),p=!1}});a.show(),p=!0}}catch(t){console.log(t),E.error({title:"Error",message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${t.message}`,position:"topRight"})}}new Pagination(paginationContainer,{totalItems:localStorageItems.length,itemsPerPage:getWindowWidth()<=767?4:3,visiblePages:3,page:1,template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}});
//# sourceMappingURL=commonHelpers.js.map
