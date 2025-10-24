// スクロール進捗バー
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = (scrollTop / docHeight) * 100;
  const headerHeight = 60;
  const bottomHeight = 60;
  const usableHeight = window.innerHeight - headerHeight - bottomHeight;
  document.getElementById('scrollProgress').style.height = (progress / 100) * usableHeight + 'px';
});

// スライドメニュー開閉
const toggle = document.getElementById('menuToggle');
const sideMenu = document.getElementById('sideMenu');
toggle.addEventListener('click', () => {
  sideMenu.classList.toggle('open');
});
// Heroスライドショー
const slides = document.querySelectorAll('.hero-slide');
let currentSlide = 0;
const slideInterval = 7000; // 4秒ごとに切り替え

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

// 初期表示
showSlide(currentSlide);

// 自動切替
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, slideInterval);
