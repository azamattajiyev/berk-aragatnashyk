const openModalBtn1 = document.getElementById("openModal-1");
			const closeModalBtn1 = document.getElementById("closeModal-1");
			const modalOverlay1 = document.getElementById("modal-1");

			openModalBtn1.addEventListener("click", () => {
				modalOverlay1.classList.remove("hidden");
				modalOverlay1.classList.add("show");
			});

			closeModalBtn1.addEventListener("click", () => {
				modalOverlay1.classList.add("hidden");
				modalOverlay1.classList.remove("show");
			});

			modalOverlay1.addEventListener("click", (e) => {
				if (e.target === modalOverlay1) {
					modalOverlay1.classList.add("hidden");
				}
			});