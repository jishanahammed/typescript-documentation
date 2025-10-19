//variable declare
let usename = "jishan ahammed";
let age = 40;
console.log(usename);
console.log(age);



function multiply(a: number, b: number) {
    return (a * b);
}
console.log(multiply(200, 4));

//array

let fruites = ['apple', 'banana', 'orange']
fruites.push("mango", 'jekfrute');
console.log(fruites);


//mixed array
let mixed = [];
mixed.push('apple', 40, true);
console.log(mixed);

//object
let person = {
    name: "mashrafi",
    age: 40,
    iscaptin: true
}
person.name = "Jishan Ahammed"
console.log(person);
let c: object;
c = {
    s: "ji", f: 90, d: true
}

//variable declare

let Name: string = "jishan";
let Age: number = 40;
let IsActive: boolean = false;
console.log(Name, Age, IsActive);
Name = "Ashik"; Age = 50; IsActive = true;
console.log(Name, Age, IsActive);

//array declare
let nameList: string[] = [];
nameList.push("jishan", 'abc');
let mixedarray: (string | number | boolean)[] = [];
mixedarray.push("jishan", 60, true);
mixedarray.push(50, 0)
console.log(mixedarray);


// Dynamic Type

// let Dynamictype;
let Dynamictype: any;
Dynamictype = 3;
Dynamictype = "Daynamic"

let DaynamicArray: any[] = [];
DaynamicArray.push("", 0, true);

let DaynamicObject: object;
DaynamicObject = {
    a: "", b: 23, c: true
}

//function 

const myfunc = (a: string, b: string, c?: string) => {
    console.log(a, b);
}
myfunc("Redoy", "Rozi");