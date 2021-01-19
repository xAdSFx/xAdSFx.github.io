$(document).ready(function () {

    //busca de informação e guardar no localstorage
    $('#enviar_assistencia').click(function () {

        //tipo de pedido
        var type_pedido = 'Assistência técnica'

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
        var email = $("#email").val().trim();
        if ($("#email").val().trim().length < 10 || $("#email").val().trim().length > 100 || ($("#email").val().trim().lastIndexOf('.') < $("#email").val().trim().indexOf('@')) || (-1 === $("#email").val().trim().indexOf('@'))) {
            $("#error_email").prop('hidden', false);
            retVal = false;
        }
        else {
            $("#error_email").prop('hidden', true);
        };

        //descricao de problema
        var problema = $('#problema').val().trim().split(' ');
        console.log(problema);

        if (problema.length < 10) {
            $("#error_problema").prop('hidden', false);
            retVal = false;
        }
        else {
            $("#error_problema").prop('hidden', true);
        };

        //valid. de telefone
        var telefone = $('#telefone').val();

        if (telefone.length != 9) {
            $("#error_telefone").prop('hidden', false);
            retVal = false;
        }
        else {
            $("#error_telefone").prop('hidden', true);
        };

        //val. endereço
        var endereco_table = $('#endereco').val().trim();
        var endereco = $('#endereco').val().trim().split(' ');
        console.log(endereco);

        if (problema.length < 3) {
            $("#error_endereco").prop('hidden', false);
            retVal = false;
        }
        else {
            $("#error_endereco").prop('hidden', true);
        };



        if (retVal == false) {
            //show modal
            $('#modal_pedido_erro').modal('show');
        }
        else {


            //armazenar informacao temporaria-----------------------------------------------------------------------------
            var temp_info = [];

            var user_information = {
                'nome': nome,
                'telefone': telefone,
                'email': email,
                'endereco': endereco_table,
                'tipo_pedido': type_pedido
            }

            //GUARDAR INFORMAÇÕES NO LOCALSTORAGE
            if (localStorage.getItem('user_info') === null) {
                temp_info.push(user_information);
                console.log(user_information)
                localStorage.setItem('user_info', JSON.stringify(temp_info));
            }
            else {
                //se ja la existir outros registos
                temp_info = JSON.parse(localStorage.getItem('user_info'));
                temp_info.push(user_information);
                localStorage.setItem('user_info', JSON.stringify(temp_info));

            }
            //-------------------------------------------------------------------------------------------------------------







            //mostrar duvida enviada com sucesso
            $('#assistencia_form').fadeOut(function () {
                $('#assistencia_form').prop('hidden', true);
            });

            $('#enviar').fadeIn(500, function () {
                $('#enviar').prop('hidden', false);
                setTimeout(calcular, 1500);
            });
        };

        var calcular = function () {
            $('#enviar').fadeOut(500, function () {
                $('#enviar').prop('hidden', true);
                $('#pedido_sucesso').prop('hidden', false);
            });
        };








    });





































});
