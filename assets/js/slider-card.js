window.addEventListener("load", function(){



    const sliderMain = document.querySelector('.slider-main');
    const cardslider = document.querySelectorAll('.card-slider');
    const widthCardSlider = cardslider[0].offsetWidth;
    const lenghtCardSlider = cardslider.length;
    console.log(cardslider);
    // let sumCard = (widthCardSlider*lenghtCardSlider)/2;
    // console.log(sumCard)
    let tranX = 0; 
    const backslider = document.querySelector('.back-slider-card');
    const nextslider = document.querySelector('.next-slider-card');
    let index = 0;
    changenextslider = nextslider.onclick = function(){
        
        if(index >= lenghtCardSlider-4) {
            
            index = 0;
            sliderMain.style = `transform: translateX(0px)`;
            tranX = 0;
            return;
        }
        // }if else(index < 1){return;}
        tranX = tranX - widthCardSlider;
        sliderMain.style = `transform: translateX(${tranX}px)`;
        // console.log(index);
        index++;
        console.log(index)
    }
    let mob_view = window.matchMedia("(max-width: 739px)");
    	if (mob_view.matches)
    	 {
            changenextslider = nextslider.onclick = function(){
        
                if(index >= lenghtCardSlider-2) {
                    
                    index = 0;
                    sliderMain.style = `transform: translateX(0px)`;
                    tranX = 0;
                    return;
                }
                // }if else(index < 1){return;}
                tranX = tranX - widthCardSlider;
                sliderMain.style = `transform: translateX(${tranX}px)`;
                // console.log(index);
                index++;
            }
    	 }
    changebackslider = backslider.onclick = function(){
    
        if(index <1) {
            index = 0;
            return;
        }
        tranX = tranX + widthCardSlider;
        sliderMain.style = `transform: translateX(${tranX}px)`;
        // console.log(index);
        index--;
    }
    
                
        // setInterval(function(){
        setInterval(changenextslider,5000);
        // }, 1000);
    
    
    // 
    
    });
