import aliveEntity from './aliveEntity.class.js'

let currentTime = 1;

export default class extends aliveEntity{
	constructor(obj){
		super();

		this.sprite = null;

		this.animSpeed = 50;

		this.currentTile = 1;

		if (typeof obj === 'object') {
			for (let prop in obj){
				if (this.hasOwnProperty(prop)) this[prop] = obj[prop]

			}
		}
	}

	render(ctx){
		if (this.sprite){ 
			
			this.sprite.drawTile(this.currentTile, ctx, this.position.x, this.position.y);

			if(!(currentTime%this.animSpeed)) this.currentTile++;

			if (this.currentTile>100) this.currentTile = 1;

			currentTime++;
		}
	}
}