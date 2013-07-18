//var windowHeight = $(window).height();

function tabDesignate(tab){
	var currTab = tab.attr('id');
	$currTab = $("#" + currTab.slice(0,currTab.length-3) + "PopUp");
	return $currTab;
};

function popUp(tab,dist){
	var $currTab = tab;
	dist = dist*(-1);
	$currTab.stop().animate({top:dist},100);
};

function popDown(tab){
	var $currTab = tab;
	$currTab.stop().animate({top:'0px'},150);
};

$(document).ready(function(){
	var $navCat = $('.navCat'),
		$mainBar = $('#mainBar'),
		$nameBar = $('#nameBar'),
		$navBar = $('#navBar'),
		$popUpClass = $('.popUp'),
		$blankContent =$('#blankContent'),
		$webWindow = $('.webWindow'),
		$webWindowSubText = $('.webWindow > .webWindowSubText');
	
	var $nameBarPrimary = $('#nameBarPrimary'),
		$nameBarH1 = $('#nameBar h1'),
		$nameBarH2 = $('#nameBar h2');
	
	var $content = $('#content');

	var docked = false;
	console.log(docked);

	/*$webWindow.hover(
		function(){
			popUp($webWindowSubText.fadeIn(100),-50);
		},
		function(){
			popDown($webWindowSubText);
		});*/

	$navCat.hover(
		function(){
			popUp(tabDesignate($(this)),53);
		},
		function(){
			popDown(tabDesignate($(this)));
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
			$content.fadeIn(1500);
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

	//resume accordion
	$('#resumefull').accordion({heightStyle:"content",collapsible:true});
});// JavaScript Document
