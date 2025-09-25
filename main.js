
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function toggleText(id) {
    const element = document.getElementById(id);
    const button = element.previousElementSibling;

    if (element.style.display === "block" || element.style.display === "") {
        element.style.display = "none";
        button.innerText = "Показати деталі спільноти";
    } else {
        element.style.display = "block";
        button.innerText = "Приховати деталі спільноти";
    }
}

document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("registerMessage").innerText = "✅ Ви успішно зареєструвалися!";
    e.target.reset();
    setTimeout(() => {
        document.getElementById("registerMessage").innerText = "";
    }, 3000);
});

document.getElementById("feedbackForm").addEventListener("submit", function(e) {

    
    document.getElementById("feedbackMessage").innerText = "📩 Спроба відправлення повідомлення на пошту rudnytskiyt@gmail.com...";

    setTimeout(() => {
        e.target.reset();
        document.getElementById("feedbackMessage").innerText = "";
    }, 4000);
});

document.getElementById("searchForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const searchInput = document.getElementById("search-input").value;
    if (searchInput) {
        document.getElementById("searchMessage").innerText = `🔍 Пошук за запитом: "${searchInput}"...`;
    } else {
        document.getElementById("searchMessage").innerText = "Будь ласка, введіть запит для пошуку.";
    }

    setTimeout(() => {
        document.getElementById("searchMessage").innerText = "";
    }, 3000);

});


