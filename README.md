# 学习typescript

## 基础类型

### 布尔类型

```typescript
let isTrue: boolean = true

let isFalse: boolean = false

let isBoolean: boolean = 123 // 报错 Type '123' is not assignable to type 'boolean'.
```

### 数字类型

```typescript
let decLiteral: number = 20 // 十进制

let hexLiteral: number = 0x14 // 16进制

let binaryLiteral: number = 0b10100 // 二进制

let octalLiteral: number = 0o24 // 八进制

```

### 字符串类型

```typescript
let nameStr : string = 'taro'
```

### 数组类型

```typescript
let list : number[] = [1, 2, 3] // 数字类型数组， 数组内容必须是数字
```

数组范性定义数组类型

```typescript
let listArray: Array<number> = [1, 2, 3]
```

### 元祖类型

```typescript
let x : [string, number] = ['Hello', 19] // 第一个元素为string  第二个参数为数字
```

### 枚举类型

```typescript
enum Color{ // 枚举类型默认值从0开始
  Red = 1, 
  Green,
  Blue
}

let c: string = Color[2] // Green
```

### any类型
```typescript
let number:any = 'str'
number = 1
```

### void 类型
```typescript
// 没有返回值
function test(): void {
  console.log('test')
}
```

### null  类型
```typescript
let nullTest: null = undefined
```

### undefined 类型
```typescript
let  undefinedTest: undefined = null
```

### never 类型

返回错误信息

### object类型
```typescript
let objectTest: object = {test: {number: 1}}
```

### 类型断言

强制转换数据类型

```typescript
let someValue: any = 'string'

let strLength: number = (<string>someValue).length // any => string

let asStrLength: number = (someValue as string).length 
```


## 变量声明

### var
eg.

``` typescript
function fun(type) {
  if(type) {
    var x = 10
  }
  return x
}

console.log(fun(true)) // 10
console.log(fun(false)) // undefined
```

### let

同es6 let

### const

同es6 const

### 解构

#### 数组解构

同es6

#### 对象结构图

同es6

### 展开

#### 数组展开

同es6

#### 对象展开

同es6

## 接口

使用`interface` 来定义

```ts
interface LabelledValue {
  label: string
}
```

### 可选属性

使用关键字`?`来表示

``` ts
interface Test {
  type?: string  // 可以有可无
  value?: number
}
```

### 只读属性

使用关键词`readonly`来表示，只能读取数据 不能修改数据

```ts
interface Point {
  readonly x: number
  readonly y: number
}
let p1: Point = { x: 19, y: 29 }
p1.x = 3 //   报错
```

`ReadOnlyArray`