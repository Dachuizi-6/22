const area = function getArea(r){
// function getArea(r){
  const PI = 3.14
  const area = PI * r * r
  return area
}

console.log(area) // 停在这一行之前

console.log(module.exports === exports) // true

console.log(this) // 空对象

console.log(area(2)) // area是定义的变量函数名,可以这么说,函数可以给两个名字: 错误言论

console.log(getArea(2)) // 报错: getArea is not defined