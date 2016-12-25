export default class{
	constructor(obj){
		this.name = 'entity';

		this.position = {
			x:0,
			y:0
		};

		this.velocity = {
			x:0,
			y:0
		},

		this.renderable = true;

		if (typeof obj === 'object') {
			for (let prop in obj){
				if (this.hasOwnProperty(prop)) this[prop] = obj[prop]
			}
		}
	}

	hidde(){
		this.renderable = false;
	}

	show(){
		this.renderable = true;
	}

	isRenderable(){
		return this.renderable;
	}
}