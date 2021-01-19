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

                //desaparecer ecra de login
                $('#login_page').fadeOut(function () {
                    $('#login_page').prop('hidden', true)
                    window.location = "area_reservada_cliente.html";
                });
                break

            case 'ana_carolina@admin.com':

                //desaparecer ecra de login
                $('#login_page').fadeOut(function () {
                    $('#login_page').prop('hidden', true)
                    window.location = "administracao.html";
                });
                break
            case 'paulo_pereira@tecnico.com':
                //....
                break
            default:
                $('#erro_login').modal('show');
        }














    });















});