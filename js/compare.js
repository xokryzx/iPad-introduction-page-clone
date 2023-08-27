import ipads from './data/ipads.js';

const $items = document.querySelector('.compare-items');
ipads.forEach((ipad) => {
  const $item = document.createElement('div');
  $item.classList.add('compare-item');

  let colorList = '';
  ipad.colors.forEach((color) => {
    colorList += `<li style="background-color: ${color};" class="colors-list"></li>`;
  });

  $item.innerHTML = `
    <div class="item-thumbnail">
      <img src="${ipad.thumbnail}" alt="${ipad.name}">
    </div>
    <ul class="item-colors">
      ${colorList}
    </ul>
    <div class="item-name">${ipad.name}</div>
    <p class="whitebox-desc item-tagline">${ipad.tagline}</p>
    <p class="whitebox-desc item-price">₩${ipad.price.toLocaleString('en-US')}부터</p>
    <button class="button item-button">구입하기</button>
    <a href="${ipad.url}" class="link whitebox-link item-link">더 알아보기</a>
  `;
  $items.append($item);
});
