// Load search engine from settings
function getEngine() {
    return localStorage.getItem("yuni_engine") || "duckduckgo";
}

// Convert engine to URL
function buildSearchURL(engine, query) {
    switch (engine) {
        case "google":
            return "https://www.google.com/search?q=" + encodeURIComponent(query);
        case "bing":
            return "https://www.bing.com/search?q=" + encodeURIComponent(query);
        case "brave":
            return "https://search.brave.com/search?q=" + encodeURIComponent(query);
        default:
            return "https://duckduckgo.com/?q=" + encodeURIComponent(query);
    }
}

// Home page search
const input = document.getElementById("search-input");
const btn = document.getElementById("search-btn");

if (btn) {
    btn.addEventListener("click", () => {
        const q = input.value.trim();
        if (!q) return;

        const engine = getEngine();
        const url = buildSearchURL(engine, q);

        window.open(url, "_blank");
    });

    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") btn.click();
    });
}

// Settings page
const engineSelect = document.getElementById("engine-select");
const saveBtn = document.getElementById("save-settings");

if (engineSelect) {
    engineSelect.value = getEngine();
}

if (saveBtn) {
    saveBtn.addEventListener("click", () => {
        const selected = engineSelect.value;
        localStorage.setItem("yuni_engine", selected);
        alert("Settings saved!");
    });
}
