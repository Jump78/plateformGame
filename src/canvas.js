console.log('canvas open');

let canvas = document.getElementById('game');
let ctx = canvas.getContext('2d');

let width = Math.floor(0.8 * window.innerWidth);
let height = Math.floor(0.9 * window.innerHeight);

canvas.style.width = width+ "px";
canvas.style.height = height + "px";

canvas.style.margin = ((window.innerHeight/2)-(height/2)) + "px 0px 0px " + ((window.innerWidth/2)-(width/2)) +"px";

document.body.appendChild(canvas);

console.log('canvas ready');

export default {
	getWidth(){return width},
	getHeight(){return height},
	getCtx(){return ctx}
}
