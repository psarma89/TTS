var slice = Array.prototype.slice

function logger(namespace) {
  // SOLUTION GOES HERE
  slice.apply(null,console.log(namespace))
}

module.exports = logger
