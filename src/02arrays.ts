// Arrays

let numberArray1: Array<number> = [1, 2, 3];
let numberArray2: number[] = [1, 2, 3];

let stringArray1: Array<string> = ['A', 'B', 'C'];
let stringArray2: string[] = ['A', 'B', 'C'];

let objectArray1: Array<object> = [{value1: 'value', value2:'value'}];
let objectArray2: object[] = [{value1: 'value', value2:'value'}]; //?


// Tuple is an array with fixed length
let myTuple: [number, string, string] = [0, 'Leonardo', 'Estevão'];
// Be careful! This way, array functions (like myTuple.pop()) can modify our arrays
myTuple[0] = 1;
// myTuple.pop(); Works (Should not)
// myTuple[1] = false; type ERROR
// myTuple[3] = 'anything'; length ERROR
console.log(myTuple)

// This way our tuple can't be modified (even its values)
let myTuple2: readonly [number, string, string] = [0, 'Leonardo', 'Estevão'];
// myTuple2[1] = 'Leandro'; readonly ERROR
// myTuple2.pop(); readonly ERROR
export default 1;
