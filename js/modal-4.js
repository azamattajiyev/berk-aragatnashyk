const openModalBtn4 = document.getElementById("openModal-4");
			const closeModalBtn4 = document.getElementById("closeModal-4");
			const modalOverlay4 = document.getElementById("modal-4");

			openModalBtn4.addEventListener("click", () => {
				modalOverlay4.classList.remove("hidden");
				modalOverlay4.classList.add("show");
			});

			closeModalBtn4.addEventListener("click", () => {
				modalOverlay4.classList.add("hidden");
				modalOverlay4.classList.remove("show");
			});

			modalOverlay4.addEventListener("click", (e) => {
				if (e.target === modalOverlay4) {
					modalOverlay4.classList.add("hidden");
				}
			});