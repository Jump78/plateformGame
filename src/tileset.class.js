export default class{
	constructor(uri,tileWidth,tileHeight,marge){

		this.marge  = marge || 0;

	    this.image = new Image();

	    this.image.tile = this;

	    this.image.src = uri;

	    this.tileSize = {
	    	width : tileWidth,
	    	height : tileHeight
	    }

	    this.nbTile = {
	    	width : this.image.width / tileWidth,
	 		height : this.image.height / tileHeight
	 	};

    }

	drawTile(tileId, ctx, x, y, scale){

	    if (scale) scale = scale;
	    else scale = 1;

		let tileX = tileId % this.nbTile.width;
		if (tileX == 0) tileX = this.nbTile.width;

		let tileY = Math.ceil(tileId / this.nbTile.width);

		let xSource = (tileX - 1) * this.tileSize.width;
	
		let ySource = (tileY - 1) * this.tileSize.height;

		ctx.drawImage(this.image, xSource, ySource, this.tileSize.width, this.tileSize.height, x, y, 
					  Math.round(this.tileSize.width*scale), Math.round(this.tileSize.height*scale));
	}

	getTileSize(){
		return this.tileSize;
	}
}