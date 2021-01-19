$(document).ready(function () {

    //busca de informação e guardar no localstorage
    $('#continuar').click(function () {
        retVal = true;

        //nome
        var nome = $('#nome').val().trim();
        if (nome.length < 3) {
            $('#error_name').prop('hidden', false)
            retVal = false;
        }
        else {
            $('#error_name').prop('hidden', true);
        };

        //email
        if ($("#email").val().trim().length < 10 || $("#email").val().trim().length > 100 || ($("#email").val().trim().lastIndexOf('.') < $("#email").val().trim().indexOf('@')) || (-1 === $("#email").val().trim().indexOf('@'))) {
            $("#error_email").prop('hidden', false);
            retVal = false;
        }
        else {
            $("#error_email").prop('hidden', true);
        };

        //descricao de duvida
        var duvida = $('#duvida').val().trim().split(' ');
        console.log(duvida);

        if (duvida.length < 10) {
            $("#error_duvida").prop('hidden', false);
            retVal = false;
        }
        else {
            $("#error_duvida").prop('hidden', true);
        };

        if (retVal == false) {
            //show modal
            $('#modal_duvida_erro').modal('show');
        }
        else {
            //mostrar duvida enviada com sucesso
            $('#passo1').fadeOut(function () {
                $('#passo1').prop('hidden', true);
            });

            $('#enviar').fadeIn(500, function () {
                $('#enviar').prop('hidden', false);
                setTimeout(calcular, 1500);
            });
        };

        var calcular = function () {
            $('#enviar').fadeOut(500, function () {
                $('#enviar').prop('hidden', true);
                $('#duvida_sucesso').prop('hidden', false);
            });
        };








    });





































});
