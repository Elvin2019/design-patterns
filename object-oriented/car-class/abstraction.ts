abstract class Car {
    brand: string;
    model: string;
    private year: number;

    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    // Abstract method: must be implemented by subclasses
    abstract startEngine(): void;

    isCarNew(): boolean {
        return this.year >= 2020
    }

    displayDetails(): void {
        console.log(`brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`);
    }
}

class ElectricCar extends Car {
    // Implement the abstract method specifically for an electric car
    startEngine(): void {
        console.log('Powering on the electric motor');
    }
}

class GasolineCar extends Car {
    // Implement the abstract method specifically for a gasoline car
    startEngine(): void {
        console.log('Starting the gasoline engine');
    }
}

//let car = new Car('Toyota', 'Camry', 2019); it is not possible to create an instance of the abstract class

let myElectricCar = new ElectricCar('Tesla', 'Model S', 2019);
myElectricCar.startEngine(); // Outputs: Powering on the electric motor
myElectricCar.displayDetails(); // Outputs: brand: Tesla, Model: Model S, Year: 2020
console.log(myElectricCar.isCarNew())

let myGasolineCar = new GasolineCar('Ford', 'Mustang', 2021);
myGasolineCar.startEngine(); // Outputs: Starting the gasoline engine
myGasolineCar.displayDetails(); // Outputs: brand: Ford, Model: Mustang, Year: 2021
console.log(myGasolineCar.isCarNew())

export {}