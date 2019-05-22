let time = function () {
  console.log('filteTime')
}
// 将数字或者字符串添加两位小数
let toDecimal = function (pic) {
  return Number(pic).toFixed(2)
}

export default {
  time,
  toDecimal
}
