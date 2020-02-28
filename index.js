const pi = Math.PI;

class Circle{
    constructor(radius){
        this.radius = radius;
    }
    get diameter(){
        return this.radius * 2;
    }
    set diameter(diameter){
        this.radius = diameter / 2;
    }
    get circumference(){
        return this.diameter * pi;
    }
    set circumference(circumference){
        this.radius = (circumference / pi) / 2;
    }
    get area(){
        return this.radius * this.radius * pi;
    }
    set area(area){
        this.radius = area / this.radius;
    }
}