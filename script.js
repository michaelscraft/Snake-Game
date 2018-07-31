"use strict"
const snakeHead    		= document.querySelector("#snake"),
 	fieldArea    		= document.querySelector("#field"),
 	connectedSquares 	= document.getElementsByClassName("connected"),
 	totalScore			= document.querySelector("#score_display span"),
 	totalScoreScreen	= document.querySelector("#score_display"),
 	clearText			= document.querySelector(".clearText"),
 	squareClassNew		= "",
 	screenWidth  		= window.innerWidth,
	screenHeight 		= window.innerHeight,
	snakeWidth   		= snakeHead.getBoundingClientRect().width,
	snakeHeight  		= snakeHead.getBoundingClientRect().height;
const snake = {
		upS       : " ",
		downS     : " ",
		leftS     : " ",
		rightS    : " ",

		posX      : " ",
		posY      : " ",

		headPrevX : " ",
		headPrevY : " ",
		allXs     : [],
		allYs     : [],
		lastClickDirection : null,
		lastSwipeDirection : null,
		currentPosition : snakeHead.getBoundingClientRect(),
		outOnScreenRight : screenWidth - snakeWidth,
		outOnScreenDown : screenHeight - snakeHeight,

		snakeUp : function(){
			let moveUp = parseInt(window.getComputedStyle(snakeHead).top);
			snake.headPrevY = snakeHead.getBoundingClientRect().y;
			snake.headPrevX = snakeHead.getBoundingClientRect().x;
			snakeHead.style.borderRadius = "200px 200px 70px 70px";

			snakeHead.style.top = moveUp - snakeHeight + "px";
			square.followHead();

			if(moveUp === 0){
				snakeHead.style.top = screenHeight - (screenHeight % snakeHeight) + "px";
			}		
		},
		snakeDown : function(){
			let moveDown = parseInt(window.getComputedStyle(snakeHead).top);
			snake.headPrevY = snakeHead.getBoundingClientRect().y;
			snake.headPrevX = snakeHead.getBoundingClientRect().x;
			snakeHead.style.borderRadius = "70px 70px 200px 200px";

			snakeHead.style.top = moveDown + snakeHeight + "px";
			square.followHead();

			if(moveDown >= snake.outOnScreenDown){
				snakeHead.style.top = 0 + "px";
			}			
		},
		snakeLeft : function(){
			let moveLeft = parseInt(window.getComputedStyle(snakeHead).left);
			snake.headPrevY = snakeHead.getBoundingClientRect().y;
			snake.headPrevX = snakeHead.getBoundingClientRect().x;
			snakeHead.style.borderRadius = "200px 70px 70px 200px";

			snakeHead.style.left = moveLeft - snakeWidth + "px";
			square.followHead();

			if(moveLeft === 0){
				snakeHead.style.left = screenWidth - (screenWidth % snakeWidth) + "px";
			};			
		},
		snakeRight : function(){
			let moveRight = parseInt(window.getComputedStyle(snakeHead).left);
			snake.headPrevY = snakeHead.getBoundingClientRect().y;
			snake.headPrevX = snakeHead.getBoundingClientRect().x;
			snakeHead.style.borderRadius = "70px 200px 200px 70px";

			snakeHead.style.left = moveRight + snakeWidth + "px";
			square.followHead();
			
			if(moveRight >= snake.outOnScreenRight){
				snakeHead.style.left = 0 + "px";
			}		
		},
		pickUpSquare : function (){
			if(square.genNumY === snake.posY && square.genNumX === snake.posX){
				squareClassNew.classList.add("connected");
				squareClassNew.classList.remove("new");
				square.score += 5;

				totalScore.textContent = square.score;
				totalScore.classList.add("glow");
				setTimeout(function() {
   						 totalScore.classList.remove("glow");
				}, 1200);
			};	
		},
		increaseSpeed : function (){

		},
};

