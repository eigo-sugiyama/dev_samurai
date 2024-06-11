$(function () {
  // id属性がfadeOutの要素がクリックされたら
  $('#fadeOut').on('click', function() {
    // フェードアウトする
    $('.box').fadeOut();
    // $('.box').fadeOut(3000, function(){
    //   alert('fadeOut完了');
    // });
  });

  // id属性がfadeInの要素がクリックされたら
  $('#fadeIn').on('click', function() {
    // フェードインする
    $('.box').fadeIn();
  });
});