class SmartDevice {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    charging() {
        console.log('I am eating electrons!');
    }
}

class Phone extends SmartDevice {
    constructor(name, price, camera) {
        super(name, price);
        this.camera = camera;
    }
    sendSms() {
        console.log('I am sending text to everyone!');
    }
}

class Watch extends SmartDevice {
    constructor(name, price, distance) {
        super(name, price);
        this.distance = distance;
    }
}

class Tablet extends SmartDevice {
    constructor(name, price, isWifi) {
        super(name, price);
        this.isWifi = isWifi;
    }
}

const samsung = new Phone('Samsung', 20000, '32PX')
console.log(samsung);
samsung.charging();
console.log(samsung.sendSms());

const ipad = new Tablet('Apple', 50000, true)
// ipad.sendSms();