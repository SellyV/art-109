
const clickSound = new Audio("audio/click-sound.mp3");

function playClickSound() {
  clickSound.currentTime = 0;
  clickSound.play();
}

document.querySelector('.open-modal-btn').addEventListener('click', function () {
  document.getElementById('nameModal').style.display = 'block';
  playClickSound();
});

document.getElementById('closeModal').addEventListener('click', function () {
  document.getElementById('nameModal').style.display = 'none';
  playClickSound();
});

document.getElementById('submitName').addEventListener('click', function () {
  const name = document.getElementById('slugName').value;
  const result = document.getElementById('nameResult');

  if (name.trim() === "") {
    result.textContent = "Enter your goodbye!";
    result.style.color = "red";
  } else {
    result.textContent = `Thank you for your nice words: "${name}"`;
    result.style.color = "green";
  }

  playClickSound();
});

const openExitModal = document.getElementById("openExitModal");
const exitModal = document.getElementById("exitModal");
const closeExit = document.querySelector(".close-exit");
const cancelExit = document.getElementById("cancelExit");

openExitModal.onclick = () => {
  exitModal.style.display = "block";
  playClickSound();
};

closeExit.onclick = () => {
  exitModal.style.display = "none";
  playClickSound();
};

cancelExit.onclick = () => {
  exitModal.style.display = "none";
  playClickSound();
};

window.onclick = (e) => {
  if (e.target === exitModal) {
    exitModal.style.display = "none";
    playClickSound();
  }
};
