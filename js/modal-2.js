const openModalBtn2 = document.getElementById("openModal-2");
			const closeModalBtn2 = document.getElementById("closeModal-2");
			const modalOverlay2 = document.getElementById("modal-2");

			openModalBtn2.addEventListener("click", () => {
				modalOverlay2.classList.remove("hidden");
				modalOverlay2.classList.add("show");
			});

			closeModalBtn2.addEventListener("click", () => {
				modalOverlay2.classList.add("hidden");
				modalOverlay2.classList.remove("show");
			});

			modalOverlay2.addEventListener("click", (e) => {
				if (e.target === modalOverlay2) {
					modalOverlay2.classList.add("hidden");
				}
			});