// console.log('olá mundo')
// VARIÁVEIS

// types primitives string, number, boolean
let on: boolean;
let name: string = 'Alef';
let age: number = 22;


// types specials null and undefined
let empty: null;
let  unknown: undefined;

// types abrangentes any and void 
let others: any;
let fn: void;

// type object - without predictability
let obj: object = { name: 'Alef', age: 22 };

// type object - with predictability
type IUser = { 
  name: string,
  age: number
}
let user: IUser = { name: 'Alef', age: 22 };

// type array 
let list : Array<number> = [1, 2, 3, 4, 5];
let listNames: string[] = ['Alef1', 'Alef2', 'Alef3'];

// type array - with multi-types
let listNames2: Array<string | number> = ['Alef1', 1, 'Alef2', 2, 'Alef3', 3];

// type tuple
let tuple: [number, string] = [1, 'Alef'];