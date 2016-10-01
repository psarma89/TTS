function getShortMessages(messages){
  return messages.map(function(item){
    return item.message;
  }).filter(function(text){
    return text.length < 50;
  })
}

module.exports = getShortMessages;
