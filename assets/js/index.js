import { Saiyajin, Humano } from "./clases/Raza.js"; 

let participantes = []

document.querySelector('#btnRegistrar').addEventListener('click', async () =>{

    let nombre = document.querySelector('#nombre').value
    let raza = document.querySelector('#raza').value
    let previewElement = document.querySelector('#preview')
    let img = previewElement.style.backgroundImage;
    let imgSrc = img.slice(5, img.lenght - 2)
    let ki = document.querySelector('#poderPelea').value


    let nuevoParticipante;
    if(raza === 'Saiyajin'){
        nuevoParticipante = new Saiyajin(nombre, imgSrc, ki, raza)
    }else{
        nuevoParticipante = new Humano(nombre, imgSrc, ki, raza)
    }

    participantes.push(nuevoParticipante)
    console.log(participantes)
})