function passwordVisibility(toggleEl) {
	const field = document.getElementById("password");
	const showPass = document.getElementById("showPass");
	const hidePass = document.getElementById("hidePass");
	
	hidePass.classList.remove("d-none");
	
	if (field.type === "password") {
		field.type = "text";
		showPass.style.display = "none";
		hidePass.style.display = "block";
		toggleEl.setAttribute("aria-label", "Hide password");
		toggleEl.setAttribute("aria-pressed", "true");
	} else {
		field.type = "password";
		showPass.style.display = "block";
		hidePass.style.display = "none";
		toggleEl.setAttribute("aria-label", "Show password");
		toggleEl.setAttribute("aria-pressed", "false");
	}
}
