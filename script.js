$(document).ready(function(){
	var $navCat = $('.navCat'),
		$mainBar = $('#mainBar'),
		$nameBar = $('#nameBar'),
		$navBar = $('#navBar');
	
	var $nameBarPrimary = $('#nameBarPrimary'),
		$nameBarH1 = $('#nameBar h1'),
		$nameBarH2 = $('#nameBar h2');
	
	var $content = $('#content');

	var docked = false;
	console.log(docked);

	
	$navCat.click(function() {
		if(docked == false){
			console.log('clicked');
			$mainBar.animate({'bottom':0,
						      'width':'600px',
							  'left':0,
							  'margin-left':0},1000);
	  		$nameBarH1.animate({'font-size':'3em'},1000);
			$nameBarH2.fadeOut(400);
			$navBar.animate({'border-top-right-radius':'25px'},100);
			$navBar.add($nameBar).animate({'height':'50px',
										   'border-bottom-right-radius':0,
										   'border-top-left-radius':0,},1000);
			$nameBarPrimary.animate({'top':'-40px'},1000);
			$mainBar.removeClass('absolutePos').addClass('fixedPos');
			$content.fadeIn(1000);
			$content.removeClass('hidden');
			docked = true;
		}
		else{
		};
		console.log(this.attr('id'));
		var offset = $navCat.offset().top - 20;
		$('html,body').stop().animate({scrollTop : offset},1000);


	});
	
	$nameBarPrimary.click(function(){
		//does not yet work
		//$mainBar.switchClass("fullBar","absolutePos",1000);
	});
});// JavaScript Document