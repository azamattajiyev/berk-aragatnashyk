const openModalBtn5 = document.getElementById("openModal-5");
			const closeModalBtn5 = document.getElementById("closeModal-5");
			const modalOverlay5 = document.getElementById("modal-5");

			openModalBtn5.addEventListener("click", () => {
				modalOverlay5.classList.remove("hidden");
				modalOverlay5.classList.add("show");
			});

			closeModalBtn5.addEventListener("click", () => {
				modalOverlay5.classList.add("hidden");
				modalOverlay5.classList.remove("show");
			});

			modalOverlay5.addEventListener("click", (e) => {
				if (e.target === modalOverlay5) {
					modalOverlay5.classList.add("hidden");
				}
			});