// 判断输入框格式正确与否
function mainbord(){
var value1=document.getElementById("first-form").value;

if(value1==""||value1=="   请输入预留邮箱")
{
     console.log("nono")
}
else 
{
        console.log("okk");
    // btn();
}
}
 

// 邮箱验证成功调用函数
function btn(){
     for(var i=1;i<2;i++){
    var box=document.getElementById("first-form");
    box.parentNode.removeChild(box);
    }
    for(var i=1;i<2;i++){
        var box=document.getElementById("left-img");
        box.parentNode.removeChild(box);
        }
        for(var i=1;i<2;i++){
            var box=document.getElementById("from-number");
            box.parentNode.removeChild(box);
            }
         document.getElementById("main-button").style.display="none";
            var img=document.getElementById("succee");
            img.style.display="block";
            document.getElementById("main-button").innerHTML = "continue";
            document.getElementById("succee-word").style.display="block";
            document.getElementById("main-button-1").style.display="block";
}
// 邮箱调用失败函数
function error0()
{
    for(var i=1;i<2;i++){
        var box=document.getElementById("first-form");
        box.parentNode.removeChild(box);
        }
        for(var i=1;i<2;i++){
            var box=document.getElementById("left-img");
            box.parentNode.removeChild(box);
            }
            for(var i=1;i<2;i++){
                var box=document.getElementById("from-number");
                box.parentNode.removeChild(box);
                }
                document.getElementById("main-button").style.display="none";
                var img=document.getElementById("error");
                img.style.display="block";
                document.getElementById("main-button").innerHTML = "continue";
                document.getElementById("succee-word-1").style.display="block";
                document.getElementById("min-button-1").style.display="block";
                document.getElementById("min-button-2").style.display="block";
            }

// 点击密码框还原函数
function back1(){
    document.getElementById("first-form").value="";
    document.getElementById("myimg").setAttribute("src","../image/招聘.png");
    document.getElementById("first-form").style.color="#999999";
}
function back2(){
    document.getElementById("first-form-1").value="";
    document.getElementById("myimg").setAttribute("src","../image/招聘.png");
    document.getElementById("first-form-1").style.color="#999999";
    document.getElementById("first-form-1").type="password";
}
function back3(){
    document.getElementById("first-form-2").value="";
    document.getElementById("myimg").setAttribute("src","../image/招聘.png");
    document.getElementById("first-form-2").style.color="#999999";
    document.getElementById("first-form-2").type="password";
}
//恢复提示文字
function reback(){
    if( document.getElementById("first-form").value=="")
    document.getElementById("first-form").value="   请输入预留邮箱";
}
function reback1(){
    
    if( document.getElementById("first-form-1").value=="")
    document.getElementById("first-form-1").value="   请输入新的密码";
}
function reback2(){
     
    if( document.getElementById("first-form-2").value=="")
    document.getElementById("first-form-2").value="   请再次输入密码";
}
 
 

