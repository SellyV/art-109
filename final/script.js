
  
document.addEventListener("DOMContentLoaded", () => {
    const clickSound = new Audio("audio/click-sound.mp3");
  

    const openModalBtn = document.querySelector('.open-modal-btn');
    const closeModalBtn = document.getElementById('closeModal');
    const submitNameBtn = document.getElementById('submitName');
    const nameModal = document.getElementById('nameModal');
    const nameInput = document.getElementById('slugName');
    const result = document.getElementById('nameResult');
  
    if (openModalBtn) {
      openModalBtn.addEventListener('click', function () {
        nameModal.style.display = 'block';
        clickSound.currentTime = 0;
        clickSound.play();
      });
    }
  
    if (closeModalBtn) {
      closeModalBtn.addEventListener('click', function () {
        nameModal.style.display = 'none';
        clickSound.currentTime = 0;
        clickSound.play();
      });
    }
  
    if (submitNameBtn) {
      submitNameBtn.addEventListener('click', function () {
        const name = nameInput.value;
  
        if (name.trim() === "") {
          result.textContent = "Please enter a name!";
          result.style.color = "red";
        } else {
          result.textContent = `Awesome! Your banana slug's name is "${name}"! 🍌🐌`;
          result.style.color = "green";
        }
  
        clickSound.currentTime = 0;
        clickSound.play();
      });
    }
  
   
    const cabinLinks = document.querySelectorAll(".cabinLink");
    cabinLinks.forEach(link => {
      link.addEventListener("click", (event) => {
        event.preventDefault(); 
  
        clickSound.currentTime = 0;
        clickSound.play();
  
 
        clickSound.onended = () => {
          window.location.href = link.href;
        };
      });
    });
  });
  