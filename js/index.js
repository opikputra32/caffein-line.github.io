// // $(document).ready(function(){
// //     $('.next').on('click', function(){
// //       var currentImg = $('.active');
// //       var nextImg = currentImg.next();
// //       var firstImg = currentImg.first();

// //       if(nextImg.length != 0){
// //         console.log(nextImg.length);
// //         currentImg.removeClass('active').css('z-index', -10);
// //         nextImg.addClass('active').css('z-index', 10);
// //       }
// //     });
  
// //     $('.prev').on('click', function(){
// //       var currentImg = $('.active');
// //       var prevImg = currentImg.prev();
// //       var lastImg = currentImg.last();

// //       if(prevImg.length != 0){
// //         console.log(prevImg.length);
// //         currentImg.removeClass('active').css('z-index', -10);
// //         prevImg.addClass('active').css('z-index', 10);
// //       }
// //       if(prevImg.length == 0) {
// //         console.log(prevImg.length);
// //         currentImg.removeClass('active').css('z-index', -10);
// //         lastImg.addClass('active').css('z-index', 10);
// //       }
// //     });
// // });

const prev = $("#previous");
const buttonnext = $("#next");
const images = $("#slider-inner div");
const firstImage = images.first();
const navbar = $("#nav-bar");

let curImg = 0;

prev.on("click", () => {

    curImg--;
    console.log(curImg);
    if(curImg < 0) {
        curImg = images.length -1;
    }

    updateSlider();

});

buttonnext.on("click", () => {

    curImg++;
    console.log(curImg);
    if(curImg >= images.length) {
        curImg = 0;
    }

    updateSlider();

});

function updateSlider() {
    const width = firstImage.width();
    const marginLeft = curImg * -width;
    firstImage.animate({marginLeft});

}

navbar.load("navbar.html");
  
  