import canvas from './canvas';

let ctx = canvas.getCtx();

let scene = []; 

export default{
	addScene(arg){
		arg.id = scene.length+1;
		scene.push(arg)
	},

	deleteScene(id){
		scene.slice(id,1);
	},

	getScene(){
		return scene;
	},

	render(){
		ctx.clearRect(0,0,canvas.getWidth(), canvas.getHeight());

		for (var i = 0; i < scene.length; i++) {
			if(scene[i].render && scene[i].isRenderable()) scene[i].render(ctx);
		};
	},

	update(){
		for (var i = 0; i < scene.length; i++) {
			if(scene[i].update) scene[i].update();
			if(!scene[i].isRenderable()) deleteScene(i);
		};
	}
}