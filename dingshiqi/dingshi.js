




// JavaScript Document

//һλ������λ���������Ժ����

function toDou(n){
	if(n<10){
		return '0'+n;	
	}else{
		return ''+n;       //�м�û�пո� ֻ��Ϊ�˱�Ϊ�ַ����������Ժ�����
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
		aImg[i].src='image/'+str.charAt(i)+'.png';        //����IE7��str[i]Ҫ���str.charAt(i)
		}
		
	}
	setInterval(tick,1000);
	tick();


}