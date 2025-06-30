const openModalBtn7 = document.getElementById("openModal-7");
			const closeModalBtn7 = document.getElementById("closeModal-7");
			const modalOverlay7 = document.getElementById("modal-7");

			openModalBtn7.addEventListener("click", () => {
				modalOverlay7.classList.remove("hidden");
				modalOverlay7.classList.add("show");
			});

			closeModalBtn7.addEventListener("click", () => {
				modalOverlay7.classList.add("hidden");
				modalOverlay7.classList.remove("show");
			});

			modalOverlay7.addEventListener("click", (e) => {
				if (e.target === modalOverlay7) {
					modalOverlay7.classList.add("hidden");
				}
			});