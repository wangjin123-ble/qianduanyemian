
// 取消刷新提示
window.history.replaceState(null,null,window.location.href)
// 判断输入框格式正确与否
function mainbord(){
var bordvalue=document.getElementById("first-form-1").value;
if(bordvalue==""||bordvalue==" 请输入密码" )
{
    error();
}
else
{
    // btn();
    return true;
}

}
// 账号验证函数
function mainbord0(){
    var bordvalue=document.getElementById("first-form").value;
    if(bordvalue==""||bordvalue==" 请输入账号"||bordvalue=="该账号不存在")
    {
        document.getElementById("first-form").value="该账号不存在";
        document.getElementById("first-form").style.color="#ff7a7a";
        document.getElementById("myimg").setAttribute("src","../image/感叹号@3x.png");
        return false;
    }
    else
    {
        var bordvalue=document.getElementById("first-form-1").value;
        if(bordvalue==""||bordvalue==" 请输入密码"||bordvalue=="密码输入错误" )
            {
                document.getElementById("first-form-1").type="text";
                document.getElementById("first-form-1").value="密码输入错误";
                document.getElementById("first-form-1").style.color="#FF7A7A";
                document.getElementById("password0").setAttribute("src","../image/感叹号@3x.png");
                return false;
            }
             else
            {
                // btn();
                // console.log("okk");
                    return true;
            }

    }
        }

// 密码正确调用函数
function btn(){
    for(var i=1;i<3;i++){
    var box=document.getElementById("min-word");
    box.parentNode.removeChild(box);
    }
     for(var i=1;i<2;i++){
    var box=document.getElementById("first-form");
    box.parentNode.removeChild(box);
    }
    for(var i=1;i<3;i++){
        var box=document.getElementById("left-img");
        box.parentNode.removeChild(box);
        }
        for(var i=1;i<3;i++){
            var box=document.getElementById("from-number");
            box.parentNode.removeChild(box);
            }
            for(var i=1;i<2;i++){
                var box=document.getElementById("agree");
                box.parentNode.removeChild(box);
                }

            var img=document.getElementById("succee");
            img.style.display="block";
            document.getElementById("main-button-1").style.display = "block";
            
}
// 账号错误函数
function error0()
{
    document.getElementById("first-form").value="该账号不存在";
    document.getElementById("first-form").style.color="#FF7A7A";
    document.getElementById("myimg").setAttribute("src","../image/感叹号@3x.png");
}
// 密码错误函数
function error(){
    document.getElementById("first-form-1").type="text";
    document.getElementById("first-form-1").value="密码输入错误";
    document.getElementById("first-form-1").style.color="#FF7A7A";
    document.getElementById("password0").setAttribute("src","../image/感叹号@3x.png");


}

// 点击密码框还原函数
function back1(){
    document.getElementById("first-form").value="";
    document.getElementById("myimg").setAttribute("src","../image/我的-1.png");
    document.getElementById("first-form").style.color="#999999";
}
function back2(){
    document.getElementById("first-form-1").value="";
    document.getElementById("first-form-1").type="password";
    document.getElementById("password0").setAttribute("src","../image/密码-1.png");
    document.getElementById("first-form-1").style.color="#999999";
}

// 勾选协议函数

function enable()
  {
    if( document.getElementById("accept").checked)
    {
       return true;
    }
 
    else
    { 
        red();
       
        return false;
    }
    
  }

// 协议变色函数
function red()
{
    document.getElementById("bered").style.color="#EC4E4E";
}
function backred()
{
    document.getElementById("bered").style.color="#707070";
}
//恢复提示文字
function reback(){
    if( document.getElementById("first-form").value=="")
    document.getElementById("first-form").value=" 请输入账号";
}
function reback1()
{if( document.getElementById("first-form-1").value=="")
    document.getElementById("first-form-1").value=" 请输入密码";
    
}
// 按回车键确定函数
//   var input=document.getElementById("first-form");
//   input.addEventListener("keyup",function(event){
//         event.preventDefault();
//         if (event.keyCode===13){
//             document.getElementById(main-button).click();
//         }
//   });
 

 