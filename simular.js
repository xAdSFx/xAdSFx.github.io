$(document).ready(function () {
    var n_pessoas_escolha;

    //CONTINUAR 1 (LOCALIZACAO --> FATURA)
    $('#continuar1').click(function () {

        //retirar informação inserida ja com validacao
        var endereco = $('#endereco').val().trim();

        if (endereco.length == 0) {
            $('#erro_endereco').modal('show');
        }
        else {
            localStorage.setItem('endereco', endereco);

            //desaparecer caixa de passo1
            $('#passo1').fadeOut(function () {
                $('#passo1').prop('hidden', true);
            });

            $('#banner_simul').fadeOut(function () {
                $('#banner_simul').prop('hidden', true);
            });

            //TEST
            console.log(endereco);

            //aparecer passo 2 (fatura mensal)
            $('#passo2').fadeIn(500, function () {
                $('#passo2').prop('hidden', false);
            });

        };
    });



    //CONTINUAR 2 (fatura --> n habitantes casa)
    $('#continuar2').click(function () {

        var fatura = parseInt($('#fatura').val());
        //retirar informação inserida ja com validacao

        if (fatura <= 0 || isNaN(fatura)) {
            $('#erro_fatura').modal('show');
        }
        else {
            //desaparecer caixa de passo2
            $('#passo2').fadeOut(function () {
                $('#passo2').prop('hidden', true);
            });

            //TEST
            console.log(fatura + '€');

            //aparecer passo 3 (numero de pessoas habitacao)
            $('#passo3').fadeIn(500, function () {
                $('#passo3').prop('hidden', false);
            });
        };
    });



    //COMPORTAMENTO DAS RADIOS
    $('#inlineRadio5').change(function () {
        if ($('#inlineRadio5').prop('checked') == true) {
            $('#num_habit').prop('hidden', false);
        }
        else {
            $('#num_habit').prop('hidden', true);
        };
    });
    //no toque de outra radio, desaparecer o input
    $('input[type=radio]').change(function () {
        for (var i = 1; i <= 5; i++) {
            var choice = '#inlineRadio' + i;
            if ($(choice).prop('checked') == true && $(choice).val() != 'more') {
                $('#num_habit').prop('hidden', true);
            };
            if (choice == '#inlineRadio5' && $(choice).prop('checked') == true) {
                $('#num_habit').prop('hidden', false);
            }
        };
    });



    //CONTINUAR 3 (n habitantes casa --> )
    $('#continuar3').click(function () {

        var habitantes = 0;
        var valid_radio = 'erro';
        // ver qual esta selecionada e validacao
        for (var i = 1; i <= 5; i++) {
            var choice = '#inlineRadio' + i;

            if ($(choice).prop('checked') == true) {

                if (choice != '#inlineRadio5') {
                    valid_radio = 'ok';
                    habitantes = parseInt($(choice).val());
                }
                else {
                    if (choice == '#inlineRadio5') {
                        habitantes = parseInt($('#num_habitantes').val());
                        console.log(habitantes)
                        if (habitantes < 0 || habitantes == '' || isNaN(habitantes)) {
                            valid_radio = 'erro';
                            $('#erro_habitantes').modal('show')
                        }
                        else { valid_radio = 'ok' };
                    };
                };
            }
        };

        if (valid_radio == 'ok') {
            //mostrar tela de carregamento
            $('#passo3').fadeOut(function () {
                $('#passo3').prop('hidden', true);
            });
            $('#calcular_oferta').fadeIn(500, function () {
                $('#calcular_oferta').prop('hidden', false);
                setTimeout(calcular, 3000);
            });
        }
        else {
            $('#erro_habitantes').modal('show');
        };
    });

    //PAGINA DE CARREGAMENTO
    var calcular = function () {
        $('#calcular_oferta').fadeOut(function () {
            $('#calcular_oferta').prop('hidden', true);
            $('#oferta').prop('hidden', false);
        });
    };


    $('#painel_1').click(function () {
        localStorage.setItem('painel_atual', $('#nome_painel1').text());
    });
    $('#painel_2').click(function () {
        localStorage.setItem('painel_atual', $('#nome_painel2').text());
    });
    $('#painel_3').click(function () {
        localStorage.setItem('painel_atual', $('#nome_painel3').text());
    });





});

