// JavaScript to toggle sidebar visibility
document.querySelector(".menu-icon").addEventListener("click", function() {
    const sidebar = document.querySelector("aside");
    sidebar.classList.toggle("hidden");
});
