// Functions

// In functions, we are supposed to define the params and returns types
// never: never return anything
function sum1(x: number, y: number): number {
    return x + y;
}
// Other way
const sum2: (x: number, y:number) => number = (x, y) => x + y;

const result1 = sum1(1, 5);
const result2 = sum2(1, 5);


// Example of returning types

// void
function returnVoid(arg:any): void {
    console.log('This function returns void');
    return ;
}

// undefined (optionally fields can return undefined)
function createPerson(firstName: string, lastName?: string): {
    // return types
    firstName: string,
    lastName?: string
} {
    return {
        firstName,
        lastName
    }
};
// let person3 = createPerson('Leonardo', 'Estevão');
let person3 = createPerson('Leonardo'); //person3.lastname will be undefined
console.log(person3);

// never
function throwError(): never {
    throw new Error('Error on application');
}

export default 1;
