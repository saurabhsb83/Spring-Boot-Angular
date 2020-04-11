var num = [5, 5.5, 4.9, 3.8, 1];
var names = ["andy", "david", "samantha", "stacy", "jamie"];
for (var i = 0; i < num.length; i++) {
    console.log(num[i]);
}
//Arrays are growable
names.push("stephanie");
names.push("drake");
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var tname = names_1[_i];
    if (tname == "samantha") {
        console.log("Hiiii " + tname);
    }
    else {
        console.log("Name is: " + tname);
    }
}
