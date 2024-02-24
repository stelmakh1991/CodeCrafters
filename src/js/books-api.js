import axios from 'axios';

export class BooksApi {
  constructor() {
    this.BASE_URL = 'https://books-backend.p.goit.global/books';
    this.CATEGORY_LIST = '/category-list';
    this.TOP_BOOKS = '/top-books';
    this.CATEGORY = '/category?category=';
  }

  async getCategories() {
    const url = this.BASE_URL + this.CATEGORY_LIST;

    try {
      const response = await axios.get(url);

      return response.data;
    } catch (error) {
      console.log(error);
      iziToast.error({
        title: 'Error',
        message: `Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${error.message}`,
        position: 'topRight',
      });
    }
  }

  async getTopBooks() {
    const url = this.BASE_URL + this.TOP_BOOKS;

    try {
      const response = await axios.get(url);

      return response.data;
    } catch (error) {
      console.log(error);
      iziToast.error({
        title: 'Error',
        message: `Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${error.message}`,
        position: 'topRight',
      });
    }
  }

  async getCategory(category) {
    const url = this.BASE_URL + this.CATEGORY + category;

    try {
      const response = await axios.get(url);

      return response.data;
    } catch (error) {
      console.log(error);
      iziToast.error({
        title: 'Error',
        message: `Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${error.message}`,
        position: 'topRight',
      });
    }
  }

  async getBook(id) {
    const url = this.BASE_URL + '/' + id;

    try {
      const response = await axios.get(url);

      return response.data;
    } catch (error) {
      console.log(error);
      iziToast.error({
        title: 'Error',
        message: `Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${error.message}`,
        position: 'topRight',
      });
    }
  }
}
