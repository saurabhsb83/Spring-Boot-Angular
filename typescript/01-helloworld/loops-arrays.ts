
let num: number[] = [5, 5.5, 4.9, 3.8, 1];

let names: string[] = ["andy", "david", "samantha", "stacy", "jamie"];

for(let i = 0; i < num.length; i++) {

    console.log(num[i]);
}


//Arrays are growable
names.push("stephanie");
names.push("drake");


for (let tname of names) {

    if(tname == "samantha") {
        console.log("Hiiii " +tname);
    }
    else {
    console.log("Name is: " +tname);
    }
}