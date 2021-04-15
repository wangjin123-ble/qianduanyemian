// 判断输入框格式正确与否
function mainbord(){
var value1=document.getElementById("first-form-1").value;
var value2=document.getElementById("first-form-2").value;

if(value1==value2&&value1!="" &&value2!="" )
{
    btn();
}
else if(value1==""||value1=="请输入新的密码")
{
    error0();
}
else if(value2==""||value2=="请再次输入密码")
{
    error();
}
else
{
    error();
}

}
 

// 密码正确调用函数
function btn(){
    
     for(var i=1;i<2;i++){
    var box=document.getElementById("first-form-1");
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
            document.getElementById("main-button").style.display="none";
            document.getElementById("main-button-1").style.display="block";
            var img=document.getElementById("succee");
            img.style.display="block";
            document.getElementById("main-button").innerHTML = "continue";
            document.getElementById("succee-word").style.display="block";
}
// 密码为空错误函数
function error0()
{
    document.getElementById("first-form-1").type="text";
    document.getElementById("first-form-1").value="密码不能为空";
    document.getElementById("first-form-1").style.color="#FF7A7A";
    document.getElementById("password").setAttribute("src","../image/感叹号@3x.png");
}
function error1()
{
    document.getElementById("first-form-2").type="text";
    document.getElementById("first-form-2").value="密码不能为空";
    document.getElementById("first-form-2").style.color="#FF7A7A";
    document.getElementById("password-1").setAttribute("src","../image/感叹号@3x.png");
}
// 密码不一致函数
function error(){
    document.getElementById("first-form-2").type="text";
    document.getElementById("first-form-2").value="两次密码不一致";
    document.getElementById("first-form-2").style.color="#FF7A7A";
    document.getElementById("password-1").setAttribute("src","../image/感叹号@3x.png");


}

// 点击密码框还原函数
 
function back2(){
    document.getElementById("first-form-1").type="password";
    document.getElementById("first-form-1").value="";
    document.getElementById("password").setAttribute("src","../image/密码-1.png");
    document.getElementById("first-form-1").style.color="#999999";
}
function back3(){
    document.getElementById("first-form-2").type="password";
    document.getElementById("first-form-2").value="";
    document.getElementById("password-1").setAttribute("src","../image/密码-1.png");
    document.getElementById("first-form-2").style.color="#999999";
}

//恢复提示文字
 
function reback1()
    {if( document.getElementById("first-form-1").value=="")
    document.getElementById("first-form-1").value="请输入新的密码";
}
function reback2(){
    if( document.getElementById("first-form-2").value=="")
    document.getElementById("first-form-2").value="请再次输入密码";
}