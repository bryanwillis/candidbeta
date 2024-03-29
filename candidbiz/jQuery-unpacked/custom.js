/*================================================================*/
/* Remove Mobile Address Bar
/*================================================================*/
$(document).ready(function () {
if(/(iPhone|Android)/i.test(navigator.userAgent)) {
  //For iPhone and Andriod To remove Address bar when viewing website
  window.addEventListener("load",function() {
    // Set a timeout...
    setTimeout(function(){
    // Hide the address bar! (it comes back when the user goes to the top of the page)
    window.scrollTo(0, 1);
    }, 0);
  });
}
});

/*================================================================*/
/*  REFRESH IF WINDOW IS UNDER OR OVER 979 PX WIDE - works alone - 
	This theme works w/o this, but I don't recommend removing it.
/*  
/*================================================================*/
var ww = $(window).width();
var limit = 979;

function refresh() {
	ww = $(window).width();
	var w = ww < limit ? (location.reload(true)) : (ww > limit ? (location.reload(true)) : ww = limit);
}

var tOut;
$(window).resize(function () {
	var resW = $(window).width();
	clearTimeout(tOut);
	if ((ww > limit && resW < limit) || (ww < limit && resW > limit)) {
		tOut = setTimeout(refresh, 100);
	}
});


/*================================================================*/
/* LOGO FIXING ON IOS version 2-4
/*================================================================*/
// http://stackoverflow.com/questions/8348139/detect-ios-version-less-than-5-with-javascript
if(/(iPhone|iPod|iPad)/i.test(navigator.userAgent)) { 
    if(/OS [2-4]_\d(_\d)? like Mac OS X/i.test(navigator.userAgent)) {  
        // iOS 2-4 so Do Something   
        		$('#logo object').css({
					"display": "none"
		});
        		$('#logo img').css({
					"display": "block"
		});

        
        
    } else if(/CPU like Mac OS X/i.test(navigator.userAgent)) {
        // iOS 1 so Do Something 
    } else {
        // iOS 5 or Newer so Do Nothing
    }
}


/*================================================================*/
/* ROTATING BACKGROUND IMAGES works alone
/*================================================================*/

$(document).ready(function () {

$('#page').prepend('<span class="bg"></span>');

	var images = [
	'1.jpg',
	'2.jpg', 
	'3.jpg', 
	'4.jpg',
	'5.jpg',
	'6.jpg',
	'7.jpg'
	];

	$('.bg').css({
		'background-image': 'url(assets/images/background/' + images[Math.floor(Math.random() * images.length)] + ')'
	});
});

/*================================================================*/
/* BG FIXING on IOS
/*================================================================*/
// http://stackoverflow.com/questions/8348139/detect-ios-version-less-than-5-with-javascript
if(/(iPhone|iPod|iPad)/i.test(navigator.userAgent)) { 
    if(/OS [2-4]_\d(_\d)? like Mac OS X/i.test(navigator.userAgent)) {  
        // iOS 2-4 so Do Something   
        		$('.bg').css({
					"position": "absolute"
		});

    }
}


/*================================================================*/
/*	SCROLL MAGIC FOR FIXED HEADER
/*================================================================*/
$(window).scroll(function () {
	var scroll = $(window).scrollTop();
	if (scroll >= 0) {
		$("#page").addClass("fixed");
	}
	if (scroll <= 120) {
		$("#page").removeClass("fixed");
	}
});
 


/*================================================================*/
/* BACK TO TOP with fixes for iPad - works alone
/*================================================================*/
$(document).ready(function () {

	if (navigator.userAgent.indexOf('iPad', 'iPhone', 'iPod', 'Android', 'BlackBerry') == -1) {

		$(".backToTop").hide();

		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('.backToTop').fadeIn();
			} else {
				$('.backToTop').fadeOut();
			}
		});

		$('.backToTop').click(function () {
			$("html, body").animate({
				scrollTop: 0
			}, 800);
			return false;
		});

	}

	var deviceAgent = navigator.userAgent.toLowerCase();
	var agentID = deviceAgent.match(/(iphone|ipod|ipad|Android|BlackBerry)/);
	if (agentID) {

		$('.backToTop').css({
			"position": "relative",
			"clear": "both",
			"margin": "0 auto",
			"width": "100%",
			"right": "auto",
			"bottom": "auto"
		});
		$('.backToTop a').css({
			"width": "100%",
			"-border-radius": "0px",
			"-webkit-border-radius": "0px"
		});

	}

}); //end back to top


/*================================================================*/
/*  SLIDE TO TOP ACCORDION
/*  works with: slide-to-top-accordion-min.js
/*================================================================*/
//all closed
$(document).ready(function () {
	$('.slide-to-top.all-closed').slideaccordion({
		oneOpenedItem: true,
		open: -1 // 0 = first pane is open / -1 all are closed
	});
});

