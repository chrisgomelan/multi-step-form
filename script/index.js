
let card2 = document.querySelector('.card2');
let card3 = document.querySelector('.card3');
let card1 = document.querySelector('.card1');
let card;
let oblong = document.querySelector('.oblong');
let circ = document.querySelector('.circle');
let yearly = document.querySelector('.yearly');
let monthly = document.querySelector('.monthly');
// card.forEach(card => card.addEventListener("click", function(){
//     this.classList.toggle('active')
   
// }))
card1.addEventListener('click',function(){
    this.classList.toggle('active');
    card2.classList.remove('active');
    card3.classList.remove('active');
    card = 1;
   
})

card2.addEventListener('click',function(){
    this.classList.toggle('active');
    card1.classList.remove('active');
    card3.classList.remove('active');
   
    
})
card3.addEventListener('click',function(){
    this.classList.toggle('active');
    card2.classList.remove('active');
    card1.classList.remove('active');
   
})


oblong.addEventListener('click',function(){
    this.classList.toggle('active');
    circ.classList.toggle('active');
    yearly.classList.toggle('active');
    monthly.classList.toggle('active');
    card1.classList.toggle('style');
    card2.classList.toggle('style');
    card3.classList.toggle('style');
    
})
