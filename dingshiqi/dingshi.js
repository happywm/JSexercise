




// JavaScript Document

//一位数变两位数，便于以后相加

function toDou(n){
	if(n<10){
		return '0'+n;	
	}else{
		return ''+n;       //中间没有空格 只是为了变为字符串，便于以后的相加
	}
}


window.onload=function()
{
	var aImg=document.getElementsByTagName('img');
	
	function tick(){
		var oDate=new Date();
	
		var str=toDou(oDate.getHours())+toDou(oDate.getMinutes())+toDou(oDate.getSeconds());
	
		for (var i=0;i<aImg.length;i++)
		{
		aImg[i].src='image/'+str.charAt(i)+'.png';        //兼容IE7，str[i]要变成str.charAt(i)
		}
		
	}
	setInterval(tick,1000);
	tick();


}