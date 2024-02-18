// Interface for geometric shapes
interface Shape {
    calculateArea(): number;
    calculatePerimeter(): number;
  }
  
  // Class representing a rectangle implementing the Shape interface
  class Rectangle implements Shape {
    constructor(private width: number, private height: number) {}
  
    calculateArea(): number {
      return this.width * this.height;
    }
  
    calculatePerimeter(): number {
      return 2 * (this.width + this.height);
    }
  }
  
  // Class representing a circle implementing the Shape interface
  class Circle implements Shape {
    constructor(private radius: number) {}
  
    calculateArea(): number {
      return Math.PI * this.radius ** 2;
    }
  
    calculatePerimeter(): number {
      return 2 * Math.PI * this.radius;
    }
  }
  
  // Create instances of Rectangle and Circle
  const rectangle = new Rectangle(5, 10);
  const circle = new Circle(7);
  
  console.log("Rectangle Area:", rectangle.calculateArea());
  console.log("Rectangle Perimeter:", rectangle.calculatePerimeter());
  
  console.log("Circle Area:", circle.calculateArea());
  console.log("Circle Perimeter:", circle.calculatePerimeter());
  export {};
