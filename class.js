// ==========
//Class
//===========

class Car {
    constructor(brand, color) {
        this.brand = brand
        this.color = color
    }

    start() {
        console.log(`${this.brand} - ${this.color} started`)
    }

    stop() {
        console.log(`${this.brand} - ${this.color} stopped`)
    }
}

const bmw = new Car('bmw', 'black')
const tesla = new Car('Tesla', 'white')
console.log(bmw.stop())