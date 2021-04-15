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
    // var TwoWord1 = document.getElementById("two-word-1") ;
    //     TwoWord1.onclick = function(){
    //         document.location = ("file:///D:/Sublime%20Text%203/%E8%B5%84%E4%BA%A7%E7%AE%A1%E7%90%86%E9%A1%B9%E7%9B%AE/%E7%89%A9%E5%93%81%E4%BA%A4%E6%B5%81/%E7%89%A9%E5%93%81%E4%BA%A4%E6%B5%81-%E9%A2%84%E7%BA%A6/HTML/%E9%A2%84%E7%BA%A6.html")
    //     }
    
    //     var TwoWord2 = document.getElementById("two-word-2");
    //     TwoWord2.onclick = function(){
    //         document.location = ("file:///D:/Sublime%20Text%203/%E8%B5%84%E4%BA%A7%E7%AE%A1%E7%90%86%E9%A1%B9%E7%9B%AE/%E7%89%A9%E5%93%81%E4%BA%A4%E6%B5%81/%E7%89%A9%E5%93%81%E4%BA%A4%E6%B5%81-%E5%80%9F%E9%98%85/HTML/%E5%80%9F%E9%98%85.html")
    //     }
    
    //     var TwoWord3 = document.getElementById("two-word-3");
    //     TwoWord3.onclick = function(){
    //         document.location = ("file:///D:/Sublime%20Text%203/%E8%B5%84%E4%BA%A7%E7%AE%A1%E7%90%86%E9%A1%B9%E7%9B%AE/%E7%89%A9%E5%93%81%E4%BA%A4%E6%B5%81/%E7%89%A9%E5%93%81%E4%BA%A4%E6%B5%81-%E5%BD%92%E8%BF%98/HTML/%E5%BD%92%E8%BF%98.html")
    //     }
    //     var MinBox0 = document.getElementById("min-box-0");
    //     MinBox0.onclick = function(){
    //         document.location = ("file:///D:/Sublime%20Text%203/%E8%B5%84%E4%BA%A7%E7%AE%A1%E7%90%86%E9%A1%B9%E7%9B%AE/%E7%89%A9%E5%93%81%E4%BA%A4%E6%B5%81/%E7%AE%A1%E7%90%86-%E6%A1%A3%E6%A1%88%E7%BC%96%E8%BE%91/HTML/%E4%B8%BB%E9%A1%B5.html")
    //     }

        // yichu
        var Yichu = document.getElementsByClassName("Yichu");
        for(var i=0;i<Yichu.length;i++){
            Yichu[i].onclick= yilu;
        }
    function yilu(){
        
        var x;
        x = confirm("确定要移出该用户吗？")
        if(x){
            alert("移出成功")
        }
    }
}