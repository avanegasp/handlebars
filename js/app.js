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



var personas = [
              {'nombre': 'Angie','apellido': 'Vanegas','correo': 'arco527@gmail.com'},
              {'nombre': 'María','apellido': 'Casas','correo': 'lilo@gmail.com'},
              {'nombre': 'Pedro','apellido': 'Ramirez','correo': 'pepe655@gmail.com'},
            ];

var html= template({'persona': personas});
$('.container').html(html);
