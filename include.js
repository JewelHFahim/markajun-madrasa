// function includeHTML() {
//   const includeElements = document.querySelectorAll('[data-include]');

//   includeElements.forEach(el => {
//     const file = el.getAttribute('data-include');
//     fetch(file)
//       .then(response => {
//         if (!response.ok) throw new Error(`Could not fetch ${file}`);
//         return response.text();
//       })
//       .then(data => {
//         el.innerHTML = data;
//       })
//       .catch(error => {
//         console.error('Include error:', error);
//         el.innerHTML = "<p style='color:red'>Include failed.</p>";
//       });
//   });
// }

// window.addEventListener('DOMContentLoaded', includeHTML);

document.querySelectorAll('[data-include]').forEach(async (el) => {
  const file = el.getAttribute('data-include');
  const res = await fetch(file);
  const html = await res.text();

  const temp = document.createElement("div");
  temp.innerHTML = html;

  // Import all styles to head only once
  temp.querySelectorAll('link[rel="stylesheet"]').forEach(link => {
    if (![...document.head.querySelectorAll('link')].some(existing => existing.href === link.href)) {
      document.head.appendChild(link.cloneNode());
    }
    link.remove(); // Remove from injected HTML
  });

  el.innerHTML = temp.innerHTML;
});

