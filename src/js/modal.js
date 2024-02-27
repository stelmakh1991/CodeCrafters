import { refs } from "./bs-books";
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

function name(params) {
    
}





function modalTemplate({
    book_image,
    title,
    author,
  }) {
    return `<button type="button" class="modal-btn">
    <svg class="modal-btn-icon" width="12" height="12">
      <use href="../../svg-sprite.svg#icon-x-close"></use>
    </svg>
  </button>

  <div class="modal-books-card">  
  <img src="${book_image}" alt="${title}" class="modal-card-img"/>
  </div>
  <div class="modal-books-item-thumb">
  <h3 class="modal-books-item-title">${title.slice(0, 18)}</h3>
  <p class="modal-books-author">${author.slice(0, 18)}</p>
  </div>
  <div class="modal-books-addshop-btn-thumb">
          <button class="modal-books-addshop-btn" type="button" data-id="${
            elements.list_name
          }">ADD TO SHOPPING LIST</button>
          </div>`;
  }

