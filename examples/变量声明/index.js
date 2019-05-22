// var 声明
function fun(type) {
    if (type) {
        var x = 10;
    }
    return x;
}
console.log(fun(true)); // 10
console.log(fun(false)); // undefined
// let 声明
// const 
// 对象解构
var _a = [1, 2], value1 = _a[0], value2 = _a[1];
console.log(value1, value2);
var _b = [1, 2, 3], first = _b[0], rest = _b.slice(1);
console.log(first, rest);
