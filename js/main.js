'use strict';
// Nav open/close button
$('#nav-btn').click(function(e){
    let navOffSet = $(".nav-menu").offset().left;
    let navMenuWidth = $(".nav-menu").innerWidth();
    if(navOffSet == 0){
        $('.nav-menu').animate({left: `-${navMenuWidth}px`});
        $('#nav-btn').animate({left: 0});
    } else {
        $('.nav-menu').animate({left: 0});
        $('#nav-btn').animate({left: `${navMenuWidth}px`});
    }
})
// nav close button
$('#close-nav-btn').click(function(e){
    let navOffSet = $(".nav-menu").offset().left;
    let navMenuWidth = $(".nav-menu").innerWidth();
    if(navOffSet == 0){
        $('.nav-menu').animate({left: `-${navMenuWidth}px`});
        $('#nav-btn').animate({left: 0});
    }
})


//details-buttons

$(".active").parent().siblings().children(".singer-details").slideToggle(700);
$(".click").click(function(e){
     
  $(this).siblings().slideToggle(700);
  $(this).parent().siblings().children(".singer-details").slideUp(700);
  
           
})


// event time

function countDown(){
    let date = new Date().getTime();
    let eventDate = new Date('December 17, 2022 20:00:00').getTime();
    let timeLeft = eventDate - date

    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

     document.getElementById("days").innerHTML = `${days}  d `
     document.getElementById("hours").innerHTML = `${hours}  h ` 
     document.getElementById("minutes").innerHTML = `${minutes}  m ` 
     document.getElementById("seconds").innerHTML = `${seconds}  s`

    setTimeout(countDown, 1000);
}
countDown();


// character remaining
let charLeft = document.getElementById("char-count");
let message = document.getElementById("message");

message.addEventListener("keyup",function(){
    let characters = Array.from(message.value)
    
    
    let charRemaining = 100 - characters.length
    
        charLeft.innerHTML = `${charRemaining}`
  
})

