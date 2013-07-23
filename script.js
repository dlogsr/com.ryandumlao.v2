/* Written by Ryan Dumlao */
/* www.ryandumlao.com */
/* July 22, 2013 */

var windowHeight = $(window).height();
var currSection;
var allSections = ['#about', '#resume', '#portfolio', '#contact'];

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

function adjustContentSpacing(currSection) {
	windowHeight = $(window).height();
	var contentSpacing = windowHeight - $(currSection).height();
	console.log(contentSpacing);
	console.log(currSection);
	$(currSection + 'Spacing').css({'height':contentSpacing,'min-height':'200px'});

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

	//float down the portfolio window tabs for the webdesign examples to expose info
	$webWindow.hover(
		function(){
			popUp($(this).children(),-90);
		},
		function(){
			popDown($webWindowSubText);
		});

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
			$mainBar.switchClass('fullBar','smooshBar',1000);
			$navBar.add($nameBar).add($nameBarPrimary).switchClass('fullBar','smooshBar',1000);
			$nameBarH1.animate({'font-size':'3em'},1000);
			$nameBarH2.fadeOut(400);
			$mainBar.removeClass('absolutePos').addClass('fixedPos');
			$content.fadeIn(1500);
			$content.removeClass('hidden');

			//since we are now showing all sections, adjust the spacing between such that they don't
			//appear more than two sections on the viewer's window
			for (x in allSections){
				adjustContentSpacing(allSections[x]);
			};

			docked = true;
		}
		else{
		};

		//jump to sections per navCat clicked
		currSection = $(this).attr('id');
		currSection = '#'+currSection.slice(0,currSection.length-3); //remove "Tab" to get the section desired
		console.log('clicked ' + currSection);
		adjustContentSpacing(currSection);
		var offset = $(currSection).offset().top - 20;
		$('html,body').stop().animate({scrollTop : offset},500);


	});
	
	$nameBarPrimary.click(function(){
		if(docked == true){
			$mainBar.add($nameBar).add($navBar).add($nameBarPrimary).switchClass('smooshBar','fullBar',1000);
			$nameBarH1.animate({'font-size':'5em'},1000);
			$nameBarH2.delay(1000).fadeIn(400);
			$content.fadeOut(500);
			docked = false;
		}
	});

	//resume accordion
	$('#resumefull').accordion({heightStyle:"content",collapsible:true});

});// JavaScript Document

$(window).resize(function() {
	adjustContentSpacing(currSection); // fix spacing if the window is resized
});