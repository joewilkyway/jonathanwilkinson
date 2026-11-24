const spotlights = document.querySelectorAll("[data-journal-spotlight]");

if (spotlights.length > 1) {
  const selected = Math.floor(Math.random() * spotlights.length);
  spotlights.forEach((spotlight, index) => {
    spotlight.hidden = index !== selected;
  });
}
