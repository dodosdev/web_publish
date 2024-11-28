// Initialize Swiper -->  https://swiperjs.com/get-started#initialize-swiper





createSwiper() //함수명 새로생성

function createSwiper() {

    let output = `

        <!-- Slides -->
         <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000088/88381/88381231349_727.jpg" alt=""></div>
            <div class="swiper-slide"><img src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000088/88381/88381231344_727.jpg" alt=""></div>
            <div class="swiper-slide"><img src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000088/88381/88381231350_727.jpg" alt=""></div>
            <div class="swiper-slide"><img src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000088/88381/88381231350_727.jpg" alt=""></div>
            <div class="swiper-slide"><img src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000088/88381/88381231350_727.jpg" alt=""></div>
            ...
        </div>
        <!-- If we need pagination -->
        <div class="swiper-pagination"></div>

        <!-- If we need navigation buttons -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>

        <!-- If we need scrollbar -->
        <div class="swiper-scrollbar"></div>

    
    `;
    
    document.querySelector(".swiper").innerHTML = output;




    const swiper = new Swiper('.swiper', {
        // Optional parameters
        // direction: 'vertical', 
        //수직방향설정(주석처리하면 가로방향으로감)
        slidesPerView: 1, 
        //기본적으로 보여주는이미지갯수
        autoplay: {delay:5000, disableOnInteraction: false},
        //autoplay 5초에한번씩 자동으로돌아감
        loop: true,
        
        // If we need pagination
        pagination: {
            // el: '.swiper-pagination',
        },
        
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        
        // And if we need scrollbar
        scrollbar: {
            // el: '.swiper-scrollbar',
        },
        });

}


