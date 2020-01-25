(function($){
    
    //배너이미지 슬라이드
    var swiper = new Swiper('.swiper-container',{
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable : true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 5000,
        },
    });

    //영화차트 슬라이드
    var mySwiper = new Swiper('.swiper-container2',{
        slidesPerView: 4,
        spaceBetween: 24,
        keyboard: {
            enabled: true,
            onlyInViewport: false,
        },
        autoplay: {
            delay: 6000,
        },
        breakpoints: {
            600: {
                slidesPerView: 1.4,
                spaceBetween: 24
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 24
            },
            960: {
                slidesPerView: 3,
                spaceBetween: 24
            }
        }
    });

    //영화차트 탭 메뉴

    var movBtn = $(".movie_title > ul > li");
    var movCont = $(".movie_chart > div");

    movCont.hide().eq(0).show();

    movBtn.click(function(e){
        e.preventDefault();
        var target = $(this);
        var index = target.index();
        movBtn.removeClass("active");
        target.addClass("active");
        movCont.css("display","none");
        movCont.eq(index).css("display","block");
    });
    /* banner */
    $('.sub_banner .clse_btn').on('click',function(e){
        e.preventDefault();
    $('.sub_banner').hide();
    $('#header').css({top: 0});
    $('.total_search').css({top: 77});
    $('#container').css({paddingTop: 80});
    });

    //공지사항 탭 메뉴
    var tabMenu = $(".notice");

    //컨텐츠 내용을 숨겨주세요!
    tabMenu.find("ul > li > ul").hide();
    tabMenu.find("li.active > ul").show();

    function tabList(e){
        e.preventDefault();       //#의 기능을 차단
        var target = $(this);
        target.next().show().parent("li").addClass("active").siblings("li").removeClass("active").find("ul").hide();
        //버튼을 클릭하면 ~ div를 보여주고
        //부모의 li 태그에 클래스 추가하고
        //형제의 li 태그에 클래스 제거하고
        //제거한 자식의 div 태그를 숨겨줌 
    }

    tabMenu.find("ul > li > a").click(tabList).focus(tabList);
    
	  $(".movie_list li").mouseover(function() {
    $(this)
      .children(".ratebox")
      .stop()
      .fadeIn();
  });
  
  $(".movie_list li").mouseout(function() {
    $(this)
      .children(".ratebox")
      .stop()
      .fadeOut();
  });

  //더보기
  $(".plus").click(function() {
    $(".plus").css({ display: "none" });
    $(".movie_list ul>li:nth-of-type(10)").css({ "margin-bottom": "0" });
    $(".movie_list ul>li:nth-of-type(11)").css({ display: "block" });
    $(".movie_list ul>li:nth-of-type(12)").css({ display: "block" });
    $(".movie_list ul>li:nth-of-type(13)").css({ display: "block" });
    $(".movie_list ul>li:nth-of-type(14)").css({ display: "block" });
    $(".movie_list ul>li:nth-of-type(15)").css({ display: "block" });
    $(".movie_list ul>li:nth-of-type(16)").css({ display: "block" });
    $(".movie_list ul>li:nth-of-type(17)").css({ display: "block" });
    $(".movie_list ul>li:nth-of-type(18)").css({ display: "block" });
    $(".movie_list ul>li:nth-of-type(19)").css({ display: "block" });
    $(".movie_list ul>li:nth-of-type(20)").css({ display: "block" });
  });
	
})(jQuery); 