// Type notations on typescript

// Basics types on typescript

let myName: string = 'Leonardo';
let myAge: number = 25; // can receive number with formats: int, decimal, hexadecimal, negative
let isBlocked: boolean = false; //true or false
let symbol: symbol = Symbol('any-symbol');
// let myBigNumber: bigint = 10n; //Only work in ES2020, but it's not our ECMAscript target (es5)
let any: any = ''; // Anything. Not recommended to use
let unknown: unknown = ''; // Unknown. Safer than 'any', because typescript will only allow you use it if you do a type check

// union type
let unionType: string | boolean; // Let you have more than 1 type options

export default 1;
