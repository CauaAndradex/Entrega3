export function validateForm() {
  const form = document.querySelector("#cadastroForm");
  if (!form) return;

  const cpf = document.querySelector("#cpfInput");
  const tel = document.querySelector("#telInput");
  const cep = document.querySelector("#cepInput");

  // MÁSCARA CPF
  cpf.addEventListener("input", () => {
    let v = cpf.value.replace(/\D/g, "");
    v = v.replace(/(\d{3})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d{2})$/, "$1-$2");
    cpf.value = v;
  });

  // MÁSCARA TELEFONE
  tel.addEventListener("input", () => {
    let v = tel.value.replace(/\D/g, "");
    v = v.replace(/(\d{2})(\d)/, "($1) $2");
    v = v.replace(/(\d{5})(\d)/, "$1-$2");
    tel.value = v;
  });

  // MÁSCARA CEP
  cep.addEventListener("input", () => {
    let v = cep.value.replace(/\D/g, "");
    v = v.replace(/(\d{5})(\d)/, "$1-$2");
    cep.value = v;
  });

  // VALIDAÇÃO
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
      form.querySelectorAll("input:invalid, select:invalid")
        .forEach(el => el.classList.add("invalid"));
      return;
    }

    // SUCESSO — MOSTRA TOAST
    window.location.hash = "toast-sucesso";
    form.reset();
  });
}
