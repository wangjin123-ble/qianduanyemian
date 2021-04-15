 
// 点击搜索框取消值
function back(){
    document.getElementById("search-box").value="";
}
// 失焦还原函数
function back0(){
    if(document.getElementById("search-box").value=="")
    document.getElementById("search-box").value="例如：书名";
}
// 主函数
function main(){
    var pwd1=document.getElementById("edit-0").value;
    var pwd2=document.getElementById("edit-1").value;
     if(pwd1==pwd2)
     {
        alter1();
     }
     else{
        document.getElementById("edit-1").type="text";
        document.getElementById("edit-1").style.color="red"
        document.getElementById("edit-1").value="两次密码输入不一致"
     }
}
// 还原密码框
function back1(){
        document.getElementById("edit-1").type="password";
        document.getElementById("edit-1").style.color="#000000";
        document.getElementById("edit-1").value="";
}
// 警告框函数
function alter1()
{
    document.getElementById("alter").style.display="block"
}
 