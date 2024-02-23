abstract class Car {
    private brand: string;
    private model: string;
    protected year: number; // Changed to protected to illustrate its use

    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    // Abstract method: must be implemented by subclasses
    abstract startEngine(): void;

    public isCarNew(): boolean {
        return this.year >= 2020;
    }

    public displayDetails(): void {
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`);
    }
}

class ElectricCar extends Car {
    // Implement the abstract method specifically for an electric car
    startEngine(): void {
        console.log('Powering on the electric motor');
    }

    // Example of using protected member from parent class
    public displayYearManufactured(): void {
        console.log(`Year Manufactured: ${this.year}`); // Accessible due to 'protected'
    }
}

class GasolineCar extends Car {
    // Implement the abstract method specifically for a gasoline car
    startEngine(): void {
        console.log('Starting the gasoline engine');
    }

    // Additional behavior utilizing the protected 'year' property
    public isVintage(): boolean {
        return this.year < 1990;
    }
}

// Usage
let myElectricCar = new ElectricCar('Tesla', 'Model S', 2019);
myElectricCar.startEngine(); // Outputs: Powering on the electric motor
myElectricCar.displayDetails(); // Outputs: Brand: Tesla, Model: Model S, Year: 2019
console.log(myElectricCar.isCarNew()); // Outputs: false
myElectricCar.displayYearManufactured(); // Demonstrates access to protected property

let myGasolineCar = new GasolineCar('Ford', 'Mustang', 2021);
myGasolineCar.startEngine(); // Outputs: Starting the gasoline engine
myGasolineCar.displayDetails(); // Outputs: Brand: Ford, Model: Mustang, Year: 2021
console.log(myGasolineCar.isCarNew()); // Outputs: true
console.log(myGasolineCar.isVintage()); // Demonstrates use of protected property in logic
