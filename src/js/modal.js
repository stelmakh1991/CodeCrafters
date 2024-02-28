import { refs } from "./bs-books";
import { BooksApi } from './books-api.js';
import { localStorageItems } from "./local-storage.js";
import { onAddAndRemoveToLocalStorageOnModal } from "./local-storage.js";
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
const booksApi = new BooksApi();


  refs.bestBooksSection.addEventListener("click", openBasicModal);
  
  let isModalOpen = false;


export async function openBasicModal(e) {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') {
      return;
    }
    e.stopPropagation();
    refs.bestBooksSection.removeEventListener("click", openBasicModal);
    const id = e.target.dataset.id;
    try {
      const book = await booksApi.getBook(id);
      let buttonText = 'Add to shopping list';
      if (localStorageItems.findIndex(el => el._id === book._id) > -1) {
        buttonText = 'Remove from shopping list';
      }
      const markup = `
    <div class="book-modal-item" id="${book._id}">
    
    <button class="book-modal-close-btn" type="button">
        <img class="book-modal-close-btn-img"   src="../images/x-close.png" width="24" height="24"/>
    </button>
    
      <div class="book-modal-thumb" data-id="${book.list_name}">
       <div class="book-modal-thumb768">
        <div class="book-modal-card">  
          <img src="${book.book_image}" alt="${book.title}" class="book-modal-card-img" data-id='${
        book._id
      }'/>
        </div>
        
        <div class="book-modal-item-thumb">
          <h3 class="book-modal-item-title">${book.title.slice(0, 25)}</h3>
          <p class="book-modal-author">${book.author.slice(0, 25)}</p>
          <p class="book-modal-descr">${book.description
          }</p>
        
        <div class="book-modal-icon">
          <a href="${book.amazon_product_url}" target="_blank" class="book-modal-link-amazon"><img class="book-modal-icon-amazon" src="../images/amazon1.png"/></a>
          <a href="${book.buy_links[1].url}" target="_blank" class="book-modal-link-apple"><img class="book-modal-icon-apple" src="../images/book1.png"/></a>  
        </div>
        </div>
       </div>
        <button class="book-modal-add-btn" type="button">${buttonText}</button>
      </div>
      <p class="modal-text modal-text-closed">Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.</p>
    </div>`;
      const escapeKey = event => {
        if (event.code === 'Escape') {
          instance.close();
        }
      };

      if (!isModalOpen) {
         const instance = basicLightbox.create(markup, {
        className: 'modal',
        onShow: () => {
          document.addEventListener('keydown', escapeKey);
          document.addEventListener('click', onAddAndRemoveToLocalStorageOnModal);
          document.body.style.overflow = 'hidden';
          document.addEventListener("click", (e)=> {
            if (e.target.classList.contains('book-modal-close-btn-img')) {
                instance.close();
              }  
          });
        },
        onClose: () => {
          document.removeEventListener('keydown', escapeKey);
          document.body.style.overflow = 'auto';
          refs.bestBooksSection.addEventListener("click", openBasicModal);
          isModalOpen = false;
        },
      });
      instance.show();
      isModalOpen = true;
      }

    } catch (error) {
      console.log(error);
      iziToast.error({
        title: 'Error',
        message: `Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${error.message}`,
        position: 'topRight',
      });
    }
  }