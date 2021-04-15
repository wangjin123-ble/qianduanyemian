 
// 点击搜索框取消值
function back(){
    document.getElementById("search-box").value="";
}
// 失焦还原函数
function back0(){
    if(document.getElementById("search-box").value=="")
    document.getElementById("search-box").value="例如：书名";
}
// 同意条款函数
function agree(){
    if(document.getElementById("agree").style.display=="inline-block")
    {
        document.getElementById("agree").style.display="inline-block";
    }
    else{
        document.getElementById("agree").style.display="inline-block";
    }
}
// 还原条款
function backword(){
    document.getElementById("agree").style.display="none";
}
// 主函数
function main(){
    if(document.getElementById("okbox").checked)
    {
        localStorage.token="";
        alert("注销成功");
      
    }
    else{
        agree();
    }
}
 