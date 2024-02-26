// import axios from 'https://cdn.skypack.dev/axios';
// import { BooksApi } from './books-api.js';

// import iziToast from 'izitoast';
// import 'izitoast/dist/css/iziToast.min.css';

// const booksApi = new BooksApi();

// const booksToFetch = ["643282b1e85766588626a0dc", "643282b1e85766588626a080", "643282b1e85766588626a0b2", '643282b1e85766588626a086', '643282b1e85766588626a085'];

// localStorage.setItem('books', JSON.stringify(booksToFetch));

// const shoppingList = document.querySelector('.shopping-list');

// function renderShoppingList() {
//   try {
//     const arrayOfBooks = JSON.parse(localStorage.getItem('books'));
//     if (!arrayOfBooks) return;
//     arrayOfBooks.forEach(book => renderBookFromLocalStorage(book));
//   } catch (error) {
//     console.log(error);
//     iziToast.error({
//       title: 'Error',
//       message: `Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${error.message}`,
//       position: 'topRight',
//     });
//   }

// }
// async function renderBookFromLocalStorage(id) {
//   try {
//     const book = await booksApi.getBook(id);
      
//     const markup = `<li class="shopping-list-item"> <div class="shopping-list-div-image"> <img class="shopping-list-image" src="${book.book_image}" alt=""> </div> <div class="shopping-list-text"> <div shopping-list-div-descr> <h2 class="shopping-list-item-header">${book.title}</h2> <p class="shopping-list-item-category">${book.list_name}</p> <p class="shopping-list-item-description">${book.description}</p> </div> <div class="shopping-list-div-buy"> <p class="shopping-list-item-author">${book.author}</p> </div> </div> </li>`;

//     shoppingList.insertAdjacentHTML('beforeend', markup);
//   } catch (error) {
//     console.log(error);
//     iziToast.error({
//       title: 'Error',
//       message: `Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${error.message}`,
//       position: 'topRight',
//     });
//   }
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

// renderShoppingList();

















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

const booksToFetch = ["643282b1e85766588626a0dc", "643282b1e85766588626a080", "643282b1e85766588626a0b2", '643282b1e85766588626a086', '643282b1e85766588626a085'];

getBooksAndAddToLocalStorage(booksToFetch);

// ===================== Get from local storage ========================================================================

const shoppingList = document.querySelector('.shopping-list');

function getBooksFromLocalStorage(key) {
    const getData = localStorage.getItem(key);
    try {
      const arrayToRender = JSON.parse(getData);
      console.log(arrayToRender);
      arrayToRender.forEach(book => {
        const markup = `<li class="shopping-list-item" data-id="${book._id}">

        <button type="button" class="delete-btn" title="Delete"> 
        <svg class="delete-btn-icon" width="16" height="16"> <use href="/svg-sprite.svg#icon-trash"></use> </svg> </button> 

        <div class="shopping-list-div-image"> <img class="shopping-list-image" src="${book.book_image}" alt="${book.title}"> </div> 

        <div class="shopping-list-text"> <h2 class="shopping-list-item-header">${book.title}</h2>
        
        <p class="shopping-list-item-category">${book.list_name}</p> 
        <p class="shopping-list-item-description">${book.description}</p>
        <p class="shopping-list-item-author">${book.author}</p>

        <div class="link-container"> 
        <a class="amazon-icon" href="${book.amazon_product_url}" target="_blank" rel="noopener noreferrer nofollow"> <div class="amazon-logo hover-items-amaz-books"></div> </a>
        <a class="apple-icon" href="${book.buy_links[1].url}" target="_blank" rel="noopener noreferrer nofollow"><div class="apple-books-logo hover-items-amaz-books"></div></a>
        </div>
        </div>
        </li>`;
        
      shoppingList.insertAdjacentHTML('beforeend', markup);
      });
    } catch {
        return getData;
    }
}

getBooksFromLocalStorage('booksArray');