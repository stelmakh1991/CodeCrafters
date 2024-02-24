import axios from 'axios';
const options = {};
const refs = {
  list: document.querySelector('.categories-list'),
  categoriesBox: document.querySelector('.categories-box'),
};
async function addList() {
  const obj = await getList();
  const link = obj
    .map(
      list => ` <li class="categories-item" name="${list.list_name}">
         <button class="btn-list" type="button" name="${list.list_name}">${list.list_name}</button>
        </li>
        `
    )
    .join('');
  refs.list.insertAdjacentHTML('beforeend', link);
}

async function getList() {
  const res = await axios.get(
    'https://books-backend.p.goit.global/books/category-list',
    {
      params: options,
    }
  );
  return res.data;
}
addList();
//https://books-backend.p.goit.global/books/category?category=$
