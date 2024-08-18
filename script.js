const text = document.querySelector(".title");
const strText = text.textContent;
const splitText = strText.split("");
console.log(splitText);
text.textContent="";

for (let i=0; i <splitText.length; i++){
    text.innerHTML += "<span class='startAnimation'>" + splitText[i] + "</span>"
}

let char = 0;
let timer = setInterval(onTick, 150);

function onTick(){
    const span = text.querySelectorAll("span")[char];
    span.classList.add("fade");
    char++;
    if (char === splitText.length){
complete();
return;

    }
}

function complete(){
    clearInterval(timer);
    timer = null;
}

const hero = document.querySelector(".hero");

const keyframes1 = [{height:"0%"}, {height:"100%"}];
const keyframes2 = [{width: "40%"}, {width: "100%"} ];

hero.animate(keyframes1, {
    duration: 1000,
    easing: "ease-in-out",
    direction: "normal",
    iterations: 1,

})

hero.animate(keyframes2, {
    duration: 1500,
    easing: "ease-in-out",
    direction: "normal",
    iterations: 1,

})
let section = [document.querySelector(".sectiona"),document.querySelector(".sectionb"),document.querySelector(".sectionc"), document.querySelector(".sectiond")];
var screenPosition = window.innerHeight /2;

function scrollAppear(){
for (i=0; i<section.length; i++){
  let introPosition = section[i].getBoundingClientRect().top;
  if(introPosition < screenPosition){
    section[i].classList.add("section-appear")
  }
}};
window.addEventListener("scroll", scrollAppear);
