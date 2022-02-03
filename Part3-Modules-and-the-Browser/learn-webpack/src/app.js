import component from './component';
import { DateTime } from "luxon";


const dt = DateTime.local(2020, 2, 27, 1, 30);
console.log(dt);

document.body.appendChild(component());


// npm run from the src file!!!

