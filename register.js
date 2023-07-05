import { baseUrl } from "./utils.js";

const main = () => {
  document.getElementById("cancel-button").addEventListener("click", () => window.location.replace("index.html"));

  document.getElementById("register-button").addEventListener("click", async () => {
    const alert = document.getElementById("alert");
    alert.innerHTML = "";

    let data = {
      name: document.getElementById("name").value,
      lastName: document.getElementById("lastName").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
      phone: document.getElementById("phone").value,
      cpf: document.getElementById("cpf").value,
      corpEmail: document.getElementById("corpEmail").value,
      partOf: document.getElementById("partOf").checked,
      role: document.getElementById("role").value,
      instituition: document.getElementById("instituition").value,
      acceptTerms: document.getElementById("acceptTerms").checked,  
    };

    const areaOfInterest = `${document.getElementById("cotton").checked ? `Algodão,` : ""}${document.getElementById("sugarCane").checked ? `Cana de açucar,` : ""}${document.getElementById("soy").checked ? `Soja,` : ""}${document.getElementById("birds").checked ? `Aves,` : ""}${document.getElementById("cocoa").checked ? `Cacau,` : ""}${document.getElementById("swine").checked ? `Suíno,` : ""}${document.getElementById("bovine").checked ? `Bovino,` : ""}${document.getElementById("milk").checked ? `Leite e Derivados,` : ""}${document.getElementById("coffee").checked ? `Café,` : ""}${document.getElementById("fish").checked ? `Pescado,` : ""}`
  
    const formatAreaOfInterest = areaOfInterest.slice(0, -1);

    data = { ...data, areaOfInterest: formatAreaOfInterest };

    try {
      var request = new XMLHttpRequest(); 
      request.open('POST', `${baseUrl}/unauth/signup`, true);
      request.setRequestHeader('Content-Type', 'application/json');
  
      request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
          var responseData = JSON.parse(request.responseText);
          
          alert.innerHTML = "<p>Usuário criado com sucesso!</p>";
        } else {
          console.error('Erro na requisição. Status:', request.status);
        }
      };
  
      request.onerror = function() {
        alert.innerHTML = "<p>Não foi possível cadastrar o usuário.</p>";
      };
  
      request.send(JSON.stringify(data));
    } catch (err) {
      console.log("Ocorreu um erro ao registrar: ", err);
    }
  });
};
 
document.addEventListener("DOMContentLoaded", () => main());
