openPopup.onclick = () => {
    popup.style.display="block"
    black.style.display="block"
}
cancel.onclick = () => {
    popup.style.display="none"
    black.style.display="none"
}
const burger = document.querySelector(".burger")
      menu = document.querySelector(".text-navigation")
      cancel = document.querySelector(".cancel-burger")

      burger.addEventListener("click",function(){
        menu.style.left = "0"
      })