console.log('simon.js 실행');

let topLeft = document.querySelector('.topLeft');
let topRight = document.querySelector('.topRight');
let bottomLeft = document.querySelector('.bottomLeft');
let bottomRight = document.querySelector('.bottomRight');
let squenceList = []; // 순서 저장 배열
let colorList = [];	// 색상 횟수 저장 배열
let level = 1; // 게임 레벨 변수
let gameRun = true;	// 게임 상태 변수

topLeft.addEventListener("mousedown", topLeftOn);
topRight.addEventListener("mousedown", topRightOn);
bottomLeft.addEventListener("mousedown", bottomLeftOn);
bottomRight.addEventListener("mousedown", bottomRightOn);

/*클릭시 색상 변경*/
function topLeftOn(){
	topLeft.style.backgroundColor=" #44f028";
	topRight.style.backgroundColor="#BD2F2C";
	bottomLeft.style.backgroundColor="#FFD400";
	bottomRight.style.backgroundColor="#222889";	
}

function topRightOn(){
	topRight.style.backgroundColor=" #FF2300";
	topLeft.style.backgroundColor="darkgreen";
	bottomLeft.style.backgroundColor="#FFD400";
	bottomRight.style.backgroundColor="#222889";
}

function bottomLeftOn(){
	bottomLeft.style.backgroundColor=" #FFFF02";
	topLeft.style.backgroundColor="darkgreen";
	topRight.style.backgroundColor="#BD2F2C";
	bottomRight.style.backgroundColor="#222889";
}

function bottomRightOn(){
	bottomRight.style.backgroundColor=" #0A03FC";
	topLeft.style.backgroundColor="darkgreen";
	topRight.style.backgroundColor="#BD2F2C";
	bottomLeft.style.backgroundColor="#FFD400";
}

function startGame(){	// f start
	if(gameRun == true){	// if start
		console.log('게임시작');
		gameRun = false;
		let delay = 0;

		for(let i=0; i < level; i++){ // for start
			let color = (Math.random())*3;
			
		    delay += 1000;
			
			if(color == 0){
			    setTimeout(async () => {
			
			    topLeftOn();
			
			    }, delay);
		    }
		    else if(color == 1){
				 setTimeout(async () => {
			
			     topRightOn();
			
			    }, delay);
			}
		
		}	// for end
		
	}	// if end
}	// f end
























