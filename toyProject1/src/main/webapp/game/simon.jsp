<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>Insert title here</title>

	<link href="../css/simon.css" rel="stylesheet">
</head>
<body>
	<div id="wrap">
		<div class="gameWrap">
			<div id="outerCircle">
				<div class="topLeft"></div>
				<div class="topRight"></div>
				<div class="bottomLeft"></div>
				<div class="bottomRight"></div>
				<div class="innerCircle">
					<div class="gameText">SimonGame</div>
					<button onclick="startGame()" class="startBtn startBtnPlus">Start</button>
				</div>	<!-- innerCircle end -->
			</div>	<!-- outerCircle end -->
			<div class = "gameInfoWrap">
				<div class = "gameInfoBox">
					<div class="InfoBtn">
						준비됐어요!
					</div>	<!-- InfoBtn end -->
				</div>	<!-- gameInfoBox end -->
			</div>	<!-- gameInfoWrap end -->
			<h3 class="gameInfoBtn">게임규칙</h3>
		</div>	<!-- gameWrap end -->
	</div>



	<script src="../js/simon.js"></script>
</body>
</html>