class PenDrive {
    constructor(capacity, color, price) {
        this.capacity = capacity;
        this.color = color;
        this.price = price;
    }
}

const ignite = new PenDrive('32GB', 'white', 1500);
console.log(ignite);

const oakwood = new PenDrive('8GB', 'black');
console.log(oakwood);


// Function based class for create object
function Human(name, age) {
    this.name = name;
    this.age = age;
}
const male = new Human('Sami', 26);
console.log(male);

// class is a template and purpose: make similar type object