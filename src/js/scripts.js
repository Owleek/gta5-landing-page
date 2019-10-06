$(document).ready(function(){
    const owl = $(".owl-carousel");
    const button = $(".button");
    const overlay = $(".overlay");

	owl.owlCarousel({
        items:1,
        loop:true,
        margin:10,
        nav:false,
        dots: false,
    });

	$(".next").on("click", function(){
		owl.trigger("next.owl.carousel");
    });
    
	$(".prev").on("click", function(){
		owl.trigger("prev.owl.carousel");
    });

    button.on("click", function(){
        overlay.show();
    });

    overlay.on("click", function(){
        $(this).hide();
    })
});