"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = exports.Point = exports.ComplexNumber = void 0;
// Liczba zespolona
class ComplexNumber {
    constructor(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }
    add(other) {
        return new ComplexNumber(this.real + other.real, this.imaginary + other.imaginary);
    }
    subtract(other) {
        return new ComplexNumber(this.real - other.real, this.imaginary - other.imaginary);
    }
    multiply(other) {
        const real = this.real * other.real - this.imaginary * other.imaginary;
        const imaginary = this.real * other.imaginary + this.imaginary * other.real;
        return new ComplexNumber(real, imaginary);
    }
    toString() {
        return `${this.real} + ${this.imaginary}i`;
    }
}
exports.ComplexNumber = ComplexNumber;
// Punkt
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    move(dx, dy) {
        this.x += dx;
        this.y += dy;
    }
}
exports.Point = Point;
// Prostokąt
class Rectangle {
    constructor(topLeft, topRight, bottomLeft, bottomRight) {
        this.topLeft = topLeft;
        this.topRight = topRight;
        this.bottomLeft = bottomLeft;
        this.bottomRight = bottomRight;
    }
    move(dx, dy) {
        this.topLeft.move(dx, dy);
        this.topRight.move(dx, dy);
        this.bottomLeft.move(dx, dy);
        this.bottomRight.move(dx, dy);
    }
    getArea() {
        const width = this.topRight.x - this.topLeft.x;
        const height = this.bottomLeft.y - this.topLeft.y;
        return width * height;
    }
}
exports.Rectangle = Rectangle;
