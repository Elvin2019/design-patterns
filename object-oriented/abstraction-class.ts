// Abstract class for geometric shapes
abstract class Shape {
    abstract calculateArea(): number;
    abstract calculatePerimeter(): number;
  }
  
  // Concrete class representing a rectangle extending the Shape abstract class
  class Rectangle extends Shape {
    constructor(private width: number, private height: number) {
      super();
    }
  
    calculateArea(): number {
      return this.width * this.height;
    }
  
    calculatePerimeter(): number {
      return 2 * (this.width + this.height);
    }
  }
  
  // Concrete class representing a circle extending the Shape abstract class
  class Circle extends Shape {
    constructor(private radius: number) {
      super();
    }
  
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
