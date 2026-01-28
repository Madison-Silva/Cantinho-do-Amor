let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  const slides = document.getElementsByClassName("slide");

  if (n >= slides.length) slideIndex = 0;
  if (n < 0) slideIndex = slides.length - 1;

  for (let slide of slides) {
    slide.style.display = "none";
  }

  slides[slideIndex].style.display = "block";
}

// automático
setInterval(() => {
  plusSlides(1);
}, 8000);


