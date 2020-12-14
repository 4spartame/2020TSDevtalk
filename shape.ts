class Shape{
  constructor() { }
  public draw(): void { }
}

class Circle extends Shape {
  constructor() {
    super();
  }

  public draw(): void {}
  public roll(): void {}
}

class Rectangle extends Shape {
  constructor() {
    super();
  }

  public draw(): void {}
  public stackUp(): void {}
}


enum ShapeType {
  CIRCLE,
  RACTANGLE
}

class ShapeFactory {
  public static getShape<T>(shapeType: ShapeType): Shape {
    switch(shapeType) {
      case ShapeType.CIRCLE: 
        return new Circle();
      case ShapeType.RACTANGLE: 
        return new Rectangle();
    }
  }
}

const myShape = ShapeFactory.getShape(ShapeType.CIRCLE);
(myShape as Circle).draw();
(myShape as Circle).roll();