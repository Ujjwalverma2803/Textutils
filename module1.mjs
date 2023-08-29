// we are importing a , b , c , d from module2 ; we write inside curly braces what is not importing by defalt

import dz, {a,b,d} from './module2.mjs'
console.log(dz);
console.log(a);
console.log(b);
console.log(d);