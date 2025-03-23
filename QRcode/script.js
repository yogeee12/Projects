const imgBox = document.querySelector('#imgBox');
let qrImg = document.querySelector("#qrImg");
const input = document.querySelector("#inputText");
const btn = document.querySelector("button");

function generateQR(){
    qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input.value ;
}

btn.addEventListener('click', ()=>{
    if(input.value === ''){
        alert("Please Enter some Text or URL fisrt!");
    }
    else{
        imgBox.classList.add("show-img");
        generateQR();
    }
});

