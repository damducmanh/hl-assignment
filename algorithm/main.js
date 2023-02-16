const mathOperations = {
  miniMaxSum: function(arr) {
    const [maxValue, minValue] = [Math.max(...arr), Math.min(...arr)]
    const [maxSum, minSum] = [
      arr.reduce((a,b) => a+b) - maxValue,
      arr.reduce((a,b) => a+b) - minValue
    ]
    return `${minSum} ${maxSum}`
  },
  totalArray: function(arr) {
    return arr.reduce((partialSum, a) => partialSum + a, 0)
  },
  minInArray: function(arr) {
    return Math.min(...arr)
  },
  maxInArray: function(arr) {
    return Math.max(...arr);
  },
  findEvenElements: function(arr) {
    return arr.filter(num => num % 2 === 0)
  },
  findOddElements: function(arr) {
    return arr.filter(num => num % 2 !== 0)
  }
}
module.exports = mathOperations;
