// JavaScript Document
window.onload=function()
{
	var oDiv=document.getElementById('div1');
	var aBtn=oDiv.getElementsByTagName('input');
	var aDiv=oDiv.getElementsByTagName('div');
	
	for(var i=0;i<aBtn.length;i++)
	{
		aBtn[i].index=i; 				//重要！！！
		aBtn[i].onclick=function()
		{
			for(var i=0;i<aBtn.length;i++)
			{
				aBtn[i].className='';    //先把所有的都隐藏，然后把当先的显示出来
				aDiv[i].style.display='none';
			}
			this.className='active';   //this 是当前发生事件的元素(按钮)
			aDiv[this.index].style.display='block';
		}
		
	}
	
	
};