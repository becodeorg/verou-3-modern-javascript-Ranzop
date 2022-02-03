import component from './component';
import { DateTime } from "luxon";
import createElement from "../../../modules/createElement.js";
import anime from 'animejs/lib/anime.es.js';




const dt = DateTime.fromObject({day: 22, hour: 12}, {zone: 'America/Los_Angeles', numberingSystem: 'beng'});
console.log(dt);
document.body.appendChild(component());

const x = document.createElement("div");
document.body.appendChild(x);

x.innerText = "yoyoyo"

anime({
    targets: 'div',
    translateX: 250,
    rotate: '1turn',
    backgroundColor: '#FFF',
    duration: 800
  });


/* var V1 = Vector.create([3,4,5]);
var V2 = Vector.create([9,-3,0]);

var d = V1.dot(V2);
console.log (d);
// d is 15

var c = V1.cross(V2);
console.log (c); */
// c is the vector (15,45,-45)

// npm run from the src file!!!

