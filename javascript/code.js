 $(window).scroll(function(){
     
     var Scroll = $(this).scrollTop();
    
     if(Scroll > $('.sub-header h1').offset().top - ($(window).height()/1.7)){
         
         $('.photos td').each(function(i){
             
               setTimeout(function(){             
              $('.photos td').eq(i).addClass('is-showing');
             }, 150 * (i+1)); 
          });
     }
     
    if(Scroll > $('.menu').offset().top - ($(window).height()/1.7)){
        
        $('#li1').each(function(){
                       
                $('#li1').addClass('dot-display');
                       });
        $('#li2').each(function(){
                       
                $('#li2').removeClass('dot-display');
                       });
            $('#li3').each(function(){
                       
                $('#li3').removeClass('dot-display');
                       });
        
    }
     
          
    if(Scroll > $('.parallax').offset().top - ($(window).height()/1.7)){
        
        $('#li1').each(function(){
                       
                $('#li1').removeClass('dot-display');
                       });
        
        $('#li2').each(function(){
                       
                $('#li2').addClass('dot-display');
                       });
        
    }
     
               
    if(Scroll > $('.parallax1').offset().top - ($(window).height()/1.7)){
        
        
        $('#li2').each(function(){
                       
                $('#li2').removeClass('dot-display');
                       });
        
         $('#li3').each(function(){
                       
                $('#li3').addClass('dot-display');
                       });
        
    }
     

     
 });

$(document).ready(function(){ (function() {

            var documentEl = $(document),
                parallaxBg = $('div.parallax');

            documentEl.on('scroll', function() {
                var currScrollPos = documentEl.scrollTop();
                parallaxBg.css('background-position', '0 ' + -currScrollPos / 7 + 'px');
            });



        })();
        
        (function() {

            var documentHeader = $(document),
                parallaxHD = $('div.header');

            documentHeader.on('scroll', function() {
                var scrollPos = documentHeader.scrollTop();
                parallaxHD.css('background-position', '0 ' + -scrollPos/ 7 + 'px');
            });



        })();
         
        (function() {

            var documentHeadert = $(document),
                parallaxHDD = $('div.parallax1');

            documentHeadert.on('scroll', function() {
                var scrollPoss = documentHeadert.scrollTop();
                parallaxHDD.css('background-position', '0 ' + -scrollPoss/ 7 + 'px');
            });



        })();
        
            $(document).ready(function() {
            $('#nav').localScroll({duration:1500});
        });
        
              $(document).ready(function() {
            $('nav').localScroll({duration:1500});
        }); 
                             
      
        
        
        /* MOBILE VERSION  */
        
        if (document.documentElement.clientWidth < 1281) {
	           var documentHeader = $(document),
                parallaxHD = $('div.header');

            documentHeader.on('scroll', function() {
                var scrollPos = documentHeader.scrollTop();
                parallaxHD.css('background-position', '0 ');
                
            });
            
             var documentHeadert = $(document),
                parallaxHDD = $('div.parallax1');

            documentHeadert.on('scroll', function() {
                var scrollPoss = documentHeadert.scrollTop();
                parallaxHDD.css('background-position', '0 ');
            });
            
                var documentEl = $(document),
                parallaxBg = $('div.parallax');

            documentEl.on('scroll', function() {
                var currScrollPos = documentEl.scrollTop();
                parallaxBg.css('background-position', '0 ');
            });

        }
     
    
    

});

 