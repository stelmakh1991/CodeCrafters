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


async function openBasicModal(e) {
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
          <a href="${book.amazonProductUrl}" target="_blank" class="book-modal-link-amazon"><img class="book-modal-icon-amazon" src="../images/amazon1.png"/></a>
          <a href="${book.buy_links[1].url}" target="_blank" class="book-modal-link-apple"><img class="book-modal-icon-apple" src="../images/book1.png"/></a>  
        </div>
        </div>
       </div>
        <button class="book-modal-add-btn" type="button">${buttonText}</button>
      </div>
      <p class="modal-text">Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.</p>
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
        //   document.querySelector(".modal-text").style.display = 'none';
        //   console.log(document.querySelector(".modal-text"));
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
