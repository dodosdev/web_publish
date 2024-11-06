$(document).ready(function(){
	
	//화살표 깜빡깜빡___________________________________
  function guide1(){
    $(".slide_btn-m>span").toggleClass("active");
  }
  setInterval(guide1,500);


  //모바일 화면(오버시 화면 올라가게)_________________
  $(".tab_slide-m ul li:nth-child(n)").mouseenter(function(){
    $(this).css("background-position","0 100%");
  });
  $(".tab_slide-m ul li:nth-child(n)").mouseleave(function(){
    $(this).css("background-position","0 0");
  });


  //모바일 슬라이드_________________________
  $(".list-m li").click(function(){
  
    $(".list-m li").removeClass("btn_active"); //기존 숫자 
    $(this).addClass("btn_active");  //클릭한 숫자

    val=$(this).index(); //0,1,2,3,...

    $(".bg-m ul").animate({"left":-700*val+"px"});  //왼쪽 배경이미지 슬라이드
    $(".txt_slide-m ul").animate({"left":-340*val+"px"});  //왼쪽 텍스트 슬라이드
    $(".tab_slide-m ul").animate({"left":-395*val+"px"});  //오른쪽 탭이미지 슬라이드

  });


  //DETAIL 버튼 클릭시 모달창 띄우기_______________________

  //(1)자세히 보기
  $(".txt_slide-m>ul>li>span").click(function(){

    m_pop=$(this).parent().index();	//Detail 버튼의 부모의 index	 
    $(".page-m span:nth-child(1)").text(m_pop+1); //오른쪽 상단 페이지 넘버
    $("html").css({overflowY:"hidden"}); //기존 html 스크롤 숨기기
    $(".pop-m>li").eq(m_pop).show(); //w_pop index에 해당하는 팜업보이기
    $("#popup-m").stop(true,true).fadeIn(); //검정배경    

  });






  



  /*오른쪽 상단 버튼-다음보기*/
	$(".btn-m .right_btn-m").click(function(){

		$("#popup-m").scrollTop(0); /*스크롤 상단으로 올리기*/		

		if(m_pop<9){
			$(".pop-m>li").eq(m_pop).stop(true,true).fadeOut(); 
			m_pop++;	

			$(".page-m span:nth-child(1)").text(m_pop+1); /*페이지 번호*/
			$(".pop-m>li").eq(m_pop).stop(true,true).fadeIn();			
		}

	});



  /*오른쪽 상단 버튼-이전보기*/
	$(".btn-m .left_btn-m").click(function(){

		$("#popup-m").scrollTop(0); /*스크롤 상단으로 올리기*/

		if(m_pop>0){
			$(".pop-m>li").eq(m_pop).stop(true,true).fadeOut();
			m_pop--;			

			$(".page-m span:nth-child(1)").text(m_pop+1); /*페이지번호*/
			$(".pop-m>li").eq(m_pop).stop(true,true).fadeIn();
		}

	});


  /*오른쪽 상단 버튼-닫기*/
	$(".btn_close-m, .back-m").click(function(){
		$("html").css({overflowY:"scroll"});
		$("#popup-m").stop(true,true).fadeOut();
		$(".pop-m>li").stop(true,true).hide();
	}); 
  
});