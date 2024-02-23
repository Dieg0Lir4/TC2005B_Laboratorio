var valida = false;

document.getElementById("password").addEventListener("input", () => {

  let pass = document.getElementById("password").value;

  //checar si tiene un numero la contraseña
  let hasNumber = false;
  for (let i = 0; i < pass.length; i++) {
    if (!isNaN(pass[i])) {
      hasNumber = true;
    }
  }

  //checar si tiene un caracter especial
  let hasSpecial = false;
  let special = ["!", "@", "#", "$", "%", "&", "*"];
  for (let i = 0; i < pass.length; i++) {
    if (special.includes(pass[i])) {
      hasSpecial = true;
    }
  }

  if (pass.length < 8) {
    document.getElementById("passwordReminder").innerHTML =
      "Tu contraseña debe tener al menos 8 caracteres";
    document.getElementById("passwordReminder").style.display = "block";
    valida = false;
  } else {
    document.getElementById("passwordReminder").style.display = "none";
    if (hasNumber) {
      document.getElementById("passwordReminder").style.display = "none";
      if (hasSpecial) {
        document.getElementById("passwordReminder").style.display = "none";
        valida = true;
      } else {
        document.getElementById("passwordReminder").innerHTML =
          'Tu contraseña debe tener al menos un caracter especial ["!", "@", "#", "$", "%", "&", "*"]';
        document.getElementById("passwordReminder").style.display = "block";
        valida = false;
      }
    } else {
      document.getElementById("passwordReminder").innerHTML =
        "Tu contraseña debe tener al menos un número";
      document.getElementById("passwordReminder").style.display = "block";
      valida = false;
    }
  }

  if (!valida) {
    document.getElementById("puerta").src = "./puertaCerrada.png";
    document.getElementById("puerta").classList.remove("border-lime-400");
    document.getElementById("puerta").classList.add("border-red-400");
    document.getElementById("respuesta").innerHTML = "La contraseña no es valida";
  }
});

document.getElementById("password").addEventListener("blur", () => {
  document.getElementById("passwordReminder").style.display = "none";
});

document.getElementById("confirmPassword").addEventListener("input", () => {
  if (
    (document.getElementById("password").value ===
    document.getElementById("confirmPassword").value) && valida
  ) {
    document.getElementById("respuesta").innerHTML = "La contraseña es valida";
    document.getElementById("puerta").src = "./puertaAbierta.png";
    document.getElementById("puerta").classList.remove("border-red-400");
    document.getElementById("puerta").classList.add("border-lime-400");
  }else{
    document.getElementById("respuesta").innerHTML = "La contraseña no es valida";
    document.getElementById("respuesta").classList.add("text-red-400");
    document.getElementById("puerta").src = "./puertaCerrada.png";
    document.getElementById("puerta").classList.remove("border-lime-400");
    document.getElementById("puerta").classList.add("border-red-400");
  }
});
