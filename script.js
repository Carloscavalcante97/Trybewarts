function logarnosite() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("senha").value;

  if (email === "tryber@teste.com" && password === "123456") {
    alert("Olá, Tryber!");
  } else {
    alert("Email ou senha inválidos.");
  }
}
logarnosite();
function enviarForm() {
  const name = document.getElementById("input-name").value;
  const lastname = document.getElementById("input-lastname").value;
  const email = document.getElementById("input-email").value;
  const house = document.getElementById("house").value;
  if (!name || !lastname || !email || !house) {
    alert("Por favor, preencha todos os campos.");
  } else {
    const formDataContainer = document.createElement("div");
    formDataContainer.id = "form-data";

    const nameField = document.createElement("p");
    nameField.textContent = `Nome: ${name} ${lastname}`;

    const emailField = document.createElement("p");
    emailField.textContent = `Email: ${email}`;

    const houseField = document.createElement("p");
    houseField.textContent = `Casa: ${house}`;
    const familyField = document.createElement("p");
    const selectedFamily = document.querySelector(
      'input[name="family"]:checked'
    ).value;
    familyField.textContent = `Família: ${selectedFamily}`;
    const selectedSubjects = Array.from(
      document.querySelectorAll('input[name="subject"]:checked')
    )
      .map((subject) => subject.value)
      .join(", ");

    const subjectsField = document.createElement("p");
    subjectsField.textContent = `Matérias: ${selectedSubjects}`;
    formDataContainer.appendChild(nameField);
    formDataContainer.appendChild(emailField);
    formDataContainer.appendChild(houseField);
    formDataContainer.appendChild(familyField);
    formDataContainer.appendChild(subjectsField);
    const evaluationForm = document.getElementById("evaluation-form");
    evaluationForm.parentNode.replaceChild(formDataContainer, evaluationForm);
  }
}
const feedbackWrapper = document.getElementById("feedback-wrapper");
const feedbackLabel = document.getElementById("feedback-label");
const feedbackTextarea = document.getElementById("feedback");
feedbackWrapper.addEventListener(
  "click",
  () => {
    feedbackTextarea.value = "";
    feedbackLabel.style.display = "none";
    feedbackTextarea.focus();
  },
  { once: true }
);
feedbackTextarea.addEventListener("input", () => {
  if (feedbackTextarea.value.trim() === "") {
    feedbackLabel.style.display = "block";
  } else {
    feedbackLabel.style.display = "none";
  }
});

const textarea = document.getElementById("feedback");
const charCounter = document.getElementById("counter");
const maxChars = 500;
textarea.addEventListener("input", () => {
  const currentChars = textarea.value.length;
  const remainingChars = maxChars - currentChars;
  charCounter.textContent = `${remainingChars}  `;
});

const agreementCheckbox = document.getElementById("agreement");
const submitButton = document.getElementById("submit-btn");
agreementCheckbox.addEventListener("change", () => {
  submitButton.disabled = !agreementCheckbox.checked;
});
enviarForm();
