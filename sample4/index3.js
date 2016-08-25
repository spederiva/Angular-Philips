class Vehicle {


    constructor() {
        this.speed = 0;
    }

    go(speed) {
        this.speed = speed;
    }
}

class Car extends Vehicle {
    constructor() {
        super();

        this.doors = 4;
    }

    setDoors(doors) {
        this.doors = doors;
    }
}