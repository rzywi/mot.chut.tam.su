let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

const heartEmojis = ['💗', '💞', '💖', '💘', '💗', '💞'];

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

document.addEventListener('click', () => {
  for (let i = 0; i < 6; i++) {
    createHeart(mouseX, mouseY, heartEmojis[i]);
  }
});

function createHeart(x, y, emoji) {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.textContent = emoji;

  heart.style.left = x + 'px';
  heart.style.top = y + 'px';

  let angle = Math.random() * Math.PI * 2;
  let speed = 0.2 + Math.random() * 0.3;
  let vx = Math.cos(angle) * speed;
  let vy = Math.sin(angle) * speed;

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.style.opacity = 0;
    setTimeout(() => heart.remove(), 1000);
  }, 100);

  function animate() {
    x += vx;
    y += vy;
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
    if (document.body.contains(heart)) {
      requestAnimationFrame(animate);
    }
  }

  animate();
}