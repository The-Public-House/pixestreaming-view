import { constructData, postHttp } from "./utils.js";

const main = () => {
  document.getElementById("cancel-button").addEventListener("click", () => window.location.replace("player.html"));

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
      role: document.getElementById("role").value,
      instituition: document.getElementById("instituition").value,
    };

    /*
      let data = {
        ...constructData([
          "name",
          "lastName",
          "email",
          "password",
          "phone",
          "cpf",
          "corpEmail",
          "role",
          "instituition",
        ])
      };
    */

    data = {
      ...data,
      partOf: document.getElementById("partOf").checked,
      acceptTerms: document.getElementById("acceptTerms").checked,  
    };

    const translateCheckbox = (field, text) => document.getElementById(field).checked ? `${text},` : "";

    const areaOfInterest = `
      ${translateCheckbox("cotton", 'Algodão')}
      ${translateCheckbox("sugarCane", 'Cana de Açucar')}
      ${translateCheckbox("soy", 'Soja')}
      ${translateCheckbox("birds", 'Aves')}
      ${translateCheckbox("cocoa", 'Cacau')}
      ${translateCheckbox("swine", 'Suíno')}
      ${translateCheckbox("bovine", 'Bovino')}
      ${translateCheckbox("milk", 'Leite e derivados')}
      ${translateCheckbox("coffee", 'Café')}
      ${translateCheckbox("fish", 'Pescado')}`.replace(' ', '');
  
    const formatAreaOfInterest = areaOfInterest.slice(0, -1);

    data = { ...data, areaOfInterest: formatAreaOfInterest };

    console.log({ data });

    try {
      postHttp(
        '/unauth/signup',
        (data) => {
          console.log(data);
          alert.innerHTML = "<p>Usuário criado com sucesso!</p>";
        },
        () => console.error('Erro na requisição. Status:', request.status),
        () => alert.innerHTML = "<  p>Não foi possível cadastrar o usuário.</p>",
        data
      );

    } catch (err) {
      console.log("Ocorreu um erro ao registrar: ", err);
    }
  });
};
 
document.addEventListener("DOMContentLoaded", () => main());
