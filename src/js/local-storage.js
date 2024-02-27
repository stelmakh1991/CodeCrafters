// Створюємо масив для збереження книг у localStorage
export const localStorageItems = JSON.parse(localStorage.getItem('books')) || [];

// Додавання об'єкта книги до localStorage без реквеста на сервер
export async function onAddAndRemoveToLocalStorageOnModal(e) {
  const bookElement = e.target.closest('.book');

  if (!bookElement) return;

  const id = bookElement.id;
  const title = bookElement.querySelector('h3').textContent;
  const description = bookElement.querySelector('.description').textContent;
  const author = bookElement.querySelector('.author').textContent;
  const publisher = bookElement.querySelector('.publisher').textContent;
  const bookImage = bookElement.querySelector('img').src;
  const amazonProductUrl = bookElement.querySelector('.amazon-link').href;

  const book = {
    _id: id,
    title: title,
    description: description,
    author: author,
    publisher: publisher,
    book_image: bookImage,
    amazon_product_url: amazonProductUrl,
  };

  if (e.target.textContent === 'Add to shopping list') {
    if (localStorageItems.find(item => item._id === id)) return;

    e.target.textContent = 'Remove from shopping list';
    localStorageItems.push(book);
    localStorage.setItem('books', JSON.stringify(localStorageItems));
  } else if (e.target.textContent === 'Remove from shopping list') {
    const index = localStorageItems.findIndex(item => item._id === id);

    if (index !== -1) {
      localStorageItems.splice(index, 1);
      localStorage.setItem('books', JSON.stringify(localStorageItems));
      e.target.textContent = 'Add to shopping list';
    }
  }
}

// Рендер сторінки Shopping List без реквеста на сервер
export function renderShoppingListFromLocalStorage() {
  try {
    const localStorageItems = JSON.parse(localStorage.getItem('books')) || [];
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

// Рендер книги з Shopping List без реквеста на сервер
export function renderBookFromLocalStorageWithoutFetch(book) {
  const markup = `
  <li id="${book._id}">
    <img src="${book.book_image}" alt="${book.title}">
    <h3>${book.title}</h3>
    <p>${book.author}</p>
    <p>${book.publisher}</p>
    <a href="${book.amazon_product_url}" target="_blank">Buy on Amazon</a>
    <button type="button">Remove from shopping list</button>
  </li>`;

  shoppingList.insertAdjacentHTML('beforeend', markup);
}

// Видалення книги зі сторінки Shopping List та зі сховища
export function onRemoveFromShoppingListAndLocalStorage(e) {
  if (e.target.nodeName !== 'BUTTON') return;

  const element = e.target.parentNode;
  const id = element.id;
  const index = localStorageItems.findIndex(item => item._id === id);

  if (index !== -1) {
    localStorageItems.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(localStorageItems));
  }

  element.remove();
}
