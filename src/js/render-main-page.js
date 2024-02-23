import { BooksApi } from './js/books-api';

const booksApi = new BooksApi();

const categoriesList = document.querySelector('.categories-list');
const categoryItem = document.querySelector('.category');
const bookItem = document.querySelector('.book-item');

export async function renderBooksList() {
  const categories = await booksApi.getCategories();
  const markup = categories
    .map(
      ({ list_name }) =>
        `<a class="category-link" href=""><li>${list_name}</li></a>`
    )
    .join('');

  categoriesList.insertAdjacentHTML('beforeend', markup);

  const arrOfCategories = document.querySelectorAll('.category-link');

  arrOfCategories.forEach(category =>
    category.addEventListener('click', e => {
      e.preventDefault();
      categoryItem.innerHTML = '';
      renderCategory(category.textContent);
    })
  );
}

export async function renderTopBooks() {
  const topBooks = await booksApi.getTopBooks();

  topBooks.forEach(list => {
    const listHeaderHTML = `<h2>${list.list_name}</h2>`;

    const booksHTML = list.books
      .map(book => {
        return `
        <div class="book" id="${book._id}">
            <img src="${book.book_image}" alt="${book.title}">
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Publisher: ${book.publisher}</p>
            <a href="${book.amazon_product_url}" target="_blank">Buy on Amazon</a>
        </div>`;
      })
      .join('');

    const listOfTopBooks = listHeaderHTML + booksHTML;
    categoryItem.insertAdjacentHTML('beforeend', listOfTopBooks);
  });
}

export async function renderCategory(category) {
  const booksList = await booksApi.getCategory(category);
  const markup = booksList
    .map(book => {
      return `<div class="book" id="${book._id}">
            <img src="${book.book_image}" alt="${book.title}">
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Publisher: ${book.publisher}</p>
            <a href="${book.amazon_product_url}" target="_blank">Buy on Amazon</a>
        </div>`;
    })
    .join('');

  categoryItem.insertAdjacentHTML('beforeend', markup);
}

export async function renderBook(id) {
  const book = await booksApi.getBook(id);

  const markup = `<img src="${book.book_image}" alt="${book.title}">
                  <h3>${book.title}</h3>
                  <p>Author: ${book.author}</p>
                  <p>Publisher: ${book.publisher}</p>
                  <a href="${book.amazon_product_url}" target="_blank">Buy on Amazon</a>`;

  bookItem.insertAdjacentHTML('beforeend', markup);
}

renderBooksList();
renderTopBooks();
