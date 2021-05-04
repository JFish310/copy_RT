// $('.c-button').on('click',function(){          // クリックすると
//     $('c-button').toggleClass('close');       // closeというclassを追加/削除する
//     $('.p-gnavi__main').fadeToggle( 500 );    // 
//   });

// $('.c-button').on('click',function(){     // クリックすると
//   $('.c-button').toggleClass('close');    // closeというclassを付与(ボタンのアニメーション)
//   $('.p-gnavi').fadeToggle( 200 );  // .p-gnaviが0.5秒でフェードイン(メニューのフェードイン)
// });


$('.c-button').on('click',function(){     // クリックすると
  $('.c-button').toggleClass('close');    // closeというclassを付与(ボタンのアニメーション)
  $('.p-gnavi').slideToggle( 230 );  // .p-gnaviが0.5秒でフェードイン(メニューのフェードイン)
});

// $('.c-button').on('click',function(){     // クリックすると
//   $(this).toggleClass('close');    // closeというclassを付与(ボタンのアニメーション)
//   $('.p-gnavi').slideToggle( 230 );  // .p-gnaviが0.5秒でフェードイン(メニューのフェードイン)
// });

// $('.c-button').click(function(){     // クリックすると
//   $(this).toggleClass('close');    // closeというclassを付与(ボタンのアニメーション)
//   $('.p-gnavi').slideToggle( 230 );  // .p-gnaviが0.5秒でフェードイン(メニューのフェードイン)
// });



$('.c-button.close').on('click',function(){     // クリックすると
  $('.c-button.close').toggleClass('.c-button');    // closeというclassを付与(ボタンのアニメーション)
  $('.p-gnavi').fadeToggle( 200 );        // .p-gnavが0.5秒でフェードアウト(メニューのフェードアウト)
});


// $('.c-button').on('click', function(){
//   $('.p-gnavi').slideToggle('p-gnavi');
//   if ($(this).hasClass('.c-button.close')){
//     $(this).removeClass('.c-button.close');
//   }
//   else {
//   $(this).addClass('.c-button.close');
//   }
// });


// $('.ham-btn').click(function(){
//   $(this).toggleClass('active');
//   $('.h-nav').slideToggle(230);
// });  


// $('#ham').on('click', function(){
//   $('#navi').slideToggle('p-gnavi-ham');
//   if ($(this).hasClass('c-navi_toggle-close')){
//     $(this).removeClass('c-navi_toggle-close');
// } else {
//     $(this).addClass('c-navi_toggle-close');
// }
// });

$(function () {
  $('.p-gnavi__main-list').click( function () {

    $(this).children('.p-gnavi__sub').slideToggle();

    //openクラスをつける
    $(this).toggleClass("open");

    //ホバーされていないp-gnavi__main-listのopenクラスを取る
    $('.p-gnavi__main-list').not(this).removeClass('open');

    // 一つ開くと他は閉じるように
    $('.p-gnavi__main-list').not($(this)).children('.p-gnavi__sub').slideUp();
  });
});







// $(function () {
//   $('.p-gnavi__main').on('click', function () {
//     $(this).next().slideToggle();
//     //openクラスをつける
//     $(this).toggleClass("open");
//     //クリックされていないp-gnavi__mainのopenクラスを取る
//     $('.p-gnavi__main').not(this).removeClass('open');

//     // 一つ開くと他は閉じるように
//     $('.p-gnavi__main').not($(this)).next('.p-gnavi__sub').slideUp();
//   });
// });
