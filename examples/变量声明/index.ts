// var 声明
function fun(type) {
  if(type) {
    var x = 10
  }
  return x
}

console.log(fun(true)) // 10
console.log(fun(false)) // undefined

// let 声明

// const 

// 数组解构

let [value1, value2] = [1,2]
console.log(value1, value2)

let [first, ...rest] = [1, 2, 3]
console.log(first, rest)

// 对象解构