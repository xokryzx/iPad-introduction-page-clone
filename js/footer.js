import navigations from './data/navigations.js';

const $footerNav = document.querySelector('.footer-nav');
navigations.forEach((nav) => {
  const $map = document.createElement('div');
  $map.classList.add('map');

  let mapList = '';
  nav.maps.forEach((map) => {
    mapList += `
      <li class="map-list">
        <a href="${map.url}" class="map-link">${map.name}</a>
      </li>
    `;
  });

  $map.innerHTML = `
    <div class="map-title">${nav.title}</div>
    <ul>${mapList}</ul>
  `;
  $footerNav.append($map);
});

const $thisYear = document.querySelector('.this-year');
$thisYear.textContent = new Date().getFullYear();
