const searchInput = document.getElementById("searchInput");
const clearBtn = document.getElementById("clearBtn");
const resultCount = document.getElementById("resultCount");
const emptyMessage = document.getElementById("emptyMessage");
const cards = document.querySelectorAll(".card");

function filterCards() {
  const query = searchInput.value.trim().toLowerCase();
  let visibleCount = 0;

  cards.forEach((card) => {
    const title = card.querySelector("h2").textContent.trim().toLowerCase();
    if (title.includes(query)) {
      card.hidden = false;
      visibleCount++;
    } else {
      card.hidden = true;
    }
  });

  resultCount.textContent = `${visibleCount} sonuç gösteriliyor`;
  emptyMessage.hidden = visibleCount > 0;
}

searchInput.addEventListener("input", filterCards);

clearBtn.addEventListener("click", () => {
  searchInput.value = "";
  filterCards();
  searchInput.focus();
});
