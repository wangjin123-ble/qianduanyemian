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

    // var app=new  Vue({
    //     el:"#body3",
    //     data:{
    //         headPortrait1:"",//传头像
    //         direction1:"",//传方向
    //         namesomething1:"",//传名字
    //         periods1:"",//传期数
    //         gender1:"",//传性别
    //         phone1:"",//传电话
    //         studentNumber1:"",//传学号
    //         email1:"",//传电子邮件
    //     },
    //     methods: {
    //              //头像上传
    //     headPortraitInformation() 
    //     {
    //         var that=this;
    //         axios.get(""+this.headPortrait1)//需要一个参数
    //         .then( function(response){
    //             that.headPortrait1=response;
    //             console.log(response)
    //         },function(err){})
    //     },

    //             //方向信息
    //      directionInformation() 
    //      {
    //          var that=this;
    //          axios.get("http://r7rbzq.natappfree.cc/Home/mu"+this.direction1)//需要一个请求参数
    //         .then( function(response){
    //         //console.log(response);
    //             that.direction1=response;
    //          },function(err){} )
    //     },
        

    //             //姓名信息
    //         nameInformation()
    //         {
    //             var that=this;
    //             axios.get("http://r7rbzq.natappfree.cc/Home/mu"+this.namesomething1)//需要一个请求参数
    //             .then( function(response){
    //             //console.log(response);
    //                 that.namesomething1=response;
    //              },function(err){} )
    //         },
    //            //期数信息
    //         periodsInformation()
    //         {
    //             var that=this;
    //             axios.get(" "+this.periods1)//需要一个参数
    //             .then( function(response){
    //                 that.periods1=response;
    //             },function(err){})
    //         },
    //            //性别信息
    //            genderInformation()
    //            {
    //             var that=this;
    //             axios.get(" "+this.gender1)//需要一个参数
    //             .then( function(response){
    //                 that.gender1=response;
    //             },function(err){})
    //            },
    //             //电话信息
    //             phoneInformation()
    //             {
    //              var that=this;
    //              axios.get(" "+this.phone1)//需要一个参数
    //              .then( function(response){
    //                  that.phone1=response;
    //              },function(err){})
    //             },
    //             //学号信息
    //             studentNumberInformation()
    //             {
    //              var that=this;
    //              axios.get(" "+this.studentNumber1)//需要一个参数
    //              .then( function(response){
    //                  that.studentNumber1=response;
    //              },function(err){})
    //             },
    //             //邮件信息
    //             emailInformation()
    //             {
    //              var that=this;
    //              axios.get(" "+this.email1)//需要一个参数
    //              .then( function(response){
    //                  that.email1=response;
    //              },function(err){})
    //             },



    //         }
    //         })
