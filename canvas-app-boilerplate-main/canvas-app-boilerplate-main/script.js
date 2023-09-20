/* Iteration 4: Make Everything Work */
const background=document.getElementById('background');
const backgroundwonder=document.getElementById('backgroundwonder')
const hair=document.getElementById('hair');
const armor=document.getElementById('armour');
const eyes=document.getElementById('eyes');
const body=document.getElementById('body');
const costume=document.getElementById('costume');
const hairbg=document.getElementById('hairbg');
const armorbg=document.getElementById('armourbg');
const eyesbg=document.getElementById('eyesbg');
const bodybg=document.getElementById('bodybg');
const costumebg=document.getElementById('costumebg');
const star=document.getElementById('star');
const starbg=document.getElementById('starbg')

backgroundwonder.oninput=()=>{
    background.style.fill=backgroundwonder.value;
};
hairbg.oninput=()=>{
    hair.style.fill = hairbg.value;
};
armorbg.oninput=()=>{
    armor.style.fill=armorbg.value;
};
eyesbg.oninput=()=>{
    eyes.style.fill=eyesbg.value;
};
bodybg.oninput=()=>{
    body.style.fill=bodybg.value;
};
costumebg.oninput=()=>{
    costume.style.fill=costumebg.value;
};
starbg.oninput=()=>{
    star.style.fill=starbg.value;
}

