$('.c-btn').on('click',function(){          // クリックすると
    $('.c-btn').toggleClass('close');       // closeというclassを追加/削除する
    $('.nav-wrapper').fadeToggle( 500 );    // 
  });