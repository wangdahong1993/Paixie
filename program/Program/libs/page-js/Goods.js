$(function(){
	$("#Header").load("Header.html?_="+Math.random());
	$("#Footer").load("Footer.html?_="+Math.random());	
	
	
	$(".Informations").on('click',function(){
		$(this).siblings().removeClass('current');
		$(this).addClass('current');
		$('#subtabbar ul li').removeClass('current');
		$('#subtabbar ul li').eq(0).addClass('current');
		$('.commentCont').css('display','none')
		$('.detailsimg').css('display','block')
		
	})
	$(".CommentCont").on('click',function(){
		$(this).siblings().removeClass('current');
		$(this).addClass('current');
		$('#subtabbar ul li').removeClass('current');
		$('#subtabbar ul li').eq(1).addClass('current');
		$('.commentCont').css('display','block')
		$('.detailsimg').css('display','none')
	})
	
	
})	