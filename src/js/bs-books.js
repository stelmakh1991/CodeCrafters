
const refs = {
    bestCategories: document.querySelector('.bestCategories'), 
}

  async function getBestBooks (){
    const url = 'https://books-backend.p.goit.global/books/top-books';
    try {
      const res = await fetch(url);
      const data = res.json();
      return data;
    } catch (error) {
      console.error(error.message);
    }
  };
  let booksNumber = 0;

  function getBooksNumber() {
      const screenWidth = window.innerWidth;
    
      if (screenWidth < 768) {
        booksNumber = 1;
        
      } else if (screenWidth >= 768 && screenWidth < 1440) {
        booksNumber = 3;
        
      } else {
        booksNumber = 5;
        
      }
    };
  
 function createGalleryItem(data) {
    const markup = `
      <h1 class="bs-title">
        Best Sellers <span class="bs-title-blue">Books</span>
      </h1> <ul class="bs-list"> ${data
        .map(elements => {
          return `
        <li class="books-list"> 
        <h3 class="category-name">${elements.list_name}</h3>
          <div class="thumb" data-list-id="${elements.list_name}">
            ${elements.books
              .map(book => {
                return `
  
              <a href="#" class="books-item-link link" aria-label="books-item-link" rel="noopener noreferrer" data-id='${book._id}'>
        
              <div class="books-card">
                <img
                  src="${book.book_image}"
                  alt="${book.title}"
                  class="books-card-title-img"
                  width="180"
                  height="256"
                  loading="lazy"
                />

               </div> 
                <div class="books-descr">
                  <h3 class="book-title">${book.title}</h3>
                  <p class="books-author">${book.author}</p>
                </div>
             </a>`;
              })
              .join('')};
          </div>
          <button class="bl-see-more-btn" type="button" data-id="${
            elements.list_name
          }">see more</button>
        </li>
        `;
        })
        .join('')}</ul>`;
  
    refs.bestCategories.insertAdjacentHTML('beforeend', markup);
  
  }

async function createMarkup() {
  const data = await getBestBooks();
  createGalleryItem(data);
}
 createMarkup();

 

  
//   async function renderTopBooks() {
//     let bsArray = [];
//     const topBooks = await fetchApi();
//     console.log(topBooks);
// //     getBooksNumber();
// //   for (let i = 0; i < topBooks.length; i++) {
// //     const element = topBooks[i];
// //     bsArray.push(element);
// //   }
// //   console.log(bsArray);
//   const booksHTML = topBooks
//         .map(({books, list_name 
//         }) => {
//           return `
//           <div class="book" id="">
//               <h3 class="category-name">${list_name}</h3>
//               <div class="thumb">
//               <img src="" alt="">
//               </div>
//               <h3 class="book-title"></h3>
//               <p class="book-author">Author: </p>
//           </div>

//           <div class="btn-thumb">
//           <button id="${list_name}" class="bl-see-more-btn">SEE MORE</button>
//           </div>`;
          
//         })
//         .join('');
//         console.log(booksHTML);
//          const listOfTopBooks = booksHTML;
//           refs.allCategoryList.innerHTML = listOfTopBooks;
//      } 



//      for (const book of topBooks) {
//             const firstTopBook = book.books[0];
//             bsArray.push(firstTopBook);
// const booksHTML = bsArray
//         .map(({_id, list_name, book_image, title, author 
//         }) => {
//           return `
//           <div class="book" id="${_id}">
//               <h3 class="category-name">${list_name}</h3>
//               <div class="thumb">
//               <img src="${book_image}" alt="${title}">
//               </div>
//               <h3 class="book-title">${title}</h3>
//               <p class="book-author">Author: ${author}</p>
//           </div>

//           <div class="btn-thumb">
//           <button id="${list_name}" class="bl-see-more-btn">SEE MORE</button>
//           </div>`;
          
//         })
//         .join('');
//          const listOfTopBooks = booksHTML;
//           refs.allCategoryList.innerHTML = listOfTopBooks;
//      } 
//         }
// async function renderTopBooks() {
//     const topBooks = await fetchApi();
//     console.log(topBooks);
  
//     topBooks.forEach(list => {
//       const listHeaderHTML = `<h2 class="category-name">${list.list_name}</h2>`;
//       const showCategoryBtnHTML = `<button class="bl-see-more-btn" data-category="${list.list_name}" type="button">See more</button>`;
  
//       const booksHTML = list.books
//         .map(book => {
//           return `
//           <div class="book" id="${book._id}">
//           <div class="thumb">
//             <img src="${book.book_image}" alt="${book.title}">
//             </div>
//             <h3 class="category-name">${book.title}</h3>
//             <p class="book-author">Author: ${book.author}</p>
//           </div>
//           `;
//         })
//         .join('');
  
//       const listOfTopBooks = listHeaderHTML + booksHTML + showCategoryBtnHTML;
//       refs.allCategoryList.insertAdjacentHTML('beforeend', listOfTopBooks);
//     });
//   }



// renderTopBooks();




//Под один вывод

// async function renderTopBooks() {
//     let bsArray = [];
//     const topBooks = await fetchApi();
//     getBooksNumber();
//      for (const book of topBooks) {
//             const firstTopBook = book.books[0];
//             bsArray.push(firstTopBook);
// const booksHTML = bsArray
//         .map(({_id, list_name, book_image, title, author 
//         }) => {
//           return `
//           <div class="book" id="${_id}">
//               <h3 class="category-name">${list_name}</h3>
//               <div class="thumb">
//               <img src="${book_image}" alt="${title}">
//               </div>
//               <h3 class="book-title">${title}</h3>
//               <p class="book-author">Author: ${author}</p>
//           </div>

//           <div class="btn-thumb">
//           <button id="${list_name}" class="bl-see-more-btn">SEE MORE</button>
//           </div>`;
          
//         })
//         .join('');
//          const listOfTopBooks = booksHTML;
//           refs.allCategoryList.innerHTML = listOfTopBooks;
//      } 
//         }
