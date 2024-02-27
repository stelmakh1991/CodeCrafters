import axios from 'https://cdn.skypack.dev/axios';

async function getBooksAndAddToLocalStorage(array) {
  const localStorageArray = [];

  try {
    // Use Promise.all to await all Axios requests concurrently
    await Promise.all(
      array.map(async id => {
        const url = `https://books-backend.p.goit.global/books/${id}`;
        const response = await axios.get(url);
        localStorageArray.push(response.data); // Push entire book object to the array
      })
    );

    // Convert the array to a string before storing it in local storage
    localStorage.setItem('booksArray', JSON.stringify(localStorageArray));
  } catch (error) {
    console.error('Error fetching books:', error);
    // Optionally, you can handle the error here, e.g., display an error message to the user
    iziToast.error({
      title: 'Error',
      message: `Oops! Something went wrong while fetching books. Please try again later or contact support if the issue persists.`,
      position: 'topRight',
    });
  }
}

const booksToFetch = [
  '643282b1e85766588626a0dc',
  '643282b1e85766588626a080',
  '643282b1e85766588626a0b2',
  '643282b1e85766588626a086',
  '643282b1e85766588626a085',
];

getBooksAndAddToLocalStorage(booksToFetch);

// ===================== Get from local storage ========================================================================

const shoppingList = document.querySelector('.shopping-list');
const placeholder = document.querySelector('.shop-list-placeholder');
const localStorageItems = JSON.parse(localStorage.getItem('booksArray')) || [];

// Рендер Shopping list без реквеста на сервер
export function renderShoppingListFromLocalStorage() {
  // const localStorageItems = JSON.parse(localStorage.getItem('booksArray')) || [];
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
        <div class="delete-btn-icon"> </div> </div> </button> 

        <div class="shopping-list-div-image"> <img class="shopping-list-image" src="${book.book_image}" alt="${book.title}"> </div> 

        <div class="shopping-list-text"> <h2 class="shopping-list-item-header">${book.title}</h2>
        
        <p class="shopping-list-item-category">${book.list_name}</p> 
        <div class="description-wrapper"><p class="shopping-list-item-description">${book.description}</p></div>
        
        <div class="link-container"> 
        <p class="shopping-list-item-author">${book.author}</p>
        <div class=""link-wrapper>
            <a class="amazon-icon" href="${book.amazon_product_url}" target="_blank" rel="noopener noreferrer nofollow"> <div class="amazon-logo hover-items-amaz-books"> <img src="./png/amazon-1x.png" alt="Amazon" />
            </div> </a>
            <a class="apple-icon" href="${book.buy_links[1].url}" target="_blank" rel="noopener noreferrer nofollow"> <div class="apple-books-logo hover-items-amaz-books">
            <img src="./png/amazon-book-1x.png" alt="Apple book"/>
            </div> </a>
        </div>
        </div>
        </div>
        </li>`;
  shoppingList.insertAdjacentHTML('beforeend', markup);
}

renderShoppingListFromLocalStorage();

function toggleVisibility() {
    if (localStorageItems.length === 0) {
        placeholder.style.display = 'block'; // Display placeholder if no items left
    } else {
        placeholder.style.display = 'none'; // Hide placeholder if items exist
    }
}

toggleVisibility();

// const deleteBtn = document.querySelector('.delete-btn');

const deleteBtns = document.querySelectorAll('.delete-btn');

deleteBtns.forEach(btn => {
    btn.addEventListener('click', onRemoveFromShoppingList);
});

function onRemoveFromShoppingList(e) {
    const btn = e.currentTarget; // Current button clicked
    const listItem = btn.closest('.shopping-list-item'); // Find the closest shopping list item
    const id = listItem.dataset.id; // Get the ID from the data attribute
    const updatedItems = localStorageItems.filter(item => item._id !== id); // Filter out the item with matching ID
    localStorage.setItem('booksArray', JSON.stringify(updatedItems)); // Update local storage
    listItem.remove(); // Remove the list item from the DOM
    
    // Update localStorageItems array
    const index = localStorageItems.findIndex(item => item._id === id);
    localStorageItems.splice(index, 1);
    
    // Check if updatedItems array is empty and remove the entire array from local storage if it is
    if (updatedItems.length === 0) {
        localStorage.removeItem('booksArray');
  }
  
  toggleVisibility();
}
