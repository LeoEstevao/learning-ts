// Recommended ways to create an object

// ? = Optional field
// unknown/any = any type
let person2: {
    name: string;
    birth: Date;
    weight: number;
    // Optional field
    age?: number;
    // This make possible to add new fields that we haven't declared, with any types of value
    [key: string]: unknown;
}= {
    name: 'Leonardo',
    birth: new Date('1995-06-13'),
    weight: 72
};

person2.age = 25;
person2.nickname = 'a';
// Objects

// Not recommended ways to create an object in typescript:
let person: { name: string, birth: Date, weight: number } = {
    name: 'Leonardo',
    birth: new Date('1995-06-13'),
    weight: 72
};
// person.age = 25; ERROR
// Its not possible to add a new property outside of the 'constructor' of an object


// var varName: Record<objKey, objValue> ={}
let person1: Record<string, unknown> = {
    name: 'Leonardo',
    birth: new Date('1995-06-13'),
    weight: 72
};
person1.name = 20; //It works (SHOULD NOT)
person1.age = 19;
// It's possible to add new properties, but we lost the typings rules of our object

console.log(person)
console.log(person1)
console.log(person2)

export default 1;
