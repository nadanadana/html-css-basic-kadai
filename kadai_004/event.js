// HTMLドキュメント読み込み完了
$(window).on('load', () => {
  console.log('loadイベントが発生しました');
});

$(function() {
// 画面をスクロールしたとき
$(window).on('scroll', function() {
  console.log('scrollイベントが発生しました');
});
});
