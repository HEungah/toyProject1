console.log('메인페이지 js 실행');

const introTitle = document.getElementsByClassName("intro__title")[0];

const title = "Monster\nis\ncomming";

let count = 0;
let timer = 0;

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




