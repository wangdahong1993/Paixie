$(function(){
	$("#Header").load("Header.html?_="+Math.random());
	$("#Footer").load("Footer.html?_="+Math.random());
	$('.left_list').hover(function(){
		$(this).find('span').animate({left:'15px'})
		$(this).find('p').animate({left:'15px'})
		$(this).css("overflow","visible")
	},function(){
		$(this).find('span').animate({left:0})
		$(this).find('p').animate({left:0})
		$(this).css("overflow","hidden")
	})
	$('.list_img').hover(function(){
		$(this).find('i').animate({top:'-20px'})
		$(this).find('img').animate({top:'-10px'})
	},function(){
		$(this).find('i').animate({top:0})
		$(this).find('img').animate({top:0})
	})
	$('.bg_small a').eq(1).on('mouseenter',function(){
		$('.bigimgs').animate({left:'-400px'})
	})
	$('.bg_small a').eq(2).on('mouseenter',function(){
		$('.bigimgs').animate({left:'-800px'})
	})
	$('.bg_small a').eq(0).on('mouseenter',function(){
		$('.bigimgs').animate({left:0})
	})
		
})