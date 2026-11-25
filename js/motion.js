(() => {
  const ticker = document.querySelector('.ticker');
  if (!ticker) return;

  const stopTicker = () => ticker.querySelectorAll('.ticker-track').forEach(track => {
    track.style.animationPlayState = 'paused';
  });
  const startTicker = () => ticker.querySelectorAll('.ticker-track').forEach(track => {
    track.style.animationPlayState = 'running';
  });

  ticker.addEventListener('mouseenter', stopTicker);
  ticker.addEventListener('mouseleave', startTicker);
  ticker.addEventListener('touchstart', stopTicker, { passive: true });
  ticker.addEventListener('touchend', startTicker, { passive: true });
})();
