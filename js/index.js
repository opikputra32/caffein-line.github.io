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

navbar.load("html/navbar.html");
  
  