//initialize FIRST OPEN
$(document).ready(function () {
	$('.slide-to-top.first-pane-open').slideaccordion({
		oneOpenedItem: true,
		open: 0 // 0 = first pane is open / -1 all are closed
	});
});


/*================================================================*/
/*	SEARCH DESKTOP and TABLET
/*================================================================*/
$(document).ready(function () {
	$('#search-trigger').click(function () {
		$('.search-wrapper input').slideToggle('fast').focus();
		window.scrollTo(0, 0);
		$(this).toggleClass('active');
	});

	/* $(".search input").live('blur', function(){
  window.scrollTo(0,0);
});*/

});

/*================================================================*/
/*	FORGOT PASSWORD (on login page) - works alone
/*================================================================*/

$(document).ready(function () {
	$('.forgot-password').hide();
	$('.forgotpw, .forgot-password .closeforgot').click(function () {
		$(".forgot-password").slideToggle('fast').focus();
	});
});

/*================================================================*/
/*	SMOOTH SCROLL to ANCHOR (DIV WITH ID) - works alone
/*================================================================*/
$(document).ready(function ($) {
	$(".scrollto, .mobile-page-nav .btn").click(function (event) {
		event.preventDefault();
		$('html,body').animate({
			scrollTop: $(this.hash).offset().top
		}, 800);
		return false;
	});
});

/*================================================================*/
/*	FADE ALL EXCEPT THE ONE YOU HOVERED - works alone
/*================================================================*/
$(document).ready(function () {
	$('.image-widget li').hover(function () {
		$(this).siblings().addClass('fade');
	}, function () {
		$(this).siblings().removeClass('fade');
	});
});



/*================================================================*/
/*  add active class to bootstrap's data collapse
/*================================================================*/
$(document).ready(function () {
	$('.accordion').on('show', function (e) {
		$(e.target).prev('.accordion-heading').find('.accordion-toggle').addClass('active');
	});
	$('.accordion').on('hide', function (e) {
		$(this).find('.accordion-toggle').not($(e.target)).removeClass('active');
	});
});

/*================================================================*/
/* EQUAL HEIGHTS:
/*================================================================*/
//http://stackoverflow.com/questions/13029090/jquery-equal-height-responsive-div-rows
// UP VOTE THIS GUY, he rocks

$.fn.eqHeights = function (options) {

	var defaults = {
		child: false
	};
	var options = $.extend(defaults, options);

	var el = $(this);
	if (el.length > 0 && !el.data('eqHeights')) {
		$(window).bind('resize.eqHeights', function () {
			el.eqHeights();
		});
		el.data('eqHeights', true);
	}

	if (options.child && options.child.length > 0) {
		var elmtns = $(options.child, this);
	} else {
		var elmtns = $(this).children();
	}

	var prevTop = 0;
	var max_height = 0;
	var elements = [];
	elmtns.height('auto').each(function () {

		var thisTop = this.offsetTop;

		if (prevTop > 0 && prevTop != thisTop) {
			$(elements).height(max_height);
			max_height = $(this).height();
			elements = [];
		}
		max_height = Math.max(max_height, $(this).height());

		prevTop = this.offsetTop;
		elements.push(this);
	});

	$(elements).height(max_height);
};

$(window).load(function () {
	$('.equalHeights').eqHeights();
});


/*================================================================*/
/*	ADD CLASSES TO VARIOUS THINGS TO FIX OLD IE and make html less crufty - works alone
/*================================================================*/
$(document).ready(function () {
	$(".sort li:first-child").addClass('first');
	$(".sort li:last-child, .footerPosts li:last-child, .footerCredits ul li:last-child").addClass('last');
	$(".main-content .strip:nth-child(odd)").addClass('odd');
	$('.footer h4').wrapInner('<span></span>');


	// see comments
	$('table.responsive').wrap('<div class="tablewrap" />');
	$('table.responsive').before('<span class="instructions"><i class="e-icon-alert"></i> You may have to swipe or scroll table to view all content</strong></span>');

	// works with designreset.css in the table classes before the media queries 
	// and inside the media queries at the very bottom
	// This is a down and dirty responsive table, it puts a wrapper on it and gives some instruction to the user. 
	// It actually works better IMO than the other stuff out there. And no, bootstrap as of 2.2.2 didn't have a responsive table solution.
	// Choose your type here: http://css-tricks.com/responsive-data-table-roundup/
	// I made my own as it's consistent and less buggy.
});


/*================================================================*/
/*	ROTATING TESTIMONIALS jquery.easytabs.js
/*================================================================*/
$(document).ready(function () {
	$('.rotating-testimonials').easytabs({
		animationSpeed: 400,
		updateHash: false,
		cycle: 5000
	});
});

/*================================================================*/
/* TOOL TIPS and POP OVERS bootstrap.min.js has inside it:
/* bootstrap-tooltip.js, bootstrap-popover.js
/*================================================================*/
$(document).ready(function () {
	$('.titletip, ul.social li a, .header .user a').tooltip({});
	$(".detailsPop").popover({
		trigger: 'hover'
	});
});