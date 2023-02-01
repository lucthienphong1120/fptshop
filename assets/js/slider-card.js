window.addEventListener("load", function () {
    // slider card
    const sliderMain = document.querySelector('.main-slider');
    const cardslider = document.querySelectorAll('.wrapper-item-slider');
    const widthCardSlider = cardslider[0];
    const lenghtCardSlider = cardslider.length;
    // console.log(cardslider);
    let tranX = 0;
    const backslider = document.querySelector('.back-slider-card');
    const nextslider = document.querySelector('.next-slider-card');
    let index = 0;

    changenextslider = function () {
        if (index > lenghtCardSlider - 1) {
            index = 0;
            sliderMain.style = `transform: translateX(0px)`;
            tranX = 0;
            return;
        }
        tranX = tranX - widthCardSlider;
        sliderMain.style = `transform: translateX(${tranX}px)`;
        // console.log(index);
        index++;
    }
    nextslider.onclick = function () {
        changenextslider();
    }
    changebackslider = function () {

        if (index < 1) {
            index = 0;
            return;
        }
        tranX = tranX + widthCardSlider;
        sliderMain.style = `transform: translateX(${tranX}px)`;
        // console.log(index);
        index--;
    }
    backslider.onclick = function () {
        changebackslider();
    }

    // setInterval(function(){
    setInterval(changenextslider, 5000);
    // }, 1000);

    // 

});
