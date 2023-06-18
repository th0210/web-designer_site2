//スワイパー
const swiper = new Swiper(".swiper", {
    // ページネーションが必要なら追加
 pagination: {
   el: ".swiper-pagination",
   clickable: true

 },
 // ナビボタンが必要なら追加
 navigation: {
   nextEl: ".swiper-button-next",
   prevEl: ".swiper-button-prev"
 },
 
 loop: true,
});

//トップへ戻るボタン表示・非表示
jQuery(window).on("scroll", function() {
  // トップから100px以上スクロールしたら
  if (150 < jQuery(this).scrollTop()) {
    // is-showクラスをつける
 jQuery('.to-top').addClass( 'is-show' );
  } else {
    // 100pxを下回ったらis-showクラスを削除
  jQuery('.to-top').removeClass( 'is-show' );
  }
});

//ヘッダーとドロワーアイコンをスクロールで変形
jQuery(window).on("scroll", function() {
  // トップから100px以上スクロールしたら
  if (100 < jQuery(this).scrollTop()) {
    // is-showクラスをつける
 jQuery('header, .header__wrapper').addClass( 'is-scroll' );
 jQuery('.drawer__icon').addClass( 'is-scroll' );
  } else {
    // 100pxを下回ったらis-showクラスを削除
  jQuery('header, .header__wrapper').removeClass( 'is-scroll' );
  jQuery('.drawer__icon').removeClass( 'is-scroll' );  
  }
});
 

//スクロール移動
jQuery('a[href^="#"]').on('click', function() {
  //クリックしたもののid="#〇〇"を取得　
    var id = jQuery(this).attr('href');
  //ページの一番上からの距離をpositionとして0としておく
    var position = 0;
  //id="#〇〇"が#だけじゃない時はその距離を取得、#だけの時は元々0なので0扱いになる
    if (id != '#') {
        position = jQuery(id).offset().top;
    };

    jQuery('html, body').animate ({
        scrollTop: position
    }, 300);

});

//ドロワーメニュー表示
$('.drawer__icon').on('click', function() {
  $('body').toggleClass('none-scroll');
    $('.drawer').toggleClass('is-open');  
    $('.drawer__icon__bar1').toggleClass('is-open');
    $('.drawer__icon__bar2').toggleClass('is-open');
    $('.drawer__icon__bar3').toggleClass('is-open'); 
});