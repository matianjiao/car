$(function () {
    $(".nav li").hover(function () {
        $(this).find(".huakuai").stop().animate({bottom:"0px", opacity:1}, 300);
    }, function () {
        $(this).find(".huakuai").stop().animate({bottom:"-10px", opacity:0}, 300);
    })


    //汉堡包
    $(".hanbaobao").click(function () {
        $(".navbar-collapse").slideDown(500);
    })

    $(".close").click(function () {
        $(".navbar-collapse").slideUp(500);
    })


//    招聘
    $(".job-arrow").click(function () {
        $(".job-arrow").css({transform:"rotateZ(0deg)"});
        $(".job-arrow").parent().parent().find(".jobs-con").slideUp(300);
        var jobsCon=$(this).parent().parent().find(".jobs-con");
        if(jobsCon.attr("kaiguan")=="he"){
            jobsCon.slideDown(300);
            jobsCon.attr("kaiguan","kai");
            $(this).css({transform:"rotateZ(180deg)"});
        }else{
            jobsCon.slideUp(300);
            jobsCon.attr("kaiguan","he");
            $(this).css({transform:"rotateZ(0deg)"});
        }
    })



    /**
     * 获取客户端信息
     */
    function getClientInfo(){
        var userAgentInfo = navigator.userAgent;
        var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
        var agentinfo = null;
        for (var i = 0; i < Agents.length; i++) {
            if (userAgentInfo.indexOf(Agents[i]) > 0) { agentinfo = userAgentInfo; break; }
        }
        if(agentinfo){
            return agentinfo;
        }else{
            return "PC";
        }
    }
//调用示例
//     alert( getClientInfo() );


    $(window).resize(function () {
        var jieguo=getClientInfo();
       console.log(jieguo)
        if(jieguo=="PC"){
            $(".jobs-con").css({display:"block"});
        }else{
            $(".jobs-con").css({display:"none"});
        }
    })

})


