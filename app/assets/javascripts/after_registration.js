  $('.datepicker').pickadate({
    monthsFull: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    monthsShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    weekdaysFull: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    weekdaysShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
    today: 'Hoje',
    clear: 'Limpar',
    close: 'Fechar',
    format: 'dd/mm/yyyy',
    min: new Date(1940,1,1),
    max: new Date(2001,12,31),
    max: true,
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 40, // Creates a dropdown of 15 years to control year
    yearRange: '1950:2005'
  });


    $('#cpf').formatter({
            'pattern': '{{999}}.{{999}}.{{999}}-{{99}}',
    });

    $('#birthday').formatter({
        'pattern': '{{99}}/{{99}}/{{9999}}',
    });
    $('.progress').hide();
    if($("#edit_user_form").length){
    $("#edit_user_form").validate({
      submitHandler: function(form) {
        // do other things for a valid form
        $('.progress').show();
        form.submit();
      },
       errorElement : 'div',
       errorPlacement: function(error, element) {
         var placement = $(element).data('error');
         if (placement) {
           $(placement).append(error);
         } else {
           error.insertAfter(element);
         }
       }
     });
     $( "#name" ).rules( "add", {
       required: true,
       messages: {
         required: "Preencha com nome completo"
       }
     });
     $( "#rg" ).rules( "add", {
       required: true,
       digits: true,
       messages: {
         required: "Entre com seu número de identidade",
         digits: "Preencha esse campo apenas com números"
       }
     });
     $( "#cpf" ).rules( "add", {
       required: true,
       rangelength: [11,14],
       messages: {
         required: "Entre com seu cpf",
         rangelength: "O CPF deve possuir 11 dígitos"
       }
     });
    $( "#entry_year" ).rules( "add", {
       required: true,
       messages: {
         required: "Entre com seu ano de ingresso na universidade",
       }
     });
    $( "#matricula" ).rules( "add", {
       required: true,
       messages: {
         required: "Entre com seu número de matrícula",
       }
     });
     $( "#university" ).rules( "add", {
       required: true,
       messages: {
         required: "Informe a universidade da sua EJ"
       }
     });
     $( "#birthday_picker" ).rules( "add", {
       required: true,
       messages: {
         required: "Informe sua Data de Nascimento"
       }
     });
   }
