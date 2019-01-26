$(document).ready(function() {
    $(".loadTable").load("table.html");
    $(".loadModal").load("modal.html");
    $(".loadNavbar").load("navbar.html");
    var table = $('#maintable').DataTable(
        "scrollX": true
        );
});

function addData() {
    $('.ui.modal').modal('show');
}
$(".addButton").click(function() {
    addData();
});

function notify() {
    $.notify({
        icon: 'glyphicon glyphicon-warning-sign',
        title: 'Bootstrap notify',
        message: 'Turning standard Bootstrap alerts into "notify" like notifications'
    }, { 
        type: 'success',
        z_index: 1031,
        animate: {
            enter: 'animated bounceInDown',
            exit: 'animated bounceOutUp'
        }
    });
}