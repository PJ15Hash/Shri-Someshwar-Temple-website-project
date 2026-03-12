document.addEventListener('DOMContentLoaded', function(){
  const hamburger = document.querySelector('.hamburger');
  const panel = document.querySelector('.mobile-panel');
  const overlay = document.querySelector('.mobile-overlay');
  const closeBtn = document.querySelector('.mobile-panel .close');
  const aboutBtns = document.querySelectorAll('[data-scroll]');

  if(hamburger){
    hamburger.addEventListener('click', ()=>{ panel.classList.add('open'); overlay.classList.add('show'); });
  }
  if(closeBtn){
    closeBtn.addEventListener('click', ()=>{ panel.classList.remove('open'); overlay.classList.remove('show'); });
  }
  if(overlay){
    overlay.addEventListener('click', ()=>{ panel.classList.remove('open'); overlay.classList.remove('show'); });
  }

  aboutBtns.forEach(btn=>{
    btn.addEventListener('click', function(e){
      e.preventDefault();
      const sel = this.getAttribute('data-scroll');
      const target = document.querySelector(sel);
      if(target){ target.scrollIntoView({behavior:'smooth', block:'start'}); panel.classList.remove('open'); overlay.classList.remove('show'); }
    });
  });

  // ============================================
  // MODERN GALLERY WITH LIGHTBOX
  // ============================================
  const galleryMasonry = document.getElementById('galleryMasonry');
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImage = document.getElementById('lightboxImage');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxCounter = document.getElementById('lightboxCounter');
  const lightboxCurrent = document.getElementById('lightboxCurrent');
  const lightboxTotal = document.getElementById('lightboxTotal');
  const lightboxClose = document.querySelector('.lightbox-close');
  const lightboxNext = document.querySelector('.lightbox-next');
  const lightboxPrev = document.querySelector('.lightbox-prev');

  let allGalleryItems = [];
  let currentFilteredItems = [];
  let currentLightboxIndex = 0;

  // Initialize gallery items
  function initGallery() {
    allGalleryItems = Array.from(document.querySelectorAll('.gallery-m-item'));
    console.log('Gallery initialized with', allGalleryItems.length, 'items');
    if (allGalleryItems.length > 0) {
      currentFilteredItems = [...allGalleryItems];
      if (lightboxTotal) lightboxTotal.textContent = allGalleryItems.length;
      updatePhotoCount();
      attachGalleryListeners();
    } else {
      console.warn('No gallery items found!');
    }
  }

  // Attach click listeners to gallery items
  function attachGalleryListeners() {
    currentFilteredItems.forEach(item => {
      item.addEventListener('click', function() {
        currentLightboxIndex = currentFilteredItems.indexOf(this);
        openLightbox(this);
      });
    });
  }

  // Open lightbox
  function openLightbox(item) {
    const img = item.querySelector('img');
    const caption = item.querySelector('.gallery-m-cat')?.textContent || 'Sacred moment';
    
    lightboxImage.src = img.src;
    lightboxImage.alt = img.alt;
    lightboxCaption.textContent = caption;
    lightboxCurrent.textContent = currentLightboxIndex + 1;
    lightboxTotal.textContent = currentFilteredItems.length;
    
    lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  // Close lightbox
  function closeLightbox() {
    lightboxModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Navigation
  function showNextImage() {
    currentLightboxIndex = (currentLightboxIndex + 1) % currentFilteredItems.length;
    const item = currentFilteredItems[currentLightboxIndex];
    openLightbox(item);
  }

  function showPrevImage() {
    currentLightboxIndex = (currentLightboxIndex - 1 + currentFilteredItems.length) % currentFilteredItems.length;
    const item = currentFilteredItems[currentLightboxIndex];
    openLightbox(item);
  }

  // Filter gallery
  function filterGallery(category) {
    if (category === 'all') {
      currentFilteredItems = [...allGalleryItems];
    } else {
      currentFilteredItems = allGalleryItems.filter(item => item.getAttribute('data-cat') === category);
    }
    
    // Hide all items, then show filtered ones
    allGalleryItems.forEach(item => {
      item.style.display = 'none';
      item.style.animation = 'none';
    });
    
    currentFilteredItems.forEach((item, index) => {
      item.style.display = 'block';
      item.style.animation = `fadeInUp 0.5s ease-out ${index * 0.05}s both`;
    });
    
    updatePhotoCount();
    attachGalleryListeners();
  }

  // Update photo count
  function updatePhotoCount() {
    const photoCount = document.getElementById('photoCount');
    if (photoCount) {
      const i18nKey = 'gallery_showing';
      photoCount.setAttribute('data-i18n', i18nKey);
      photoCount.textContent = `Showing ${currentFilteredItems.length} sacred moments…`;
    }
  }


  // Filter button listeners
  console.log('Gallery Items found:', allGalleryItems.length);
  console.log('Filter buttons found:', filterBtns.length);
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const category = this.getAttribute('data-cat');
      console.log('Filter clicked - category:', category);
      
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      filterGallery(category);
      console.log('After filter, showing items:', currentFilteredItems.length);
    });
  });

  // Lightbox event listeners
  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxNext) lightboxNext.addEventListener('click', (e) => { e.stopPropagation(); showNextImage(); });
  if (lightboxPrev) lightboxPrev.addEventListener('click', (e) => { e.stopPropagation(); showPrevImage(); });

  // Close on modal overlay click
  if (lightboxModal) {
    lightboxModal.addEventListener('click', function(e) {
      if (e.target === this) closeLightbox();
    });
  }

  // Keyboard support
  document.addEventListener('keydown', (e) => {
    if (!lightboxModal || !lightboxModal.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') showNextImage();
    if (e.key === 'ArrowLeft') showPrevImage();
  });

  // Initialize gallery on page load
  initGallery();

});

