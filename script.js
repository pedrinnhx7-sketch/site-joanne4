// JS vazio por enquanto
// Aqui você pode adicionar animações, interações e efeitos futuramente.

console.log("Site carregado com sucesso!");
document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("popup-overlay");
    const closeBtn = document.getElementById("popup-close");

    closeBtn.addEventListener("click", () => {
        popup.style.display = "none";
    });
});
