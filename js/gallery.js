const images = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('closeBtn');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

let currentIndex = 0;

// Open lightbox on image click
images.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentIndex = index;
    showLightbox();
  });
});

function showLightbox() {
  lightbox.classList.add('active');
  lightboxImg.src = images[currentIndex].src;
}

// Close lightbox
closeBtn.addEventListener('click', () => {
  lightbox.classList.remove('active');
});

// Next button
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  showLightbox();
});

// Prev button
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showLightbox();
});

// Optional: close on outside click
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.classList.remove('active');
  }
});
