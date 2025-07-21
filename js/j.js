const tabs = document.querySelectorAll('.tab-we-1');
const contents = document.querySelectorAll('.tab-content-1');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    contents.forEach(c => c.classList.remove('active'));

    tab.classList.add('active');
    document.getElementById(tab.dataset.tab).classList.add('active');
  });
});

tabs[0].click();


// ------------------------------------------

 let currentSlide = 1;
    const totalSlides = 3;

    function showSlide(slideNumber) {
      const slides = document.querySelectorAll('.testimonial-slide-1');
      slides.forEach(slide => slide.classList.remove('active'));
      const targetSlide = document.getElementById(`slide${slideNumber}`);
      if (targetSlide) {
        targetSlide.classList.add('active');
      }
    }

    function changeSlide(step) {
      currentSlide += step;
      if (currentSlide > totalSlides) currentSlide = 1;
      if (currentSlide < 1) currentSlide = totalSlides;
      showSlide(currentSlide);
    }

showSlide(currentSlide);
    
