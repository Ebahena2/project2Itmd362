jQuery(function($){
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
  
});
 
 
$(document).ready(function () {
  $("#submit").click(function () {
    if (confirm("Are you ready to submit?")) {
      alert("Application has been sent");
      alert(" Form Submitted!");
    }
    else alert("Application has not worked");

  });
});
  
function showAlert(){
  alert("Submitted!");
  
}

  