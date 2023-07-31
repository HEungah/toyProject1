console.log('simon.js 실행');

let topLeft = document.querySelector('.topLeft');
let topRight = document.querySelector('.topRight');
let bottomLeft = document.querySelector('.bottomLeft');
let bottomRight = document.querySelector('.bottomRight');
let squenceList = []; // 순서 저장 배열
let colorList = [];	// 색상 횟수 저장 배열
let level = 1; // 게임 레벨 변수
let score = 0;	// 게임 점수 변수
let squenceCount = 0;
let gameRun = true;	// 게임 상태 변수


topLeft.addEventListener("mousedown", topLeftOnClick);
topRight.addEventListener("mousedown", topRightOnClick);
bottomLeft.addEventListener("mousedown", bottomLeftOnClick);
bottomRight.addEventListener("mousedown", bottomRightOnClick);

/*게임판 색상변경 함수*/
function topLeftOn(){
	topLeft.style.backgroundColor=" #44f028";
	topRight.style.backgroundColor="#BD2F2C";
	bottomLeft.style.backgroundColor="#c9ab13";
	bottomRight.style.backgroundColor="#222889";
	setTimeout(function(){resetColor()}, 300);	
}

function topRightOn(){
	topRight.style.backgroundColor=" #FF2300";
	topLeft.style.backgroundColor="darkgreen";
	bottomLeft.style.backgroundColor="##c9ab13";
	bottomRight.style.backgroundColor="#222889";
	setTimeout(function(){resetColor()}, 300);	
}

function bottomLeftOn(){
	bottomLeft.style.backgroundColor=" #FFFF02";
	topLeft.style.backgroundColor="darkgreen";
	topRight.style.backgroundColor="#BD2F2C";
	bottomRight.style.backgroundColor="#222889";
	setTimeout(function(){resetColor()}, 300);	
}

function bottomRightOn(){
	bottomRight.style.backgroundColor=" #0A03FC";
	topLeft.style.backgroundColor="darkgreen";
	topRight.style.backgroundColor="#BD2F2C";
	bottomLeft.style.backgroundColor="#c9ab13";
	setTimeout(function(){resetColor()}, 300);	
}

/*클릭시 색상 변경*/
function topLeftOnClick(){
	if(gameRun == false){
		topLeft.style.backgroundColor=" #44f028";
		topRight.style.backgroundColor="#BD2F2C";
		bottomLeft.style.backgroundColor="#c9ab13";
		bottomRight.style.backgroundColor="#222889";
		setTimeout(function(){resetColor()}, 300);
		if(squenceList[squenceCount] == 0){
			squenceCount++;
			if(squenceCount == squenceList.length){
				levelClear()
			}
		}else{
			levelFalse()
		}
	}
}

function topRightOnClick(){
	if(gameRun == false){
		topRight.style.backgroundColor=" #FF2300";
		topLeft.style.backgroundColor="darkgreen";
		bottomLeft.style.backgroundColor="#c9ab13";
		bottomRight.style.backgroundColor="#222889";
		setTimeout(function(){resetColor()}, 300);
		if(squenceList[squenceCount] == 1){
			squenceCount++;
			if(squenceCount == squenceList.length){
				levelClear()
			}
		}else{
			levelFalse()
		}
	}	
}

function bottomLeftOnClick(){
	if(gameRun == false){
		bottomLeft.style.backgroundColor=" #FFFF02";
		topLeft.style.backgroundColor="darkgreen";
		topRight.style.backgroundColor="#BD2F2C";
		bottomRight.style.backgroundColor="#222889";
		setTimeout(function(){resetColor()}, 300);
		if(squenceList[squenceCount] == 2){
			squenceCount++;
			if(squenceCount == squenceList.length){
				levelClear()
			}
		}else{
			levelFalse()
		}
	}	
}

function bottomRightOnClick(){
	if(gameRun == false){
		bottomRight.style.backgroundColor=" #0A03FC";
		topLeft.style.backgroundColor="darkgreen";
		topRight.style.backgroundColor="#BD2F2C";
		bottomLeft.style.backgroundColor="#c9ab13";
		setTimeout(function(){resetColor()}, 300);
		if(squenceList[squenceCount] == 3){
			squenceCount++;
			if(squenceCount == squenceList.length){
				levelClear()
			}
		}else{
			levelFalse()
		}	
	}
}

// 모든 색판의 색을 원래대로 리셋시키는 함수
function resetColor(){
	bottomRight.style.backgroundColor=" #222889";
	topLeft.style.backgroundColor="darkgreen";
	topRight.style.backgroundColor="#BD2F2C";
	bottomLeft.style.backgroundColor="#c9ab13";
}

// level 클리어시 실행함수
function levelClear(){
	let levelView = level;
	console.log(levelView + '클리어!');
	setTimeout(function(){startGame();}, 500);	
	level++;
	squenceCount = 0;
	score += 10;
	squenceList = [];
	gameRun = true;
}

// level 실패시 실행함수
function levelFalse(){
	let levelView = level;
	let scoreView = score;
	setTimeout(function(){alert('level' + levelView + ' 실패... ' + '점수 : ' + scoreView + '점');}, 500);
	squenceCount = 0;
	squenceList = [];
	level = 1;
	score = 0;
	gameRun = true;
}



function startGame(){	// f start
	if(gameRun == true){	// if start
		console.log('게임시작');
		let delay = 0;

		for(let i=0; i < level; i++){ // for start
			let color = Math.floor(Math.random() * 4);
			console.log(color);
			delay += 1000;
			
			if(color == 0){
				console.log('초록색');
			    setTimeout(function(){topLeftOn()}, delay);
			    squenceList.push(color);
		    }
		    else if(color == 1){
				console.log('빨간색');
				setTimeout(function(){topRightOn()}, delay);
				squenceList.push(color);
			}
			else if(color == 2){
				console.log('노란색');
				setTimeout(function(){bottomLeftOn()}, delay);
				squenceList.push(color);
			}
			else if(color == 3){
				console.log('파란색');
				setTimeout(function(){bottomRightOn()}, delay);
				squenceList.push(color);
			}
		
		}	// for end
		
		console.log(squenceList);
		setTimeout(function(){gameRun = false; console.log('상태바꿈')}, delay+500);
		
	}	// if end
}	// f end
























