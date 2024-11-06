$(document).ready(function(){
	
  //리스트 목록 클릭시.....
  $(".item_list-u>li").click(function(){

    g_pop=$(this).index();

    $(".page-u span:nth-child(1)").text(g_pop+1); //오른쪽 상단 페이지번호
    $("html").css({overflowY:"hidden"}); //기존 html 스크롤 숨기기
    $(".pop-u>li").eq(g_pop).show();
    $("#popup-u").stop().fadeIn(); //검정배경

  });

  //오른쪽 상단 버튼-다음보기
  $(".right_btn-u").click(function(){

    if(g_pop<9){
      $(".pop-u>li").eq(g_pop).stop().fadeOut(); //기존거 사라짐
      g_pop++;
      $(".page-u span:nth-child(1)").text(g_pop+1);
			$(".pop-u>li").eq(g_pop).stop().fadeIn();
    }

  });

  //오른쪽 상단 버튼-이전보기
  $(".left_btn-u").click(function(){

    if(g_pop>0){
      $(".pop-u>li").eq(g_pop).stop().fadeOut(); //기존거 사라짐
      g_pop--;
      $("page-u span:nth-child(1)").text(g_pop+1);
			$(".pop-u>li").eq(g_pop).stop().fadeIn();
    }

  });

  //오른쪽 상단 버튼-닫기
  $(".btn_close-u").click(function(){       
    $("html").css({overflowY:"scroll"});
		$("#popup-u").stop().fadeOut();
		$(".pop-u>li").stop().hide();
  });

});