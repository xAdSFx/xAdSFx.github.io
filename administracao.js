var table_info = function (pedidos) {
    var self = this;
    self.pedidos = ko.observableArray(pedidos);
    console.log(self.pedidos())

};






$(document).ready(function () {
    //info do local
    var pedidos = JSON.parse(localStorage.getItem('user_info'));

    if (pedidos === null) {
        $('#sem_pedidos').modal('show');
        $('#pedidos_table').prop('hidden', true);
    }
    else {
        ko.applyBindings(new table_info(pedidos));
    }
});