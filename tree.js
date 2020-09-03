class Tree {

    constructor(x, y){
    var options = {
        isStatic: true,
        restitution: 0.3,
        friction: 0.5,
        density: 1.2
    }

    this.body = Bodies.rectangle(x, y, 400, 600, options);
    this.width = 400;
    this.height = 600;
    this.image = loadImage("tree.png");
}

display(){
    push()
    translate(this.body.position.x, this.body.position.y);
    rotate(this.body.angle);
    imageMode(CENTER);
    image(this.image, 0, 0, 400, 600);
    pop();
}
}