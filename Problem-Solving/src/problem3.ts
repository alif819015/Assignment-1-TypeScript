{
    class Cat {
    name: string;

    constructor(name: string){
        this.name = name;
    }
}

const isCat = (obj: any): obj is Cat => {
    return obj instanceof Cat;
}

const animal = new Cat('maw');

if(isCat(animal)){
    console.log("Yes, it's a cat.");
}else{
    console.log("No, it's not a cat.");
}


}