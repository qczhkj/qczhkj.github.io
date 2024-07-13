
var aparted = false;

$("#open").click(function(){
	
	if(!aparted)
	{
		var typed = new Typed('.letter', {
			strings: ["Dear&nbsp;&nbsp;Xiao xiong， \
				<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;感恩所有遇见，期待共同进步。", 
				"小熊师妹：<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; \
				恭喜你成为一名博士研究生！&nbsp;你大方又从容，知足而上进， \
				一定可以在未来的生活中披荆斩棘，勇往直前。小小博士，拿下！ \
				<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\
				虽然认识你时间不长，我却有一见如故，相见恨晚之感，\
				于我平凡的生活中增添了流光溢彩的一页。",

				"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;初次相识，未曾想会有更深的交集，芸芸众生，相遇极多，相知极少！ \
				凭我的感觉，师妹秉性率真，待人真诚，在生活中必定积极乐观，能常给身边人提供正向情绪价值，\
				拥有独特的人格魅力。乐观的人运气都比较好，正好蹭一蹭你的福气。<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\
				希望你在未来的生活中，继续努力又幸运",
				
				"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;大学之道……，知止而后有定，定而后能静。师妹的个性签名不错，我也比较喜欢这句话。看得出来，师妹是新时代有抱负有理想的新青年。\
				我呢，恰好是目标不清晰，往往执行力打折扣，以后这方面要向你学习。\
				<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;希望小熊师妹以后带我学习，带我科研，共同进步！",
				"值此双喜临门之际，恭祝师妹：\
				<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;合家欢乐 \
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;学业顺利 \
				<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;笑口常开 \
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;好运自然来 \
				<br><br><p style='float:right; display:block; width:80px;'>^1000师^200哥</p>",],
			typeSpeed: 100,
			backSpeed: 10
		});
		
		$('#open').find("span").eq(0).css('background-position', "-100 -150px");
		
		aparted = true;
		
		var music = document.getElementById('music2');		
		if (music.paused)
		{
			music.play();
			$('#music_btn2').css("opacity", "1"); 
		}
	}
	
});

function playPause() 
{
    var music = document.getElementById('music2');
    var music_btn = $('#music_btn2');
	
    if (music.paused)
	{
        music.play();
		music_btn.css("opacity", "1"); 
    }
    else
	{
        music.pause();
		music_btn.css("opacity", "0.2"); 
    }	
}


window.onload = function () 
{	

	var currentUrl = window.location.href;
	var firstIndex = currentUrl.indexOf("#");	
	if (firstIndex <= 0) window.location.href = currentUrl + "#contact";

	$('#music2').attr('src', bgmsrc);

	document.addEventListener('touchstart',function (event) { if(event.touches.length > 1) event.preventDefault(); });
	
	var lastTouchEnd = 0;
	
	document.addEventListener('touchend',function (event) {
		
		var now = (new Date()).getTime();
		if(now - lastTouchEnd <= 300) event.preventDefault();
		lastTouchEnd = now;
		
	}, false);
	
	document.addEventListener('gesturestart', function (event) { event.preventDefault(); });

	$('body').css('opacity', '1');
	$('#jsi-cherry-container').css('z-index', '-99');
	
} 
