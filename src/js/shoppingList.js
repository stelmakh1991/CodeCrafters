// function renderPosts(posts) {
//   const markup = posts
//     .map(({ id, title, body, userId }) => {
//       return `<li>
//           <h2 class="post-title">${title.slice(0, 30)}</h2>
//           <p><b>Post id</b>: ${id}</p>
//           <p><b>Author id</b>: ${userId}</p>
//           <p>${body}</p>
//         </li>`;
//     })
//     .join("");
//   postList.innerHTML = markup;
// }

import { BooksApi } from './books-api.js';

const booksApi = new BooksApi();

import { renderShoppingList,  renderBookFromLocalStorage, onRemoveFromShoppingList } from './render-main-page.js';

// export function renderShoppingList() {
//   const arrayOfBooks = JSON.parse(localStorage.getItem('books'));
//   if (!arrayOfBooks) return;
//   arrayOfBooks.forEach(book => renderBookFromLocalStorage(book));
// }



// export async function renderBookFromLocalStorage(id) {
//   const book = await booksApi.getBook(id);

//   const markup = `
//   <li id="${book._id}">
//     <img src="${book.book_image}" alt="${book.title}">
//     <h3>${book.title}</h3>
//     <p>Author: ${book.author}</p>
//     <p>Publisher: ${book.publisher}</p>
//     <a href="${book.amazon_product_url}" target="_blank">Buy on Amazon</a>
//     <button type="button">Remove from shopping list</button>
//   </li>`;

//   shoppingList.insertAdjacentHTML('beforeend', markup);
// }



// export function onRemoveFromShoppingList(e) {
//   if (e.target.nodeName !== 'BUTTON') return;
//   const element = e.target.parentNode;
//   const id = element.id;
//   const index = localStorageItems.indexOf(id);
//   localStorageItems.splice(index, 1);
//   localStorage.setItem('books', JSON.stringify(localStorageItems));
//   element.remove();
// }



// shoppingList.addEventListener('click', onRemoveFromShoppingList);