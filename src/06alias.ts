type Pets  = {
    id: string;
    name: string;
    birth: Date;

}
type Animals = {
    breed: string;
    gender: Gender;
}
type Gender = 'Male' | 'Female';

type Pet = Pets & Animals;

const pet1: Pet = {
    id: '0300-01',
    name: 'Bob',
    birth: new Date(),
    breed: 'American Bull',
    gender: "Male"
}

export default 1;
