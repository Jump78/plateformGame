import config from './config';
import Game from './game';

let message = `Application "${config.name} (${config.status})" version ${config.version} ready and running`;
console.log( message );

Game.start();