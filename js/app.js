var count = 0;

function getContactData () {
  var name=$ ('#contactName').val();
  var phone=$('#contactPhone').val();
  addContactData(name,phone);
}

var template = '<div class="row">' +
                    '<div class="col offset-s3 s6">' +
                     '<div class="card blue-grey darken-1">' +
                       '<div class="card-content">' +
                           '<h3>__name__</h3>' +
                          ' <span>__phone__</span>' +
                           '<a class="waves-effect waves-light btn-small modal-trigger"><i class="material-icons left">delete</i>Delete</a>' +
                         '</div>' +
                      '</div>' +
                    '</div>' +
                  '</div>' ;

function addContactData (name,phone) {
  count++;
  var finalTemplate = "";
  finalTemplate = template.replace("__name__", name)
  .replace("__phone", phone);

  $ ("main").append(finalTemplate);
  $ ("h5").html('Total contactos:' + count)
  swal({
  title: "Good job!",
  text: "You clicked the button!",
  icon: "success",
  button: "Aww yiss!",
});
}

function limpiar () {
  finalTemplate = "";
}


$(document).ready(function(){
  $('.modal').modal();
  $('#addContact').click(getContactData);

});
