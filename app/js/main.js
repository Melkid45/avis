if (document.querySelectorAll(".portfolio__body-que-block .item")) {
    document.querySelectorAll(".portfolio__body-que-block .item").forEach((el) => {
        el.addEventListener('click', () => {
            let cont = el.querySelector('.portfolio__body-que-block .item .bot');
            let con = cont.parentNode;
            if (cont.style.maxHeight) {
                document.querySelectorAll('.portfolio__body-que-block .item .bot').forEach((el) => el.style.maxHeight = null)
                document.querySelectorAll('.portfolio__body-que-block .item').forEach((el) => el.classList.remove('open'))
            } else {
                document.querySelectorAll('.portfolio__body-que-block .item .bot').forEach((el) => el.style.maxHeight = null)
                document.querySelectorAll('.portfolio__body-que-block .item').forEach((el) => el.classList.remove('open'))
                con.classList.add('open')
                cont.style.maxHeight = cont.scrollHeight + 'px';
            }
        })
    })
}

$('.call-btn').on('click', function (e) {
    $('.call').fadeIn(1000)
    $('body').addClass('hidden')
})
$('.call__close').on('click', function (e) {
    $('.call').fadeOut(1000)
    $('body').removeClass('hidden')
})



$('.burger').on('click', function(e){
    $(this).toggleClass('open')
    $('.header__body-mob').toggleClass('open')
    $('.header').toggleClass('open')
})




if (document.querySelector('.about__body-how-splide')) {
    var splide = new Splide('.about__body-how-splide', {
        type: 'loop',

    });

    splide.mount();
}


if (document.querySelector('.works__body-splide')) {
    var splide = new Splide('.works__body-splide', {
        type: 'loop',
        
    });

    splide.mount();
}
if (document.querySelector('.portfolio__body-main-splide')) {
    var splide = new Splide('.portfolio__body-main-splide', {
        type: 'loop',
        pagination: false,
        
    });

    splide.mount();
}
if (document.querySelector('.portfolio__body-product-splide')) {
    var splide = new Splide('.portfolio__body-product-splide', {
        type: 'loop',
        pagination: false,
        
    });

    splide.mount();
}


