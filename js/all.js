$(document).ready(function () {
    // lightbox初始
    new SimpleLightbox('.slick-container a', { /* options */ });

    // 輪播效果初始
    $('.slick-container').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    //   將作品區塊裡面，奇數的row裡面的col-8和col-4排序顛倒(注意，第一個row的index為0，故取奇數而非偶數)
    $('.works .row:odd').find('.col-8').addClass('order-2');

    // 星星隨機排列: 用append的方式把.star加進去.stars裡，產生隨機亂數以修改各個.star的CSS
    // for (let i = 1; i < 30; i++) {
    //     const randomLeft = Math.floor((Math.random() * 19) + 1) * 5 - 20; //隨機產生-15~75的數
    //     const randomTop = Math.floor((Math.random() * 25) + 1) * 5 - 20; //隨機產生-15~105的數
    //     const randomTime = Math.floor((Math.random() * 10) + 5); //隨機產生5~15的數
    //     const randomDelay = Math.floor((Math.random() * 5)); //隨機產生0~4的數
    //     $('.stars').append('<img class="star position-absolute" src="images/img_star.svg">');
    //     $('.stars .star:nth-child(' + i + ')').css({
    //         "left": randomLeft + "vw", //修改CSS的left為未知vw
    //         "top": randomTop + "vh", //修改CSS的top為未知vh
    //         "animation-duration": randomTime + "s", //修改CSS的animation-duration為未知秒
    //         "animation-delay": randomDelay + "s" //修改CSS的animation-delay為未知秒
    //     })
    // }

    // 返回頂部按鈕
    $('.top-button, .navbar-brand').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 0)
    })

    // 點擊.scroll-line和.go-works按鈕，下滑到.works位置
    $('.scroll-line, .go-works').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#works").offset().top
        }, 0)
    })

    // 點擊.go-about按鈕，下滑到.about位置
    $('.go-about').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 0)
    })

    // 漢堡包MENU按鈕動畫
    $('.navbar-toggler').click(function () {
        // hamburger background
        $('.navbar-container').toggleClass('bg-primary-90 vh-100');
        // hamburger list
        $('nav .navbar-toggler .hamburger-line:nth-child(1)').toggleClass('rotate-45 bg-light');
        $('nav .navbar-toggler .hamburger-line:nth-child(2)').toggleClass('rotate-315 bg-light');
        // logo hide
        $('nav .navbar-brand').toggleClass('opacity-0');
        // 如果點擊ul內的元素則等同於又點擊了一次漢堡包MENU按鈕，以關閉MENU
        $('nav ul.navbar-nav').click(function () {
            $('.navbar-toggler').click();
        })
    })
});