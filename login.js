$(document).ready(function () {

    $('#login').click(function () {

        retVal = true;

        //verificar credenciais inseridas
        //conta cliente
        var conta_cliente = $('#login_u').val().trim();
        var pass_cliente = $('#login_p').val();

        //tests
        console.log(conta_cliente);
        console.log(pass_cliente);



        switch (conta_cliente) {
            case 'joaquim_silva@cliente.com':
                if (pass_cliente == '123456') {
                    $('#login_page').fadeOut(function () {
                        $('#login_page').prop('hidden', true)
                        window.location = "area_reservada_cliente.html";
                    });
                }
                else {
                    $('#erro_pass').modal('show');
                }
                break;


            case 'ana_carolina@admin.com':
                if (pass_cliente == '123456') {
                    $('#login_page').fadeOut(function () {
                        $('#login_page').prop('hidden', true)
                        window.location = "administracao.html";
                    });
                }
                else {
                    $('#erro_pass').modal('show');
                }
                break;
            //tecnico FALTA
            default:
                $('#erro_login').modal('show');

        };
    });
});