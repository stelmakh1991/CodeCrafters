import"./assets/supportUkraine-19a8eb42.js";import b from"https://cdn.skypack.dev/axios";import{P as u}from"./assets/vendor-c29d349d.js";async function h(e){const t=[];try{await Promise.all(e.map(async s=>{const n=`https://books-backend.p.goit.global/books/${s}`,a=await b.get(n);t.push(a.data)})),localStorage.setItem("books",JSON.stringify(t))}catch(s){console.error("Error fetching books:",s),iziToast.error({title:"Error",message:"Oops! Something went wrong while fetching books. Please try again later or contact support if the issue persists.",position:"topRight"})}}const f=["643282b1e85766588626a0dc","643282b1e85766588626a080","643282b1e85766588626a0b2","643282b1e85766588626a085","643282b1e85766588626a085","643282b1e85766588626a0dc","643282b1e85766588626a086","643282b1e85766588626a0dc","643282b1e85766588626a085","643282b1e85766588626a0b2","643282b1e85766588626a086","643282b1e85766588626a086","643282b1e85766588626a085","643282b1e85766588626a085","643282b1e85766588626a0dc","643282b1e85766588626a086","643282b1e85766588626a0dc","643282b1e85766588626a085","643282b1e85766588626a0b2","643282b1e85766588626a086"];h(f);const r=document.querySelector(".shopping-list"),c=document.querySelector(".shop-list-placeholder"),o=JSON.parse(localStorage.getItem("books"))||[],p=document.querySelector(".tui-pagination");function y(){try{if(!o)return;o.forEach(e=>g(e))}catch(e){console.log(e),iziToast.error({title:"Error",message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${e.message}`,position:"topRight"})}}function g(e){const t=`<li class="shopping-list-item" data-id="${e._id}">

        <button type="button" class="delete-btn" title="Delete"> 
        <div class="delete-btn-icon"> </div> </button> 

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
        </li>`;r.insertAdjacentHTML("beforeend",t)}y();function d(){o.length===0?c.style.display="block":c.style.display="none"}d();const i=new u(p,{totalItems:o.length,itemsPerPage:v()<=767?4:3,visiblePages:3,page:1,template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}});function v(){return window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth}i.on("afterMove",function(e){l(e.page)});function l(e){r.innerHTML="";const t=(e-1)*i._options.itemsPerPage,s=t+i._options.itemsPerPage;o.slice(t,s).forEach(a=>{g(a)})}function k(e){const t=e.target;if(t.classList.contains("delete-btn-icon")||t.classList.contains("delete-btn")){const s=t.closest(".delete-btn"),n=s.parentNode.dataset.id,a=o.findIndex(m=>m._id===n);a!==-1&&(o.splice(a,1),localStorage.setItem("books",JSON.stringify(o)),l(i.getCurrentPage()),i.reset(o.length)),s.parentNode.remove(),d(),o.length===0&&(localStorage.removeItem("books"),p.style.display="none")}}r.addEventListener("click",k);l(1);
//# sourceMappingURL=commonHelpers2.js.map
