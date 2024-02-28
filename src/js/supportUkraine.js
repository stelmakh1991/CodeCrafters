import saveTheChildren from '/images/save-min.png';
import projectHOPE from '/images/hope-min.png';
import united24 from '/images/24-min.png';
import internationalMedicalCorps from '/images/inter-min.png';
import medicinsSansFrontieres from '/images/sans-min.png';
import razom from '/images/razom-min.png';
import actionAgainstHunger from '/images/action-min.png';
import worldVision from '/images/world-min.png';
import serhiyPrytulaCharityFoundation from '/images/prytula-min.png';

const support = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: saveTheChildren,
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: projectHOPE,
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: internationalMedicalCorps,
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: razom,
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: actionAgainstHunger,
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: serhiyPrytulaCharityFoundation,
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: united24,
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: medicinsSansFrontieres,
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: worldVision,
  },
];

const listEl = document.getElementById('support-list');
const scrollButton = document.getElementById('scroll-btn');
const btnIcon = document.querySelector('.support-btn-icon');

let index = 1;
let currentItemIndex = 0;
let listItemHeight = 0;
const maxItems = support.length;

const loadItems = () => {
  support.forEach(item => {
    const listItem = `
      <li class="support-list-item">
      <span class="support-number">0${index++}</span>
        <a class="support-list-link" href="${item.url}" target="_blank" alt="${
      item.title
    }">
    
          <img class="support-img" srcset="${item.img} 1x, ${
      item.img
    } 2x"src="${item.img}" alt="${item.title}" />

        </a>
      </li>
    `;
    listEl.insertAdjacentHTML('beforeend', listItem);
  });

  listItemHeight = listEl.firstElementChild.clientHeight;
};

const scrollToNextItem = () => {
  let INC = 4;
  // if (window.innerWidth >= 768) {
  //   INC = 6;
  // } else {
  //   INC = 4;
  // }
  currentItemIndex = currentItemIndex + INC;

  if (currentItemIndex >= maxItems) {
    currentItemIndex = 0;
    listEl.scrollTo({
      top: currentItemIndex * listItemHeight,
      behavior: 'smooth',
    });
  } else {
    listEl.scrollTo({
      top: currentItemIndex * listItemHeight,
      behavior: 'smooth',
    });
  }
  if (currentItemIndex + INC >= maxItems) {
    btnIcon.classList.add('rotate');
  } else {
    btnIcon.classList.remove('rotate');
  }
};

scrollButton.addEventListener('click', scrollToNextItem);

loadItems();
