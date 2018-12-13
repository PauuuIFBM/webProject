$(document).ready(function () {

   

    $("#accordion").accordion();
  

});

$(function() {
    var options = {
        modules: {
            toolbar: {
                toolbar: toolbarOptions
            }
        },
        placeholder: 'Escribeme o comparte tus fotos, fuentes o cualquier cosa conmigo :D',
        readOnly: false,
        theme: 'snow'
    }

    var container = $('#editor').get(0);
    var toolbarOptions = [['bold', 'italic'], ['link']];

    var quill = new Quill(container, options);
});





