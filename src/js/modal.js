import { refs } from "./bs-books";
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { BooksApi } from './books-api.js';
import { localStorageItems } from "./local-storage.js";
// import * as basicLightbox from 'basiclightbox';

const booksApi = new BooksApi();


const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const link = document.querySelector("bs-category-item");
const linkbs = document.querySelector("bs-books-item-link");


refs.bestBooksSection.addEventListener("click", openModal);


export function openModal(e) {
    // if (e.target.nodeName !== 'IMG') return;
    e.preventDefault();
    e.stopPropagation();
    console.log(e.target.dataset.id);
    const id = e.target.dataset.id;
    
    backdrop.innerHTML = '';
    renderBook(id);
  }

  export async function renderBook(id) {
    try {
      const book = await booksApi.getBook(id);
      let buttonText = 'Add to shopping list';
      if (localStorageItems.findIndex(el => el._id === book._id) > -1) {
        buttonText = 'Remove from shopping list';
      }
      const markup = `
    <li class="book" id="${book._id}">
      <img src="${book.book_image}" alt="${book.title}">
      <h3>${book.title}</h3>
      <p class="description">${book.description}</p>
      <p class="author">Author: ${book.author}</p>
      <p class="publisher">Publisher: ${book.publisher}</p>
      <a class="amazon-link" href="${book.amazon_product_url}" target="_blank">Buy on Amazon</a>
      <button class="add-btn" type="button">${buttonText}</button>
    </li>`;
    backdrop.insertAdjacentHTML('beforeend', markup);
    } catch (error) {
      console.log(error);
    //   iziToast.error({
    //     title: 'Error',
    //     message: `Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${error.message}`,
    //     position: 'topRight',
    //   });
    }
  }

  const instance = basicLightbox.create(
	document.querySelector('template')
)

instance.show()
















// async function onBookClick(event) {
//     const category = event.target.dataset.id;
//     try {
//         const array = await booksApi.getBook(id);
//         renderMarkupModal(array);
//       } catch (error) {
//         console.error(error.message);
//       }
// }


// function modalTemplate({
//     book_image,
//     title,
//     author,
//   }) {
//     return `
//   <div class="modal-books-card">  
//   <img src="${book_image}" alt="${title}" class="modal-card-img"/>
//   </div>
//   <div class="modal-books-item-thumb">
//   <h3 class="modal-books-item-title">${title.slice(0, 18)}</h3>
//   <p class="modal-books-author">${author.slice(0, 18)}</p>
//   </div>
//   <div class="modal-books-addshop-btn-thumb">
//           <button class="modal-books-addshop-btn" type="button" data-id="${
//             elements.list_name
//           }">ADD TO SHOPPING LIST</button>
//           </div>`;

//   }
//   let book = new SimpleLightbox('.backdrop', {
//     showCounter: false,
//     captionDelay: 250,
//     captions: true,
//     captionsData: 'alt',
//     captionPosition: 'bottom',
//   });


//   function renderMarkupModal(book) {
//     const markup = book(modalTemplate);
//     modal.insertAdjacentHTML('beforeend', markup);
//     // gallery.refresh();
//   }




// //   <button type="button" class="modal-btn">
// //     <svg class="modal-btn-icon" width="12" height="12">
// //       <use href="../../svg-sprite.svg#icon-x-close"></use>
// //     </svg>
// //   </button>