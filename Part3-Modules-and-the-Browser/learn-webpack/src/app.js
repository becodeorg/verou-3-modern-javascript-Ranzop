import component from './component';
import { DateTime } from "luxon";


const dt = DateTime.fromObject({day: 22, hour: 12}, {zone: 'America/Los_Angeles', numberingSystem: 'beng'});
console.log(dt);
document.body.appendChild(component());


// npm run from the src file!!!

