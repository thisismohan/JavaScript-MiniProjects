let btn=document.querySelector('button')
let ccode=document.getElementById('ccode')
let container=document.getElementById('container')
let hex=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
btn.addEventListener('click',changeColor)
function changeColor(){
    var clr='#'
    for(let i=0;i<6;i++){
        clr+=ranColor()
    }
    ccode.innerHTML=clr
    container.style.backgroundColor=clr
}

function ranColor(){
    let ranIndex=Math.floor(Math.random()*16)
    return hex[ranIndex]
}