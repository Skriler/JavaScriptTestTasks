class Triangle {
    constructor(...sides) {
        if (sides.length != 3)
            throw "Triangle must contains 3 sides";

        if (sides[0] + sides[1] <= sides[2] ||
            sides[0] + sides[2] <= sides[1] ||
            sides[1] + sides[2] <= sides[0])
            throw "Triangle does not exist";

        this.sides = sides;
    }

    get area() {
        let s = (this.sides[0] + this.sides[1] + this.sides[2]) / 2;
        return Math.sqrt(s * ((s - this.sides[0]) * (s - this.sides[1]) * (s - this.sides[2])));
    }
}

try
{
    triangle = new Triangle(5.2, 4.1, 7.7);

    console.log(triangle);
    console.log("Area: " + triangle.area);

    triangle = new Triangle(1, 2, 3);
}
catch (e)
{
    console.error(e);
}