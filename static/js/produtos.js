document.addEventListener("DOMContentLoaded", () => {
  const filterSelect = document.getElementById("filterSelect");
  const productItems = document.querySelectorAll(".product-item");

  filterSelect.addEventListener("change", () => {
    const filter = filterSelect.value;
    productItems.forEach((item) => {
      if (filter === "all" || item.classList.contains(filter)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});
