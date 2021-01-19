$(document).ready(function () {

    //apresentar nome de produto
    $('#a_instalar').text(localStorage.getItem('painel_atual'));
    $('#endereco_instalar').text(localStorage.getItem('endereco'));

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

        //descricao de telefone
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
