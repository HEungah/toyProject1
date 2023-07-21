console.log('메인페이지 js 실행');

const introTitle = document.getElementsByClassName("intro__title")[0];
const content = document.getElementById("content");

const title = "Welcome\nGame\nWorld!";

let count = 0;
let timer = 0;

if ('scrollRestoration' in history) {
    // 새로고침시 내려가는 스크롤 조정
    history.scrollRestoration = 'manual';
}

function typingIntromTitle(){
	console.log("타이핑 함수 실행");
	let char = title[count++];
	
	if(char === "\n"){
		introTitle.innerHTML += `<br/>`;
	}else{
		introTitle.innerHTML += char;
	}
	
	if(count === title.length){
		clearInterval(timer);
		
		return;
	}
}

window.onload = function(){
	timer = setInterval(typingIntromTitle, 200);
}

// 스크롤 스르륵 내려가는 효과
function scrollDown(){
	console.log('스크롤다운함수 실행')
	content.scrollIntoView({behavior: "smooth"});
}

function goSimon(){
	console.log('goSimon 함수 실행')
	location.href="/toyProject1/game/simon.jsp";
}








