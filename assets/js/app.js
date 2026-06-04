let buttonTopTop = document.getElementById("btnTop");

buttonTopTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
    if (window.scrollY >= 200) {
        buttonTopTop.classList.remove("d-none");
    } else {
        buttonTopTop.classList.add("d-none");
    }
if (window.scrollY >= 500) {
        // verde pruebaa3
        buttonTopTop.classList.replace("btn-primary", "btn-success"); 
    } else {
        // azulito prueba 3
        buttonTopTop.classList.replace("btn-success", "btn-primary");
    }
});