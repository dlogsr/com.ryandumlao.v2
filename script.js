$(document).ready(function(){
	var $navCat = $('.navCat'),
		$mainBar = $('#mainBar'),
		$nameBar = $('#nameBar'),
		$navBar = $('#navBar');
		$blankContent =$('#blankContent');
	
	var $nameBarPrimary = $('#nameBarPrimary'),
		$nameBarH1 = $('#nameBar h1'),
		$nameBarH2 = $('#nameBar h2');
	
	var $content = $('#content');

	var docked = false;
	console.log(docked);

	function tabDesignate(tab){
		var currTab = tab.attr('id');
		$currTab = $("#" + currTab.slice(0,currTab.length-3) + "PopUp");
	};

	$navCat.hover(
		function(){
			//var currTab = $(this).attr('id');
			//$currTab = $("#" + currTab.slice(0,currTab.length-3) + "PopUp");
			tabDesignate($(this));
			$currTab.stop().animate({top:'-53px'},100);
		},
		function(){
			tabDesignate($(this));
			$currTab.stop().animate({top:'0px'},150);//,function(){$currTab.addClass('hidden')});
		});

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
			$nameBarPrimary.animate({'top':'-50px'},1000);
			$mainBar.removeClass('absolutePos').addClass('fixedPos');
			//$blankContent.animate({top:'-1000px'},1000,function(){$blankContent.addClass('hidden')});
			$content.fadeIn(1000);
			$content.removeClass('hidden');
			docked = true;
		}
		else{
		};

		//jump to sections per navCat clicked
		var currSection = $(this).attr('id');
		currSection = '#'+currSection.slice(0,currSection.length-3);
		console.log(currSection);
		var offset = $(currSection).offset().top - 20;
		$('html,body').stop().animate({scrollTop : offset},500);


	});
	
	$nameBarPrimary.click(function(){
		//does not yet work
		//$mainBar.switchClass("fullBar","absolutePos",1000);
	});
});// JavaScript Document

$(document).ready(function(){
	$('#resumefull').accordion({heightStyle:"content",collapsible:true});
});