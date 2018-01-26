//develop snake with on key press moving
"use strict"
var snakeHead    		= document.querySelector("#snake"),
 	fieldArea    		= document.querySelector("#field"),
 	connectedSquares 	= document.getElementsByClassName("connected"),
 	totalScore			= document.querySelector("#score_display span"),
 	totalScoreScreen	= document.querySelector("#score_display"),
 	squareClassNew		= "",
 	screenWidth  		= window.innerWidth,
	screenHeight 		= window.innerHeight,
	snakeWidth   		= snakeHead.getBoundingClientRect().width,
	snakeHeight  		= snakeHead.getBoundingClientRect().height;



var snake = {
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
<<<<<<< HEAD
		lastClickDirection : null,
		lastSwipeDirection : false,
=======
		lastClickDirection : 0,
>>>>>>> 6aaf9a43cad6ed3c22216805b642bcac4a1e2562
		currentPosition : snakeHead.getBoundingClientRect(),
		outOnScreenRight : screenWidth - snakeWidth,
		outOnScreenDown : screenHeight - snakeHeight,

		snakeUp : function(){
			var moveUp = parseInt(window.getComputedStyle(snakeHead).top);
			snake.headPrevY = snakeHead.getBoundingClientRect().y;
			snake.headPrevX = snakeHead.getBoundingClientRect().x;

			snakeHead.style.top = moveUp - snakeHeight + "px";
			square.followHead();

			if(moveUp === 0){
				snakeHead.style.top = screenHeight - (screenHeight % snakeHeight) + "px";
			}		
		},
		snakeDown : function(){
			var moveDown = parseInt(window.getComputedStyle(snakeHead).top);
			snake.headPrevY = snakeHead.getBoundingClientRect().y;
			snake.headPrevX = snakeHead.getBoundingClientRect().x;

			snakeHead.style.top = moveDown + snakeHeight + "px";
			square.followHead();

			if(moveDown >= snake.outOnScreenDown){
				snakeHead.style.top = 0 + "px";
			}			
		},
		snakeLeft : function(){
			var moveLeft = parseInt(window.getComputedStyle(snakeHead).left);
			snake.headPrevY = snakeHead.getBoundingClientRect().y;
			snake.headPrevX = snakeHead.getBoundingClientRect().x;
			
			snakeHead.style.left = moveLeft - snakeWidth + "px";
			square.followHead();

			if(moveLeft === 0){
				snakeHead.style.left = screenWidth - (screenWidth % snakeWidth) + "px";
			};			
		},
		snakeRight : function(){
			var moveRight = parseInt(window.getComputedStyle(snakeHead).left);
			snake.headPrevY = snakeHead.getBoundingClientRect().y;
			snake.headPrevX = snakeHead.getBoundingClientRect().x;

			snakeHead.style.left = moveRight + snakeWidth + "px";
			square.followHead();
			
			if(moveRight >= snake.outOnScreenRight){
				snakeHead.style.left = 0 + "px";
			}		
		},
<<<<<<< HEAD
		pickUpSquare : function (){
			if(square.genNumY === snake.headPrevY && square.genNumX === snake.headPrevX){
				squareClassNew.classList.add("connected");
				squareClassNew.classList.remove("new");
				square.score += 5;
				totalScore.textContent = square.score;
			};	
		},
		increaseSpeed : function (){

		},
=======
>>>>>>> 6aaf9a43cad6ed3c22216805b642bcac4a1e2562
};

