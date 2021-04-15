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
// 点击搜索框取消值
function back(){
    document.getElementById("search-box").value="";
}
// 失焦还原函数
function back0(){
    if(document.getElementById("search-box").value=="")
    document.getElementById("search-box").value="例如：书名";
}
function beopen4()
{
    
    if(document.getElementById("two-box-4").style.display=="block")
    { 
        document.getElementById("two-box-4").style.display="none";
        document.getElementById("be-more-4").style.transform="rotate(0deg)";
    }
    else{
        document.getElementById("two-box-4").style.display="block";
        document.getElementById("be-more-4").style.transform="rotate(90deg)";
    }
    
}