let thisButton = document.querySelector(".button")
let thisInput = document.querySelector(".field")
let hello = document.querySelector(".hello")
thisButton.addEventListener("click", () => {
    console.log(thisInput.value)
    localStorage.setItem("food", thisInput.value)
   hello.innerHTML = localStorage.getItem("food")
})