let timeout = 3000;
let lastActiveTimestamp = 0;
let userIsActive = false;
let isJohnMove = false;

var ball = document.querySelector('.John');

window.addEventListener('mousemove', active);
window.addEventListener('keypress', active);
window.addEventListener('click', active);

setInterval(checkUserIsActive, 1000)
active();

function checkUserIsActive() {
  if (userIsActive && new Date().getTime() - lastActiveTimestamp > timeout){
    userIsActive = false;

		if (!isJohnMove)
			moveJohn();
  }
}

function active() {
  lastActiveTimestamp = new Date().getTime();
  if (!userIsActive) {
    userIsActive = true;
  }
}

function moveJohn() {
	isJohnMove = true;
	var current_rotation = 0.1;
	var flag = false;
	var x = ball.offsetLeft;
	const border = document.documentElement.clientWidth - 100;
	var johnInterval = setInterval(function() {
		if (!flag) {
			x += 2;
		}
		else {
			x -= 0.5;
		}
	
		if (x == 0) {
			flag = false;
		}
		if (x > border) {
			flag = true;
		}
		
		current_rotation += 1;
	
		ball.style.transform = "rotate(" + current_rotation + "deg)";	
		ball.style.left = x + 'px';


		if (userIsActive) {
			clearInterval(johnInterval);
			ball.style.transform = "rotate(" + 0 + "deg)";	
			ball.style.left = border;
			isJohnMove = false;
		}
	}, 10);

}