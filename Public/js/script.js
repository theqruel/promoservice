// ---------------burger-menu-----------------


const burgerMenu = document.querySelector('.burger-menu')

const burgerButton = document.querySelector('.burger-button')

burgerButton.onclick = function() {
	if(burgerMenu.classList.contains('active')) {
		burgerMenu.classList.remove('active');
	} else {
		burgerMenu.classList.add('active');
	};	
}

// ---------------parallax-----------------

function parallax (event) {
	let bg = document.querySelectorAll('.bg');
	bg.forEach(elem => {
		let speed = elem.getAttribute('data-speed');
		let x = event.clientX*speed/50 - 50;
		let y = event.clientY*speed/50 - 70;
		elem.style.transform = `translate(${-x}px, ${-y}px)`;
	});
}

document.addEventListener('mousemove', parallax);


// ---------------motion animation-----------------


const motionItems = document.querySelectorAll('.motionItem')

if (motionItems.length > 0) {
	window.addEventListener('scroll', scrollMotion)
	function scrollMotion(){
		for (let index = 0; index < motionItems.length; index++) {
			const motionItem = motionItems[index];
			const motionItemHeight = motionItem.offsetHeight;
			const motionItemOffset = offset(motionItem).top;
			const motionStart = 5;

			let motionItemPoint = window.innerHeight - motionItemHeight / motionStart;

			if (motionItemHeight > window.innerHeight){
				motionItemPoint = window.innerHeight - window.innerHeight / motionStart;
			}

			if ((window.pageYOffset > motionItemOffset - motionItemPoint && window.pageYOffset < (motionItemOffset + motionItemHeight))){
				motionItem.classList.add('active');
			}else{
				motionItem.classList.remove('active');
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}
	setTimeout(() => {
		scrollMotion();
	}, 300)
}








