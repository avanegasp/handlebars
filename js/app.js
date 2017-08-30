var source = $('#entry-template').html();
var template = Handlebars.compile(source);

var personas = [
              {'nombre': 'Angie','apellido': 'Vanegas','correo': 'arco527@gmail.com'},
              {'nombre': 'María','apellido': 'Casas','correo': 'lilo@gmail.com'},
              {'nombre': 'Pedro','apellido': 'Ramirez','correo': 'pepe655@gmail.com'},
            ];

var html= template({'persona': personas});
$('.container').html(html);
