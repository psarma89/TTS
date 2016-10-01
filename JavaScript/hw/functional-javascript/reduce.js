function countWords(inputWords) {

  var something = inputWords.reduce(function(output,fruit){
    output[fruit] = ++output[fruit] || 1;
    return output;
  }
  ,{})
  return something;
}

module.exports = countWords
