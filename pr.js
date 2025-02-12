const colorGen= function(){
    const rand="0123456789ABCDEF";
    let color='#';
    for(let i=0;i<6;i++){
        color+=rand[Math.floor(Math.random()*16)];
    }
    return color;
}
let interval;
const startChangecolor=function(){
    const change=function(){
        document.body.style.backgroundColor= colorGen();
    }
    if(!interval){
        interval=setInterval(change,1);
    }
    
    
}
const stopChangecolor=function(){
    clearInterval(interval);
    interval=null;
}
document.querySelector('#start').addEventListener('click',startChangecolor);
document.querySelector('#stop').addEventListener('click',stopChangecolor);
