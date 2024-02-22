// Define a class named 'Car'
class Car {
    // Properties or attributes
    brand: string;
    model: string;
    year: number;

    // Constructor method to initialize new objects
    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    // Method to display information about the car
    displayDetails(): void {
        console.log(`This car is a ${this.year} ${this.brand} ${this.model}.`);
    }
}

// Create an instance (object) of the Car class based on the given parameters
let myCar = new Car('Hyundai', 'Elantra', 2014);

// Use the object's method
myCar.displayDetails();

export {}