let ism = prompt("ismingiz");
let fam = prompt("familyangiz");
let yosh = prompt("yoshingiz");

let upperset = new Set();
let userMap = new Map();

userMap.set("ism", ism);
userMap.set("familya", fam);
userMap.set("yosh", yosh);

function kattaHarf(text) {
    let katta = text.toUpperCase();
    upperset.add(katta);
    return katta;
}

let kattaIsm = kattaHarf(ism);
let kattaFam = kattaHarf(fam);
let kattaYosh = kattaHarf(yosh);
     
console.log(kattaIsm, kattaFam, kattaYosh);