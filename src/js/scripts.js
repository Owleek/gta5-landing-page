$(document).ready(function(){
    const owl = $(".owl-carousel");

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
});