const square = {
		genNumX : " ",
		genNumY : " ",
		score : 0,
		followHead : function(){
			
			snake.posX = parseInt(window.getComputedStyle(snakeHead).left);
			snake.posY = parseInt(window.getComputedStyle(snakeHead).top);
			snake.allXs.push(snake.headPrevX);
			snake.allYs.push(snake.headPrevY);

			for(let i = 0; i < connectedSquares.length ; i++){
				connectedSquares[i].style.left = snake.allXs[connectedSquares.length - i] + "px";
				connectedSquares[i].style.top = snake.allYs[connectedSquares.length -i] + "px";

				//game over
				if(snake.allYs[i] === snake.posY && snake.allXs[i] === snake.posX){
					if (confirm('Game Over! Would you like to play again?')) {
			    		window.location.reload();
					} else {
						totalScoreScreen.classList.add("glow");
						totalScoreScreen.innerHTML = "</h2>Nice! You got " + square.score + " points</h2></br>";
						clearText.innerHTML = "PS: to play again refresh page";
						clearInterval(snake.downS);
						clearInterval(snake.rightS);
						clearInterval(snake.upS);
						clearInterval(snake.leftS);
						return false;
	    			}			
				}
			}	
			if(snake.allXs.length > connectedSquares.length){
					snake.allXs.splice(0, 1);
			};
			if(snake.allYs.length > connectedSquares.length){
				snake.allYs.splice(0, 1);
			};
			square.newSquare();	
			snake.pickUpSquare();
		},
		newSquare : function(){
			let divNew = document.createElement('div');
			squareClassNew = document.querySelector(".new");
			if(!fieldArea.lastElementChild.classList.contains("new")){	
				divNew.classList.add("square","new");

				divNew.style.left = this.newGetRandomX() + "px";
				divNew.style.top = this.newGetRandomY() + "px";

				fieldArea.appendChild(divNew);
			}	
		},
		newGetRandomX : function(){
			this.genNumX = Math.round((Math.random()*(screenWidth-0)+0)/snakeWidth)*snakeWidth;
			return square.genNumX;
		},
		newGetRandomY : function(){
			this.genNumY = Math.round((Math.random()*(screenHeight-0)+0)/snakeHeight)*snakeHeight;
			return square.genNumY;
		},
};
const onSwipe = {
		xDown : null,                                                        
		yDown : null,                                                        

		handleTouchStart: function (evt) {                                         
    		this.xDown = evt.touches[0].clientX;                                      
    		this.yDown = evt.touches[0].clientY;
    		for(let i = 0; i < fieldArea.children.length; i++){
				fieldArea.children[i].classList.remove("hidden");
			}
			clearText.innerHTML = "";                                      
		},  
		handleTouchMove: function (evt) {
    		if ( ! this.xDown || ! this.yDown ) {
        		return;
   			 }

		    let xUp = evt.touches[0].clientX;                                    
		    let yUp = evt.touches[0].clientY;

		    let xDiff = this.xDown - xUp;
		    let yDiff = this.yDown - yUp;

		    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {

		    	if ( xDiff > 0 && snake.lastSwipeDirection !== 1 && snake.lastSwipeDirection !== 2) {
		            /* left swipe */
		            snake.lastSwipeDirection = 1;	
		            clearInterval(snake.downS);
					clearInterval(snake.rightS);
					clearInterval(snake.upS);
					snake.leftS  = setInterval(snake.snakeLeft, 200); 
		        } else if (snake.lastSwipeDirection !== 2 && snake.lastSwipeDirection !== 1){
		            /* right swipe */
		            snake.lastSwipeDirection = 2;
					clearInterval(snake.downS);
				 	clearInterval(snake.leftS);
					clearInterval(snake.upS);
				 	snake.rightS = setInterval(snake.snakeRight, 200);
		        }                       
		    } else {
		        if ( yDiff > 0 && snake.lastSwipeDirection !== 3 && snake.lastSwipeDirection !== 4) {
		            /* up swipe */
		            snake.lastSwipeDirection = 3;
					clearInterval(snake.leftS);
					clearInterval(snake.rightS);
					clearInterval(snake.downS);
					snake.upS = setInterval(snake.snakeUp, 200); 
		        } else if (snake.lastSwipeDirection !== 4 && snake.lastSwipeDirection !== 3){ 
		            /* down swipe */
		            snake.lastSwipeDirection = 4;
					clearInterval(snake.leftS);
					clearInterval(snake.rightS);
					clearInterval(snake.upS);
					snake.downS  = setInterval(snake.snakeDown, 200);
		        }                                                                 
		    }
		    /* reset values */
		   this.xDown = null;
		   this.yDown = null; 
		}, 
};
const onKeyPress = {
		keyCode : null,
		setMovement : function(e){
			for(let i = 0; i < fieldArea.children.length; i++){
				fieldArea.children[i].classList.remove("hidden");
			}
			clearText.innerHTML = "";
			this.keyCode = e.keyCode;
			if(snake.lastClickDirection === this.keyCode){
				return false;
			};
			if(this.keyCode === 38 && snake.lastClickDirection === 40){
				return false;
			};
			if(this.keyCode === 40 && snake.lastClickDirection === 38){
				return false;
			};
			if(this.keyCode === 39 && snake.lastClickDirection === 37){
				return false;
			};
			if(this.keyCode === 37 && snake.lastClickDirection === 39){
				return false;
			};
			switch (this.keyCode) {
			case 38:
			 	snake.lastClickDirection = this.keyCode;		 
				clearInterval(snake.leftS);
				clearInterval(snake.rightS);
				clearInterval(snake.downS);	
				snake.upS = setInterval(snake.snakeUp, 200);
				break;
			case 39:
				snake.lastClickDirection = this.keyCode;	
				clearInterval(snake.downS);
			 	clearInterval(snake.leftS);
				clearInterval(snake.upS);
			 	snake.rightS = setInterval(snake.snakeRight, 200);
				break;
			case 40:
				snake.lastClickDirection = this.keyCode;
				clearInterval(snake.leftS);
				clearInterval(snake.rightS);
				clearInterval(snake.upS);	
				snake.downS  = setInterval(snake.snakeDown, 200);
				break;
			case 37:
				snake.lastClickDirection = this.keyCode;
				clearInterval(snake.downS);
				clearInterval(snake.rightS);
				clearInterval(snake.upS);
				snake.leftS  = setInterval(snake.snakeLeft, 200); 
				break;
			case 27:
				console.log('Snake Paused');
				// alert("Game Paused")
				clearInterval(snake.downS);
				clearInterval(snake.rightS);
				clearInterval(snake.upS);
				clearInterval(snake.leftS);
				break;
			}
		},
};
function snakeGame(){
	document.addEventListener('touchstart', onSwipe.handleTouchStart, false);        
	document.addEventListener('touchmove', onSwipe.handleTouchMove, false);
	document.addEventListener("keydown", onKeyPress.setMovement, false);
};
snakeGame();
