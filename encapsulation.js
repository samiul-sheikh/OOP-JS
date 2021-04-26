class Tiger {
    #speed = 100;
    location = 'Sundarban';
    constructor(name) {
        this.name = name;
        this.#speed = 120;
    }
    run() {
        console.log(`I am ${this.name}. I I am running at ${this.#speed}mph. I live in ${this.location}`)
    }
}

const royal = new Tiger('Royal Bengal Tiger');
// console.log(royal.#speed);
// royal.name = 'Strongest Bengal';
royal.location = 'Rangpur';
royal.run();