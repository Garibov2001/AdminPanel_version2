
var plusOpen = document.querySelector("#forum-open");
 var minusClose = document.querySelector("#forum-close");
 var forumOpen = document.querySelector("#muraciet-block");

 plusOpen.addEventListener("click",
 function() {
     minusClose.classList.add("d-block");
     minusClose.classList.remove("d-none");

     plusOpen.classList.add("d-none");
     plusOpen.classList.remove("d-block");

    forumOpen.classList.add("d-table-row");
    forumOpen.classList.remove("d-none");
 }
 )
 
 minusClose.addEventListener("click", function()
 {
     minusClose.classList.add("d-none");
     minusClose.classList.remove("d-block");

     plusOpen.classList.add("d-block");
     plusOpen.classList.remove("d-none"); 

     forumOpen.classList.add("d-none");
     forumOpen.classList.remove("d-table-row");
 }
 )
 



