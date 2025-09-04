const openModalBtn3 = document.getElementById("openModal-3");
			const closeModalBtn3 = document.getElementById("closeModal-3");
			const modalOverlay3 = document.getElementById("modal-3");

			openModalBtn3.addEventListener("click", () => {
				modalOverlay3.classList.remove("hidden");
				modalOverlay3.classList.add("show");
			});

			closeModalBtn3.addEventListener("click", () => {
				modalOverlay3.classList.add("hidden");
				modalOverlay3.classList.remove("show");
			});

			modalOverlay3.addEventListener("click", (e) => {
				if (e.target === modalOverlay3) {
					modalOverlay3.classList.add("hidden");
				}
			});