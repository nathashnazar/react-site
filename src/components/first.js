// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // Import Bootstrap JavaScript
// import $ from 'jquery'; // Import jQuery
// // Your jQuery code and Bootstrap Carousel initialization
// var multipleCardCarousel = document.querySelector("#carouselExampleControls");

// if (window.matchMedia("(min-width: 768px)").matches) {
//   var carousel = new bootstrap.Carousel(multipleCardCarousel, {
//     interval: false,
//   });

//   var carouselWidth = $(".carousel-inner")[0].scrollWidth;
//   var cardWidth = $(".carousel-item").width();
//   var scrollPosition = 0;

//   $("#carouselExampleControls .carousel-control-next").on("click", function () {
//     if (scrollPosition < carouselWidth - cardWidth * 4) {
//       scrollPosition += cardWidth;
//       $("#carouselExampleControls .carousel-inner").animate(
//         { scrollLeft: scrollPosition },
//         600
//       );
//     }
//   });

//   $("#carouselExampleControls .carousel-control-prev").on("click", function () {
//     if (scrollPosition > 0) {
//       scrollPosition -= cardWidth;
//       $("#carouselExampleControls .carousel-inner").animate(
//         { scrollLeft: scrollPosition },
//         600
//       );
//     }
//   });
// } else {
//   $(multipleCardCarousel).addClass("slide");
// }
