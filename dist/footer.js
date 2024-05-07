export function footerComponent() {
    const footer = document.createElement("footer");
    footer.innerHTML = "<h3>Todo el stock</h3>";
    footer.style.border = "solid 2px purple";
    footer.style.padding = "10px";
    footer.style.textAlign = "center";
    return footer;
}
