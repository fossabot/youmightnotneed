const min = nums => {
  if (nums.length) return Math.min(...nums)
}

exports.min = min([4, 2, 8, 6])
// => 8

exports.undefined = min([])
// => undefined
