



var swiper = new Swiper(".mySwiper", {

    // direction: "vertical",
    // slidesPerView: "auto",
    // freeMode: true,
    // scrollbar: {
    //     el: ".swiper-scrollbar",
    // },
    // mousewheel: true,
    // autoplay: {
    //     delay: 4000,
    //     disableOnInteraction: false,
    // },
    speed: 5000,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


var lideScroll = document.querySelectorAll(".swiper-slide");
var slImg = document.querySelectorAll(".slImg");




var oldScrollTopPosition = 0;
if (lideScroll) {
    lideScroll.forEach(function(item, index){
        item.addEventListener('scroll', function(e){
            // console.log("las")
            const scrollTopPosition = item.scrollTop;
            var el = 100;

            if (oldScrollTopPosition > scrollTopPosition) {
                console.log("da")
                console.log(scrollTopPosition)
                slImg.forEach(function(img, i){
                    img.style.transform = "scale(1."+ -(-scrollTopPosition) +")";
                })
            } else {
                console.log("net")
                slImg.forEach(function(img, i){
                    img.style.transform = "scale(1."+ (100+scrollTopPosition) +")";
                })
            }
            oldScrollTopPosition = scrollTopPosition;


            // console.log(scrollTopPosition+" - 1")
            // console.log(oldScrollTopPosition+" - 2")
        });
    });
}
