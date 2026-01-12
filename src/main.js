const redEl = document.getElementById('redbtn');
const yellowEl = document.getElementById('yellowbtn');
const greenEl = document.getElementById('greenbtn');
const blueEl = document.getElementById('bluebtn');
const orangeEl = document.getElementById('orangebtn');
const randomEl = document.getElementById('randombtn');
const togglebEl = document.getElementById('togglebtn');
const backgroundbEl = document.getElementById('background');


redEl.addEventListener('click',()=>{
  backgroundbEl.style.backgroundColor="red";

})

yellowEl.addEventListener('click',()=>{
  backgroundbEl.style.backgroundColor="yellow";

})
greenEl.addEventListener('click',()=>{
  backgroundbEl.style.backgroundColor="green";

})
blueEl.addEventListener('click',()=>{
  backgroundbEl.style.backgroundColor="blue";

})
orangeEl.addEventListener('click',()=>{
  backgroundbEl.style.backgroundColor="orange";

})

let randomcolor =()=>{

  let colorcodes = '0123456789ABCDEF';
  let code = '#';
  for (let i=0;i<6;i++){
    code += colorcodes[Math.floor(Math.random()*16)]
  }
 backgroundbEl.style.backgroundColor=code;
}
randomEl.addEventListener('click',randomcolor);

togglebEl.addEventListener('click',()=>{
  document.body.classList.toggle("dark-mode");
})

console.log(redEl,yellowEl,greenEl,blueEl,orangeEl,randomEl,togglebEl);