// 布尔类型

let isTrue: boolean = true

let isFalse: boolean = false

// let isBoolean: boolean = 123

// 数字类型
let decLiteral: number = 20 // 十进制

let hexLiteral: number = 0x14 // 16进制

let binaryLiteral: number = 0b10100 // 二进制

let octalLiteral: number = 0o24 // 八进制

// 字符串类型

let nameStr : string = 'taro'

// 数组类型

let list : number[] = [1, 2, 3] // 数字类型数组， 数组内容必须是数字

//数组范性定义数组类型

let listArray: Array<number> = [1, 2, 3]

// 元祖

let x : [string, number] = ['Hello', 19] // 第一个元素为string  第二个参数为数字

// 枚举类型

enum Color{ // 枚举类型默认值从0开始
  Red = 1, 
  Green,
  Blue
}

let c: string = Color[2] // Green

// any类型
let number:any = 'str'
number = 1

// void 类型

// 没有返回值
function test(): void {
  console.log('test')
}

// null  类型

let nullTest: null = undefined

// undefined 类型

let  undefinedTest: undefined = null

// never 类型

// 返回错误信息

// object类型

let objectTest: object = {test: {number: 1}}

// 类型断言

// 强制转换数据类型

let someValue: any = 'string'

let strLength: number = (<string>someValue).length // any => string

let asStrLength: number = (someValue as string).length 