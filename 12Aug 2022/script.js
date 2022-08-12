class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get fullName() {
        return this.name + " kumar";
    }
    getAge() {
        return this.age;
    }
}
let human = new Person("amit", 20);
console.log(human.fullName, human.age);