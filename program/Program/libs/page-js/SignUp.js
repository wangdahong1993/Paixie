	$(document).ready(function(){
		$("#commentForm").validate();
	});
	$(function() {
			//判断是否保存了账号和密码
            var oldUsername = getCookie("Name");
            var oldPassword = getCookie("Password");
            var oldRepassword = getCookie("rePassword");
			console.log(document.cookie);
            if (oldUsername) {
                $('[name="name"]')[0].value = oldUsername;
                $('[name="password"]')[0].value = oldPassword;
                $('[name="repassword"]')[0].value = oldRepassword;
            }

            //点击提交
            $(':submit').click(function() {
				
                if ($('[type="checkbox"]')[0].checked) {
                    var name =  $('[name="name"]')[0].value; 
                    var pwd = $('[name="password"]')[0].value;
                    var repwd = $('[name="repassword"]')[0].value;
                    var d = new Date();
                    d.setDate(d.getDate()+10); //10天后的日期
                    setCookie("Name", name, d);
                    setCookie("Password", pwd, d);
                    setCookie("rePassword", repwd, d);
                    console.log("提交之后："+document.cookie);
                     window.location.href = 'Login.html';
                }
                
            return false;
            })

       })