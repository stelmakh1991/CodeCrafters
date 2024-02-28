import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { BooksApi } from './books-api.js';

const booksApi = new BooksApi();

// Створюємо три змінні для додавання до них розмітки, вони мають посилатися на 3 елемента <ul> в html
// const categoriesList = document.querySelector('.categories-list');
// const categoryItem = document.querySelector('.category');
// const shoppingList = document.querySelector('.shopping-list');

// Створюємо масив для збереження книг у localStorage
// const localStorageItems = JSON.parse(localStorage.getItem('books')) || [];

export async function renderBooksList() {
  try {
    const categories = await booksApi.getCategories();
    const markup = categories
      .map(
        ({ list_name }) =>
          `<a class="category-link" href=""><li>${list_name}</li></a>`
      )
      .join('');

    categoriesList.insertAdjacentHTML('beforeend', markup);
  } catch (error) {
    console.log(error);
    iziToast.error({
      title: 'Error',
      message: `Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${error.message}`,
      position: 'topRight',
    });
  }
}

export async function renderTopBooks() {
  try {
    const topBooks = await booksApi.getTopBooks();

    topBooks.forEach(list => {
      const listHeaderHTML = `<h2>${list.list_name}</h2>`;
      const showCategoryBtnHTML = `<button class="category-btn" data-category="${list.list_name}" type="button">See more</button>`;

      const markup = list.books
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

      const listOfTopBooks = listHeaderHTML + showCategoryBtnHTML + markup;

      categoryItem.insertAdjacentHTML('beforeend', listOfTopBooks);
    });
  } catch (error) {
    console.log(error);
    iziToast.error({
      title: 'Error',
      message: `Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${error.message}`,
      position: 'topRight',
    });
  }
}

export async function renderCategory(category) {
  try {
    const booksList = await booksApi.getCategory(category);

    const categoryHeaderHTML = `<h2>${category}</h2>`;
    const markup = booksList
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

    const listOfCategoryBooks = categoryHeaderHTML + markup;

    categoryItem.insertAdjacentHTML('beforeend', listOfCategoryBooks);
  } catch (error) {
    console.log(error);
    iziToast.error({
      title: 'Error',
      message: `Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${error.message}`,
      position: 'topRight',
    });
  }
}

export async function renderBook(id) {
  try {
    const book = await booksApi.getBook(id);

    const markup = `
  <li id="${book._id}">
    <img src="${book.book_image}" alt="${book.title}">
    <h3>${book.title}</h3>
    <p>Author: ${book.author}</p>
    <p>Publisher: ${book.publisher}</p>
    <a href="${book.amazon_product_url}" target="_blank">Buy on Amazon</a>
    <button type="button">Add to shopping list</button>
  </li>`;

    categoryItem.insertAdjacentHTML('beforeend', markup);
  } catch (error) {
    console.log(error);
    iziToast.error({
      title: 'Error',
      message: `Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${error.message}`,
      position: 'topRight',
    });
  }
}

export function onGalleryItemClick(e) {
  e.preventDefault();
  categoryItem.innerHTML = '';
  const category = e.target.textContent;
  renderCategory(category);
}

export function onShowCategoryBtnClick(e) {
  if (!e.target.classList.contains('category-btn')) return;
  const category = e.target.dataset.category;
  categoryItem.innerHTML = '';
  renderCategory(category);
}

export function openModal(e) {
  if (e.target.nodeName !== 'IMG') return;
  e.preventDefault();
  e.stopPropagation();
  const id = e.target.parentNode.id;
  categoryItem.innerHTML = '';
  renderBook(id);
}

export function onAddAndRemoveToShoppingListOnModal(e) {
  if (e.target.textContent === 'Add to shopping list') {
    const id = e.target.parentNode.id;
    if (localStorageItems.includes(id)) return;
    e.target.textContent = 'Remove from shopping list';
    localStorageItems.push(id);
    localStorage.setItem('books', JSON.stringify(localStorageItems));

    return;
  }

  if (e.target.textContent === 'Remove from shopping list') {
    const id = e.target.parentNode.id;
    const index = localStorageItems.indexOf(id);

    if (index !== -1) {
      localStorageItems.splice(index, 1);
      localStorage.setItem('books', JSON.stringify(localStorageItems));
      e.target.textContent = 'Add to shopping list';

      return;
    }
  }
}

export function renderShoppingList() {
  try {
    const arrayOfBooks = JSON.parse(localStorage.getItem('books'));
    if (!arrayOfBooks) return;
    arrayOfBooks.forEach(book => renderBookFromLocalStorage(book));
  } catch (error) {
    console.log(error);
    iziToast.error({
      title: 'Error',
      message: `Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${error.message}`,
      position: 'topRight',
    });
  }
}

export async function renderBookFromLocalStorage(id) {
  try {
    const book = await booksApi.getBook(id);

    const markup = `
  <li id="${book._id}">
    <img src="${book.book_image}" alt="${book.title}">
    <h3>${book.title}</h3>
    <p>Author: ${book.author}</p>
    <p>Publisher: ${book.publisher}</p>
    <a href="${book.amazon_product_url}" target="_blank">Buy on Amazon</a>
    <button type="button">Remove from shopping list</button>
  </li>`;

    shoppingList.insertAdjacentHTML('beforeend', markup);
  } catch (error) {
    console.log(error);
    iziToast.error({
      title: 'Error',
      message: `Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${error.message}`,
      position: 'topRight',
    });
  }
}

export function onRemoveFromShoppingList(e) {
  if (e.target.nodeName !== 'BUTTON') return;
  const element = e.target.parentNode;
  const id = element.id;
  const index = localStorageItems.indexOf(id);
  localStorageItems.splice(index, 1);
  localStorage.setItem('books', JSON.stringify(localStorageItems));
  element.remove();
}

// Додаємо слухачі подій для рендера окремої категорії, відкриття модалки, додавання та видалення до Shopping List
// categoriesList.addEventListener('click', onGalleryItemClick);
// categoryItem.addEventListener('click', onShowCategoryBtnClick);
// categoryItem.addEventListener('click', openModal);
// categoryItem.addEventListener('click', onAddAndRemoveToShoppingListOnModal);
// shoppingList.addEventListener('click', onRemoveFromShoppingList);

// Рендер списка категорій, топ-5 книг кожної категорії та Shopping List, де рендеряться об'єкти з localStorage
// renderBooksList();
// renderTopBooks();
// renderShoppingList();