const $cartButton = document.querySelector('.cart-button');
const $cartContainer = $cartButton.querySelector('.cart-container');

function showCart() {
  $cartContainer.classList.add('show');
}
function hideCart() {
  $cartContainer.classList.remove('show');
}

$cartButton.addEventListener('click', (event) => {
  event.stopPropagation();
  if ($cartContainer.classList.contains('show')) {
    hideCart();
  } else {
    showCart();
  }
});
$cartContainer.addEventListener('click', (event) => {
  event.stopPropagation();
});
window.addEventListener('click', hideCart);

const $header = document.querySelector('header');
const $menuList = [...$header.querySelectorAll('.menu-list')];
const $searchButton = $header.querySelector('.search-button');
const $searchContainer = $header.querySelector('.search-container');
const $searchShadow = $searchContainer.querySelector('.shadow');
const $searchInput = $searchContainer.querySelector('.search-input');
const $searchCloser = $searchContainer.querySelector('.search-closer');
const $searchDelay = [...$searchContainer.querySelectorAll('.search-menu__list')];

function showSearch() {
  $header.classList.add('searching');
  document.documentElement.classList.add('fixed');

  $menuList.reverse().forEach((element, index) => {
    element.style.transitionDelay = (index * 0.4) / $menuList.length + 's';
  });

  $searchDelay.forEach((element, index) => {
    element.style.transitionDelay = (index * 0.4) / $searchDelay.length + 's';
  });

  setTimeout(() => {
    $searchInput.focus();
  }, 600);
}

function hideSearch() {
  $header.classList.remove('searching');
  document.documentElement.classList.remove('fixed');

  $menuList.reverse().forEach((element, index) => {
    element.style.transitionDelay = (index * 0.4) / $menuList.length + 's';
  });

  $searchDelay.reverse().forEach((element, index) => {
    element.style.transitionDelay = (index * 0.4) / $searchDelay.length + 's';
  });
  $searchDelay.reverse();

  $searchInput.value = '';
}

$searchButton.addEventListener('click', showSearch);
$searchShadow.addEventListener('click', hideSearch);
$searchCloser.addEventListener('click', hideSearch);
