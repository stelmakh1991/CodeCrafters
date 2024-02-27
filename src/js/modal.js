import { refs } from "./bs-books";
import { BooksApi } from './books-api.js';
import { localStorageItems } from "./local-storage.js";
import { onAddAndRemoveToLocalStorageOnModal } from "./local-storage.js";
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';




const booksApi = new BooksApi();

const backdrop = document.querySelector(".backdrop");
refs.bestBooksSection.addEventListener("click", openBasicModal);

async function openBasicModal(e) {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') {
      return;
    }
    e.stopPropagation();
    const id = e.target.dataset.id;
    try {
      const book = await booksApi.getBook(id);
      let buttonText = 'Add to shopping list';
      if (localStorageItems.findIndex(el => el._id === book._id) > -1) {
        buttonText = 'Remove from shopping list';
      }
      const markup = `
    <li class="bs-category-item" id="${book._id}">
    <div class="bs-books-thumb" data-id="${book.list_name}">
    <a href="#" class="bs-books-item-link link" rel="noopener noreferrer" data-id='${book._id}'>
    <div class="bs-category-books-card">  
      <img src="${book.book_image}" alt="${book.title}" class="bs-books-card-img" data-id='${
        book._id
      }'/>
      <div class="bs-books-overlay">
                <p class="bs-books-overlay-title">quick view</p>
                </div>
      </div>
      <div class="bs-books-item-thumb">
      <h3 class="bs-books-item-title">${book.title.slice(0, 18)}</h3>
      <p class="bs-books-author">${book.author.slice(0, 18)}</p>
      <p class="bs-books-descr">${book.author.slice(0, 18)}</p>
      </div>
      </a>
      <button class="add-btn" type="button">${buttonText}</button>
    </li>`;
      const escapeKey = event => {
        if (event.code === 'Escape') {
          instance.close();
        }
      };
      const instance = basicLightbox.create(markup, {
        className: 'modal',
        onShow: () => {
          document.addEventListener('keydown', escapeKey);
          document.addEventListener('click', onAddAndRemoveToLocalStorageOnModal);
        },
        onClose: () => {
          document.removeEventListener('keydown', escapeKey);
        },
      });
      instance.show();
    } catch (error) {
      console.log(error);
      iziToast.error({
        title: 'Error',
        message: `Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${error.message}`,
        position: 'topRight',
      });
    }
  }













// export function openModal(e) {
//     if (e.target.nodeName !== 'IMG') return;
//     e.preventDefault();
//     e.stopPropagation();
//     console.log(e.target.dataset.id);
//     const id = e.target.dataset.id;
    
//     // backdrop.innerHTML = '';
//     renderBook(id);

//   }

//   export async function renderBook(id) {
//     try {
//       const book = await booksApi.getBook(id);
//       let buttonText = 'Add to shopping list';
//       if (localStorageItems.findIndex(el => el._id === book._id) > -1) {
//         buttonText = 'Remove from shopping list';
//       }
//       const markup = `
//     <li class="book" id="${book._id}">
//       <img src="${book.book_image}" alt="${book.title}">
//       <h3>${book.title}</h3>
//       <p class="description">${book.description}</p>
//       <p class="author">Author: ${book.author}</p>
//       <p class="publisher">Publisher: ${book.publisher}</p>
//       <a class="amazon-link" href="${book.amazon_product_url}" target="_blank">Buy on Amazon</a>
//       <button class="add-btn" type="button">${buttonText}</button>
//     </li>`;
//     // backdrop.insertAdjacentHTML('beforeend', markup);
//     const instance = basicLightbox.create(
// 	 markup
// )
// instance.show()
//     } catch (error) {
//       console.log(error);
//       iziToast.error({
//         title: 'Error',
//         message: `Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${error.message}`,
//         position: 'topRight',
//       });
//     }
//   }
//   const instance = basicLightbox.create(
// 	document.querySelector('template')
// )

// instance.show()



// import { refs } from "./bs-books";
// import { BooksApi } from './books-api.js';
// import { localStorageItems } from "./local-storage.js";
// import * as basicLightbox from 'basiclightbox';

// const booksApi = new BooksApi();


// const backdrop = document.querySelector(".backdrop");
// refs.bestBooksSection.addEventListener("click", openModal);


// export function openModal(e) {
//     if (e.target.nodeName !== 'IMG') return;
//     e.preventDefault();
//     e.stopPropagation();
//     console.log(e.target.dataset.id);
//     const id = e.target.dataset.id;
    
