function data() {
   var fprice= document.getElementById("fprice").value
   
   
  
   var sprice= document.getElementById("sprice").value
   var tprice= document.getElementById("tprice").value

   var display=document.getElementById("display")
   display.innerHTML= fprice + sprice + tprice;

}