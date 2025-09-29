/* eslint-disable no-undef */
function handleMenu() {
  $('.c-header__hamburger').on('click', function () {
    $(this).toggleClass('active')
    if ($(this).hasClass('active')) {
      $('.c-header__menusp').addClass('c-header__menusp-active')
      $('html, body').css({ overflow: 'hidden', 'touch-action': 'none' })
    } else {
      $('.c-header__menusp').removeClass('c-header__menusp-active')
      $('html, body').css({ overflow: 'unset', 'touch-action': 'unset' })
    }
  })

  // ANCHOR LINK SCROLL
  $('.c-menu__text--anchor').click(function () {
    $('.c-menu__hamburger').removeClass('active')
    $('.c-menu__sp').removeClass('active')
    $('.c-header').removeClass('is-active')
    $('html, body').css({ overflowY: 'unset', 'touch-action': 'unset' })
  })
}

function scrollToTop() {
  const $backtotop = $('#s-backtotop')
  const $header = $('#s-header')
  const $groupBtn = $('.c-group__btns')

  $(window).on('load scroll', function () {
    const scrollTop = $(this).scrollTop()
    // const scrollHeight = $(document).height()
    // const clientHeight = $(this).height()
    // const isSP = $(this).width() <= 767
    // const nearBottom =
    //   scrollTop + clientHeight >= scrollHeight - (isSP ? 1100 : 871)

    // Back to Top button visibility
    // if (scrollTop > 300) {
    //   $backtotop.toggleClass('c-backToTop--fixed', nearBottom)
    // } else {
    //   $backtotop.addClass('c-backToTop--fixed')
    // }

    if (scrollTop > 100) {
      $header.addClass('c-header--view')
      $backtotop.fadeIn()
      $groupBtn.addClass('is-fixed')
    } else {
      $header.removeClass('c-header--view')
      $backtotop.fadeOut()
      $groupBtn.removeClass('is-fixed')
    }
  })

  $backtotop.click(function () {
    $('html, body').animate({ scrollTop: 0 }, 1200)
    return false
  })
}

function sliderSwiper() {
  new Swiper('.top-mainvisual__slider', {
    loop: true,
    speed: 2000,
    effect: 'fade',
    spaceBetween: 0,
    autoplay: {
      delay: 5000,
    },
  })
}

function run() {
  new universalParallax().init({
    speed: 8.0,
  })
  AOS.init({
    once: true,
  })
  handleMenu()
  scrollToTop()
  sliderSwiper()
}

$(function () {
  run()
})
