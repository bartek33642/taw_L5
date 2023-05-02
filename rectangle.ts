// Liczba zespolona
class ComplexNumber {
    constructor(public real: number, public imaginary: number) {}
  
    add(other: ComplexNumber): ComplexNumber {
      return new ComplexNumber(this.real + other.real, this.imaginary + other.imaginary);
    }
  
    subtract(other: ComplexNumber): ComplexNumber {
      return new ComplexNumber(this.real - other.real, this.imaginary - other.imaginary);
    }
  
    multiply(other: ComplexNumber): ComplexNumber {
      const real = this.real * other.real - this.imaginary * other.imaginary;
      const imaginary = this.real * other.imaginary + this.imaginary * other.real;
      return new ComplexNumber(real, imaginary);
    }
  
    toString(): string {
      return `${this.real} + ${this.imaginary}i`;
    }
  }
  
  // Punkt
  class Point {
    constructor(public x: number, public y: number) {}
  
    move(dx: number, dy: number): void {
      this.x += dx;
      this.y += dy;
    }
  }
  
  // Prostokąt
  class Rectangle {
    constructor(public topLeft: Point, public topRight: Point, public bottomLeft: Point, public bottomRight: Point) {}
  
    move(dx: number, dy: number): void {
      this.topLeft.move(dx, dy);
      this.topRight.move(dx, dy);
      this.bottomLeft.move(dx, dy);
      this.bottomRight.move(dx, dy);
    }
  
    getArea(): number {
      const width = this.topRight.x - this.topLeft.x;
      const height = this.bottomLeft.y - this.topLeft.y;
      return width * height;
    }
  }
  
  export { ComplexNumber, Point, Rectangle };
  