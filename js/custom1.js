(function($){
	$(".movie_list li").mouseover(function(){
		$(this).children(".ratebox").stop().fadeIn();
	});
	$(".movie_list li").mouseout(function(){
		$(this).children(".ratebox").stop().fadeOut();
	});

	//더보기
$(".plus").click(function(){
	$(".plus").css({"display":"none"});
	$(".movie_list ul>li:nth-of-type(10)").css({"margin-bottom":"0"});
	$(".movie_list ul>li:nth-of-type(11)").css({"display":"block"});
	$(".movie_list ul>li:nth-of-type(12)").css({"display":"block"});
	$(".movie_list ul>li:nth-of-type(13)").css({"display":"block"});
	$(".movie_list ul>li:nth-of-type(14)").css({"display":"block"});
	$(".movie_list ul>li:nth-of-type(15)").css({"display":"block"});
	$(".movie_list ul>li:nth-of-type(16)").css({"display":"block"});
	$(".movie_list ul>li:nth-of-type(17)").css({"display":"block"});
	$(".movie_list ul>li:nth-of-type(18)").css({"display":"block"});
	$(".movie_list ul>li:nth-of-type(19)").css({"display":"block"});
	$(".movie_list ul>li:nth-of-type(20)").css({"display":"block"});
	});	
 })(jQuery);    