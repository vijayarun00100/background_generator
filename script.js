var css = document.querySelector("h3");
var button_ = document.getElementById("but");
var c1 = document.querySelector(".c1");
var c2 = document.querySelector(".c2");
var body = document.getElementById("whole");
var button =document.getElementById("but");
var ot = document.querySelector("h4");

function multi_gradient(){
    body.style.background = "linear-gradient(to right,"+c1.value+","+c2.value+")";
    css.textContent = body.style.background+";"; 
}
// c1.addEventListener("input",multi_gradient)

c2.addEventListener("input",multi_gradient);


function getRandomInt(max){
    return Math.floor(Math.random()*Math.floor(max));
}

function css_line(){
    ot.textContent=body.style.background+";" 
}
button.addEventListener("click",function(){
    var e ="#"
    var i =0;
    while(i<=5){
        let b = Math.floor(Math.random()*10);
        e+=b;
        i++;
    }
    console.log(e);
    let a = getRandomInt(256);
    let b = getRandomInt(256);
    let c = getRandomInt(256);
    var d = "rgb("+a+","+b+","+c+")";
    console.log(d)
    body.style.background="linear-gradient(to right,"+e+","+d+")";
    css_line();
});
