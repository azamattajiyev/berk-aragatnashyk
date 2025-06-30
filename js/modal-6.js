const openModalBtn6 = document.getElementById("openModal-6");
			const closeModalBtn6 = document.getElementById("closeModal-6");
			const modalOverlay6 = document.getElementById("modal-6");

			openModalBtn6.addEventListener("click", () => {
				modalOverlay6.classList.remove("hidden");
				modalOverlay6.classList.add("show");
			});

			closeModalBtn6.addEventListener("click", () => {
				modalOverlay6.classList.add("hidden");
				modalOverlay6.classList.remove("show");
			});

			modalOverlay6.addEventListener("click", (e) => {
				if (e.target === modalOverlay6) {
					modalOverlay6.classList.add("hidden");
				}
			});