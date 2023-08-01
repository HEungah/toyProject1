console.log('simon.js 실행');

let topLeft = document.querySelector('.topLeft');	// 초록색 구역
let topRight = document.querySelector('.topRight');	// 빨간색 구역
let bottomLeft = document.querySelector('.bottomLeft');	// 노란색 구역
let bottomRight = document.querySelector('.bottomRight');	// 파란색 구역
let gameInfoWrap = document.querySelector('.gameInfoWrap');	// 게임설명창전체
let gameInfoBtn = document.querySelector('.gameInfoBtn');	// 게임설명 버튼
let InfoBtn = document.querySelector('.InfoBtn');	// 게임규칙 설명창 닫기 버튼
let squenceList = []; // 순서 저장 배열
let colorList = [];	// 색상 횟수 저장 배열
let level = 1; // 게임 레벨 변수
let score = 0;	// 게임 점수 변수
let squenceCount = 0;	// 게임중 누른 구역 순서 식별용 변수
let isInfo = true;	// 게임 규칙창 상태 변수
let gameRun = true;	// 게임 상태 변수

gameInfoBtn.addEventListener("click", InfoPrint);
InfoBtn.addEventListener("click", InfoPrint);
topLeft.addEventListener("mousedown", topLeftOnClick);
topRight.addEventListener("mousedown", topRightOnClick);
bottomLeft.addEventListener("mousedown", bottomLeftOnClick);
bottomRight.addEventListener("mousedown", bottomRightOnClick);


/*-------------------------------------------------------------------------*/

function InfoPrint(){
	if(isInfo){
		console.log("설명창 출력");
		gameInfoWrap.style.top = "0";
		gameInfoWrap.style.left = "0";
		isInfo = !isInfo;
	}else{
		console.log("설명창 제거");
		gameInfoWrap.style.top = "-100%";
		gameInfoWrap.style.left = "-100%";
		isInfo = !isInfo;
	}
}

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
		// 배열에 저장된 구역변수와 현재 누른 구역의 변수가 같으면 성공
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


// start버튼을 눌렀을때 시작하는 함수(게임 시작)
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
























