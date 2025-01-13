document.addEventListener("DOMContentLoaded", () => {
    const timeElement = document.getElementById("time");
    const dateElement = document.getElementById("date");
    const toggleThemeButton = document.getElementById("toggle-theme");

    // Atualiza a hora e a data a cada segundo
    const updateTime = async () => {
        try {
            const response = await fetch("/time");
            const data = await response.json();
            timeElement.textContent = data.time;
            dateElement.textContent = data.date;
        } catch (error) {
            console.error("Erro ao atualizar o relógio:", error);
        }
    };
    setInterval(updateTime, 1000);
    updateTime();

    // Alterna entre os temas claro e escuro
    toggleThemeButton.addEventListener("click", () => {
        document.body.classList.toggle("light");
        document.body.classList.toggle("dark");
    });

    // Define o tema inicial como "escuro"
    document.body.classList.add("dark");
});