var square = {
		genNumX : " ",
		genNumY : " ",
		score : 0,
		followHead : function(){
			
			snake.posX = parseInt(window.getComputedStyle(snakeHead).left);
			snake.posY = parseInt(window.getComputedStyle(snakeHead).top);
			snake.allXs.push(snake.headPrevX);
			snake.allYs.push(snake.headPrevY);

<<<<<<< HEAD
			for(var i = 0; i < connectedSquares.length ; i++){
				connectedSquares[i].style.left = snake.allXs[connectedSquares.length - i] + "px";
				connectedSquares[i].style.top = snake.allYs[connectedSquares.length -i] + "px";
				
=======
			for(var i = 0; i < connectedSquares.length; i++){
				connectedSquares[i].style.left = snake.allXs[connectedSquares.length - i] + "px";
				connectedSquares[i].style.top = snake.allYs[connectedSquares.length -i] + "px";
>>>>>>> 6aaf9a43cad6ed3c22216805b642bcac4a1e2562
				//game over
				if(snake.allYs[i] === snake.posY && snake.allXs[i] === snake.posX){
					if (confirm('Game Over! Would you like to play again?')) {
			    		window.location.reload();
					} else {
						totalScoreScreen.innerHTML = "</h2>Nice! You got " + this.score + " points</h2>";
<<<<<<< HEAD
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
=======
						return false;
	    			}			
				}
				//splice array
				if(snake.allXs.length > connectedSquares.length){
					snake.allXs.splice(-1);
					console.log("X//////", snake.allXs);
				};
				if(snake.allYs.length > connectedSquares.length){
					snake.allYs.splice(-1);
					console.log("Y//////",snake.allYs);
				};
				square.newSquare();
			}	
>>>>>>> 6aaf9a43cad6ed3c22216805b642bcac4a1e2562
		},
		newSquare : function(){
			var divNew = document.createElement('div');
			squareClassNew = document.querySelector(".new");
			if(!fieldArea.lastElementChild.classList.contains("new")){	
				divNew.classList.add("square","new");

				divNew.style.left = this.newGetRandomX() + "px";
				divNew.style.top = this.newGetRandomY() + "px";

				fieldArea.appendChild(divNew);
				
			}	
<<<<<<< HEAD
			snake.pickUpSquare();
=======
			if(this.genNumY === snake.headPrevY && this.genNumX === snake.headPrevX){
				squareClassNew.classList.add("connected");
				squareClassNew.classList.remove("new");
				this.score += 5;
				totalScore.textContent = this.score;

			};	
>>>>>>> 6aaf9a43cad6ed3c22216805b642bcac4a1e2562
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
<<<<<<< HEAD
var mobileScreenSwipe = {
		xDown : null,                                                        
		yDown : null,                                                        

		handleTouchStart: function (evt) {                                         
    		this.xDown = evt.touches[0].clientX;                                      
    		this.yDown = evt.touches[0].clientY;                                      
		},  
		handleTouchMove: function (evt) {
    		if ( ! this.xDown || ! this.yDown ) {
        		return;
   			 }

		    var xUp = evt.touches[0].clientX;                                    
		    var yUp = evt.touches[0].clientY;

		    var xDiff = this.xDown - xUp;
		    var yDiff = this.yDown - yUp;

		    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {

		    	if ( xDiff > 0 && snake.lastSwipeDirection !== 1 && snake.lastSwipeDirection !== 2) {
		            /* left swipe */ 
		            console.log(xDiff);
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
=======

>>>>>>> 6aaf9a43cad6ed3c22216805b642bcac4a1e2562
init();

function init(){
	snakeGame();
};
function snakeGame(){
<<<<<<< HEAD
	if (screenWidth < 1024){
		document.addEventListener('touchstart', mobileScreenSwipe.handleTouchStart, false);        
		document.addEventListener('touchmove', mobileScreenSwipe.handleTouchMove, false);
	}
	else{
		document.addEventListener("keydown", function(e){
			var keyCode = e.keyCode;
			if(snake.lastClickDirection === keyCode){
				return false;
			};
			if(keyCode === 38 && snake.lastClickDirection === 40){
				return false;
			};
			if(keyCode === 40 && snake.lastClickDirection === 38){
				return false;
			};
			if(keyCode === 39 && snake.lastClickDirection === 37){
				return false;
			};
			if(keyCode === 37 && snake.lastClickDirection === 39){
				return false;
			};
			switch (keyCode) {
				case 38:
				 	snake.lastClickDirection = keyCode;		 
					clearInterval(snake.leftS);
					clearInterval(snake.rightS);
					clearInterval(snake.downS);
					snake.upS = setInterval(snake.snakeUp, 200);
					break;
				case 39:
					snake.lastClickDirection = keyCode;	
					clearInterval(snake.downS);
				 	clearInterval(snake.leftS);
					clearInterval(snake.upS);
				 	snake.rightS = setInterval(snake.snakeRight, 200);
					break;
				case 40:
					snake.lastClickDirection = keyCode;
					clearInterval(snake.leftS);
					clearInterval(snake.rightS);
					clearInterval(snake.upS);
					snake.downS  = setInterval(snake.snakeDown, 200);
					break;
				case 37:
					snake.lastClickDirection = keyCode;
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
		});
	}
=======
	document.addEventListener("keydown", function(e){
		var keyCode = e.keyCode;
		if(snake.lastClickDirection === keyCode){
			return false;
		};
		if(keyCode === 38 && snake.lastClickDirection === 40){
			return false;
		};
		if(keyCode === 40 && snake.lastClickDirection === 38){
			return false;
		};
		if(keyCode === 39 && snake.lastClickDirection === 37){
			return false;
		};
		if(keyCode === 37 && snake.lastClickDirection === 39){
			return false;
		};
		if(keyCode === 38){
			//Up
			snake.lastClickDirection = keyCode;		 
			clearInterval(snake.leftS);
			clearInterval(snake.rightS);
			clearInterval(snake.downS);
			snake.upS = setInterval(snake.snakeUp, 200);			
		}else if (keyCode === 39){
			//Right	
			snake.lastClickDirection = keyCode;	
			clearInterval(snake.downS);
		 	clearInterval(snake.leftS);
			clearInterval(snake.upS);
		 	snake.rightS = setInterval(snake.snakeRight, 200);	
		}else if (keyCode === 40){
			//Down
			snake.lastClickDirection = keyCode;
			clearInterval(snake.leftS);
			clearInterval(snake.rightS);
			clearInterval(snake.upS);
			snake.downS  = setInterval(snake.snakeDown, 200);
		}else if (keyCode === 37){
			//Left
			snake.lastClickDirection = keyCode;
			clearInterval(snake.downS);
			clearInterval(snake.rightS);
			clearInterval(snake.upS);
			snake.leftS  = setInterval(snake.snakeLeft, 200); 
		}else if (keyCode === 27){
			console.log('Snake Paused');
			alert("Game Paused")
			clearInterval(snake.downS);
			clearInterval(snake.rightS);
			clearInterval(snake.upS);
			clearInterval(snake.leftS);
		};
	});
>>>>>>> 6aaf9a43cad6ed3c22216805b642bcac4a1e2562
};
