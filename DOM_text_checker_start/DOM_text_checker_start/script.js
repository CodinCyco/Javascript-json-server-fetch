const testWrapper = document.querySelector(".test-wrapper");
const originTextArea = document.querySelector(".intro");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").textContent;


// Match the text entered with the provided text on the page:
function spellCheck() {

}



testWrapper.addEventListener('keyup',function (e) {
   if(e.target.value==originText.substring(0,e.target.value.length)) {


       testWrapper.style.borderColor = "green";
       if(e.target.value.length==originText.length)
           originTextArea.style.backgroundColor="green";
       else
           originTextArea.style.backgroundColor="red";

   }

    else
       testWrapper.style.borderColor="red";

});
 sessionStorage.setItem("key","saif");
