const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click', () => {
  // クリックされてから2秒後に実行される
  setTimeout(() => {
    text.textContent = 'クリックしました！';
  }, 2000);
});