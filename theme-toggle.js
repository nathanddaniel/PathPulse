function toggleTheme() {
    var element = document.body;
    element.classList.toggle("light-mode");
}

document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("light-toggle");

    // Apply saved theme on load
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
        document.body.classList.add("light-mode");
        toggleBtn.textContent = "🌞";
    } else {
        toggleBtn.textContent = "🌙";
    }

    // Handle theme toggle
    toggleBtn.addEventListener("click", function () {
        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {
            toggleBtn.textContent = "🌞";
            localStorage.setItem("theme", "light");
        } else {
            toggleBtn.textContent = "🌙";
            localStorage.setItem("theme", "dark");
        }
    });
});
