document.getElementById("ola").innerHTML= "ola mundo"
document.getElementById("ola").style.backgroundColor = "blue"
const centrais = document.getElementsByClassName("centralizar")
centrais[0].style.textAlign = "center"
centrais[1].style.textAlign = "center"
for(var i = 0; i < centrais.length; i++){
    centrais[i].style.backgroundColor = "yellow"
}

const btn_aviso = document.querySelector('#btn-aviso')
btn_aviso.addEventListener('click', emiteAlert)
function emiteAlert(){
    alert("vc é gay")
}

const novo = document.createElement("img")
novo.src = "https://picsum.photos/id/237/200/300"
novo.style.border = "1px solid black"
novo.setAttribute('title','inserido')
document.querySelector("body").appendChild(novo)

let nome = prompt("qual o seu nome")
const nome_place = document.createElement("h1")
nome_place.innerHTML = nome
document.querySelector("body").appendChild(nome_place)