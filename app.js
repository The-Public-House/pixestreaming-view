import {
  createInput,
  createButton,
  appendChilds,
  createTitle,
  baseUrl,
} from "./utils.js";

const render = () => {
    const root = document.getElementById('root');
    const playerUI = document.getElementById('playerUI');

    const title = createTitle("Login");

    const emailInput = createInput("email", "email-input", "E-mail", "email");

    const passwordInput = createInput("password", "password-input", "Senha", "password");
 
    const onSubmit = async () => {
      try {
        const email = emailInput.value;
        const password = passwordInput.value;
         
        const data = { email, password };
       
        var request = new XMLHttpRequest(); 
        request.open('POST', `${baseUrl}/unauth/forget`, true);
        request.setRequestHeader('Content-Type', 'application/json');
  
        request.onload = function() {
          if (request.status >= 200 && request.status < 400) {
            var data = JSON.parse(request.responseText);
            
            const emitData = {
              name: "login",
              value: data.data
            };
            
            startAfkWarningTimer();
            emitUIInteraction(emitData);
            root.style.display = "none";
	          playerUI.style.visibility = "visible";
          } else {
          console.error('Erro na requisição. Status:', request.status);
          }
        };
  
        request.onerror = function() {
          console.error('Erro na requisição.');
        };
  
        request.send(JSON.stringify(data));
      } catch(err) {
        console.log(err);
      } 
    };
   
    const buttonSubmit = createButton("button-signin", onSubmit, "Entrar");

    const buttonRegister = createButton("button-register", () => window.location.replace("register.html"), "Cadastre-se");

    const buttonForget = createButton("button-forget", () => window.location.replace("forget.html"), "Esqueceu sua senha?");

    const card = document.createElement("div");
  
    card.class = "card-login";

    const footerCard = document.createElement("div");

    footerCard.class = "footer-login";

    appendChilds(footerCard, [buttonRegister, buttonForget]);

    appendChilds(card, [
      title,
      emailInput,
      passwordInput,
      buttonSubmit,
      footerCard, 
    ]);

    root.appendChild(card);

    root.style.position = 'absolute';
    root.style.zIndex = "1";
};

document.addEventListener("DOMContentLoaded", () => render());


