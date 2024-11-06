$(document).ready(function(){
	
	//화살표 깜빡깜빡___________________________________
  function guide1(){
    $(".w_slide_btn>span").toggleClass("active");
  }
  setInterval(guide1,500);


  //태블릿 화면(오버시 화면 올라가게)_________________
  $(".w_tab_slide ul li:nth-child(n)").mouseenter(function(){
    $(this).css("background-position","0 100%");
  });
  $(".w_tab_slide ul li:nth-child(n)").mouseleave(function(){
    $(this).css("background-position","0 0");
  });


  //웹디자인 슬라이드__________________________________
  $(".w_list li").click(function(){
  
    $(".w_list li").removeClass("btn_active"); //기존 숫자 
    $(this).addClass("btn_active");  //클릭한 숫자

    val=$(this).index(); //0,1,2,3,...

    $(".w_bg ul").animate({"left":-700*val+"px"});  //왼쪽 배경이미지 슬라이드
    $(".w_txt_slide ul").animate({"left":-340*val+"px"});  //왼쪽 텍스트 슬라이드
    $(".w_tab_slide ul").animate({"left":-794*val+"px"});  //오른쪽 탭이미지 슬라이드

  });


  //DETAIL 버튼 클릭시 모달창 띄우기_______________________
  $(".w_txt_slide>ul>li>span").click(function(){

    w_pop=$(this).parent().index();	//Detail 버튼의 부모의 index	 
    $(".w_page span:nth-child(1)").text(w_pop+1); //오른쪽 상단 페이지 넘버
    $("html").css({overflowY:"hidden"}); //기존 html 스크롤 숨기기
    $(".w_pop>li").eq(w_pop).show(); //w_pop index에 해당하는 팜업보이기
    $("#w_popup").stop(true,true).fadeIn(); //검정배경    

  });


  /*오른쪽 상단 버튼-다음보기*/
	$(".w_btn .right_btn").click(function(){

		$("#w_popup").scrollTop(0); /*스크롤 상단으로 올리기*/		

		if(w_pop<9){
			$(".w_pop>li").eq(w_pop).stop(true,true).fadeOut(); 
			w_pop++;	

			$(".w_page span:nth-child(1)").text(w_pop+1); /*페이지 번호*/
			$(".w_pop>li").eq(w_pop).stop(true,true).fadeIn();			
		}

	});



  /*오른쪽 상단 버튼-이전보기*/
	$(".w_btn .left_btn").click(function(){

		$("#w_popup").scrollTop(0); /*스크롤 상단으로 올리기*/

		if(w_pop>0){
			$(".w_pop>li").eq(w_pop).stop(true,true).fadeOut();
			w_pop--;			

			$(".w_page span:nth-child(1)").text(w_pop+1); /*페이지번호*/
			$(".w_pop>li").eq(w_pop).stop(true,true).fadeIn();
		}

	});


  /*오른쪽 상단 버튼-닫기*/
	$(".w_btn_close, .w_back").click(function(){
		$("html").css({overflowY:"scroll"});
		$("#w_popup").stop(true,true).fadeOut();
		$(".w_pop>li").stop(true,true).hide();
	}); 
  
});