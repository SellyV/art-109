
// console.log("hello");

// let pageTitle = document.querySelector("#page-title");

// // javascript timeout changes h1 title after 3 secs
// setTimeout(function(){pageTitle.style.color = "pink";
// }  ,  3000)

// //Click event on header changes background color
// document.querySelector("header").onclick = function() {
//     //console.log("clicked header");
//     document.querySelector("body").style.backgroundColor = "black";
// }

document.querySelector("#spongebob-meme").addEventListener("click", function() {
    document.querySelector("#spongebob-meme2").style.visibility = "visible";
    //document.querySelector("#spongebob-meme").style.display = "none"; ---> when you want it to completely be removed from the page
    alert("bark bark bark");
})

document.querySelector("#spongebob-meme2").addEventListener("click", function() {
    document.querySelector("#spongebob-meme3").style.visibility = "visible";
})

document.querySelector("#spongebob-meme3").addEventListener("click", function() {
    document.querySelector("#spongebob-meme4").style.visibility = "visible";
})

document.querySelector("#spongebob-meme4").addEventListener("click", function() {
    document.querySelector("#spongebob-meme").style.visibility = "visible";
})


