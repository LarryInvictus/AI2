const input = document.getElementById("search-input");
const btn = document.getElementById("search-btn");

btn.addEventListener("click", () => {
    const q = input.value.trim();
    if (!q) return;
    // DuckDuckGo-style search feeling, but you can swap engine
    const url = "https://duckduckgo.com/?q=" + encodeURIComponent(q);
    window.open(url, "_blank");
});

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") btn.click();
});
