import{r as u,l as e,s as p,c as m}from"./assets/local-storage-6237a705.js";import"https://cdn.skypack.dev/axios";import{P as y}from"./assets/vendor-c29d349d.js";const r=document.querySelector(".shop-list-placeholder"),a=document.querySelector(".tui-pagination");u();function d(){e.length===0?(r.style.display="block",a.style.display="none"):(r.style.display="none",a.style.display="flex")}d();const o=new y(a,{totalItems:e.length,itemsPerPage:h()<=767?4:3,visiblePages:3,page:1,template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}});function h(){return window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth}o.on("afterMove",function(n){l(n.page)});function l(n){p.innerHTML="";const t=(n-1)*o._options.itemsPerPage,s=t+o._options.itemsPerPage;e.slice(t,s).forEach(i=>{m(i)})}function b(n){const t=n.target;if(t.classList.contains("delete-btn-icon")||t.classList.contains("delete-btn")){const s=t.closest(".delete-btn"),c=s.parentNode.dataset.id,i=e.findIndex(g=>g._id===c);i!==-1&&(e.splice(i,1),localStorage.setItem("books",JSON.stringify(e)),l(o.getCurrentPage()),o.reset(e.length)),s.parentNode.remove(),d(),e.length===0&&(localStorage.removeItem("books"),a.style.display="none")}}p.addEventListener("click",b);l(1);
//# sourceMappingURL=commonHelpers2.js.map
