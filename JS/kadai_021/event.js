const txtValue = document.getElementById('text');

window.addEventListener('click', () => {

  // 2秒（2000ミリ秒）の待ち時間を設定し、非同期処理を実行する
  setTimeout(() => {
    txtValue.innerHTML = 'ボタンをクリックしました'
  }, 2000);

});