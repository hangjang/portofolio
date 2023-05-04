$(function () {
    setTimeout(function(){
        $(".knock, .circle").fadeOut();
    }, 1200);

    setTimeout(function () {
        $('.intro-wrap').fadeOut();
    }, 6000);

    function typingIntro() {
        const content = "안녕하세요. 신입 프론트엔드 개발자 장하나입니다!\n 제 포트폴리오에 방문해주셔서 감사합니다!"
        const text = document.querySelector(".text");
        let i = 0;

        function typing() {
            if (i < content.length) {
                let txt = content.charAt(i);
                text.innerHTML += txt == "\n" ? "<br/>" : txt;
                i++;
            }
        }
        setInterval(typing, 130);
    }
    setTimeout(typingIntro, 6000);

    // ===== 마우스 ===== //
    let mouseCursor = document.querySelector(".cursor");
    window.addEventListener("mousemove", (e)=>{
        mouseCursor.style.top = e.pageY +'px';
        mouseCursor.style.left = e.pageX +"px";
    });


    // ===== 피씨 ===== //
    $(".react-pc>.pc-hover-box").mouseover(function(){
        $(this).hide();
        $(this).next().stop().animate({"top":"-1005px"},5500)
    });
    $(".react-pc img").mouseout(function(){
        $(this).stop().animate({"top":"0"},4500);
        $(this).prev().show();
    });

    $(".monami-pc>.pc-hover-box").mouseover(function(){
        $(this).hide();
        $(this).next().stop().animate({"top":"-872px"},5500)
    });
    $(".monami-pc img").mouseout(function(){
        $(this).stop().animate({"top":"0"},4500);
        $(this).prev().show();
    });

    $(".millie-pc>.pc-hover-box").mouseover(function(){
        $(this).hide();
        $(this).next().stop().animate({"top":"-2359px"},7500)
    });
    $(".millie-pc img").mouseout(function(){
        $(this).stop().animate({"top":"0"},7500);
        $(this).prev().show();
    });

    $(".outback-pc>.pc-hover-box").mouseover(function(){
        $(this).hide();
        $(this).next().stop().animate({"top":"-895px"},5500);
    });
    $(".outback-pc img").mouseout(function(){
        $(this).stop().animate({"top":"0"},5500);
        $(this).prev().show();
    });
    
    $(".romi-pc>.pc-hover-box").mouseover(function(){
        $(this).hide();
        $(this).next().stop().animate({"top":"-913px"},5500)
    });
    $(".romi-pc img").mouseout(function(){
        $(this).stop().animate({"top":"0"},5500);
        $(this).prev().show();
    });
   

    // ===== 모바일 ===== //
    $(".react-mobile>.mobile-hover-box").on("mouseover",function(){
        $(this).hide();
        $(this).next().stop().animate({"top":"-2706px"},8500)
    });
    $(".react-mobile img").on("mouseout",function(){
        $(this).stop().animate({"top":"0"},8500);
        $(this).prev().show();
    });
    
    $(".monami-mobile>.mobile-hover-box").on("mouseover",function(){
        $(this).hide();
        $(this).next().stop().animate({"top":"-1066px"},7500)
    });
    $(".monami-mobile img").on("mouseout",function(){
        $(this).stop().animate({"top":"0"},5500);
        $(this).prev().show();
    })

    $(".outback-mobile>.mobile-hover-box").on("mouseover",function(){
        $(this).hide();
        $(this).next().stop().animate({"top":"-1812px"},7500);
    });
    $(".outback-mobile img").on("mouseout",function(){
        $(this).stop().animate({"top":"0"},5500);
        $(this).prev().show();
    })

    $(".skill-text").hide();
    $(".skill-wrap>div").hover(function(){
        $(this).find("div").stop().fadeIn();
    },function(){
        $(this).find("div").stop().fadeOut();
    });
});

