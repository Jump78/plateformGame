import Entity from './entity.class.js'

export default class extends Entity{
	constructor(obj){
		super();

		this.maxLife = 100;
		this.currentLife = 100;

		this.maxMana = 100;
		this.currentMana = 100;

		this.dead = false;

		if (typeof obj === 'object') {
			for (let prop in obj){
				if (this.hasOwnProperty(prop)) this[prop] = obj[prop]
			}
		}
	}

	update(){
		if (this.isDead()) {
			if(this.isRenderable()) this.hidde();
			return
		}

	}

	isDead(){
		return this.dead;
	}

	kill(){
		this.dead = true;
	}
}