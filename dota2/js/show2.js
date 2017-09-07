$(document).ready(function () {
	var x=$("li.u_tabs_tab").toArray();
	$.each(x,function(index){
		$(this).click(function(){
			
			$(".u_panel").eq(index).addClass("active").siblings().removeClass("active");
		});
	});
});

$(document).ready(function(){
	var x=$("ul.Rounde .left");
	$.each(x,function(index){
		$(this).click(function(){
			$(this).addClass("activeli").siblings().removeClass("activeli");
			if (index==0) {
				$(".u_change_img").animate({left:"0px"},500);			
			}
			if (index==1) {
				$(".u_change_img").animate({left:"-1920px"},500);		
			}
			if (index==2) {
				$(".u_change_img").animate({left:"-3840px"},500);			
			}
		})
	})

})

$(function(){
	var vl=0;
function show(){
	if (0<=vl<3) {
	  	 $("ul.Rounde .left").eq(vl).trigger("click");
	  	 vl++;
	}
	if (vl==3) {
		vl=0;
	}
}
setInterval(show,5000);// 注意函数名没有引号和括弧！ 
// 使用setInterval("show()",3000);会报“缺少对象” 
});
$(document).ready(function(){

	$(".input_buttom").click(function () {
		var v=$(".input_text").val();
		var txt=$("<li></li>").text(v);
		$(".u_bigbug").append(txt);
	})
	
})
