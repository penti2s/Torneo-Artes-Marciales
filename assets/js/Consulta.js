let personajes = ( () =>{
    const url_personajes = 'dbz.json';
    const getData = async () => {
        const res = await fetch(url_personajes);
        const data = res.json();
        console.log(data);
        return data
    } 
    return {getData}
} )() 

export default personajes;