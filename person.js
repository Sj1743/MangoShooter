class Person {

    constructor(x, y){
        var options = {
            isStatic: true,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }

        this.body = Bodies.rectangle(x, y, 100, 300, options);
        this.widh = 100;
        this.height = 300;
        this.image = loadImage("boy.png");
    }

    display(){
        push()
        translate(this.body.position.x, this.body.position.y);
        rotate(-10);
        imageMode(CENTER);
        image(this.image, 0, 0, 100, 300);
        pop();
    }
}