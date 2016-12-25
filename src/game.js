import scene from './scene';
import Tileset from './tileset.class.js'
import Plateform from './Plateform.class.js'

let tilesprite = new Tileset('asset/images/tileset/tilesheet_world.png',72,72,2);

let isPaused = false;

for (var i = 0; i < 5; i++) {
	
	let plateform = new Plateform({
		sprite : tilesprite,
		tiles : [15,3,146],
		position : {x:25*i,y: 25*i},
		scale : Math.random()
	})
	
	scene.addScene(plateform);
}

function gameloop(){
	if (!isPaused) {
		scene.render();
		scene.update()
	}

	requestAnimationFrame(gameloop); 
}

window.onkeydown = function() {
    isPaused = !isPaused;
};

export default {
	start(){
		requestAnimationFrame(gameloop); 
	},

	getIsPaused(){ 
		return isPaused;
	},
}