          $('.tabs-hover a').hover(function () {
            $(this).tab('show');
          });
          $('.search-a').click(function () {
            $(".modal-box").fadeIn();
          });
          $('.modal-back').click(function () {
            $(".modal-box").fadeOut();
          });
var clicktag = 0;
 $(".nav-open").click(function(){
        if (clicktag == 0) {
          clicktag = 1;
          $(this).toggleClass("cross");
          $(".nav-down").hide();
          $(".nav-click").removeClass("active");
          if($(".nav-list").is(":hidden"))
          {
            $(".nav-list").slideDown("slow");  
          }else{
            $(".nav-list").slideUp("slow");
              }
          setTimeout(function () { clicktag = 0 }, 700);
        }

  }); 
  $(".nav-list .nav-click").click(function(){
        if (clicktag == 0) {
          clicktag = 1;
          $(".nav-click").removeClass("active");
          
          $(".nav-down").slideUp("slow");
          
          if($(this).parents("li").find(".nav-down").is(":hidden"))
          {
            $(this).parents("li").find(".nav-down").slideDown("slow"); 
            $(this).addClass("active"); 
          }else{
            $(this).parents("li").find(".nav-down").slideUp("slow");
            $(this).removeClass("active");
              }
          setTimeout(function () { clicktag = 0 }, 700);
        }

  }); 
    $(".nav-list li a").click(function(){
        $(".nav-list").hide(); 

  }); 
   $(".down").click(function(){
          if($(this).parents("li").find(".list-nav-down").is(":hidden"))
          {
            $(".down").removeClass("active");
            $(".nav-li").removeClass("active");
            $(this).addClass("active");
            $(this).parents("li").addClass("active");
            $(".list-nav-down").slideUp("slow");
            $(this).parents("li").find(".list-nav-down").slideDown("slow");
          }else{
            $(this).parents("li").find(".list-nav-down").slideUp("slow");
            $(this).removeClass("on");
              }
  });

   $(".list-left-tt-phone").click(function(){
          if($(".list-nav").is(":hidden"))
          {
            $(".list-nav").slideDown("slow");   
          }else{
            $(".list-nav").slideUp("slow");
              }
  });
  $('.t_search').click(function(){
        $('.search_wrap').fadeIn();
        $('.search_wrap .search_box').slideDown()
    });
    $('.close,.bck').click(function(){
        $('.search_wrap').fadeOut();
        $('.search_wrap .search_box').slideUp()
    });

  $(".nav-click-a").click(function(){
          if($(".left-nav").is(":hidden"))
          {
            $(".left-nav").slideDown("slow");  
          }else{
            $(".left-nav").slideUp("slow");
              }
  }); 
   $(".down-a").click(function(){
          $(".left-li").removeClass("active");
          $(".left-nav-down").slideUp("slow");
          if($(this).parents("li").find(".left-nav-down").is(":hidden"))
          {
            $(this).parents("li").addClass("active");
            $(this).parents("li").find(".left-nav-down").slideDown("slow");   
          }else{
            $(this).parents("li").removeClass("active");
            $(this).parents("li").find(".left-nav-down").slideUp("slow");
              }
  });
   $(".list-left-tt-phone").click(function(){
          if($(".left-nav").is(":hidden"))
          {
            $(".left-nav").slideDown("slow");   
          }else{
            $(".left-nav").slideUp("slow");
              }
  });
  $('.search-click').click(function(){
        $('.search-c').toggleClass("active");

    });

