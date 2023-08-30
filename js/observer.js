const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }
    entry.target.classList.add('show');
  });
});

const $info = document.querySelectorAll('.info');
$info.forEach((element) => {
  io.observe(element);
});
