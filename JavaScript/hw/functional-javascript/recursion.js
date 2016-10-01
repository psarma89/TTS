function reduce(arr, fn, initial) {
  // SOLUTION GOES HERE
  return (function newReduce(idx,value){
    if (idx === arr.length) return value
    return newReduce(idx + 1,fn(value, arr[idx],idx,arr))
  })(0,initial)
}

module.exports = reduce
