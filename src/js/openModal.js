document.addEventListener('DOMContentLoaded', function () {
  const modalContent = document.querySelector('.book-info').innerHTML;
  const modal = basicLightbox.create(modalContent, {

    onShow: (instance) => {
//заборонити прокручування фону
      document.body.style.overflow = 'hidden';

//додавання прослуховувача до шопінг лінк
      const shoppingLinks = document.querySelectorAll('.shopping-link');
      shoppingLinks.forEach(link => {
        link.addEventListener('click', function (event) {
          event.preventDefault();
          openShoppingLink(this.dataset.platform);
        });
      });

//додавання прослуховувача до кнопки шопінг лінк
      const toggleShoppingListBtn = document.getElementById('toggleShoppingList');
      toggleShoppingListBtn.addEventListener('click', function (event) {
        toggleShoppingList(event);
        onAddAndRemoveToLocalStorageOnModal(event);
      });
    },

    onClose: (instance) => {
//відновити можливість прокручування фону
      document.body.style.overflow = 'auto';

//видалення прослуховувача коли модальне вікно закрите
      const shoppingLinks = document.querySelectorAll('.shopping-link');
      shoppingLinks.forEach(link => link.removeEventListener('click', openShoppingLink));
      const toggleShoppingListBtn = document.getElementById('toggleShoppingList');
      toggleShoppingListBtn.removeEventListener('click', toggleShoppingList);
    }

  });








  
//додавання прослуховувача події для відкриття модального вікна
  document.addEventListener('click', function (event) {
    if (event.target.matches('#toggleModal')) {
      modal.show();
    }
  });

  function openShoppingLink(platform) {
    console.log(`Opening ${platform} link`);
      window.open('?');
//замість ? додати потрібний лінк
  }
});
