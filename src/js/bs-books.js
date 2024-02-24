import { BooksApi } from "./books-api";

const refs = {
  bestBooksSection: document.querySelector('.bs-books-section'),
  seeMoreBtn: document.querySelector(".bs-books-see-more-btn")
};

const booksApi = new BooksApi();

// async function getBestBooks() {
//   const url = 'https://books-backend.p.goit.global/books/top-books';
//   try {
//     const res = await fetch(url);
//     const data = res.json();
//     return data;
//   } catch (error) {
//     console.error(error.message);
//   }
// }
// async function getCategoryBooks(categoryName) {
//     const url = `https://books-backend.p.goit.global/books/category?category=${categoryName}`;
//     try {
//       const res = await fetch(url);
//       const data = res.json();
//       return data;
//     } catch (error) {
//       console.error(error.message);
//     }
//   }

function createGalleryItem(data) {
  const markup = `
      <h1 class="bs-books-title">
        Best Sellers <span class="bs-books-title-blue">Books</span>
      </h1> <ul class="bs-list list"> ${data
        .map(elements => {
          return `
        <li class="bs-books-item"> 
        <h3 class="bs-books-category-title">${elements.list_name}</h3>
          <div class="bs-books-thumb" data-list-id="${elements.list_name}">
            ${elements.books
              .map(book => {
                return `
  
              <a href="#" class="bs-books-item-link link" rel="noopener noreferrer" data-id='${book._id}'>
        
              <div class="bs-books-card">
                <img
                  src="${book.book_image}"
                  alt="${book.title}"
                  class="bs-books-card-img"
                  width="180"
                  height="256"
                  loading="lazy"
                />

               </div> 
                <div class="bs-books-item-thumb">
                  <h3 class="bs-books-item-title">${book.title.slice(0, 18)}</h3>
                  <p class="bs-books-author">${book.author}</p>
                </div>
             </a>`;
              })
              .join('')}
          </div>
          <div class="bs-books-thumb-btn">
          <button class="bs-books-see-more-btn" type="button" data-id="${
            elements.list_name
          }">see more</button>
          </div>
          
        </li>
        `;
        })
        .join('')}</ul>`;

  refs.bestBooksSection.insertAdjacentHTML('beforeend', markup);
}

async function createMarkup() {
  const data = await booksApi.getTopBooks();
  createGalleryItem(data);
}
createMarkup();

