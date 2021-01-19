var table_info = function (duvidas) {
    var self = this;
    self.duvidas = ko.observableArray(duvidas);
    console.log(self.duvidas())

};






$(document).ready(function () {
    //info do local
    var duvidas = JSON.parse(localStorage.getItem('user_duvidas'));

    if (duvidas === null) {
        $('#sem_duvidas').modal('show');
        $('#duvidas_table').prop('hidden', true);
    }
    else {
        ko.applyBindings(new table_info(duvidas));
    }
});

function post_duvida(value) {
    console.log(value);
    $('#descricao').text(value);
};