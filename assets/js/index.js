import { Saiyajin, Humano } from "./clases/Raza.js"; 

let participantes = []

document.querySelector('#btnRegistrar').addEventListener('click', async () =>{

    let nombre = document.querySelector('#nombre').value
    let raza = document.querySelector('#raza').value
    let previewElement = document.querySelector('#preview')
    let img = previewElement.style.backgroundImage;
    let imgSrc = img.slice(4, -1).replace(/"/g, "")
    let ki = document.querySelector('#poderPelea')

    
    let nuevoParticipante;
    if(raza === 'Saiyajin'){
        nuevoParticipante = new Saiyajin(nombre, imgSrc, ki.value, raza)
    }else{
        nuevoParticipante = new Humano(nombre, imgSrc, ki.value, raza)
    }
    if(raza && nombre && imgSrc && ki){
        participantes.push(nuevoParticipante)
        limpiarForm(previewElement,ki)
        reloadTable()
    }else{
        alert('Faltan datos')
    }
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
          <button type="button" onclick='activarHabilidad(${i})' class="btn btn-warning">Activar Habilidad</button>
          <li class="list-group-item">i = ${i}</li>
        </ul>
      </div>`
      console.log(p.img)
    })
}

window.activarHabilidad = (i) => {
    const participante = participantes[i]
    if(participante.raza === 'Saiyajin'){
        participante.Transformacion()
    }else if(participante.raza === 'Humano'){
        participante.Coraje()
    }
    reloadTable()
} 

const limpiarForm = (previewElement, ki) => {
    nombre.selectedIndex = 0
    raza.selectedIndex = 0
    ki.value = ""
    previewElement.style.backgroundImage = 'none'
    previewElement.style.backgroundColor = '#f0f0f0'
}

document.getElementById('btnMasFuerte').addEventListener('click', () => {
    const masFuerte = participantes.sort((a,b) => b.poder - a.poder)[0]
    const nombre = masFuerte.nombre
    console.log(nombre)
    document.querySelector(`[data-fighter='${nombre}'] div`).style.boxShadow = '0 0 5px 1px yellow'

})