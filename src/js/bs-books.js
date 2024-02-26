import { BooksApi } from './books-api';
const booksApi = new BooksApi();

const refs = {
  bestBooksSection: document.querySelector('.bs-books-section'),
};

//======================Запити (потім видалити)=====================================
async function getBestBooks() {
  const url = 'https://books-backend.p.goit.global/books/top-books';
  try {
    const res = await fetch(url);
    const data = res.json();
    return data;
  } catch (error) {
    console.error(error.message);
  }
}
async function getCategoryBooks(categoryName) {
  const url = `https://books-backend.p.goit.global/books/category?category=${categoryName}`;
  try {
    const res = await fetch(url);
    const data = res.json();
    return data;
  } catch (error) {
    console.error(error.message);
  }
}
//===================================================================

//======================Рендер та визов головної сторінки Top Sellers Books=============

async function createGalleryItem(data) {
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
  
              <a href="#" class="bs-books-item-link link" rel="noopener noreferrer" data-id='${
                book._id
              }'>
        
              <div class="bs-books-card">
                <img
                  src="${book.book_image}"
                  alt="${book.title}"
                  class="bs-books-card-img"
                />
                <div class="bs-books-overlay">
                <p class="bs-books-overlay-title">quick view</p>
                </div>
               </div> 
                <div class="bs-books-item-thumb">
                  <h3 class="bs-books-item-title">${book.title.slice(
                    0,
                    18
                  )}</h3>
                  <p class="bs-books-author">${book.author.slice(0, 18)}</p>
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
  const data = await getBestBooks();
  createGalleryItem(data);
}
// async function createMarkup() {
//   const data = await booksApi.getTopBooks();
//   createGalleryItem(data);
// }
await createMarkup();

//==========Рендер та визов головної сторінки Category  при кліку на кнопку See More=============

const SeeMoreBtn = document.querySelector('.bs-list');

SeeMoreBtn.addEventListener('click', async function (event) {
  if (event.target.nodeName !== 'BUTTON') return;
  const category = event.target.dataset.id;

  try {
    refs.bestBooksSection.innerHTML = '';
    const array = await getCategoryBooks(category);
    createCategoryItem(array);
  } catch (error) {
    console.error(error.message);
  }
});

function createCategoryItem(books) {
  let arr = books;
  let bookCategoryTitle = `<h1 class="bs-category-title">${books[0].list_name}</h1>`;
  let bookCategoryList = '<ul class="bs-category-list list">';
  arr.forEach(({ _id, book_image, title, author, list_name }) => {
    bookCategoryList += `<li class="bs-category-item" id="${_id}">
    <div class="bs-books-thumb" data-list-id="${list_name}">
    <a href="#" class="bs-books-item-link link" rel="noopener noreferrer" data-id='${_id}'>
    <div class="bs-category-books-card">  
      <img src="${book_image}" alt="${title}" class="bs-books-card-img"/>
      <div class="bs-books-overlay">
                <p class="bs-books-overlay-title">quick view</p>
                </div>
      </div>
      <div class="bs-books-item-thumb">
      <h3 class="bs-books-item-title">${title.slice(0, 18)}</h3>
      <p class="bs-books-author">${author.slice(0, 18)}</p>
      </div>
      </a>
      </li>
      </div>`;
  });
  bookCategoryList += '</ul>';
  bookCategoryTitle += bookCategoryList;
  refs.bestBooksSection.insertAdjacentHTML('beforeend', bookCategoryTitle);
}

//========================Hover button See More===========================

SeeMoreBtn.addEventListener('mouseover', handlerButtonOver);
SeeMoreBtn.addEventListener('mouseout', handlerButtonOut);

function handlerButtonOver(event) {
  if (event.target.nodeName !== 'BUTTON') return;
  event.target.style.color = 'white';
  event.target.style.backgroundColor = 'rgb(79, 46, 232)';
}
function handlerButtonOut(event) {
  if (event.target.nodeName !== 'BUTTON') return;
  event.target.style.color = 'black';
  event.target.style.backgroundColor = 'white';
}
//=========================================================================
