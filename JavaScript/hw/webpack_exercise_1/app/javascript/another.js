var $ = require ('jquery');

module.exports = $(document).ready(function(){
  var button = $('input#greetings');
  var header = $('#greeting');
  button.on('click',function(event){
    $(event.target).hide();
    header.html("<h1> hello world!</h1>");
  })

  }
)
