// Navbar Opacity
window.addEventListener('scroll', function() {
  if (window.scrollY > 100) {
    document.querySelector('nav').style.opacity = 0.9;
  } else {
    document.querySelector('nav').style.opacity = 1;
  }
});


// jQuery Smooth Scrolling
$('nav a, header a').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 68
      },
      800
    );
  }
});