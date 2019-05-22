// 布尔类型
var isTrue = true;
var isFalse = false;
// let isBoolean: boolean = 123
// 数字类型
var decLiteral = 20; // 十进制
var hexLiteral = 0x14; // 16进制
var binaryLiteral = 20; // 二进制
var octalLiteral = 20; // 八进制
// 字符串类型
var nameStr = 'taro';
// 数组类型
var list = [1, 2, 3]; // 数字类型数组， 数组内容必须是数字
//数组范性定义数组类型
var listArray = [1, 2, 3];
// 元祖
var x = ['Hello', 19]; // 第一个元素为string  第二个参数为数字
// 枚举类型
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var c = Color[2]; // Green
// any类型
var number = 'str';
number = 1;
// void 类型
// 没有返回值
function test() {
    console.log('test');
}
// null  类型
var nullTest = undefined;
// undefined 类型
var undefinedTest = null;
// never 类型
// 返回错误信息
// object类型
var objectTest = { test: { number: 1 } };
// 类型断言
// 强制转换数据类型
var someValue = 'string';
var strLength = someValue.length; // any => string
var asStrLength = someValue.length;
