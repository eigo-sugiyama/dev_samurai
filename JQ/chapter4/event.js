$(function() {
  $(document).on('click keydown', (e) => {
    //コンソールにイベント種類を出力
    // console.log('Event type:', e.type);

    // クリックされた場合
    if(e.type === 'click'){
      $('div').text('クリックされました！');
    }
    // キーが押された場合
    if(e.type === 'keydown'){
      $('div').text('キーが押されました！');
    }
  });
});