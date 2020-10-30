var current = $('.home-page'),
onDisplay = false

$("[data-toggle=popover]").popover();

// navbar collapses when user clicks on nav options
$('.navbar-collapse a').on('click',function(){
    $(".navbar-collapse").collapse('hide');
});

$('.main-logo').on('click',function(e){

   
    if(current !== $('.home-page')){
        current.hide()
        $('.home-page').fadeIn()
        $(".navbar-collapse").collapse('hide')
    }

    current = $('.home-page')
    
})

for(let data of mainNav) {


    $(`#${data}-btn`).on('click',function(){

        if(current !== $(`.${data}-page`)){

            current.hide()
            $(`.${data}`).fadeIn()
            $(`.${data}-page`).fadeIn()
            $(`.${data}-dynamic`).fadeIn()
            $(`.${data}-nav`).fadeIn()
            $(`.${data}-dyn-out`).hide()
            $('.go-back').hide()
            $('.map-dyn').hide()
            $('.answer').removeClass('p-show')
            $('.footer-contact').fadeIn() 

            

        }

        current = $(`.${data}-page`)
    })
}

$('#ct-btn').on('click',function(){
    $('.footer-contact').hide()
})



$('.go-back').on('click',function(event){
    var target = $(event.target)

    for(let data of backDyn){
        var key = data.btn

        if(target.hasClass(`${key}-b`)){
            $(`.${key}-page`).fadeIn()
            $(`.${key}-nav`).fadeIn()
            $(`.${key}-dyn-out`).hide()
            $('.go-back').hide()
            $('html, body').animate({
                scrollTop: ($(`.${key}-back`).first().offset().top - 200)
                },700);

                onDisplay = false
        }
    }
  
})


$('.abt-page').on('click',function(event){
    var target = $(event.target)

    for(let data of aboutUsBtn){
        
        if(target.hasClass(data.btn)){

            $('.abt-dyn-out').hide().fadeIn().html(
            data.html
            )

            $('html, body').animate({
                scrollTop: ($('.abt-btn').first().offset().top) - 90
            },700);
            
        }


    }
})




$('.srv-nav').on('click',function(event){
    var target = $(event.target)
    onDisplay = true

    for(let data of srvBtn){

        if(target.hasClass(data.btn) || target.parent().hasClass(data.btn)){


            $('.srv-dyn-out').hide().fadeIn().html(data.html)

            $('.srv-nav').hide()

            $('.go-back').fadeIn()
    
    
            $('html, body').animate({
                scrollTop: ($('.anchor-dyn1').first().offset().top - 190)
            },700);
        }
    }

})


$('.pkg-nav').on('click',function(event){
  var target = $(event.target)
  onDisplay = true

  for(let data of pkgBtn) {

    if(target.hasClass(data.btn) || target.parent().hasClass(data.btn)) {
        $('.pkg-dyn-out').hide().fadeIn().html(data.html)
        $('.pkg-nav').hide()
        $('.go-back').fadeIn()

        $('html, body').animate({
            scrollTop: ($('.anchor-dyn2').first().offset().top)
        },700);
    } 
  }


})



    // var start;

    // for(let data of dynamic){


    //     start = function(){

    //     $(`${data}-nav`).on('click',function(event){
    //         var target2 = $(event.target)
    //         onDisplay = true

    //         for(let sub of `${data}Btn`){

    //             if(target2.hasClass(sub.btn) || target2.parent().hasClass(sub.btn)){
    //                 $(`.${sub}-dyn-out`).hide().fadeIn().html(data.html)
    //                 $(`${sub}-nav`).hide()
    //                 $('.go-back').fadeIn()
    
    //                 $('html, body').animate({
    //                     scrollTop: ($(`.anchor-dyn${sub.indexOf()}`).first().offset().top)
    //                 },700);
    //             }

    //         }
    //     })
    //    }         

    // }


    
 




$('.map-nav').on('click',function(event){
    var target = $(event.target)

    for(let data of mapBtn) {

        if(target.hasClass(data.btn)){
            $('.map-dyn').hide().fadeIn().html(data.html)
            $('html, body').animate({
                scrollTop: ($('.map-dyn').first().offset().top)
            },700);
        }
    }
})

$('#questions').on('click',function(event){
  var target = $(event.target)

  for(var i = 1; i <= 10; i++){

      if(target.hasClass(`q${i}`)){
          $(`.a${i}`).toggleClass('p-show')
      }

  }

})

$(window).on('scroll',function(){

    
    if($(this).scrollTop()>0){
        $('.scroll-below').fadeOut()
    }else {
        if(!onDisplay){
            $('.scroll-below').fadeIn()
        }else  {
            $('.scroll-below').hide()
        }

    }
})