$(document).ready(function(){

  //100% 개인작업 막대 등장_________________
  $(".rtext .per>div").animate({width:"100%"});
  $(".rtext .per>div span").animate({opacity:"1"});


  //각 기기별 화면 오버시 올라가게_________________
  $(".device div .up").mouseenter(function(){
    $(this).css({"background-position":"0 100%"});
  });
  $(".device div .up").mouseleave(function(){
    $(this).css({"background-position":"0 0"});
  });


  //기기별 버튼 오버시 위치이동_________________
  //맥북버튼 오버할 때
  $(".big_icon .p_block").hover(function(){  
    $(".device .pc").css({"transform":"scale(1.08)"});
    $(".device .pc .up").css({"background-position":"0 100%"});
  },function(){
    $(".device .pc").css({"transform":"scale(1)"});
    $(".device .pc .up").css({"background-position":"0 0"});
  });

  //태블릿버튼 오버할 때
  $(".big_icon .t_block").hover(function(){   
    $(".device .tablet").css({"z-index":"3","top":"250px","left":"550px"});
    $(".device .pc").css({"z-index":"1","bottom":"100px","right":"150px"});
    $(".device .mobile").css({"left":"390px","bottom":"80px"});
    $(".device .tablet .up").css({"background-position":"0 100%"});
  },function(){
    $(".device .tablet").css({"z-index":"1","top":"150px","left":"350px"});
    $(".device .pc").css({"z-index":"3","bottom":"100px","right":"0px"});
    $(".device .mobile").css({"left":"300px","bottom":"120px"});
    $(".device .tablet .up").css({"background-position":"0 0"});       
  });

  //모바일버튼 오버할 때
  $(".big_icon .m_block").hover(function(){
    $(".device .mobile").css({"transform":"scale(1.08)","bottom":"150px","left":"400px"});                            
    $(".device .tablet").css({"transform":"scale(0.96)"});
    $(".device .pc").css({"transform":"scale(0.96)"});
    $(".device .mobile .up").css({"background-position":"0 100%"});
  },function(){
    $(".device .mobile").css({"transform":"scale(1)","bottom":"120px","left":"300px"});                            
    $(".device .tablet").css({"transform":"scale(1)"});
    $(".device .pc").css({"transform":"scale(1)"});
    $(".device .mobile .up").css({"background-position":"0 0"});
  });


  $(".btn_view").click(function(){//각 메뉴를 클릭했을때
    $(this).next().show(); //다음 형제인 .pop을 보이게함
    $("html").css({overflowY:"hidden"});//body스크롤없앰
    return false;
  });

  $(".close").click(function(){//close눌렀을때
    $(".pop").hide(); //.pop을 안보이게함
    $("html").css({"overflow-y":"scroll"});//body스크롤생김	
  });

  /*검정 배경 클릭시 닫기*/
  $(".pop").click(function(){
    $("html").css({"overflow-y":"scroll"});
    $(".pop").hide();
    return false;
  });
  
});