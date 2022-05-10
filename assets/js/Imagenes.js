import Personajes from '../js/Consulta.js'

document.querySelector('#buttonImages').addEventListener('click', async () => {
    const { personajes } = await Personajes.getData()
    console.log(personajes)
    const pj = document.querySelector('#nombre').value
    const imagenesPjTemplate = personajes.find( p => p.name === pj )
    .imagenes.map(i => ` <img width="200px" src="/assets/imgs/${pj}/${i}" />`)
    .join('')


    document.querySelector('.personajes').innerHTML = imagenesPjTemplate
    document.querySelectorAll('.personajes img').forEach(i => {
        i.addEventListener('click', (e) => {
            $('#imagenesModal').modal('toggle')
            const imgSrc = e.target.src;
            console.log(imgSrc)
            document.querySelector('#preview').style.backgroundImage = `url(${imgSrc})`
        })
    })
}) 