class Animal{
    name;
    weight;
    constructor(name,weight) {
        this.name = name;
        this.weight = weight;
    }
    getName(){
        return this.name;
    }
    setName(name){
        this.name = name;
    }
    getWeight(){
        return this.weight;
    }
    setWeight(weight){
        this.weight = weight;
    }
    toString(){
        return `Tên: ${this.name}, cân nặng: ${this.weight}`;
    }
}

let objAnimal1  = new Animal();
objAnimal1.setName("Elephant");
objAnimal1.setWeight(45.6);
console.log(objAnimal1.toString());

let objAnimal2  = new Animal("Bird", 10);
objAnimal2.setName("Mouse");
console.log(objAnimal2);