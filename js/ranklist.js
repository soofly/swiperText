(function(doc, win) {
	var docEl = doc.documentElement,
		resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
		recalc = function() {
			var clientWidth = docEl.clientWidth;
			if (!clientWidth) return;
			docEl.style.fontSize = 100 * (clientWidth / 320) + 'px';
		};

	if (!doc.addEventListener) return;
	win.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

$(function() {
	var ymdxtopH = $(".ymdxtop").height();
	$(".body-ap").css("margin-top", ymdxtopH + "px");
	$(".rankUl li").last().css("border-right", "none");
	$(".rankUl li").eq(1).css("width", "38%");
	//$(".bodyApDl dd").eq(1).siblings().css("display", "none");
	//前三个数字彩色
	$(".bodyApDl dd").eq(1).find("li").eq(0).children("div").eq(0).css("color", "#cd2e19");
	$(".bodyApDl dd").eq(1).find("li").eq(1).children("div").eq(0).css("color", "#0075a9");
	$(".bodyApDl dd").eq(1).find("li").eq(2).children("div").eq(0).css("color", "#45922c");
	//选中状态
	$(".rankUl li").eq(1).addClass("lizhong");
	$(".rankUl li").eq(1).children("span").addClass("spanzhong");
	//隔行变色 
	$('.bodyApDl dd').each(function() {
		var self = $(this).find("li");
		self.each(function(index) {
			if (index % 2 != 0) {
				self.eq(index).css("background", "#f6ebcf");
			}
		});

	});
});

var swiper = new Swiper('.swiper-container', {
	initialSlide: 1,
	autoHeight: true, //高度随内容变化
	onSlideChangeStart: function(swiper) {
		scrollBy(0, -1000);
		var index = swiper.activeIndex;
		if (index != 1) {
			$(".rankUl li").children("img").attr("src", "img/white.png");
		} else {
			$(".rankUl li").children("img").attr("src", "img/yellox.png");
		}
		$(".rankUl li").eq(index).addClass("lizhong").siblings("li").removeClass("lizhong");
		$(".rankUl li").eq(index).children("span").addClass("spanzhong").parent().siblings("li").children("span").removeClass("spanzhong");
	},
});
//标签点击事件
$(".rankUl li").tap(function() {
	var index = $(this).index();
	if (index != 1) {
		$(".rankUl li").children("img").attr("src", "img/white.png");
	} else {
		$(".rankUl li").children("img").attr("src", "img/yellox.png");
	};
	swiper.slideTo(index, 500, false); //切换到第一个slide，速度为1秒
	$(this).addClass("lizhong").siblings("li").removeClass("lizhong");
	$(this).children("span").addClass("spanzhong").parent().siblings("li").children("span").removeClass("spanzhong");
});