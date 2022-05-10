import Personaje from "./Personaje.js";

class Saiyajin extends Personaje {
    constructor(nombre, img, poder, raza) {
        super(nombre, img, poder, raza)
    }
    Transformacion(){
        let poder = this.poder()
        this.poder( parseInt( poder * 1.8))
    }
}

class Humano extends Personaje {
    constructor(nombre, img, poder, raza) {
        super(nombre, img, poder, raza)
    }
    Coraje(){
        let power = this.poder
        this.poder = ( parseInt( power * 1.2))
    }
}
const test = new Humano('Goku', 'goku.jpg', 100, 'Saiyajin')
test.Coraje()
console.log(test.poder)

export { Saiyajin, Humano }