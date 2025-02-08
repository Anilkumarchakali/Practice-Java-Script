// Functions:
// 1. without parameters and without return:
  function add() {
    let a = 10;
    let b = 20;
    console.log(a+b);
  }
  add();
// 2. without parameters and with return:
     function mul() {
        var a = 15;
        var b = 2;
        return a * b;
     }
     let res = mul();
     console.log(res);
// 3. with parameters and without return:
  function sub(x, y) {
    console.log(x-y);
  }
  sub(100,50);
// 4. with parameters and with return:
function div(x, y) {
    
    return x/y;
}
let d_res = div(14, 2);
console.log(d_res);