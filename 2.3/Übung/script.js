//2.
let person = {
    name: "Ben",
    age: 16,
    beruf: "Schüler",
};

//3.
for (let i = 0; i < Object.keys(person).length; i++) {
    console.log(Object.keys(person)[i]);
}

//4.
for (let i = 0; i < Object.values(person).length; i++) {
    console.log(Object.values(person)[i]);
}

//5.
let person2 ={
    beruf: "Lehrer"
}

//6.
person2["Lebensstatus"] = "verheiratet";

for (let i = 0; i < Object.keys(person2).length; i++) {
    console.log(Object.keys(person2)[i] + ": " + Object.values(person2)[i]);
}