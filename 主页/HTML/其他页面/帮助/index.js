// function divShow(){
//     document.getElementById("btnshow").style.display="block";
//     document.getElementById("btnhref").href ="javascript:divhidden()";
//     }
// function divhidden(){
//     document.getElementById("btnshow").style.display="none";
//     document.getElementById("btnhref").href ="javascript:divShow()"; 
//     }

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




var right = document.getElementById("right");
var list = getByClassName(right,'list');
var detail = getByClassName(right,'detail');

function fun(){
for (var i = 0; i < detail.length; i++) {
    (function(m){
        detail[m].style.display = "none";
    })(i);
    }
for(var i = 0; i< list.length; i++){
    (function(n){
        list[n].onclick = function(){
             toggle(detail[n]);
        }
        })(i);
    }
}
fun();
function toggle(z){
    if(z.style.display == "none"){
        z.style.display = "block";       
    }
    else if(z.style.display == "block"){
            z.style.display = "none";       
        }
    else{
        alert('chucuo');
    }
}


function getByClassName(obj,cls){
// obj目标元素，cls要获得的class名
var x = obj.getElementsByTagName('*');
var result = []; 
for(var i = 0; i< x.length; i++){

if(x[i].className == cls){

result.push(x[i]);
}
}
return result;

}

function main(){
    alter1();
}
function alter1()
{
    document.getElementById("alter").style.display="block";
}
function main1(){
    alter2();
}
function alter2()
{
    document.getElementById("alter").style.display="none";
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