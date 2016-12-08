$(function(){
	$("#Header").load("Header.html?_="+Math.random());
	$("#Footer").load("Footer.html?_="+Math.random());	
})


$(function(){
			var page = function(_pageindex, _isgenerate){
				$.get('Search.txt', {'_': Math.random(), page: _pageindex}, function(response){
					var obj = JSON.parse(response);
					var pageCount = Math.ceil(obj.totalCount / obj.pageSize)
					console.log(pageCount)
					var pageFlag = '';
					if(!_isgenerate){
						return false;
					}
					for(var i = 1; i <= pageCount; i++){
						pageFlag += ('<span class="pages_no">' + i + '</span>');
					}
					
					$(pageFlag).appendTo('#little_pages');
					var wid=$("#little_pages").width();
					$(".big_pages").width(160+wid);
					var Data=obj.result
					function Loa(NUM){
						$('#list').empty();
						var Things="";
						var max=parseInt(obj.pageSize);
						var Begin=(NUM-1)*max+1;
						var Laste=(NUM-1)*max+max;
						if(Laste>=obj.totalCount){
							Laste=obj.totalCount;
						}
						for(var i = Begin-1;i <=Laste-1;i++){
							console.log(Data[i].id);
							
							Things += ('<li><div class="li_box" name="'+Data[i].id+'"><a class="img" href="Goods.html"><img class="BG" src='+Data[i].src+'/></a><div class="price"><span class="oof">￥</span><b>'+Data[i].price1+'</b><del class="oof">￥'+Data[i].price2+'</del><p class="title"><a class="Car_title">'+Data[i].title+'</a></p></div><div><a class="buy_car">加入购物车</a></div></div></li>')
						}
						$(Things).appendTo('#list');
						$('#little_pages span').removeClass("Check")
						$(".pages_no").eq(NUM-1).addClass("Check");
						
					}

					

					$(".pages_no").first().addClass("Check");
					Loa(1);
					
					
					$('.pages_no').on('click',function(evt){
						Loa(evt.target.innerHTML);
					})
					$('.prev').on('click',function(){

						var Nu=parseInt($(".Check").text());
						if (Nu==1) {
							return false;
						}
						Loa(Nu-1);
					})
					$('.next').on('click',function(){
						var Nu=parseInt($(".Check").text());
						if (Nu==pageCount) {
							return false;
						}
						Loa(Nu+1);
					})
					
				})
			}
			
			page(5, true);
			
			
		
		})

onload = function() {
           
                
                var GOODIDS = "GOODSIDS";//cookie记录商品名字数组的key
         
                
                //====cookie
                //先从读取下cookie，看看之前是否有存过数据，存过则读取出来
						//在之前的基础之上追加
						var goodidsStr = getCookie(GOODIDS);//注意读取出来的数据类型为字符串
						
						
						var goodidsArray = [];//存储从cookie读取的，转化为数组的商品名字
						
						if(goodidsStr){
							//因为对去出来的数据为字符串，不便于我们操作，所以讲字符串转化为数组
							//这里注意我们一定要统一分割字符串的字符,这里用 &
							goodidsArray = goodidsStr.split("&");
						}
						console.log("goodidsArray:"+goodidsArray);
						
						
						//没有则直接添加到cookie中

                //====end cookie
                
              
               
                $('.buy_car').on('click',function(){
                	
					var ID=parseInt($(this).parent().parent().attr('name'));
					var isTrue=jQuery.inArray(ID,goodidsArray)
					if(isTrue==-1){
						saveGoods(ID);
					}else{
						console.log("id已存在");
					}
					
				})
               

                       
                       
                    

                
                
                function saveGoods(name){
                  	goodidsArray.push(name);
					
					
					console.log("goodidsArray:"+goodidsArray);
					
					//因为cookie中只能存字符串类型的数据，所以我们要操作的时候必须
					//把数据类型转化为str
					var tmpIdStr = goodidsArray.join("&");//字符串和数组之间的相互转化的字符串要一致
					
					console.log("tmpIdStr:"+tmpIdStr);
					
					//cookie的数据准备好了，接下来就是更新cookie里的数据
					removeCookie(GOODIDS);
				
					var d = new Date();
					d.setDate(d.getDate()+7);
					
					setCookie(GOODIDS,tmpIdStr,d);
					
					
                }
                
                
            }