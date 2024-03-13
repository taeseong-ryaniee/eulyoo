"use strict";
$(document).ready(function () {
    //visual 팝업을 작동시키는 라이브러리
    const Swiper = new Swiper('.visual .swiper', {
        /* 팝업을 감싼는 요소의 class명 */
        effect: 'fade' /* fade 효과 */,
        autoplay: {
            /* 팝업 자동 실행 */ delay: 5000,
            disableOnInteraction: true
        },
        loop: true /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */,
        pagination: {
            /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.visual .pagination' /* 해당 요소의 class명 */,
            clickable: true /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
            //type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
        },
        navigation: {
            /* 이전, 다음 버튼 */
            nextEl: '.visual .next' /* 다음 버튼의 클래스명 */,
            prevEl: '.visual .prev'
        }
    });
    /*
        .visual .swiper .stop
        정지버튼을 누르면 팝업 정지
                - 재생버튼이 보임, 정지버튼은 숨김
        .visual .swiper .play
        재생버튼을 누르면 팝업 다시 재생됨
                - 재생버튼 숨김, 정지버튼이 보임
    */
    $('.visual .swiper .stop').on('click', function () {
        swiper.autoplay.stop(); /* 일시정지 기능 */
        $('.visual .swiper .play').show();
        $('.visual .swiper .stop').hide();
    });
    $('.visual .swiper .play').on('click', function () {
        swiper.autoplay.start(); /* 재생 기능 */
        $('.visual .swiper .play').hide();
        $('.visual .swiper .stop').show();
    });
    $('.interview .list ul li').on('mouseenter', function () {
        $('.interview .list ul li').removeClass('active'); /* 재생 기능 */
        $(this).addClass('active'); /* 재생 기능 */
    });
    /* 브라a우저를 스크롤하면 header에 fixed 클래스를 추가할 예정
       단, 스크롤이 조금이라도 내려가면 fixed를 추가하지만
        다시 상단으로 이동하면 fixed 클래스 삭제
    -- 스크롤 값을 아는 게 필요.... */
    $('.header .gnb').on('mouseenter', function () {
        $('.header').addClass('menu_over'); /* 재생 기능 */
    });
    $('.header .gnb').on('mouseleave', function () {
        $('.header').removeClass('menu_over');
    });
    $('.header .tnb .login').on('focusin', function () {
        $('.header').removeClass('menu_over');
    });
});
