$(document).ready(function () {
	$("#buttom li").last().css("margin-right","0px");
})
$(document).ready(function () {
	$(".link").last().mouseover(function(){
		$(".bg1").addClass("bg1-change");
		$(".bg2").addClass("bg2-change");
	});
})
$(document).ready(function () {
	$(".link").first().mouseover(function(){
		$(".bg1").removeClass("bg1-change");
		$(".bg2").removeClass("bg2-change");
	});
})
