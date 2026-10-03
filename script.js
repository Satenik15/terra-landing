function openModal() {
  document.getElementById("overlay").classList.add("open");
  document.getElementById("modal-form").style.display = "block";
  document.getElementById("modal-success").style.display = "none";
  document.getElementById("nav").classList.remove("open");
}

function closeModal() {
  document.getElementById("overlay").classList.remove("open");
}

function submitModal() {
  var email = document.getElementById("modal-email").value;

  if (!email || !email.includes("@")) {
    alert("Please enter a valid email.");
    return;
  }
  
  document.getElementById("modal-form").style.display = "none";
  document.getElementById("modal-success").style.display = "block";
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") closeModal();
});
