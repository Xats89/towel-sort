module.exports = function towelSort (matrix) {
  if (matrix == undefined) return []
matrix.forEach((value, index) => {
  if (index % 2 !== 0) {
    value.reverse()
  }
})
return matrix.flat()
}