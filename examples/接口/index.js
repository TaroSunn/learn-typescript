function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: 'string' };
printLabel(myObj);
function createSquare(config) {
    var newSquare = { color: 'white', area: 20 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.area) {
        newSquare.area = config.area;
    }
    return newSquare;
}
var mySquare = createSquare({ color: 'green' });
console.log(mySquare);
var p1 = { x: 10, y: 20 };
p1.x = 5;
