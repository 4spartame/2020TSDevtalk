class Shape<T>{
  constructor() { }
  public draw(): void { }
}

interface Position2D {
  x: number;
  y: number;
}

class Circle extends Shape<Position2D> {
  constructor() {
    super();
  }

  public draw(): void {}
  public roll(): void {}
}

class Rectangle extends Shape<Position2D> {
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
  public static getShape(shapeType: ShapeType): Shape<Position2D> {
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