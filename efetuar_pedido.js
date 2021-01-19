$(document).ready(function () {

    //apresentar nome de produto
    $('#a_instalar').text(localStorage.getItem('painel_atual'));
    $('#endereco_instalar').text(localStorage.getItem('endereco'));

    //busca de informação e guardar no localstorage
    $('#continuar').click(function () {
        retVal = true;

        var type_pedido = 'Instalação ' + localStorage.getItem('painel_atual')

        //nome
        var nome = $('#nome').val().trim();
        if (nome.length < 3) {
            $('#error_name').prop('hidden', false)
            retVal = false;
        }
        else {
            $('#error_name').prop('hidden', true);
            localStorage.setItem('nome', nome);
        };

        //email
        var email = $("#email").val().trim();
        if ($("#email").val().trim().length < 1 || $("#email").val().trim().length > 100 || ($("#email").val().trim().lastIndexOf('.') < $("#email").val().trim().indexOf('@')) || (-1 === $("#email").val().trim().indexOf('@'))) {
            $("#error_email").prop('hidden', false);
            retVal = false;
        }
        else {
            $("#error_email").prop('hidden', true);
        };

        //telefone
        var telefone = $('#telefone').val();

        if (telefone.length != 9) {
            $("#error_telefone").prop('hidden', false);
            retVal = false;
        }
        else {
            $("#error_telefone").prop('hidden', true);
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
                'endereco': localStorage.getItem('endereco'),
                'tipo_pedido': type_pedido
            }

            //GUARDAR INFORMAÇÕES NO LOCALSTORAGE
            if (localStorage.getItem('user_info') === null) {
                temp_info.push(user_information);
                localStorage.setItem('user_info', JSON.stringify(temp_info));
            }
            else {
                //se ja la existir outros registos
                temp_info = JSON.parse(localStorage.getItem('user_info'));
                temp_info.push(user_information);
                localStorage.setItem('user_info', JSON.stringify(temp_info));

            }
            //-------------------------------------------------------------------------------------------------------------



            //mostrar telefone enviada com sucesso
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
                $('#pedido_sucesso').prop('hidden', false);
            });
        };






    });


});
