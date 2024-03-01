import axios from 'axios';
import { BooksApi } from './books-api.js';
const booksApi = new BooksApi();
const options = {};
const refs = {
  list: document.querySelector('.categories-List'),
  categoriesBox: document.querySelector('.categories-box'),
  booksSection: document.querySelector('.bs-books-section'),
  btnList: document.querySelector('.btn-list'),
};
const btnAllCategories = document.querySelector('.js-bac');

async function addList() {
  const obj = await booksApi.getCategories();
  const link = obj
    .map(
      list => ` <li class="categories-item" name="${list.list_name}">
         <button class="btn-list" type="button" name="${list.list_name}">${list.list_name}</button>
        </li>
        `
    )
    .sort()
    .join('');
  refs.list.insertAdjacentHTML('beforeend', link);
}
addList();

refs.list.addEventListener('click', renderCategories);

// async function getBooksCategorie(e) {
//   const res = await axios.get(
//     `https://books-backend.p.goit.global/books/category?category=${e.currentTarget.name}`,
//     {
//       params: options,
//     }
//   );
//   return res.data;
// }

async function renderCategories(event) {
  const res = await axios.get(
    `https://books-backend.p.goit.global/books/category?category=${event.target.name}`
  );
  createaGalleryCategories(res.data, event);

  
// localStorage.setItem('currentCategorie', event.target.name);
//   currentColorBtn(event);
  
  
}
async function createaGalleryCategories(data, event) {
  btnAllCategories.classList.remove("back-current");
  if (event.target.nodeName !== 'BUTTON') return;
  const categoriesArray = event.target.name.split(' ');
    const categoriesLastWord = categoriesArray[categoriesArray.length - 1];
    const categoriesFirstPart = categoriesArray
      .slice(0, categoriesArray.length - 1)
      .join(' ');
  const markup = `<h1 class="bs-books-title bs-book-title-mg">
  ${categoriesFirstPart} <span class="last-word-color">${categoriesLastWord}</span>
      </h1> <div><ul class="bs-list list">
       <li class="bs-books-item">
       <div class="categories-item" data-list-id="${event.target.name}">
       ${data
         .map(book => {
           return `
             <a href="#" class="link" rel="noopener noreferrer" data-id='${
               book._id
             }'>
        
              <div class="bs-books-card">
                <img
                  src="${book.book_image}"
                  alt="${book.title}"
                  class="bs-books-card-img"
                  data-id='${
                    book._id
                  }'
                />
                <div class="bs-books-overlay" data-id='${
                  book._id
                }'>
                <p class="bs-books-overlay-title" data-id='${
                  book._id
                }'>quick view</p>
                </div>
               </div> 
                <div class="bs-books-item-thumb">
                  <h3 class="bs-books-item-title">${book.title.slice(
                    0,
                    18
                  )}</h3>
                  <p class="bs-books-author">${book.author.slice(0, 18)}</p>
                </div>
             </a>
           `;
         })
         .join('')}</div> </li>
      </ul>
      </div>`;
  refs.booksSection.innerHTML = '';
  refs.booksSection.insertAdjacentHTML('beforeend', markup);
}

btnAllCategories.addEventListener('click', renderAll);


async function renderAll() {
  location.reload();
}


// function currentColorBtn(event) {

//   btnAllCategories.classList.remove('back-current');
//   btnAllCategoriesAll.forEach(element => {

//     if (event.target != element) {
//       element.classList.remove('back-current');
//     }
    
//   });

//   const current = localStorage.getItem('currentCategorie');
//   const currentEL = document.querySelector(`.btn-list[name="${current}"]`);
//   currentEL.classList.remove('back-current');
//   btnAllCategoriesAll.forEach(element => {
//     if (event.target.name === element.target.name) {
//       element.classList.add('back-current');
//     }
    
//   });

//   event.target.classList.add('back-current');
//   localStorage.removeItem('currentCategorie');
// }


