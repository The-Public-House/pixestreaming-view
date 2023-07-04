import { baseUrl } from "./utils.js";

const main = () => {
  document.getElementById("cancel-button").addEventListener("click", () => window.location.replace("index.html"));

  document.getElementById("register-button").addEventListener("click", async () => {
    const data = {
      name: document.getElementById("name").value,
      lastName: document.getElementById("lastName").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
      phone: document.getElementById("phone").value,
      cpf: document.getElementById("cpf").value,
      corpEmail: document.getElementById("corpEmail").value,
      partOf: document.getElementById("partOf").checked,
      role: document.getElementById("role").value,
      areaOfInterest: document.getElementById("areaOfInterest").value,
      instituition: document.getElementById("instituition").value,
      acceptTerms: document.getElementById("acceptTerms").checked,  
    }

    console.log(data);

    try {
      var request = new XMLHttpRequest(); 
      request.open('POST', `${baseUrl}/unauth/signup`, true);
      request.setRequestHeader('Content-Type', 'application/json');
  
      request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
          var responseData = JSON.parse(request.responseText);
          
          console.log(responseData);       
        } else {
          console.error('Erro na requisição. Status:', request.status);
        }
      };
  
      request.onerror = function() {
        console.error('Erro na requisição.');
      };
  
      request.send(JSON.stringify(data));
    } catch (err) {
      console.log("Ocorreu um erro ao registrar: ", err);
    }
      
  });
};
 
document.addEventListener("DOMContentLoaded", () => main());
