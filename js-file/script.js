// themebtn
const themeBtn=document.getElementById("theme-btn");
themeBtn.addEventListener("click",function(){
    const body=document.getElementById("body");
    const randomNumber=Math.floor(Math.random()*65535)
    const randomCode=randomNumber.toString(16);
    const randomColor=`#${randomCode}`;
    body.classList.add(`bg-[${randomColor}]`)
})