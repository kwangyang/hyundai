$(document).ready(function(){
$(function(){

  // -------------------------------------- [gnb & article]

  const $mnu = $('header > .side-gnb > .sideg > li > a');
  // const $section = $('section');
  // $section.height($(window).height());


  const arrTopVal = [];
  let nowIdx = null;

  //각 article의 offset().top 배열에 저장
  for(let i=0;i<$mnu.length;i++){
    arrTopVal[i] = $('article').eq(i).offset().top;
  }

  console.log('arrTopVal =',arrTopVal);

  //네비게이션 메뉴 클릭이벤트 
  $mnu.on('click', function(evt){
    evt.preventDefault();

    nowIdx = $mnu.index(this);

    $('html,body').stop().animate({
      scrollTop : arrTopVal[nowIdx]-50
      // scrollTop : arrTopVal[nowIdx]+45
    },400)
  });


  //브라우저의 scroll 이벤트 구문
  $(window).on('scroll',function(){    
    const scrollTop = $(this).scrollTop();

    console.log('scrollTop=',scrollTop)

    for(let i=0;i<arrTopVal.length;i++){
      if(scrollTop>=arrTopVal[i]-50){
      // if(scrollTop>=arrTopVal[i]+45){

        //활성화표시
        $mnu.eq(i).parent().addClass('on').siblings().removeClass('on');

      } else if(scrollTop<arrTopVal[0]-50){
      // } else if(scrollTop<arrTopVal[0]+45){
        $mnu.parent().removeClass('on');
      }
    }

  //  ------------------------------------------[ aside ]

    const view = (scrollTop + $(this).height()) - $('footer').offset().top

    if(view>0){
      $('aside').css({marginBottom:view});
    }else{
      $('aside').css({marginBottom:0});
    }

  });


  //.logo>a, aside>a 클릭시 맨위로 이동
  $('.logo>a, aside>a').on('click', function(evt){
    evt.preventDefault();

    $('html,body').stop().animate({
      scrollTop:0
    })
  });

  //처음 접속시 load 이벤트 구문
  $(window).on('load', function(){
    $('html,body').stop().animate({
      scrollTop:0
    });
  });

  // ---------------------------top nav

  const $gnb = $('.container > .top-nav > .top-gnb');
  const $lnb = $gnb.find('.lnb');
  const $bg_lnb = $('.bg_lnb');

  const $height = $('.lnb').height();
  console.log($height);
  // $bg_lnb.height($('.lnb').height()).width($('.lnb').width());

  $gnb.on('mouseenter', function(){
      $bg_lnb.stop().slideDown(50);//배경판 노출
      $lnb.stop().slideDown(50);//서브메뉴 노출

      $bg_lnb.stop().animate({
              top : -200
          },150,'easeInSine');
  });

  $gnb.on('mouseleave', function(){
      $lnb.stop().slideUp(50);
      $bg_lnb.stop().slideUp(50);

  });

  $bg_lnb.on('mouseover', function(){
      $gnb.trigger('mouseover');
  });
  
  $bg_lnb.on('mouseout', function(){
      $gnb.trigger('mouseout');        
  });


    // ---------------------------sub gnb

    const $sub = $('.container > .sub-nav >.sub');
    
    const $family = $('.family').parent();
    const $lnbFamily = $sub.find('.sub-lnb-family>li');
    const $bg_family = $('.bg_sublnbfamily');
    
    const $search = $('.search').parent();
    const $lnbInput = $sub.find('.sub-lnb-input');
    const $bg_input = $('.bg_sublninput');
  

    
    $family.on('mouseenter', function(){

        $bg_family.stop().slideDown(50);//배경판 노출
        $lnbFamily.stop().slideDown(50);//서브메뉴 노출
  
        $bg_family.stop().animate({
                top : -200
            },150,'easeInSine');
    });
  
    $family.on('mouseleave', function(){
      $lnbFamily.stop().slideUp(50);
        $bg_family.stop().slideUp(50);
    });
  
    $bg_family.on('mouseover', function(){
        $family.trigger('mouseover');
    });
    
    $bg_family.on('mouseout', function(){
        $family.trigger('mouseout');        
    });

    // -----------------------------------------

    $search.on('mouseenter', function(){

      $bg_input.stop().slideDown(50);//배경판 노출
      $lnbInput.stop().slideDown(50);//서브메뉴 노출

      $bg_input.stop().animate({
              top : -200
          },150,'easeInSine');
  });

  $search.on('mouseleave', function(){
    $lnbInput.stop().slideUp(50);
      $bg_input.stop().slideUp(50);
  });

  $bg_input.on('mouseover', function(){
      $search.trigger('mouseover');
  });
  
  $bg_input.on('mouseout', function(){
      $search.trigger('mouseout');        
  });

}); //end of function

  //-----------------------------------[ visual ]

  $(function() {
    const $visual = $('.visual');
    const $slides = $visual.children('div');
    const $video = $slides.find('video');
  
    $visual.height($(window).height());
    // $visual.width($(window).width());
    $slides.height($(window).height());
    // $slides.width($(window).width());
    // $video.width($(window).width());
    $video.css({
      // marginLeft: -($video.width() / 2)
      marginLeft: -($video.width())
    });
  
    let nowIdx = Math.floor(Math.random() * 5);
  
    //슬라이드 처리
  
    setInterval(function() {
      if (nowIdx < 4) {
        nowIdx++;
      } else {
        nowIdx = 0;
      }
      $slides.eq(nowIdx).fadeIn(500).siblings().fadeOut(500);
    }, 20000);
  
    $(window).on('load resize', function() {
      $visual.height($(window).height());
      $slides.height($(window).height());
    }); //end of reload
  }); //end of function
  

    //-----------------------------------[ slideup ]

    $(function () {

      const $boxindicator = $('.boxes > .box-pagination > li > a ');
      const $boxContainer = $('.boxes >.boxwrap >.box-container');


      let indicatorIdx = 0;
      let bxContainerIdxs = 0;

      //클릭했을때
      $boxindicator.on('mouseenter', function (evt) {
        evt.preventDefault();

        indicatorIdx = $boxindicator.index(this);
        console.log(indicatorIdx);

        bxContainerIdxs = indicatorIdx;
        console.log(bxContainerIdxs);

        //1 활성화표시
        $boxindicator.eq(indicatorIdx).parent().removeClass('on').addClass('on').siblings().removeClass('on');
        $boxContainer.eq(bxContainerIdxs).removeClass('on').addClass('on').siblings().removeClass('on');

        //2 컨테이너이동
        // $boxContainer.eq(bxContainerIdxs).css({
        //   display: initial
        // });
        $boxContainer.eq(bxContainerIdxs).stop().animate({
          bottom:0
        }, 500);

      });

      $boxContainer.on('mouseleave', function (evt) {
        evt.preventDefault();
        // $display.eq(nowIdxs).stop().hide();
        $boxContainer.eq(bxContainerIdxs).stop().animate({
          bottom:-300
        }, 10);

        $boxContainer.eq(bxContainerIdxs).css({
          display: none
        });
      });

    });


    //-----------------------------------[ #company ]

    $(function() {
      const $company = $('.company');
      const $slides = $('.slides');
      const $sldsContainer = $('.slides-container');
      const $sldsIndicator = $('.slides-pagination > li > a');
      const $contents = $('.contents');
      


      // $(window).on('load resize', function() {
        // $company.width($(window).width());
        // $slides.width($(window).width());
 
    //  });//end of #compnay

     
     let companyIdx = 0;
     
     //클릭했을때
     $sldsIndicator.on('mouseenter', function(evt){
       evt.preventDefault();
   
       companyIdx = $sldsIndicator.index(this);
       
       //1 활성화표시
       $sldsIndicator.eq(companyIdx).parent().addClass('on').siblings().removeClass('on');
   
       //2 컨테이너이동
       $sldsContainer.stop().animate({
         left : -(100*companyIdx)+'%'
         
       });
       
     });




    });

  });
    
 
