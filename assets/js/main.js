
var bar = document.querySelector('.bar-reponsive');
var modalMenu = document.querySelector('.modal-menu');
var menuReponsive = document.querySelector('.menu-mobile-tablet');
var closeMenu = document.querySelector('.close-menu');

bar.onclick = function(){
    modalMenu.style = `display: block`;
    menuReponsive.style = `transform: translateX(0)`;
}
modalMenu.onclick = function(){
    modalMenu.style = `display: none`;
    menuReponsive.style = `transform: translateX(-100%)`;
}
closeMenu.onclick = function(){
    modalMenu.style = `display: none`;
    menuReponsive.style = `transform: translateX(-100%)`;
}

// product tab
const tabsall = document.querySelectorAll('.product-list-tab-item')
const tabsContentall = document.querySelectorAll('.product-cate-card')
tabsall.forEach((tab, index) =>{
	tab.addEventListener("click", () =>{
		tabsContentall.forEach((tabContent)=>{
			tabContent.classList.remove('active')
		}) 
		tabsall.forEach((tab)=>{
			tab.classList.remove('active')	
		}) 
		console.log(index);

		tabsall[index].classList.add('active')
		tabsContentall[index].classList.add('active')	
		
	})
})

const tabsall_product = document.querySelectorAll('.form-check-option')
// const tabsContentall = document.querySelectorAll('.product-cate-card')
tabsall_product.forEach((tab, index) =>{
	tab.addEventListener("click", () =>{
		tabsall_product.forEach((tabContent)=>{
			tabContent.classList.remove('active')
		}) 
		tabsall_product[index].classList.add('active')

	})
})