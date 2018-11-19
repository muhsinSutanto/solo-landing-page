// PRELOADER

$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(500).fadeOut('slow');
})

// TEAMS

$(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: [`<i class="fas fa-arrow-circle-left"></i> &nbsp`, ` &nbsp<i class="fas fa-arrow-circle-right"></i>`]
    }).addClass('text-center');
})

// POGRESS BAR
$(function () {
    $("progress-elements").waypoint(function () {
        $(".progress-bar").each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 1000);
        });
        this.destroy();
    }, {
        offset: "bottom-in-view"
    });


});


// protofolio
$(window).on('load', function () { 
   var $grid = $(".isotop-container").isotope({

   }) 
   $('#isotop-filters').on('click', 'button', function(){ 
       var filterValue = $(this).attr('data-filter');

       $grid.isotope({filter: filterValue})
       
   })
})


// // init Isotope
// var $grid = $('.grid').isotope({
//     // options
//   });
//   // filter items on button click
//   $('.filter-button-group').on( 'click', 'button', function() {
//     var filterValue = $(this).attr('data-filter');
//     $grid.isotope({ filter: filterValue });
//   });

// Animation
$(function(){
    new WOW().init(); 
  });

$(window.on('load', function() {
    $("home-heading-1").addClass("animated fadeInDown")
    $("home-heading-2").addClass("animated fadeInLeft")
    $("home-text").addClass("animated zoomIn")
    $("home-btn").addClass("animated zoomIn")
    $("arrow-down i").addClass("animated fadeInDown infinite ")
}))