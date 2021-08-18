class BouncyBall{
	constructor(x,y,radius) {

		var options = {
			restution : 0.3,
			density : 1,
			friction : 5
		}

		this.x = x;
		this.y = y;
		this.radius = radius;

		this.body = Bodies.circle (this.x,this.y,(this.r-20)/2,options);
		World.add(world,this.body);
	}

	display(){

		ellipse(0,0,this.r,this.r)
	}
}