// integer 1
let p = 8;
let a = 5;
console.log(Math.sqrt( Math.sqrt( p**3 - a**3 + p**3 + a**3)))

// integer 2
 let s = 4;
 let f = 9;
 console.log(( 1/6 * Math.sqrt(s)+ 1/3* Math.sqrt(f))**2);
 
// integer 3
let g = 231;
let cto = Math.floor( g / 100);
let dest = Math.floor( (g  / 10) % 10);
let odn = ( g % 10);
let obshi = odn * 100 + dest* 10  + cto ;
console.log(obshi);

// // integer 4
let h =345;
let hundrd= Math.floor( h /100);
let ten= Math.floor( h / 10) % 10;
let one= h % 10;
let all = ten* 100  + hundrd * 10  + one  ;
console.log(all);

// // integer 5
let j = 4.5;
let k= 9.6;
let umumiy = 9 * j**2 * k - 27*j**2 * k**2 + 15*k**2;
console.log(umumiy.toFixed(2));

// // integer 6
let l = 3;
let z = 2;
let c = 4;
let b = 5;
 let misol= ( 1 + l/100)**z / Math.sqrt( c**2 + b**2 )
console.log(misol.toFixed(2));

// // integer 7
let x1= -3.9;
let y1= -8.2;
let x2= -1.3;
let y2= -2.9;
let xy=Math.sqrt(( x2-x1)**2 + (y2-y1)**2)
console.log(xy.toFixed(2));

// // integer 8 ------- ?



// // integer 9
let sin=-0.5;
console.log(Math.sin (sin));


// // integer 10
let cos= 0.5;
console.log(Math.cos(cos));


// // integer 11
let o= 23;
let onli= Math.floor((o % 100)/10);
let birli= Math.floor(o % 10);
let yigind = onli + birli;
let kopaytm = onli * birli;
console.log( yigind, kopaytm);



// // // integer 12
let n=12;
console.log(2 * Math.pow (  n+3,2));


// // // integer 13
let m=5;
console.log(Math.pow( (3+m) / 2 ,2));

// // integer 14
let d = 4;
let v = 2;
console.log(Math.pow(d,v) + Math.pow(6,v));

// // integer 15
let q = -45;
console.log(Math.abs(q));

// // integer 16
let w = 5.678;
console.log(Math.round(w * 100)/100);

// // integer 17
let e = 2;
let r = 3;
console.log(Math.pow(e,4) + 5* Math.pow(e,2) + Math.pow(e,3) * r );

// // integer 18
let t=2;
let y=3;
console.log(6 * Math.pow(t,3) * Math.pow(y,5) + 4 * Math.pow(t,4) * Math.pow(y,3) - 24 * t * y);

// // integer 19
let u= 241;
let yuz= Math.floor( u / 100);
let onlik= Math.floor( (u % 100) / 10);
let birlik=  u % 10;
let yigindi = yuz + onlik + birlik;
let kopaytma = yuz * onlik * birlik;
console.log( yigindi, kopaytma);

// // integer 20
let bir=1+ 2/3;
let ikki=3+ 1/4;
let i= bir - ikki;
console.log(Math.abs(i));
