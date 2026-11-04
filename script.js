// Libera o áudio automaticamente após o primeiro toque/clique na tela
const bgMusic = document.getElementById('bg-music');
document.addEventListener('click', () => {
  if (bgMusic.paused) {
    bgMusic.play().catch(() => {});
  }
}, { once: true });

// Abrir e fechar a tela do Pix
const pixHotspot = document.getElementById('open-pix-modal');
const pixModal = document.getElementById('pix-modal');
const closeModal = document.getElementById('close-modal');
const copyBtn = document.getElementById('copy-btn');
const pixKey = document.getElementById('pix-key').innerText;
const copyMsg = document.getElementById('copy-msg');

pixHotspot.addEventListener('click', (e) => {
  e.stopPropagation();
  pixModal.style.display = 'flex';
});

closeModal.addEventListener('click', () => {
  pixModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === pixModal) {
    pixModal.style.display = 'none';
  }
});

// Copiar chave Pix
copyBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(pixKey).then(() => {
    copyMsg.style.display = 'block';
    setTimeout(() => {
      copyMsg.style.display = 'none';
    }, 2500);
  });
});

// Animação de clique com a imagem png.png
document.addEventListener('click', (e) => {
  const img = document.createElement('img');
  img.src = 'png.png';
  img.classList.add('click-effect');
  
  img.style.left = `${e.pageX}px`;
  img.style.top = `${e.pageY}px`;

  document.body.appendChild(img);

  setTimeout(() => {
    img.remove();
  }, 600);
});