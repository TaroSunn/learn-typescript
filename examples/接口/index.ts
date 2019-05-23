// 接口
interface LabelledValue {
  label: string
}

function printLabel(labelledObj: LabelledValue){
  console.log(labelledObj.label)
}

let myObj = {size: 10, label: 'string'}
printLabel(myObj)


// 可选属性

interface Square {
  color: string
  area: number
}
interface SquareConfig {
  color?: string
  area?: number
}

function createSquare (config: SquareConfig): Square {
  let newSquare = { color: 'white', area: 20 }
  if(config.color) {
    newSquare.color = config.color
  }
  if(config.area) {
    newSquare.area = config.area
  }
  return newSquare
}

let mySquare = createSquare({color: 'green'})
console.log(mySquare)

// 只读属性

interface Point {
  readonly x: number
  readonly y: number
}
let p1: Point = {x: 10, y: 20}
// p1.x = 5 // read-only property