// ============================================
// CREATIVE GALLERY LOGIC (LEGACY SUPPORT)
// ============================================

// Add this code to your existing main.js file after the existing code

// ============================================
// GALLERY SLIDER
// ============================================
(function() {
  const gallerySlider = document.getElementById('gallerySlider');
  const galleryPrev = document.getElementById('galleryPrev');
  const galleryNext = document.getElementById('galleryNext');
  const galleryDotsContainer = document.getElementById('galleryDots');
  
  if (!gallerySlider) return;
  
  const slides = gallerySlider.querySelectorAll('.gallery-slide');
  let currentSlide = 0;
  const totalSlides = slides.length;
  
  // Create dots
  slides.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.classList.add('slider-dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(index));
    galleryDotsContainer.appendChild(dot);
  });
  
  const dots = galleryDotsContainer.querySelectorAll('.slider-dot');
  
  function updateSlider() {
    gallerySlider.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    // Update dots
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentSlide);
    });
  }
  
  function goToSlide(index) {
    currentSlide = index;
    updateSlider();
  }
  
  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
  }
  
  function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlider();
  }
  
  if (galleryNext) galleryNext.addEventListener('click', nextSlide);
  if (galleryPrev) galleryPrev.addEventListener('click', prevSlide);
  
  // Auto-play (optional)
  let autoplayInterval = setInterval(nextSlide, 5000);
  
  // Pause on hover
  gallerySlider.parentElement.addEventListener('mouseenter', () => {
    clearInterval(autoplayInterval);
  });
  
  gallerySlider.parentElement.addEventListener('mouseleave', () => {
    autoplayInterval = setInterval(nextSlide, 5000);
  });
  
  // Touch support for mobile
  let touchStartX = 0;
  let touchEndX = 0;
  
  gallerySlider.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });
  
  gallerySlider.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });
  
  function handleSwipe() {
    if (touchEndX < touchStartX - 50) nextSlide();
    if (touchEndX > touchStartX + 50) prevSlide();
  }
})();

// ============================================
// COMMITTEE SLIDER
// ============================================
(function() {
  const committeeSlider = document.getElementById('committeeSlider');
  const committeePrev = document.getElementById('committeePrev');
  const committeeNext = document.getElementById('committeeNext');
  
  if (!committeeSlider) return;
  
  const slides = committeeSlider.querySelectorAll('.committee-slide');
  let currentIndex = 0;
  const totalSlides = slides.length;
  
  // Calculate slides to show based on screen width
  function getSlidesToShow() {
    if (window.innerWidth <= 900) return 1;
    return 3;
  }
  
  let slidesToShow = getSlidesToShow();
  
  function updateSlider() {
    const slideWidth = committeeSlider.querySelector('.committee-slide').offsetWidth;
    const gap = 16;
    const offset = currentIndex * (slideWidth + gap);
    committeeSlider.style.transform = `translateX(-${offset}px)`;
  }
  
  function nextSlide() {
    const maxIndex = totalSlides - slidesToShow;
    if (currentIndex < maxIndex) {
      currentIndex++;
    } else {
      currentIndex = 0; // Loop back
    }
    updateSlider();
  }
  
  function prevSlide() {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = totalSlides - slidesToShow; // Loop to end
    }
    updateSlider();
  }
  
  if (committeeNext) committeeNext.addEventListener('click', nextSlide);
  if (committeePrev) committeePrev.addEventListener('click', prevSlide);
  
  // Auto-play (optional)
  let autoplayInterval = setInterval(nextSlide, 4000);
  
  // Pause on hover
  committeeSlider.parentElement.addEventListener('mouseenter', () => {
    clearInterval(autoplayInterval);
  });
  
  committeeSlider.parentElement.addEventListener('mouseleave', () => {
    autoplayInterval = setInterval(nextSlide, 4000);
  });
  
  // Touch support for mobile
  let touchStartX = 0;
  let touchEndX = 0;
  
  committeeSlider.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });
  
  committeeSlider.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });
  
  function handleSwipe() {
    if (touchEndX < touchStartX - 50) nextSlide();
    if (touchEndX > touchStartX + 50) prevSlide();
  }
  
  // Update on window resize
  window.addEventListener('resize', () => {
    slidesToShow = getSlidesToShow();
    updateSlider();
  });
})();