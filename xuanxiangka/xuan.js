// JavaScript Document
window.onload=function()
{
	var oDiv=document.getElementById('div1');
	var aBtn=oDiv.getElementsByTagName('input');
	var aDiv=oDiv.getElementsByTagName('div');
	
	for(var i=0;i<aBtn.length;i++)
	{
		aBtn[i].index=i; 				//��Ҫ������
		aBtn[i].onclick=function()
		{
			for(var i=0;i<aBtn.length;i++)
			{
				aBtn[i].className='';    //�Ȱ����еĶ����أ�Ȼ��ѵ��ȵ���ʾ����
				aDiv[i].style.display='none';
			}
			this.className='active';   //this �ǵ�ǰ�����¼���Ԫ��(��ť)
			aDiv[this.index].style.display='block';
		}
		
	}
	
	
};