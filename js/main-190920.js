$(function(){
    var duration = 300;

    //section title
    var sec1 = $('#main > section').eq(1).find('h2')
    var titleTop1 = sec1.offset().top;
    var sec2 = $('#main > section').eq(2).find('h2')
    var titleTop2 = sec2.offset().top;
    var sec3 = $('#main > section').eq(3).find('h2')
    var titleTop3 = sec3.offset().top;
    var sec4 = $('#main > section').eq(4).find('h2')
    var titleTop4 = sec4.offset().top;
    
    sec1.stop().animate({right:0, left:0});
    $(window).scroll(function(){
        var winS = $(window).scrollTop();
        var winH = $(window).height()
        
        if(winS >= titleTop2-winH) {
            sec2.stop().animate({right:0, left:0});
        };
        if(winS >= titleTop3-winH) {
            sec3.stop().animate({right:0, left:0});
        };
        if(winS >= titleTop4-winH) {
            sec4.stop().animate({right:0, left:0});
        }
        
    })
    
    
    // typoShadow 플러그인 적용
    $('#typoSec').typoShadow();
    
    // slider
    $('.slider').bxSlider({
        //mode:'horizontal', //default : 'horizontal' /'vertical' 'fade' 움직이는 방향
        speed:1000, //default : 500  바뀔 때 속도
        auto:true, //default : false  자동여부
        pause:5000, //default : 4000  한 슬라이드가 보이는 시간
        //autoHover:true, //default : false   마우스가 올라가면 멈출지 말지
        //slideWidth:1920, //default  슬라이드 박스 크기
        minSlides:1, //보이는 최소 슬라이드 갯수
        maxSlides:1, //보이는 최대 슬라이드 갯수
        moveSlides:1 //함께 움직이는 슬라이드 갯수
        
    });
    

    // gallerySec
    $('#gallerySec button').on('click',function(){
        if ($(this).find('>span').width()==0) {
            $(this).find('>span').stop(true).animate({width:'100%'},duration,'easeOutQuad') 
        }else{
            $(this).find('> span').stop(true).animate({width:'0%'},duration,'easeOutQuad')
        }
        
        });

    // productSec
    $('#productSec .buttonSlide button')
        .each(function(index){
            var retrunIndex = (index+2) % 4;
            var buttonW = $(this).width();
            var positionY = retrunIndex*30;
            var positionX = (buttonW+13.5)*index;
            $(this).css('top', positionY)
                /*.css('left', positionX);*/
        })

    var $prev = $('#btnprev'),
        $next = $('#btnnext'),
        $banner = $('#productSec .buttonSlide');
    
    var $bannerBtn = $banner.find('button'),
        bannerLength = $bannerBtn.length,
        bannerW = $banner.width(),
        currentIndex = 0;

    function showImg(index){
        var left = -(index*(bannerW/bannerLength))
        $banner.animate({left:left},duration,'easeOutQuad');
    };

    $prev.click(function(){
        currentIndex--;
        if(currentIndex < 0) currentIndex = bannerLength-4;
        showImg(currentIndex);
    });
    
    $next.click(function(){
        currentIndex++;
        if(currentIndex+3 >= bannerLength) currentIndex = 0;
        showImg(currentIndex);
    });
    
    //mediaSec 왜 안되는지 좀 찾아보자
    var mediaTop = $('.videoWrap').offset().top;
//    console.log (mediaTop)
    var winH = $(window).height();
//    console.log(winH)
    $(window).scroll(function(){
        var winS = $(window).scrollTop();
//        console.log(winS)
        if(winS >= mediaTop-winH) {
            $('.drawingVid').attr('autoplay')
        }
    })
    
    //imageSec
    $('#imageSec p')
        .on('mouseover', function(){
            $(this).find('.imageText').stop(true).animate({left:0},duration,'easeOutQuad');
            $(this).find('.imageBlack').stop(true).animate({opacity:1},duration,'easeOutQuad');
            $(this).find('.imageimg').stop(true).animate({right:-20},duration,'easeOutQuad')
        })
        .on('mouseout', function(){
            $(this).find('.imageText').stop(true).animate({left:-210},duration,'easeOutQuad');
            $(this).find('.imageBlack').stop(true).animate({opacity:0},duration,'easeOutQuad');
            $(this).find('.imageimg').stop(true).animate({right:0},duration,'easeOutQuad')
        })
    $('#imageSec p').each(function(index){
        var ptop = $(this).offset().top;
        var winH = $(window).height();
//        console.log(ptop)
        $(window).scroll(function(){
            var winS = $(window).scrollTop();
//            console.log('스크롤바 탑 : '+winS)
            if(winS >= ptop-winH) {
                $('#imageSec p').find('.imageBox').eq(index).stop().animate({top:0},700);
            }
        })
    });
//    var ptop = $('#imageSec p').eq(0).offset().top;
//    var winH = $(window).height();
////  console.log(ptop)
//    $(window).scroll(function(){
//        var winS = $(window).scrollTop();
////        console.log('스크롤바 탑 : '+winS)
//        if(winS >= ptop-winH) {
//            $('#imageSec p').find('.imageBox').eq(0).stop().animate({top:0},700);
//        }
//    })
    
    
    // aside
    /*이미지를 사용했을 때*/
    /*var $aside = $('#main > aside'),
        $asideBtn = $aside.find('button').on('click', function(){
            $aside.toggleClass('open');

            if($aside.hasClass('open')){
                $asideBtn.find('img').attr('src','img/menu_close.png');
                $aside.stop(true).animate({left:-50},duration,'easeOutQuad');
            }else{
                $asideBtn.find('img').attr('src','img/menu_open.png');
                $aside.stop(true).animate({left:-300},duration,'easeOutQuad')
            }
        })*/
    var $aside = $('#main > aside');
    var $asideBtn = $('.asideBtn');
    $asideBtn.on('click',function(){
        $(this).toggleClass('open');
        
        if($asideBtn.hasClass('open')){
            $(this).find('p').text('CLOSE');
            $(this).find('p').removeClass('asideOpen');
            $(this).find('p').addClass('asideClose');
            $aside.stop(true).animate({left:-50},duration,'easeOutQuad');
        }else{
            $(this).find('p').text('MENU');
            $(this).find('p').removeClass('asideClose');
            $(this).find('p').addClass('asideOpen');
            $aside.stop(true).animate({left:-300},duration,'easeOutQuad')
        }
    })
    
    
    
    //nav
//    $('.main-nav>li').hover(
//        function(){
//            
//            $('.dropdown', this).slideDown();
//        },
//        function(){
//            
//            $('.dropdown', this).slideUp();
//        }
//    )
})