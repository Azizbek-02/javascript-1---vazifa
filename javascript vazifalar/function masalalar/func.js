function calculaxteTax(elemen) {
    let result = elemen * 10;
    return result;
}
let tax = calculaxteTax(25);
console.log(tax);
// -----------------------

// ----------------------------

function hisob(mans) {
    let dar = mans * 176;
    return dar;
}
let ban = hisob(324);
console.log(ban);
//  -----------------------

// ----------------------------
function target(hisob) {
    let jaas = hisob + 300;
    return jaas;
}
let bane = target(2093);
console.log(bane);
//  -----------------------

// ----------------------------
function bolish(teng) {
    let jami = teng / 15;
    return jami;
}
let obshi = bolish(225);
console.log(obshi);
//   ----------------------

// ----------------------------
function ayirish(phone) {
    let ayirma = phone - 192;
    return ayirma;
}
let hammasi = ayirish(1865)
console.log(hammasi);
// -----------------------------

// ----------------------------
function water(suv) {
    let gapr = suv + 572 / 3 - 86 * 2;
    return gapr
}
let yigindi = water(100);
console.log(yigindi);
//  --------------------------

// ----------------------------
function kvadrat(k) {
    return k * k;
}
console.log(kvadrat(15));
// ---------------------------

// ----------------------------
function foiz(q) {
    return q + q / 5;
}
console.log(foiz(160));
// ----------------------------

// ----------------------------
function salo(w) {
    return w / (w / 2);
}
console.log(salo(50));
// ----------------------------

// ----------------------------
let son = 5;
let daraja = 3;
function power(a, b) {
    let javob = 1;
    for (i = 0; i < b; i++) {
        javob *= a;
    }
    return javob;
}
console.log('javob: ' + power(son, daraja));
// ----------------------------

// ----------------------------
let one = 6;
let darasa = 3;
function pover( a, b){
    let javob = 1;
    for(i = 0; i < b; i++){
        javob *= a;  
    }
    return javob;
}
console.log('javob: ' + power( one, darasa));
// ----------------------------

// ----------------------------
let two = 11;
let kvadrt= 2;
function powerOne( h, n){
    let javob = 1;
    for(i = 0; i < n; i++){
        javob *= h;
    }
    return javob;
}
console.log('javobimiz: ' + powerOne( two, kvadrt));
// ----------------------------

// ----------------------------
let sanoq = 0;
function timeout(){
    setTimeout( function(){
        console.log( 'hello '+ sanoq++);
        timeout();
    },1500)
}
timeout();
// --------------------------------------------

// --------------------------------------------
let count = 0;
function timet(){
    setTimeout(function(){ 
        console.log('hi '+ count++);
        timet();
    },1000)
}
timet();