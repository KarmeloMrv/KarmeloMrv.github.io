document.addEventListener("DOMContentLoaded", function() {
    const filterButtons = document.querySelectorAll(".filter-button");

    filterButtons.forEach(button => {
        button.addEventListener("click", function() {
            const filterValue = this.getAttribute("data-filter");

            // Show all items if filterValue is "all"
            if (filterValue === "all") {
                document.querySelectorAll(".gallery-item").forEach(item => {
                    item.style.display = "block";
                });
            } else {
                // Otherwise, hide all items and only show items with the selected filterValue class
                document.querySelectorAll(".gallery-item").forEach(item => {
                    if (item.classList.contains(filterValue)) {
                        item.style.display = "block";
                    } else {
                        item.style.display = "none";
                    }
                });
            }

            // Toggle active class on buttons
            filterButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");
        });
    });
});
