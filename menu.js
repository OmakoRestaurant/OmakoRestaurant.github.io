const serviceItems = document.querySelector(".menu");
const serviceItems1 = document.querySelector(".menu1");
const serviceItems2 = document.querySelector(".menu2");
const serviceItems3 = document.querySelector(".menu3");
const serviceItems4 = document.querySelector(".menu4");
const serviceItems5 = document.querySelector(".menu5");
const serviceItems6 = document.querySelector(".menu6");
const serviceItems7 = document.querySelector(".menu7");
const serviceItems8 = document.querySelector(".menu8");
const serviceItems9 = document.querySelector(".menu9");
const serviceItems10 = document.querySelector(".menu10");

  const popup = document.querySelector(".popup-box")
  const popupCloseBtn = popup.querySelector(".popup-close-btn");
  const popupCloseIcon = popup.querySelector(".popup-close-icon");

  serviceItems.addEventListener("click",function(event){
    if(event.target.tagName.toLowerCase() == "button"){
       const item =event.target.parentElement;
       const h3 = item.querySelector("h3").innerHTML;
       const readMoreCont = item.querySelector(".read-more-cont").innerHTML;
       const image = item.querySelector(".image").innerHTML;
       popup.querySelector(".popup-body").innerHTML = readMoreCont;
       popupBox();
    }

  })
 


  popupCloseBtn.addEventListener("click", popupBox);
  popupCloseIcon.addEventListener("click", popupBox);

  popup.addEventListener("click", function(event){
     if(event.target == popup){
        popupBox();
     }
  })

  function popupBox(){
    popup.classList.toggle("open");
  }
  serviceItems1.addEventListener("click",function(event){
    if(event.target.tagName.toLowerCase() == "button"){
       const item =event.target.parentElement;
       const h3 = item.querySelector("h3").innerHTML;
       const readMoreCont = item.querySelector(".read-more-cont").innerHTML;
       const image = item.querySelector(".image").innerHTML;
       popup.querySelector(".popup-body").innerHTML = readMoreCont;
       popupBox();
    }

  })
  serviceItems2.addEventListener("click",function(event){
    if(event.target.tagName.toLowerCase() == "button"){
       const item =event.target.parentElement;
       const h3 = item.querySelector("h3").innerHTML;
       const readMoreCont = item.querySelector(".read-more-cont").innerHTML;
       const image = item.querySelector(".image").innerHTML;
       popup.querySelector(".popup-body").innerHTML = readMoreCont;
       popupBox();
    }

  })
  serviceItems3.addEventListener("click",function(event){
    if(event.target.tagName.toLowerCase() == "button"){
       const item =event.target.parentElement;
       const h3 = item.querySelector("h3").innerHTML;
       const readMoreCont = item.querySelector(".read-more-cont").innerHTML;
       const image = item.querySelector(".image").innerHTML;
       popup.querySelector(".popup-body").innerHTML = readMoreCont;
       popupBox();
    }

  })
  serviceItems4.addEventListener("click",function(event){
    if(event.target.tagName.toLowerCase() == "button"){
       const item =event.target.parentElement;
       const h3 = item.querySelector("h3").innerHTML;
       const readMoreCont = item.querySelector(".read-more-cont").innerHTML;
       const image = item.querySelector(".image").innerHTML;
       popup.querySelector(".popup-body").innerHTML = readMoreCont;
       popupBox();
    }

  })
  serviceItems5.addEventListener("click",function(event){
    if(event.target.tagName.toLowerCase() == "button"){
       const item =event.target.parentElement;
       const h3 = item.querySelector("h3").innerHTML;
       const readMoreCont = item.querySelector(".read-more-cont").innerHTML;
       const image = item.querySelector(".image").innerHTML;
       popup.querySelector(".popup-body").innerHTML = readMoreCont;
       popupBox();
    }

  })
  serviceItems6.addEventListener("click",function(event){
    if(event.target.tagName.toLowerCase() == "button"){
       const item =event.target.parentElement;
       const h3 = item.querySelector("h3").innerHTML;
       const readMoreCont = item.querySelector(".read-more-cont").innerHTML;
       const image = item.querySelector(".image").innerHTML;
       popup.querySelector(".popup-body").innerHTML = readMoreCont;
       popupBox();
    }

  })
  serviceItems7.addEventListener("click",function(event){
    if(event.target.tagName.toLowerCase() == "button"){
       const item =event.target.parentElement;
       const h3 = item.querySelector("h3").innerHTML;
       const readMoreCont = item.querySelector(".read-more-cont").innerHTML;
       const image = item.querySelector(".image").innerHTML;
       popup.querySelector(".popup-body").innerHTML = readMoreCont;
       popupBox();
    }

  })
  serviceItems8.addEventListener("click",function(event){
    if(event.target.tagName.toLowerCase() == "button"){
       const item =event.target.parentElement;
       const h3 = item.querySelector("h3").innerHTML;
       const readMoreCont = item.querySelector(".read-more-cont").innerHTML;
       const image = item.querySelector(".image").innerHTML;
       popup.querySelector(".popup-body").innerHTML = readMoreCont;
       popupBox();
    }

  })
  serviceItems9.addEventListener("click",function(event){
    if(event.target.tagName.toLowerCase() == "button"){
       const item =event.target.parentElement;
       const h3 = item.querySelector("h3").innerHTML;
       const readMoreCont = item.querySelector(".read-more-cont").innerHTML;
       const image = item.querySelector(".image").innerHTML;
       popup.querySelector(".popup-body").innerHTML = readMoreCont;
       popupBox();
    }

  })
  serviceItems10.addEventListener("click",function(event){
    if(event.target.tagName.toLowerCase() == "button"){
       const item =event.target.parentElement;
       const h3 = item.querySelector("h3").innerHTML;
       const readMoreCont = item.querySelector(".read-more-cont").innerHTML;
       const image = item.querySelector(".image").innerHTML;
       popup.querySelector(".popup-body").innerHTML = readMoreCont;
       popupBox();
    }

  })