class Hero {
    constructor(name, power) {
        this.name = name;
        this.power = power;
    }
    getPower() {
        if (this.power) {
            return this.power;
        }
        return 'I have no power!';
    }
    goForGrocery(budget) {
        if (this.power && budget > 500) {
            console.log(this.getPower());
        }
        return 'Price is too high, I can not buy!';
    }
}

const batMan = new Hero('batman', 'flying');
console.log(batMan.power);
// console.log(batMan.getPower());
console.log(batMan.goForGrocery(1000));