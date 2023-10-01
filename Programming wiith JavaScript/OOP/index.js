// Task 1: Code a Person class
class Person{
    constructor(name = "Tom", age = 20, energy = 100){
        this.name = name;
        this.age = age;
        this.energy = energy;
    }

    sleep(){
        this.energy += 10;
        console.log('energy is increase by:', this.energy)

    }
    doSomethingFun(){
        this.energy -= 10;
        console.log('energy is decrease by:', this.energy)
    }
}

// Task 2: Code a Worker class

class Worker extends Person{
    constructor(name, age, energy, xp = 0, hourlyWage = 10){
        super(name, age, energy);
        this.xp = xp;
        this.hourlyWage = hourlyWage;
    }

    goToWork(){
        this.xp += 10;
        console.log('xp value is increase by:', this.xp);
        console.log(intern);
    }
}

// Task 3: Code an intern object, run methods
function intern() {
    let intern = new Worker("bob", 21, 110, 0, 10);
    intern.goToWork();
    return intern;
}

// Task 4: Code a manager object, methods
function manager() {
    let manager = new Worker("Alice", 30, 120, 100, 30);
    manager.doSomethingFun();
    return manager;
}

console.log(intern());
console.log(manager());