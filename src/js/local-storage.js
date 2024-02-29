// Створюємо масив для збереження книг у localStorage
export const localStorageItems = JSON.parse(localStorage.getItem('books')) || [];
export const shoppingList = document.querySelector('.shopping-list');

import amazonImage from './png/amazon-book-1x.png';
import appleImage from './png/amazon-1x.png';

// Додавання об'єкта книги до localStorage без реквеста на сервер
export async function onAddAndRemoveToLocalStorageOnModal(e) {
  const bookElement = e.target.closest('.book-modal-item');

  if (!bookElement) return;

  const id = bookElement.id;
  const title = bookElement.querySelector('h3').textContent;
  const description = bookElement.querySelector('.book-modal-descr').textContent;
  const author = bookElement.querySelector('.book-modal-author').textContent;
  const bookImage = bookElement.querySelector('.book-modal-card-img').src;
  const amazonProductUrl = bookElement.querySelector('.book-modal-link-amazon').href;
  const appleProductUrl = bookElement.querySelector('.book-modal-link-apple').href;
  const category = bookElement.querySelector('.book-modal-thumb').dataset.id;
  const modalText = bookElement.querySelector('.modal-text');
  // modalText.style.display = 'none';
  const book = {
    _id: id,
    title: title,
    description: description,
    author: author,
    book_image: bookImage,
    category: category, 
    amazon_product_url: amazonProductUrl,
    apple_product_url: appleProductUrl,
  };

  if (e.target.textContent === 'Add to shopping list') {
    modalText.style.display = 'block';
    if (localStorageItems.find(item => item._id === id)) return;

    e.target.textContent = 'Remove from shopping list';
    // modalText.style.display = 'block';
    localStorageItems.push(book);
    localStorage.setItem('books', JSON.stringify(localStorageItems));
  } else if (e.target.textContent === 'Remove from shopping list') {
    modalText.style.display = 'none';
    const index = localStorageItems.findIndex(item => item._id === id);

    if (index !== -1) {
      localStorageItems.splice(index, 1);
      localStorage.setItem('books', JSON.stringify(localStorageItems));
      e.target.textContent = 'Add to shopping list';
    }
  }
}

// Рендер Shopping list без реквеста на сервер
export function renderShoppingListFromLocalStorage() {
  // const localStorageItems = JSON.parse(localStorage.getItem('books')) || [];
  try {
    if (!localStorageItems) return;
    localStorageItems.forEach(book =>
      renderBookFromLocalStorageWithoutFetch(book)
    );
  } catch (error) {
    console.log(error);
    iziToast.error({
      title: 'Error',
      message: `Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${error.message}`,
      position: 'topRight',
    });
  }
}

// Рендер книги без реквеста на сервер
export function renderBookFromLocalStorageWithoutFetch(book) {
  const markup = `<li class="shopping-list-item" data-id="${book._id}">
        <button type="button" class="delete-btn" title="Delete">
        <div class="delete-btn-icon"> </div> </button>
        <div class="shopping-list-div-image"> <img class="shopping-list-image" src="${book.book_image}" alt="${book.title}"> </div>
        <div class="shopping-list-text"> <h2 class="shopping-list-item-header">${book.title}</h2>
        <p class="shopping-list-item-category">${book.category}</p>
        <div class="description-wrapper"><p class="shopping-list-item-description">${book.description}</p></div>
        <div class="link-container">
        <p class="shopping-list-item-author">${book.author}</p>
        <div class=""link-wrapper>
            <a class="amazon-icon" href="${book.amazon_product_url}" target="_blank" rel="noopener noreferrer nofollow"> <div class="amazon-logo hover-items-amaz-books"> <img src="${amazonImage}" alt="Amazon" />
            </div> </a>
            <a class="apple-icon" href="${book.apple_product_url}" target="_blank" rel="noopener noreferrer nofollow"> <div class="apple-books-logo hover-items-amaz-books">
            <img src="${appleImage}" alt="Apple book"/>
            </div> </a>
        </div>
        </div>
        </div>
        </li>`;
  shoppingList.insertAdjacentHTML('beforeend', markup);
}
