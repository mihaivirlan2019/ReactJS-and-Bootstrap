var IE6 = (navigator.userAgent.indexOf("MSIE 6")>=0) ? true : false;
if(IE6){

	$(function(){
		
		$("<div>")
			.css({
				'position': 'absolute',
				'top': '0px',
				'left': '0px',
				backgroundColor: 'black',
				'opacity': '0.75',
				'width': '100%',
				'height': $(window).height(),
				zIndex: 5000
			})
			.appendTo("body");
			
		$("<div><img src='images/no-ie6.png' alt='' style='float: left;'/><p><br /><strong>К сожалению, данную страницу нельзя просмотреть в браузере Internet Explorer 6, который Вы на данный момент и используете.</strong><br /><br />Если Вы хотите увидеть страницу, установите себе другой браузер, например <a href='http://getfirefox.org'>Firefox</a></p>")
			.css({
				backgroundColor: 'white',
				'top': '50%',
				'left': '50%',
				marginLeft: -210,
				marginTop: -100,
				width: 410,
				paddingRight: 10,
				height: 200,
				'position': 'absolute',
				zIndex: 6000
			})
			.appendTo("body");
	});		
}