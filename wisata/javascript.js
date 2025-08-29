$(document).ready(function () {
    var tombolMenu = $(".tombol-menu");
    var menu = $("nav .menu ul");

    // toggle menu saat hamburger diklik
    tombolMenu.on("click", function (e) {
        e.preventDefault();
        menu.slideToggle(); // tampilkan/sembunyikan dengan animasi
    });

    // reset menu saat resize
    $(window).resize(function () {
        var width = $(window).width();
        if (width > 991) {
            menu.show();   // desktop: menu selalu tampil
        } else {
            menu.hide();   // mobile: menu sembunyi default
        }
    });

    // efek scroll: hanya di home
    if (!$("body").hasClass("page")) {
        $(document).scroll(function () {
            if ($(this).scrollTop() > 0) {
                $("nav").addClass("putih");
            } else {
                $("nav").removeClass("putih");
            }
        });
    } else {
        $("nav").addClass("putih"); // halaman lain: nav putih permanen
    }
});

let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 5000); // Ubah gambar setiap 5 detik
}

function plusSlides(n) {
    slideIndex += n - 1; // Mengatur slideIndex berdasarkan tombol yang ditekan
    showSlides();
}


let slideInde = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 4000); // ganti slide tiap 4 detik
}

function plusSlides(n) {
  slideIndex += n-1;
  showSlides();
}
