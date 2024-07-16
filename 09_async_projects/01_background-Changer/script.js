// RANDOM BACKGROUND COLOR GENERATOR

const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'

    for(let i=0; i<6; i++)
    {
        color += hex[Math.floor(Math.random()*16)]
    }
    return color;
}

// console.log(randomColor())

const startBtn = document.querySelector('#start')
const stopBtn = document.querySelector('#stop')
const body = document.querySelector('body')

let changeBgColor;

const changeBackground = function(){
    body.style.backgroundColor = randomColor();
}

startBtn.addEventListener('click', ()=>{
    changeBgColor = setInterval(changeBackground, 2000);
})

stopBtn.addEventListener('click', ()=>{
    clearInterval(changeBgColor)
    console.log('Background Color Changing Stopped !')
})