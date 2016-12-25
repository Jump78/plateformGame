import Entity from './entity.class.js'

export default class extends Entity{
	constructor(obj){
		super();

		this.sprite = null;

		this.tiles = [];

		this.scale = 1;

		if (typeof obj === 'object') {
			for (let prop in obj){
				if (this.hasOwnProperty(prop)) this[prop] = obj[prop]
			}
		}
	}

	render(ctx){
		if (this.sprite && this.tiles.length>0) {

			let a = this.tiles;
			let sprite = this.sprite;
			let coord = this.position;

			for (let i = 0; i < a.length; i++) {
				let tileSize = sprite.getTileSize();
				sprite.drawTile(a[i],ctx,coord.x+(((tileSize.width-sprite.marge)*i)*this.scale),coord.y,this.scale);
			}
		}
	}

}