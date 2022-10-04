document.addEventListener("DOMContentLoaded", () => {
    const decrementButton = document.getElementById("decrementButton");
    const displaySpan = document.getElementById("displaySpan");
    const incrementButton = document.getElementById("incrementButton");

    decrementButton.addEventListener("click", () => {
        displaySpan.innerText = displaySpan.innerText - 1;
    })

    incrementButton.addEventListener("click", () => {
        displaySpan.innerText = parseInt(displaySpan.innerText) + 1;
    })
    
})