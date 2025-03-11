
function chooseColor(color) {
    const fortuneImage = document.getElementById("fortune-image");
    const numberButtons = document.getElementById("number-buttons");

   
    if (color === "green") {
        fortuneImage.src = "images/greenpft.gif"; 
    } else if (color === "blue") {
        fortuneImage.src = "images/bluepft.gif";
    } else if (color === "red") {
        fortuneImage.src = "images/redpft.gif";
    } else if (color === "yellow") {
        fortuneImage.src = "images/yellowpft.gif";
    }

 
   fortuneImage.style.display = "block";
   numberButtons.style.display = "none"; 

  
   fortuneImage.onload = function() {
       
       numberButtons.style.display = "block";
   };
}


function showFortune(number) {
   let fortuneMessage = "";

   
   if (number === 2) {
       fortuneMessage = "Your future is bright! Great things are coming your way.";
   } else if (number === 3) {
       fortuneMessage = "Beware of sudden changes. Stay alert and flexible.";
   } else if (number === 5) {
       fortuneMessage = "Today is a day for adventure! Step out of your comfort zone.";
   } else if (number === 8) {
       fortuneMessage = "Love and friendship are in the air. Embrace your relationships.";
   } else if (number === 1) {
       fortuneMessage = "Success is near. Keep pushing forward and stay focused.";
   } else if (number === 6) {
    fortuneMessage = "A period of growth is ahead. Use this time to learn and improve.";
   } else if (number === 9) {
    fortuneMessage = "Trust your instincts. The answers you seek are already within you.";
   } else if (number === 4) {
    fortuneMessage = "A pleasant surprise awaits you soon. Keep an open mind and heart.";
   }

   
   alert(fortuneMessage);
}

    
