$(document).ready(function(){

  //스크롤바가 이동될 때마다 스크롤위치값 나타내기
	// $(window).scroll(function(){ 
	// 	$("#txt1").text($(this).scrollTop());
	// });


  $(window).scroll(function () {
    var height = $(document).scrollTop();
    console.log(height);	// 스크롤할때마다 해당 스크롤 위치 좌표값(높이)
});




  //스크롤 위치값에 따라 내용 나오게 하기
  $(window).scroll(function(){

    var wscroll= $(this).scrollTop();

    if(wscroll>=100){
      $(".right_about").addClass("scrolls1");
      $(".left_edu").addClass("scrolls2");
    }else{
      $(".right_about").removeClass("scrolls1");
      $(".left_edu").removeClass("scrolls2");
    }






    if(wscroll>=300){
      $(".skill_ul li:nth-child(2) .skill_bar, .skill_ul li:nth-child(3) .skill_bar,  .skill_ul li:nth-child(6) .skill_bar, .skill_ul li:nth-child(7) .skill_bar, .skill_ul li:nth-child(8) .skill_bar").addClass("skills1");

      $(".skill_ul li:nth-child(4) .skill_bar, .skill_ul li:nth-child(5) .skill_bar").addClass("skills2");
      // $(".skill_ul li:nth-child(6) .skill_bar").addClass("skills3");
    }else{
      $(".skill_bar").removeClass("skills1 skills2 skills3")
    }




    if(wscroll>=400){
      $(".left_hobby").addClass("scrolls3");
    }else{
      $(".left_hobby").removeClass("scrolls3");
    }


    if(wscroll>=600){
      $(".profile_thanks").addClass("scales");
    }else{
      $(".profile_thanks").removeClass("scales");

    }

  });


  // 취미영역-오버시 오른쪽영역 이미지 바뀜
  $(".left_hobby ul li").mouseenter(function(){
    var link = $(this).index();
    $(".right_link ul li").stop(true,true).fadeOut();
    $(".right_link ul li").stop(true,true).eq(link).fadeIn();
  });



});