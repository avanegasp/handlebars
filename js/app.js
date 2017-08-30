var source = $('#entry-template').html();
var template = Handlebars.compile(source);

Handlebars.registerHelper('enumeracion', function(pvalor, operador, svalor){

  pvalor = parseFloat(pvalor);
  svalor = parseFloat(svalor);

  var operadores={
    '+' : pvalor + svalor,
    '*' : pvalor * svalor,
    '-' : pvalor - svalor
  }

  return operadores[operador]

})


$.ajax({
  url:'https://restcountries-v1.p.mashape.com/all',
  type: 'GET',
  dataType: 'json',
  headers: {'X-Mashape-Key': 'gNnoL8EHU9mshRMDwv1KttXMjgcmp1pBZVrjsnMsOQwgv4zLM8'}
})

.done(function(data){
  var html= template({'country': data});
  $('.container').html(html);

})
.fail(function(){
  console.log("error")
})
.always(function(){
  console.log("complete")
})



var personas = [
              {'nombre': 'Angie','apellido': 'Vanegas','correo': 'arco527@gmail.com'},
              {'nombre': 'María','apellido': 'Casas','correo': 'lilo@gmail.com'},
              {'nombre': 'Pedro','apellido': 'Ramirez','correo': 'pepe655@gmail.com'},
            ];

var html= template({'persona': personas});
$('.container').html(html);