//     // backdrop.innerHTML = '';
//     renderBook(id);

//   }

//   export async function renderBook(id) {
//     try {
//       const book = await booksApi.getBook(id);
//       let buttonText = 'Add to shopping list';
//       if (localStorageItems.findIndex(el => el._id === book._id) > -1) {
//         buttonText = 'Remove from shopping list';
//       }
//       const markup = `
//     <li class="book" id="${book._id}">
//       <img src="${book.book_image}" alt="${book.title}">
//       <h3>${book.title}</h3>
//       <p class="description">${book.description}</p>
//       <p class="author">Author: ${book.author}</p>
//       <p class="publisher">Publisher: ${book.publisher}</p>
//       <a class="amazon-link" href="${book.amazon_product_url}" target="_blank">Buy on Amazon</a>
//       <button class="add-btn" type="button">${buttonText}</button>
//     </li>`;
//     // backdrop.insertAdjacentHTML('beforeend', markup);
//     const instance = basicLightbox.create(
// 	 markup
// )
// instance.show()
//     } catch (error) {
//       console.log(error);
//       iziToast.error({
//         title: 'Error',
//         message: `Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${error.message}`,
//         position: 'topRight',
//       });
//     }
//   }
// //   const instance = basicLightbox.create(
// // 	document.querySelector('template')
// // )

// // instance.show()




















// import { refs } from "./bs-books";
// import { BooksApi } from './books-api.js';
// import { localStorageItems } from "./local-storage.js";
// import * as basicLightbox from 'basiclightbox';

// const booksApi = new BooksApi();

// const backdrop = document.querySelector(".backdrop");



// refs.bestBooksSection.addEventListener("click", openModal);
// export async function openModal(e) {
//     e.preventDefault();
//     e.stopPropagation();
//     if (e.target.nodeName !== 'IMG') return;
//     const id = e.target.dataset.id;
//     await renderBook(id);
// }
// export async function renderBook(e) {
//     try {
//         // e.preventDefault();
//     // e.stopPropagation();
//     // if (e.target.nodeName !== 'IMG') return;
//         const id = e.target.dataset.id;
//         const book = await booksApi.getBook(id);
//         let buttonText = 'Add to shopping list';
//         if (localStorageItems.findIndex(el => el._id === book._id) > -1) {
//             buttonText = 'Remove from shopping list';
//         }
//         const markup = `
//             <div class="book-modal">
//                 <img src="${book.book_image}" alt="${book.title}">
//                 <h3>${book.title}</h3>
//                 <p class="description">${book.description}</p>
//                 <p class="author">Author: ${book.author}</p>
//                 <p class="publisher">Publisher: ${book.publisher}</p>
//                 <a class="amazon-link" href="${book.amazon_product_url}" target="_blank">Buy on Amazon</a>
//                 <button class="add-btn" type="button">${buttonText}</button>
//             </div>`;
//         // Create BasicLightbox instance with the generated markup
//         // const instance = basicLightbox.create(markup);
//         // Display the modal window
//         // instance.show();


//         const instance = basicLightbox.create(markup)

// instance.show()
//     } catch (error) {
//         console.error(error);
//     }
// }

















//const gallery = document.querySelector('.gallery');


// refs.bestBooksSection.addEventListener("click", renderBook);

// const markup = `
//             <div class="book-modal">
//                 <img src="${book.book_image}" alt="${book.title}">
//                 <h3>${book.title}</h3>
//                 <p class="description">${book.description}</p>
//                 <p class="author">Author: ${book.author}</p>
//                 <p class="publisher">Publisher: ${book.publisher}</p>
//                 <a class="amazon-link" href="${book.amazon_product_url}" target="_blank">Buy on Amazon</a>
//                 <button class="add-btn" type="button">${buttonText}</button>
//             </div>`;
// gallery.innerHTML = markup;




// refs.bestBooksSection.addEventListener('click', event => {
//   event.preventDefault();
//   if (event.target.nodeName !== 'IMG') {
//     return;
//   }
//   const html = `<img src="${event.target.dataset.source}" width='1112' height='640'/>`;
//   const escapeKey = event => {
//     if (event.code === 'Escape') {
//       instance.close();
//     }
//   };
//   const instance = basicLightbox.create(html, {
//     closable: false,
//     className: 'modal',
//     onShow: () => {
//       document.addEventListener('keydown', escapeKey);
//     },
//     onClose: () => {
//       document.removeEventListener('keydown', escapeKey);
//     },
//   });
//   instance.show();
// });
