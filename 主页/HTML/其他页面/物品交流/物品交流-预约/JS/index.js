//  点击“物品档案”展开二级菜单的函数
function beopen1()
{
    
    if(document.getElementById("two-box-0").style.display=="block")
    { 
        document.getElementById("two-box-0").style.display="none";
        document.getElementById("be-more-0").style.transform="rotate(0deg)";
    }
    else{
        document.getElementById("two-box-0").style.display="block";
        document.getElementById("be-more-0").style.transform="rotate(90deg)";
    }
}
    
//  点击“物品交流”展开二级菜单的函数
function beopen()
{
    
    if(document.getElementById("two-box-1").style.display=="block")
    { 
        document.getElementById("two-box-1").style.display="none";
        document.getElementById("be-more-1").style.transform="rotate(0deg)";
    }
    else{
        document.getElementById("two-box-1").style.display="block";
        document.getElementById("be-more-1").style.transform="rotate(90deg)";
    }
    
}


//  点击“资产维修”展开二级菜单的函数
function beopen0()
{
    
    if(document.getElementById("two-box-2").style.display=="block")
    { 
        document.getElementById("two-box-2").style.display="none";
        document.getElementById("be-more-2").style.transform="rotate(0deg)";
    }
    else{
        document.getElementById("two-box-2").style.display="block";
        document.getElementById("be-more-2").style.transform="rotate(90deg)";
    }
}


//  点击“管理”展开二级菜单的函数
function beopen4()
{
    
    if(document.getElementById("two-box-4").style.display=="block")
    { 
        document.getElementById("two-box-4").style.display="none";
        document.getElementById("be-more").style.transform="rotate(0deg)";
    }
    else{
        document.getElementById("two-box-4").style.display="block";
        document.getElementById("be-more").style.transform="rotate(90deg)";
    }
}

// 点击搜索框取消值
function back(){
    document.getElementById("search-box").value="";
}
// 失焦还原函数
function back0(){
    if(document.getElementById("search-box").value=="")
    document.getElementById("search-box").value="例如：书名";
}
// 点击设置出现面板
function beopen2(){
    
    if(document.getElementById("set-up").style.display=="block")
    {   
         
        document.getElementById("set-up").style.display="none"
    }
    else{
        document.getElementById("set-up").style.display="block"
    }
}
 
// 添加部分
//  点击“统计分析”展开二级菜单的函数
function beopen3()
{
    
    if(document.getElementById("two-box-3").style.display=="block")
    { 
        document.getElementById("two-box-3").style.display="none";
        document.getElementById("be-more-3").style.transform="rotate(0deg)";
    }
    else{
        document.getElementById("two-box-3").style.display="block";
        document.getElementById("be-more-3").style.transform="rotate(90deg)";
    }
    
}
window.onload = function(){
    var items = document.getElementsByName("items");
    var duoxuanYuyue = document.getElementById("duoxuanYuyue");
    duoxuanYuyue.onclick = function(){
        for(var i=0 ; i<items.length ; i++){
            
            //判断多选框是否选中
            if(items[i].checked){
                alert("预约成功");
            }
        }
        

        for(var i=0; i<items.length ; i++){
            //将四个多选框设置为没选中的状态
            items[i].checked = false;
        }
    }

    // var sendBtn = document.getElementById("sendBtn")
    // sendBtn.onclick = function(){
    //     alert("预约成功");
    //     document.getElementById("sendBtn").style.background = "#999999";
    //     document.getElementById("sendBtn").disabled=true;
    // }

    var checkedNoBtn = document.getElementById("quxiaoButton");
		checkedNoBtn.onclick = function(){
			
			for(var i=0; i<items.length ; i++){
				//将四个多选框设置为没选中的状态
				items[i].checked = false;
			}
		};
    
    var qingkong = document.getElementById("qingkong")
    var txt = document.getElementsByName("ShuRuKuang")
    qingkong.onclick = function(){
        var flag = confirm("确认删除"+name+"吗?");
				//如果用户点击确认
				if(flag){
					for(var i = 0;i<txt.length;i++){
                        txt[i].value = ""
                    }
				}
    }
        // var TwoWord1 = document.getElementById("two-word-1") ;
        // TwoWord1.onclick = function(){
        //     document.location = ("file:///D:/Sublime%20Text%203/%E8%B5%84%E4%BA%A7%E7%AE%A1%E7%90%86%E9%A1%B9%E7%9B%AE/%E7%89%A9%E5%93%81%E4%BA%A4%E6%B5%81/%E7%89%A9%E5%93%81%E4%BA%A4%E6%B5%81-%E9%A2%84%E7%BA%A6/HTML/%E9%A2%84%E7%BA%A6.html")
        // }
    
        // var TwoWord2 = document.getElementById("two-word-2");
        // TwoWord2.onclick = function(){
        //     document.location = ("file:///D:/Sublime%20Text%203/%E8%B5%84%E4%BA%A7%E7%AE%A1%E7%90%86%E9%A1%B9%E7%9B%AE/%E7%89%A9%E5%93%81%E4%BA%A4%E6%B5%81/%E7%89%A9%E5%93%81%E4%BA%A4%E6%B5%81-%E5%80%9F%E9%98%85/HTML/%E5%80%9F%E9%98%85.html")
        // }
    
        // var TwoWord3 = document.getElementById("two-word-3");
        // TwoWord3.onclick = function(){
        //     document.location = ("file:///D:/Sublime%20Text%203/%E8%B5%84%E4%BA%A7%E7%AE%A1%E7%90%86%E9%A1%B9%E7%9B%AE/%E7%89%A9%E5%93%81%E4%BA%A4%E6%B5%81/%E7%89%A9%E5%93%81%E4%BA%A4%E6%B5%81-%E5%BD%92%E8%BF%98/HTML/%E5%BD%92%E8%BF%98.html")
        // }
        // var MinBox0 = document.getElementById("min-box-0");
        // MinBox0.onclick = function(){
        //     document.location = ("file:///D:/Sublime%20Text%203/%E8%B5%84%E4%BA%A7%E7%AE%A1%E7%90%86%E9%A1%B9%E7%9B%AE/%E7%89%A9%E5%93%81%E4%BA%A4%E6%B5%81/%E7%AE%A1%E7%90%86-%E6%A1%A3%E6%A1%88%E7%BC%96%E8%BE%91/HTML/%E4%B8%BB%E9%A1%B5.html")
        // }
        // 权限
//     var MinBox1 = document.getElementById("min-box-1");
//     MinBox1.onclick = function(){
//         var zxc=prompt("请输入密码","")
//         if(zxc != "456")    //密码设置为456
//         {
//             alert("密码错误");
//         } else{           document.location = ("file:///D:/Sublime%20Text%203/%E8%B5%84%E4%BA%A7%E7%AE%A1%E7%90%86%E9%A1%B9%E7%9B%AE/%E7%89%A9%E5%93%81%E4%BA%A4%E6%B5%81/%E7%AE%A1%E7%90%86-%E5%AE%A1%E6%89%B9-%E4%B8%BB%E9%A1%B5/HTML/%E4%B8%BB%E9%A1%B5.html")
//         }
//     }
 }