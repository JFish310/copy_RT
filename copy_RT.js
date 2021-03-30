// $('.c-button').on('click',function(){          // クリックすると
//     $('c-button').toggleClass('close');       // closeというclassを追加/削除する
//     $('.p-gnavi__main').fadeToggle( 500 );    // 
//   });

$('.c-button').on('click',function(){     // クリックすると
  $('.c-button').toggleClass('close');    // closeというclassを付与(ボタンのアニメーション)
  $('.p-gnavi__main').fadeToggle( 500 );  // .p-gnavi__mainが0.5秒でフェードイン(メニューのフェードイン)
});

$('.c-button.close').on('click',function(){     // クリックすると
  $('.c-button.close').toggleClass('.c-button');    // closeというclassを付与(ボタンのアニメーション)
  $('.p-gnavi__main').fadeToggle( 500 );        // .p-gnavi__mainが0.5秒でフェードアウト(メニューのフェードアウト)
});

// $(function () {
//   $('p-gnavi__main').on('click', function() { // クリックすると
//     $( this ).next().slideToggle();
//   });
// });

$(function () {
  $('.p-gnavi__main').on('click', function () {
    $(this).next().slideToggle();
    //openクラスをつける
    $(this).toggleClass("open");
    //クリックされていないp-gnavi__mainのopenクラスを取る
    $('.p-gnavi__main').not(this).removeClass('open');

    // 一つ開くと他は閉じるように
    $('.p-gnavi__main').not($(this)).next('.p-gnavi__sub').slideUp();
  });
});