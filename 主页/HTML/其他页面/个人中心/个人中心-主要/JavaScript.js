

//1.请求地址
//2.请求参数(get和post表现形式是不一样的)
//3.请求方法get或者是post


var app=new  Vue({
    el:"#top",
    data:{
        query:"",//搜索时传的字符串
       
    },
    methods: {
        //搜索信息
        searchInformation:function(){
            var that=this;
            axios.get(" "+this.query)//需要一个请求参数
            .then( function(response){
            //console.log(response);
            that.query=response
            },function(err){} )
        },




    }
    })

//1.请求地址
//2.请求参数(get和post表现式是不一样的)
//3.请求方法get或者是post

    var app=new  Vue({
        el:"#body3",
        data:{
            direction:"",
        },
        methods: {
                 
        headPortraitInformation:function(){
            var that=this;
            axios.get("http://r7rbzq.natappfree.cc/Home/showinf")//需要一个参数
            .then( function(response){
                that.direction=response.data;
            },function(err){})
        },
        //方向信息
    //     directionInformation() 
    //     {
    //         var that=this;
    //         axios.get(""+this.direction1)//需要一个请求参数
    //        .then( function(response){
    //        //console.log(response);
    //            that.=response;
    //         },function(err){} )
    //    },
       
   
    //            //姓名信息
    //        nameInformation()
    //        {
    //            var that=this;
    //                axios.get(""+this.namesomething1)//需要一个请求参数
    //            .then( function(response){
    //            //console.log(response);
    //                that.namesomething1=response;
    //             },function(err){} )
    //        },
    //           //期数信息
    //        periodsInformation()
    //        {
    //            var that=this;
    //            axios.get(" "+this.periods1)//需要一个参数
    //            .then( function(response){
    //                that.periods1=response;
    //            },function(err){})
    //        },
    //           //性别信息
    //           genderInformation()
    //           {
    //            var that=this;
    //            axios.get(" "+this.gender1)//需要一个参数
    //            .then( function(response){
    //                that.gender1=response;
    //            },function(err){})
    //           },
    //            //电话信息
    //            phoneInformation()
    //            {
    //             var that=this;
    //             axios.get(" "+this.phone1)//需要一个参数
    //             .then( function(response){
    //                 that.phone1=response;
    //             },function(err){})
    //            },
    //            //学号信息
    //            studentNumberInformation()
    //            {
    //             var that=this;
    //             axios.get(" "+this.studentNumber1)//需要一个参数
    //             .then( function(response){
    //                 that.studentNumber1=response;
    //             },function(err){})
    //            },
    //            //邮件信息
    //            emailInformation()
    //            {
    //             var that=this;
    //             axios.get(" "+this.email1)//需要一个参数
    //             .then( function(response){
    //                 that.email1=response;
    //             },function(err){})
    //            },
   
   
                

        }
        })







        