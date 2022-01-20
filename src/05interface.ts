interface Pets {
    id: string;
    name: string;
    birth: Date;
}
interface Animals {
    breed: string;
}
interface Gender {
    gender: 'Male' | 'Female'
}

interface Pet extends Pets, Animals, Gender {
    newAttribute?: string
}

const pet1: Pet = {
    id: '0300-01',
    name: 'Bob',
    birth: new Date(),
    breed: 'American Bull',
    gender: 'Male',
    newAttribute: 'I can add new attributes'
}


export default 1;

