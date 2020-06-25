function main(){
	function GetButton(newTime){
	var wrapper = document.getElementById("ecs");
	wrapper.style.backgroundColor = "white";
	wrapper.style.width = "auto";
	}
	GetButton();
	
	var lastLoop = new Date;
	var fSinceStart = 0;
	function Timer(){
		var timer = new Date;
		var fps = (timer.getTime() - lastLoop.getTime());
		fSinceStart += fps;
		lastLoop = timer;
		return fSinceStart;
	}
	var btn = setInterval(function(){
		var time = Timer();
		var wrapper = document.getElementById("ecs");
		var stringWidth = wrapper.style.width;
		//var floatWidth = parseFloat(stringWidth);
		//var width = stringWidth + Math.sin(300 * time);
		//wrapper.style.width = String(width)+"px";
		var debugRef = document.getElementById("debugString")
		debugRef.innerHTML = stringWidth+"<br>";
	}, 5);
}
//main();
var ud = setInterval(main(), 0.1);
