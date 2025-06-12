function loadHTML(selector, file) {
  fetch(file)
    .then(res => {
      if (!res.ok) throw new Error(`Cannot load ${file}`);
      return res.text();
    })
    .then(html => {
      document.querySelector(selector).innerHTML = html;
    })
    .catch(err => {
      console.error(err);
    });
}

document.addEventListener("DOMContentLoaded", () => {
  loadHTML("header", "/assets/navbar.html");
  loadHTML("footer", "/assets/footer.html");
});
