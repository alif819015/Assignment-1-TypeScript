{
interface Address {
    city : string;
    street : string;
}

interface Person {
    address? : Address;
    phone? : string;
}

const getAddressCity = (person:Person) : string | undefined => {
return person.address?.city;
}

const person1: Person ={
    address: {
        city: 'Bangladesh',
        street: 'Kushtia',
    },
    phone: '+88016614444',
};
const person2 : Person = {
    phone: '+88016612244',
}

console.log(getAddressCity(person1));
console.log(getAddressCity(person2));








}