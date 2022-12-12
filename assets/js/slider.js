window.addEventListener("load", function () {
    const mainslider = document.querySelector('.main-slider')
    const itemslider = document.querySelectorAll('.wrapper-item-slider')
    console.log(itemslider)
    var withItem = itemslider[0].offsetWidth;

    var lenghtItem = itemslider.length;
    let tranX = 0;
    const back = document.querySelector('.back');
    const next = document.querySelector('.next');
    let index = 1;
    // console.log(lenghtItem);

    changeNext = next.onclick = function () {
        if (index >= lenghtItem) {
            index = 1;
            mainslider.style = `transform: translateX(0px)`
            tranX = 0;
            return;
        }
        tranX = tranX - withItem;
        mainslider.style = `transform: translateX(${tranX}px)`
        index++;
        // console.log(tranX)
    }
    changeback = back.addEventListener("click", function () {
        if (index <= 1) {
            index = 1;
            return;
        }
        tranX = tranX + withItem;
        mainslider.style = `transform: translateX(${tranX}px)`
        index--;
        // console.log(index)

    })
    setInterval(changeNext, 5000);

    var dot = document.querySelectorAll('.dot')
    // console.log(dot)
    // dot.forEach((a ,index) =>{
    //     a.addEventListener("click", () =>{
    //        console.log(index)
    //     })


    // })

    // [...dot].forEach((item) =
    //     dot.addEventListener("click", function (e) {
    //       const slideIndex = parseInt(e.target.dataset.index);
    //       index = slideIndex;
    //       sliderMain.style = `transform:translatex(${-1*index-slideritemwidth}px)`
    //     })
    // )

});

