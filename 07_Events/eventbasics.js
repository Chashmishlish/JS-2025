// Generate a random color 

const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for (let i = 0 ; i < 6 ; i++){
        color += hex[Math.floor(Math.random() * 16)]  //+= ; bcz continuously add krni hain values
    } 
    return color; 
}

let intervalId   //global scope me krenge declare isko takay clear interval per error na aye
const startChangingColor = function(){
    // intervalId = setInterval(changeBgcolor, 1000); //acceptable way
    if (!intervalId) {
    intervalId = setInterval(changeBgcolor, 1000);
}

    function changeBgcolor(){
        document.body.style.backgroundColor = randomColor();
    }
};
const stopChangingColor = function(){
    clearInterval(intervalId);
    intervalId = null //flush out krdea hai professional way hai ye, dereference krdea
}

document.querySelector('#start').
addEventListener('click', startChangingColor)

document.querySelector('#stop').
addEventListener('click', stopChangingColor)

