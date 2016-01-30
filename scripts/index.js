$(function(){
	$(".tubiao2").hover(function(){
        $(this).find(".top-right-hidden").show();
	},function(){
         $(this).find(".top-right-hidden").hide();
	}
     )
	$(".aixin").hover(function(){
		$(this).find(".iconfont3").show();
	},function(){
		$(this).find(".iconfont3").hide();
	})
	$('.cedaohang').hover(function(){
    $(this).find('.catego-bar-hidden3').show();
  },function(){
    $(this).find('.catego-bar-hidden3').hide();
  });
	
    $('.f1-right-xx-shang').hover(function(){
    $(this).css({position:'relative'});
    $(this).stop();
    $(this).animate({left:5},200);
  },function(){
    $(this).stop();
    $(this).animate({left:0},200);
  });
     $('.f1-right-xx-xia').hover(function(){
    $(this).css({position:'relative'});
    $(this).stop();
    $(this).animate({left:5},200);
  },function(){
    $(this).stop();
    $(this).animate({left:0},200);
  });
        $('.header-right').hover(function(){
    $(this).css({position:'relative'});
    $(this).stop();
    $(this).animate({left:-10},200);
  },function(){
    $(this).stop();
    $(this).animate({left:0},200);
  });
     
        $('.tab-1').hover(function(){
    $('.tab-1').stop();
    $(this).find('.tab-dingwei').show(0,function(){
      $(this).animate({right:45},200);
    });
  },function(){
    $('.tab-1').stop();
    $(this).find('.tab-dingwei').css({right:35}).hide(0);
  });


         var index = 0;
         var color=["#a516ff","#30C4FF","#458BFA","#5F7EF3","#005494","#FCF1F7","rgb(255, 221, 220)","rgb(220, 5, 10)","rgb(218, 45, 98)"
         ,"rgb(213, 197, 174)","rgb(48, 72, 106)","rgb(250, 169, 18)","rgb(255, 213, 75)","rgb(255, 234, 89)","rgb(255, 198, 213)"," rgb(48, 196, 255)"]
  var lunbo  =  function(){
    $('.catego-item-1').hide();
    $(".catego-right1").hide();
    var el = $('.catego-item-1')[index];
    var el1=$(".catego-right1")[index];
    $(el).show();
     $(el1).show();
     $(".catego").css("background",color[index]);
    $('.yuandian').removeClass('red');
    $($('.yuandian')[index]).addClass('red');

    index += 1;
    if( index === 6 ){
      index = 0;
    }

  }
   $(".cedaohang-b").hover(function(){
      clearInterval(timerId);
      var ll=$(".cedaohang").index(this);
      $(".catego-item-1").hide();
      $($(".catego-item-1")[ll]).show();
      $(".catego").css("background",color[ll]);

   })
   $(".cedaohang-a").hover(function(){
       clearInterval(timerId);
        timerId=setInterval(lunbo,1000);
   })

  $('.yuandian').each(function(i){
    $(this).data('index',i)
  });
   
  $('.yuandian').hover(function(){
    clearInterval(timerId);
    $('.yuandian').removeClass('red');
    $(this).addClass('red');
    var i = $(this).data('index');
    $('.catego-item-1').hide();
    $(".catego-right1").hide();
    $( $('.catego-item-1')[i] ).show();
    $($(".catego-right1")[i]).show();
     $(".catego").css("background",color[i]);
    index = i;
  },function(){
    clearInterval(timerId);
    timerId = setInterval(lunbo,1000);
  });
  var timerId = setInterval(lunbo,1000);
  
   $(".tab-8-img").click(function(){
    $({top: $(window).scrollTop()}).animate(
      {top: 0},
      {
        duration: 700,
    step: function() {
      $(window).scrollTop(this.to );
    }
      }
    );
  });
   // =================小轮播
    var t=0;
    $(".f1-left-middle-you").each(function(i){
          $(this).data("index",i);
    });
    $(".f1-left-middle-you").click(function(){
         t++;
        if(t==3||t<0){t=0;} 
        var i=$(this).data("index");     
        $($(".f1-left-middle1-chang")[i]).css({position:"relative",left:-t*100+"px"});
         
    })
     $(".f1-left-middle-zuo").click(function(){            
          t--;
          if(t==3||t<0){t=2;} 
           var i=$(this).data("index");              
        $($(".f1-left-middle1-chang")[i]).css({position:"relative",left:-t*100+"px"});
       
    })
      var fn=function(){
               t++;
        if(t==3||t<0){t=0;}  
        $(".f1-left-middle1-chang").css({position:"relative",left:-t*100+"px"});
      }
     var timeid=setInterval(fn,1000);

   //==============楼层
    var i;
  var yiqian;
  var v;
  var beijing=["url('./img/32.png')","url('./img/34.png')","url('./img/36.png')","url('./img/38.png')","url('./img/40.png')","url('./img/42.png')"
  ,"url('./img/44.png')","url('./img/46.png')","url('./img/48.png')","url('./img/50.png')","url('./img/52.png')"]
   var beijing1=["url('./img/31.png')","url('./img/33.png')","url('./img/35.png')","url('./img/37.png')","url('./img/39.png')","url('./img/41.png')"
  ,"url('./img/43.png')","url('./img/45.png')","url('./img/47.png')","url('./img/49.png')","url('./img/51.png')"] 
    
      $(".youcee").hover(function(){
        j=$(".youcee").index(this);
        $(this).css({"background":beijing[j]});
  },function(){
          j=$(".youcee").index(this);
           if(v==j){
            $(this).css({"background":beijing[j]});
           }else if(v!=j){
            $(this).css({"background":beijing1[j]});
           }
           

  }
     )

    $('.youcee').each(function(v){
    $(this).data('index',v);
  });
  $('.youcee').click(function(){
     v = $(this).data('index');
    var newtop = $( $('.ad1')[v] ).offset().top - $(".youce").position().top;
    $({top: $(window).scrollTop()}).animate(
      {top: newtop},
      {
        duration: 700,
  step: function() {
    $(window).scrollTop(this.top);
  }
      }
    );
  });

  $(window).scroll(function(){
        if($(window).scrollTop()>900){
           $(".youce").css({"display":"block"});
        }
     for (i=0 ;i<11;i++){
         
        if (  (  $(window).scrollTop() >= ($($(".ad1")[i]).offset().top-$(".youce").position().top)-10  )&& $(window).scrollTop()<($($(".ad1")[i]).offset().top)+452 ){        
                if(yiqian!=undefined){
              $($(".youcee")[yiqian]).css({"background":beijing1[yiqian]});
            }
            $($(".youcee")[i]).css({"background":beijing[i]});             
            yiqian=i;
        }
        if($(window).scrollTop()<900){
           // $($(".youcee")[0]).css({"background":beijing1[0]});
            $(".youce").css({"display":"none"});
        }
    }

    // ===========================================================

   

  })
   
// ===========顶部显示
   var ti;
  $(window).scroll(function(){
    if($(window).scrollTop() > 300){
      clearTimeout(ti);
      ti = setTimeout(function(){
  $('.fixtop').show();
      },500);
    }else{
      clearTimeout(ti);
      $('.fixtop').hide();
    };
  });
  // 默认点击事件
  $(document).mousedown(function(e){
    e.preventDefault();
  })

       
})