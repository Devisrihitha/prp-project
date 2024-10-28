document.addEventListener("DOMContentLoaded", () => {
    let getstartedbutton = document.querySelector("#getstarted");
    getstartedbutton.addEventListener("click", () => {
        console.log("Button clicked");
        window.location.href = "products.html";  // Ensure this path is correct
    });
});