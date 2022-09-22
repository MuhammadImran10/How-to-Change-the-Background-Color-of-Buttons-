function getColor(){

    const randomColor=Math.floor(Math.random()*16777215);
    const randoCode="#"+randomColor.toString(16);

    document.body.style.backgroundColor=randoCode;
    document.getElementById("color-code").innerText=randomCode;
}

document.getElementById("btn").addEventListener(
    "click",
    getColor
    )