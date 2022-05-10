import { Saiyajin, Humano } from "./clases/Raza.js"; 

let participantes = []

document.querySelector('#btnRegistrar').addEventListener('click', async () =>{

    let nombre = document.querySelector('#nombre').value
    let raza = document.querySelector('#raza').value
    let previewElement = document.querySelector('#preview')
    let img = previewElement.style.backgroundImage;
    let imgSrc = img.slice(4, -1).replace(/"/g, "")
    let ki = document.querySelector('#poderPelea').value 

    let nuevoParticipante;
    if(raza === 'Saiyajin'){
        nuevoParticipante = new Saiyajin(nombre, imgSrc, ki, raza)
    }else{
        nuevoParticipante = new Humano(nombre, imgSrc, ki, raza)
    }
    participantes.push(nuevoParticipante)
    reloadTable()
})

const reloadTable = () => {
    const participantesTemplate = document.querySelector('#Participantes')
    participantesTemplate.innerHTML = ''
    console.log(participantes)
    participantes.forEach((p,i) => {
        participantesTemplate.innerHTML += `
        <div class='px-3 pb-2 participante' data-fighter='${p.nombre}'>
        <div class="card" style="width: 18rem;">
        <img src="${p.img}" class="card-img-top" height='300px' alt="...">
        <div class="card-body">
          <h5 class="card-title">${p.nombre}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Raza : ${p.raza}</li>
          <li class="list-group-item">Poder : ${p.poder}</li>
          <li class="list-group-item">i = ${i}</li>
        </ul>
      </div>`
      console.log(p.img)
    })
}