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
