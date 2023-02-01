window.addEventListener("load", function () {
    // slider card
    const mainslider = document.querySelector('.main-slider')
    const itemslider = document.querySelectorAll('.wrapper-item-slider')

    var withItem = itemslider[0].offsetWidth;

    var lenghtItem = itemslider.length;
    let tranX = 0;
    const back = document.querySelector('.back-slider-card');
    const next = document.querySelector('.next-slider-card');
    let index = 1;
    // console.log(lenghtItem);

    changeNext = function () {
        if (index >= lenghtItem) {
            index = 1;
            mainslider.style = `transform: translateX(0px)`;
            tranX = 0;
            return;
        }
        tranX = tranX - withItem;
        mainslider.style = `transform: translateX(${tranX}px)`;
        index++;
        // console.log(tranX)
    }
    next.onclick = function () {
        changeNext();
    }
    changeback = function () {
        if (index <= 1) {
            index = 1;
            return;
        }
        tranX = tranX + withItem;
        mainslider.style = `transform: translateX(${tranX}px)`;
        index--;
        // console.log(index)

    }
    back.onclick = function () {
        changeback();
    }
    setInterval(changeNext, 2000);

});

