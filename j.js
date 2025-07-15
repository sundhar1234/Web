const tabs = document.querySelectorAll('.tab-we-1');
const contents = document.querySelectorAll('.tab-content-1');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove active class from all tabs and contents
    tabs.forEach(t => t.classList.remove('active'));
    contents.forEach(c => c.classList.remove('active'));

    // Add active class to clicked tab and corresponding content
    tab.classList.add('active');
    document.getElementById(tab.dataset.tab).classList.add('active');
  });
});

// Optional: Activate the first tab by default
tabs[0].click();





// function showSlide(slideNumber) {
//   const slides = document.querySelectorAll('.testimonial-slide');
//   slides.forEach(slide => slide.classList.remove('active'));
//   document.getElementById(`slide${slideNumber}`).classList.add('active');
// }

// document.addEventListener("DOMContentLoaded", function () {
//   const tabs = document.querySelectorAll(".tab");
//   const contents = document.querySelectorAll(".tab-content");

//   tabs.forEach(tab => {
//     tab.addEventListener("click", () => {
//       const target = tab.getAttribute("data-tab");

//       // Remove active classes
//       tabs.forEach(t => t.classList.remove("active"));
//       contents.forEach(c => {
//         c.classList.remove("active");
//         c.style.display = "none";
//       });

//       // Add active class to clicked tab
//       tab.classList.add("active");

//       // Show and animate the target content
//       const targetContent = document.getElementById(target);
//       targetContent.style.display = "block";

//       // Trigger reflow to restart animation
//       void targetContent.offsetWidth;

//       targetContent.classList.add("active");
//     });
//   });

//   // Trigger first tab by default
//   if (tabs.length > 0) tabs[0].click();
// });



// document.addEventListener("DOMContentLoaded", () => {
//   const elements = document.querySelectorAll(".admin-solutions-section .col-md-6");

//   const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         entry.target.style.opacity = "1";
//         entry.target.style.animationPlayState = "running";
//       }
//     });
//   }, { threshold: 0.3 });

//   elements.forEach(el => {
//     el.style.animationPlayState = "paused";
//     observer.observe(el);
//   });
// });

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

    // Initial load
    showSlide(currentSlide);