// JavaScript Document
window.onload=function(){
	var oDiv=document.getElementById('div1');
	var oUl=oDiv.getElementsByTagName('ul')[0];
	var aLi=oUl.getElementsByTagName('li');
	var speed=null;
	
	oUl.innerHTML=oUl.innerHTML+oUl.innerHTML;
	oUl.style.width=aLi[0].offsetWidth*aLi.length+'px';
	
	function move(){
				if(oUl.offsetLeft<-oUl.offsetWidth/2){
					oUl.style.left=-20+'px';
				}
				if(oUl.offsetLeft>-20){
					oUl.style.left=-oUl.offsetWidth/2+'px';
				}
				oUl.style.left=oUl.offsetLeft+speed+'px';		
	}
	
	var timer=setInterval(move,30);
	
	oDiv.onmouseover=function(){
		clearInterval(timer);
	}
	
	oDiv.onmouseout=function(){
		timer=setInterval(move,30);
	};
	
	document.getElementsByTagName('a')[0].onclick=function(){speed=-2};
	document.getElementsByTagName('a')[1].onclick=function(){speed=2};
};