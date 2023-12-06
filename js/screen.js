jQuery(function($){
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
  
});
 
 
   $(document).ready(function(){
    $("#submit").click(function(){
      if(confirm("Are you ready to submit?")){
      alert("Application has been sent");}
      else alert("Application has not worked");
  
  });
  });