
function validation(){
  var first-name = document.getElementById("first name").value;
  var email = document.getElementById("email").value;
  var last-name = document.getElementById("last name").value;
  var country = document.getElementById("country").value;
  var city = document.getElementById("city").value;
  var state = document.getElementById("State").value;
  var postal = document.getElementById("postal code").value;
  var institution = document.getElementById("Undergraduate Instition").value;
  var grad = document.getElementById("graduation year").value;
  if(first-name === "" || email === "" || last-name === "" || country === "" || city === "" || state === "" || postal === "" || institution === "" || grad === ""){
    alert("Fill out the field");
    return false;
    }
    return true;
}