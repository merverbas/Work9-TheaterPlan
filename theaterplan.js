var tr = document.querySelectorAll("tablo tbody tr");
var check = document.querySelectorAll(".tablo input [type = checkbox]");
var kayit = document.querySelectorAll("#no");
var result = [];
var buttonCTA = document.getElementById("buttonCTA");

check.forEach((checkbox,i) => {
  checkbox.addEventListener("change",function(){

      if(checkbox.checked == true){
        kayit[i].removeAttribute("disabled");         
      }
      else{
        
        kayit[i].disabled = "false";
      }

tr.forEach(e => {
    var id = e.children[0].innerText;
    var order = e.children[3].children[0].value;

    result.push({"id": id, "order": order});
});

 buttonCTA.addEventListener("click", function() {
   console.log(id , order);
   buttonCTA.innerText = "Gönderildi";
    
 });
