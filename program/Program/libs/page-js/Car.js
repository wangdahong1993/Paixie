
		$(function(){
			var NAME=getCookie('name');
			if (NAME!='') {
				$('#js-user-info').empty()
				var HTML=('<span>您好，欢迎来拍鞋网！'+NAME+'</span>');
				$(HTML).appendTo('#js-user-info');
			}else{
				window.location.href='Login.html';
			}



				var GOODIDS = "GOODSIDS";
            	var GOODNUM = "GOODSNUMS";
				var goodsIdStr = getCookie(GOODIDS);
				var goodsNumStr = getCookie(GOODNUM);
			
				var goodsIdArray = [];
				var goodNumArray = [];
				
				if(goodsIdStr){
				   goodsIdArray = goodsIdStr.split("&");
				}
				if(goodsNumStr){
				   goodNumArray = goodsNumStr.split("&");
				}
				
				
				
				function saveID(goodidsArray){
					
						var tmpIdStr = goodidsArray.join("&");
						console.log("tmpIdStr:"+tmpIdStr);
						removeCookie(GOODIDS);
						var d = new Date();
						d.setDate(d.getDate()+7);
						setCookie(GOODIDS,tmpIdStr,d);
					
                }

				var tmpNumStr = ''
				function saveNUM(goodNumArray){
						
						tmpNumStr = goodNumArray.join("&");
						console.log("tmpNumStr:"+tmpNumStr);
						removeCookie(GOODNUM);
						var d = new Date();
						d.setDate(d.getDate()+7);
						setCookie(GOODNUM,tmpNumStr,d);
						
				}
				
				

			var goodNumArray=[];
				
			var page = function(_pageindex, _isgenerate){
				$.get('Search.txt', {'_': Math.random(), page: _pageindex}, function(response){
					var obj = JSON.parse(response);
					
					
					function NUM (){
							removeCookie(GOODNUM);
							var goodNumArray=[]
							for(var a =0;a < goodsIdArray.length;a++){
								var num=parseInt($('input.num').eq(a).val());
								goodNumArray.push(num);
								
							}

							console.log(goodNumArray);
							saveNUM(goodNumArray);
						}
				
					function NNN(){
						
						var NUMSTR=getCookie(GOODNUM)
						var NumArray=NUMSTR.split('&');
						if(NUMSTR==''){
							return false;
						}
						for(var i=0;i<NumArray.length;i++){
							var V=parseInt(NumArray[i]);
							$('input.num').eq(i).val(V);
						}
						Count();
					}
				
					function Count(){
						var Toltal=0;
						var Length=parseInt($('input.num').length)
						for(var i=0;i<Length;i++){
							var num=parseInt($('input.num').eq(i).val());
							var Price=parseInt($('input.num').eq(i).parent().parent().find('span.price').text());
							Price=Price*num;
							$('input.num').eq(i).parent().parent().find('strong.js-total').html(Price);
							Toltal+=Price;
						}
						$('#js-total')[0].innerHTML=Toltal;


					}


					function Loa(){
						
						var pageCount = Math.ceil(goodsIdArray.length / 5)
				
						var pageFlag = '';
						if(!_isgenerate){
							return false;
						}
						for(var i = 1; i <= pageCount; i++){
							pageFlag += ('<span class="pages_no">' + i + '</span>');
						}
						$('#js-cart-num')[0].innerHTML=parseInt(goodsIdArray.length);
						$('#little_pages').empty();
						$(pageFlag).appendTo('#little_pages');
						var wid=$("#little_pages").width();
						$(".big_pages").width(160+wid);
						
						var Data=obj.result

						$('#list').empty();
						var Things="";
						
						
						for(var a =0;a <=goodsIdArray.length;a++){
							var A=parseInt(goodsIdArray[a]);
							for(var i=0;i <= Data.length-1;i++){
								var I=parseInt(Data[i].id);
								if(A==I){
							Things += ('<div class="Goods_list"><table class="w980 gray2 area-business area-cart-business" cellpadding="0" cellspacing="0" style="width: 1200px;"><tbody><tr><th class="lf" style="text-align:left"><input class="Effective js-select-tall input on" type="checkbox" checked=""><i></i><strong><a class="f14" >马登旗舰店</a></strong></th><th class="rf gray2 f14">本店全场免邮费！</th></tr></tbody></table><table class="w980 gray2 area-business area-goods" cellpadding="0" cellspacing="0" style="width: 1200px;"><tbody><tr id="good_1242373" class="xbgs on"><td class="first" width="30"><input type="checkbox" class="effective on"/></td><td width="95"><a class="public_goodimg8080" ><img src="'+Data[i].src+'"></a></td><td width="318" class="lf" valign="center"><a class="gray2">'+Data[i].title+'</a><span class="red borbox">此商品不支持货到付款</span><a class="modify-colorsize"><span>尺码：44码&nbsp;&nbsp;<br>颜色：木炭黑</span><i class="one"></i><i>修改</i></a></td><td><span class="price">'+Data[i].price1+'</span></td><td width="180"><a class="Change minus-num minus-num-disabled"></a><input  max-num="7"  type="text" itemid="10099995020" brandid="52" value="1" class="text num"><a class="Change add-num"></a></td><td width="170"><strong class="orange js-total">'+Data[i].price1+'</strong></td><td width="100" class="last"><a class="gray2 favorites">移入收藏夹</a><br><a class="Change gray1 del" name="'+a+'">删除</a></td></tr></tbody></table></div>')
						
							}
							}
						}
						



						function PAGE (){
							$('.Goods_list').css('display','none');
							var Last =parseInt($('.Goods_list').length);
							for(var i=0;i<=Last;i++){
								var L=parseInt($('.Check').text());
								var max=L*5;
								var min=(L-1)*5;
								if(i>=min&&i<max){

									$('.Goods_list').eq(i).css('display','block');
								}
							}
						}
						
						$(Things).appendTo('#list');
						$('#little_pages span').eq(0).addClass("Check");
						$('.Goods_list').css('display','none');
						PAGE()
						$('#little_pages span').on('click',function(){
							$('#little_pages span').removeClass("Check");
							$(this).addClass("Check");
							PAGE()	


						})
						
							
						$('a.del').on('click',function(){
							var a=parseInt($(this).attr('name'));
							goodsIdArray.splice(a,1);
							// goodNumArray.splice(a,1);
							// saveNUM(goodNumArray);
							saveID(goodsIdArray);

							
							$(this).parent().parent().parent().parent().parent().detach();
							NUM();
							Count();
							Loa();
//							NNN();
						})
						
						

						
						$('.minus-num').on('click',function(){
							var Nu=parseInt($(this).next('input').val());
							var Price=parseInt($(this).parent().parent().find('span.price').text())
							if(Nu>1){
								Nu-=1;
								$(this).next('input').val(Nu);
							}
							Price=Price*Nu;
						
							$(this).parent().parent().find('strong.js-total').html(Price);
							
							NUM();
//							Loa();
//							NNN();

							var Lnength=parseInt($('strong.js-total').length);
							var Toltal=0;
							for(var i=0;i<Lnength;i++){
								Toltal+=parseInt($('strong.js-total')[i].innerHTML);

							}
							console.log(Toltal)

							$('#js-total').html(Toltal);
					})
						$('.add-num').on('click',function(){
							var Nu=parseInt($(this).prev('input').val());
							var Price=parseInt($(this).parent().parent().find('span.price').text());
							Nu+=1;
							$(this).prev('input').val(Nu)
							Price=Price*Nu;
							
							$(this).parent().parent().find('strong.js-total').html(Price);

							NUM();
//							Loa();
//							NNN();

							var Lnength=parseInt($('strong.js-total').length);
							var Toltal=0;
							for(var i=0;i<Lnength;i++){
								Toltal+=parseInt($('strong.js-total')[i].innerHTML);

							}
							console.log(Toltal)

							$('#js-total').html(Toltal);
						})

						$('input.Effective').on('click',function(){
							var A=$(this).hasClass('on');
							var B=$(this).parent().parent().parent().parent().parent().find('input.effective').hasClass('on');
							
							$(this).toggleClass('on');
							if(A && B){
								$(this).parent().parent().parent().parent().parent().find('input.effective').toggleClass('on');
								$(this).parent().parent().parent().parent().parent().find('strong.orange').toggleClass('js-total');
							}else if(!A && !B ) {
								$(this).parent().parent().parent().parent().parent().find('input.effective').toggleClass('on');
								$(this).parent().parent().parent().parent().parent().find('strong.orange').toggleClass('js-total');
							}
							
						})
						$('input.effective').on('click',function(){
							$(this).toggleClass('on');
							$(this).parent().parent().parent().parent().parent().find('strong.orange').toggleClass('js-total');
						})
						$('input.num').change(function(){
							var num=parseInt($(this).val());
							var Price=parseInt($(this).parent().parent().find('span.price').text());
							Price=Price*num;
							$(this).parent().parent().find('strong.js-total').html(Price);
							
							
						})

					}
					
					$(".pages_no").first().addClass("Check");
					Loa();
					NNN();
					Count()
					
					addEventListener('change',function(){
						NUM();
//						Loa();
//						NNN();
						var Lnength=parseInt($('strong.js-total').length);
						var Toltal=0;
						for(var i=0;i<Lnength;i++){
							Toltal+=parseInt($('strong.js-total')[i].innerHTML);

						}
						console.log(Toltal)

						$('#js-total').html(Toltal);
					})
					
				})
				
			}
			
			page(5, true);
			
			
		
		})
