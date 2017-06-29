$(function () {
    // $(".nav li").hover(function () {
    //     $(this).find(".huakuai").stop().animate({bottom:"0px", opacity:1}, 300);
    // }, function () {
    //     $(this).find(".huakuai").stop().animate({bottom:"-10px", opacity:0}, 300);
    // })

    var firstWidth = $(".huakuai").width();
    var firstleft = $(".huakuai").position().left;
    // console.log(firstWidth,firstleft)
    $(".huakuai").css({width: firstWidth + "px"});
    $(".nav li").hover(function () {
        //计算每个li的总宽度
        var width = parseInt($(this).width());
        var left = parseInt($(this).offset().left) - parseInt($(".nav").offset().left);
        $(".huakuai").stop().animate({left: left + "px", width: width + "px"}, 300);
    }, function () {
        // console.log(firstWidth,firstleft)
        $(".huakuai").stop().animate({left: firstleft + "px", width: firstWidth + "px"}, 300);
    })


    //汉堡包
    $(".hanbaobao").click(function () {
        $(".navbar-collapse").slideDown(500);
    })

    $(".close").click(function () {
        $(".navbar-collapse").slideUp(500);
    })

//    微信
    var erkai = true;
    $(".con3-2").click(function () {
        if (erkai == true) {
            $(".yin-erweima").fadeIn(300);
            erkai = false;
        } else {
            $(".yin-erweima").fadeOut(300);
            erkai = true;
        }

    })


    $(document).scroll(function () {
        var panduan = getClientInfo();
        console.log(panduan)
        if (panduan == "PC") {
        } else {
            $(".scroll-nav li a").addClass("wap-header");
        }
        //超过图片 banner 部分
        if ($(document).scrollTop() > $(".ban-about").height()) {
            $(".scroll-navbar").removeClass("han-white");
            $(".scroll-logo").removeClass("logo-white");
            $(".scroll-zi").css({color: "#51555B"});
            $(".scroll-nav li a").css({color: "#51555B"});
            $("#nav-wrap.other-nav").css({background: "#fff"})
        } else {
            $(".scroll-navbar").addClass("han-white");
            $(".scroll-logo").addClass("logo-white");
            $(".scroll-zi").css({color: "#fff"});
            $(".scroll-nav li a").css({color: "#fff"});
            $("#nav-wrap.other-nav").css({background: "rgba(0, 0, 0, 0.4)"})
        }


        //    三行图片的区域
        var top = $(".car3").offset().top;
        var carindex=0;
        console.log(top);
        if ($(document).scrollTop()>top-580){
            var carinterval=setInterval(function () {
                $(".car3").eq(carindex).find(".car-hui").animate({marginLeft:"0px",opacity:"1"},400);
                carindex++;
                console.log($(".car3").length)
                if(carindex>$(".car3").length){
                    clearInterval(carinterval);
                }
            },200)

        }
    })


//    招聘
    $(".job-arrow").click(function () {
        $(".job-arrow").css({transform: "rotateZ(0deg)"});
        $(".job-arrow").parent().parent().find(".jobs-con").slideUp(300);
        var jobsCon = $(this).parent().parent().find(".jobs-con");
        if (jobsCon.attr("kaiguan") == "he") {
            jobsCon.slideDown(300);
            jobsCon.attr("kaiguan", "kai");
            $(this).css({transform: "rotateZ(180deg)"});
        } else {
            jobsCon.slideUp(300);
            jobsCon.attr("kaiguan", "he");
            $(this).css({transform: "rotateZ(0deg)"});
        }
    })


    /**
     * 获取客户端信息
     */
    function getClientInfo() {
        var userAgentInfo = navigator.userAgent;
        var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
        var agentinfo = null;
        for (var i = 0; i < Agents.length; i++) {
            if (userAgentInfo.indexOf(Agents[i]) > 0) {
                agentinfo = userAgentInfo;
                break;
            }
        }
        if (agentinfo) {
            return agentinfo;
        } else {
            return "PC";
        }
    }

//调用示例
//     alert( getClientInfo() );

    //处理 pc端 与 移动端之间来回切换问题
    $(window).resize(function () {
        var jieguo = getClientInfo();
        console.log(jieguo)
        if (jieguo == "PC") {
            $(".jobs-con").css({display: "block"});
            $(".scroll-nav li a").removeClass("wap-header");
            $(".job-arrow").css({transform: "rotateZ(180deg)"});
        } else {
            $(".jobs-con").css({display: "none"});
            $(".scroll-nav li a").addClass("wap-header");
            $(".job-arrow").css({transform: "rotateZ(0deg)"});
        }
    })


    $(document).onload(function () {
        $(".ban-left").animate({left: "0%", opacity: "1"}, 400);
        $(".ban-right").animate({right: "0%", opacity: "1"}, 600);
    })


})