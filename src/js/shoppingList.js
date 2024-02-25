// import { BooksApi } from './books-api.js';
// const booksApi = new BooksApi();

// const shoppingList = document.querySelector('.shopping-list');

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
//   shoppingList.innerHTML = markup; // postList.innerHTML = markup;
// }

// import { renderShoppingList,  renderBookFromLocalStorage, onRemoveFromShoppingList } from './render-main-page.js';

// function renderShoppingList() {
//   const arrayOfBooks = JSON.parse(localStorage.getItem('books'));
//   if (!arrayOfBooks) return;
//   arrayOfBooks.forEach(book => renderBookFromLocalStorage(book));
// }



// async function renderBookFromLocalStorage(id) {
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



// function onRemoveFromShoppingList(e) {
//   if (e.target.nodeName !== 'BUTTON') return;
//   const element = e.target.parentNode;
//   const id = element.id;
//   const index = localStorageItems.indexOf(id);
//   localStorageItems.splice(index, 1);
//   localStorage.setItem('books', JSON.stringify(localStorageItems));
//   element.remove();
// }



// shoppingList.addEventListener('click', onRemoveFromShoppingList);
// import axios from 'axios';
// import { BooksApi } from './books-api.js';

// const booksApi = new BooksApi();

// const shoppingList = document.querySelector('.shopping-list');

// async function renderShoppingList() {
//   const arrayOfBooks = JSON.parse(localStorage.getItem('books'));
//   if (!arrayOfBooks) return;
//   arrayOfBooks.forEach(bookId => renderBookFromLocalStorage(bookId));
// }

// async function renderBookFromLocalStorage(bookId) {
//   try {
//     const book = await booksApi.getBook(bookId);

//     const markup = `
//       <li id="${book._id}">
//         <img src="${book.book_image}" alt="${book.title}">
//         <h3>${book.title}</h3>
//         <p>Author: ${book.author}</p>
//         <p>Publisher: ${book.publisher}</p>
//         <a href="${book.amazon_product_url}" target="_blank">Buy on Amazon</a>
//         <button type="button" data-id="${book._id}">Remove from shopping list</button>
//       </li>`;

//     shoppingList.insertAdjacentHTML('beforeend', markup);
//   } catch (error) {
//     console.error('Error rendering book from local storage:', error);
//   }
// }

// Call renderShoppingList function to render books on page load
// renderShoppingList();

// Example event delegation for removing books
// shoppingList.addEventListener('click', async event => {
//   if (event.target.tagName === 'BUTTON') {
//     const bookId = event.target.dataset.id;
//     // Example of removing book from local storage
//     // This should also remove the book from the UI
//     // after successful removal from local storage
//     try {
//       // Your removal logic here
//       // Example: await booksApi.removeBook(bookId);
//       const bookElement = document.getElementById(bookId);
//       if (bookElement) {
//         bookElement.remove();
//       }
//     } catch (error) {
//       console.error('Error removing book:', error);
//     }
//   }
// });


// ======================================================= Load to local storage =======================================

import axios from 'https://cdn.skypack.dev/axios';

async function getBooksAndAddToLocalStorage(array) {
  const localStorageArray = [];
  
  try {
    // Use Promise.all to await all Axios requests concurrently
    await Promise.all(array.map(async (id) => {
      const url = `https://books-backend.p.goit.global/books/${id}`;
      const response = await axios.get(url);
      localStorageArray.push(response.data); // Push entire book object to the array
    }));
    
    // Convert the array to a string before storing it in local storage
    localStorage.setItem('booksArray', JSON.stringify(localStorageArray));
  } catch (error) {
    console.error('Error fetching books:', error);
  }
}

const booksToFetch = ["643282b1e85766588626a0dc", "643282b1e85766588626a0dc", "643282b1e85766588626a0dc", '643282b1e85766588626a0dc'];

getBooksAndAddToLocalStorage(booksToFetch);

// ===================== Get from local storage ========================================================================

const shoppingList = document.querySelector('.shopping-list');

function getBooksFromLocalStorage(key) {
    const getData = localStorage.getItem(key);
    try {
      const arrayToRender = JSON.parse(getData);
      console.log(arrayToRender);
      arrayToRender.forEach(book => {
        const markup = `<li class="shopping-list-item"> <div class="shopping-list-div-image"> <img class="shopping-list-image" src="${book.book_image}" alt=""> </div> <div class="shopping-list-text-one"> <div shopping-list-div-descr> <h2 class="shopping-list-item-header">${book.title}</h2> <p class="shopping-list-item-category">${book.list_name}</p> <p class="shopping-list-item-description">${book.description}</p> </div> <div> <p class="shopping-list-item-author">${book.author}</p> <a href="${book.amazon_product_url}" target="_blank">Amazon svg</a> <a href="${book.amazon_product_url}" target="_blank">Apple bookssvg</a> </div> </div>
  </li>`;
        
        shoppingList.insertAdjacentHTML('beforeend', markup);
      });
    } catch {
        return getData;
    }
}

// <button type="button">Remove from shopping list</button>

getBooksFromLocalStorage('booksArray');