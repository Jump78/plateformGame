import config from './config';
import canvas from './canvas';

let message = `Application "${config.name} (${config.status})" version ${config.version} ready and running`;
console.log( message );
console.log(canvas);