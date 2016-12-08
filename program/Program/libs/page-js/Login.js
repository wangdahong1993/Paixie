$(function() {
			//判断是否保存了账号和密码
            var oldUsername = getCookie("name");
            var oldPassword = getCookie("password");
			console.log(document.cookie);
            if (oldUsername) {
                $('[name="name"]')[0].value = oldUsername;
                $('[name="password"]')[0].value = oldPassword;
            }

            //点击提交
            $(':submit').click(function() {
				
                if ($('[type="checkbox"]')[0].checked) {
                    var name =  $('[name="name"]')[0].value; //账号
                    var pwd = $('[name="password"]')[0].value; //密码
                    var d = new Date();
                    d.setDate(d.getDate()+10); //10天后的日期
                    setCookie("name", name, d);
                    setCookie("password", pwd, d);
                    console.log("提交之后："+document.cookie);
                    window.location.href = 'Main.html';
                    
                }

            return false;
            })

       })