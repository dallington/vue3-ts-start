import { generateComponent, generateLayout, generateStore } from './generators/index.mjs';


export default function (plop) {
  generateStore(plop);
  generateLayout(plop);
  generateComponent(plop);
}
