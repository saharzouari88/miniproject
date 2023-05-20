var plus=document.querySelectorAll(".plus")
for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener("click",increment)
    
}
function increment(event){
   var cible=event.target
   var parent=cible.parentElement
   var count=Number(parent.querySelector("p").innerHTML)
   count++
   parent.querySelector("p").innerHTML=count
   
    
    }
    var min=document.querySelectorAll(".min")
    for (let i = 0; i < min.length; i++) {
      min[i].addEventListener("click",decrement)
        
    }
    function decrement(event){
       var cible=event.target
       var parent=cible.parentElement
       var count=Number(parent.querySelector("p").innerHTML)
       count--
       parent.querySelector("p").innerHTML=count
       
        
        }   