$(function () {
  theaMsForm($('.sign-in'));

  var mySwiper = new Swiper ('.swiper-container', {
    // 分页器
    pagination : '.swiper-pagination',
  });

  /*
  clickEle: 鼠标点击或者移入的元素，
  aimEle: 目标元素，
  className: 类名，
  */
  function tabHandle(clickEle, aimEle, className) {
    $(clickEle).each(function (index) {
      $(this).click(function () {
        $(this).addClass(className).siblings().removeClass(className);
        $($(aimEle)[index]).addClass(className).siblings().removeClass(className);
      });
    });
  }

  // 解读
  tabHandle('.jd .tab-head li', '.jd .jd-item', 'cur');
  // 联考
  tabHandle('.gct-cont li', null, 'cur');

  /*
  closeEle: 关闭按钮，
  aimEle: 目标元素，
  mask: 遮罩层
  */
  function closeHandle(closeEle, aimEle, mask) {
    $(closeEle).click(function () {
      $(mask).hide();
      $(this).parent(aimEle).hide();
    });
  }

  // 预约试听弹窗
  closeHandle('.appoint-popup .close', '.appoint-popup', '.mask');

  // 显示 预约试听弹窗
  $('.appoint-popup-btn').click(function () {
    $('.mask').show();
    $('.appoint-popup').show();
  });
});