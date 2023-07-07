const render = () => {
  const baseUrl = "https://agriland11971.c42.integrator.host/services";

  const createInput = (id, className, labelText, type) => {
    const input = document.createElement("input");
    const label = document.createElement("label");
    
    input.id = id;
    input.type = type;
     
    label.for = id;
    
    label.appendChild(document.createTextNode(labelText));
  
    const div = document.createElement("div");
      
    div.appendChild(label);
    div.appendChild(input);
  
    return div;
  };

  const createButton = (className, onClick, buttonText) => {
    const button = document.createElement("button");
    button.appendChild(document.createTextNode(buttonText));
  
    button.class = className;
  
    button.onclick = onClick;
  
    return button;
  }

  const createTitle = (text) => {
    const title = document.createElement("h1");
    title.appendChild(document.createTextNode(text));
    return title;
  };

  const appendChilds = (father, childs) => childs.forEach(value => father.appendChild(value));

  const root = document.getElementById('root');
  // const playerUI = document.getElementById('playerUI');

  const title = createTitle("Login");

  const emailInput = createInput("email", "email-input", "E-mail", "email");

  const passwordInput = createInput("password", "password-input", "Senha", "password");
 
  const onSubmit = async () => {
    try {
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
         
      const data = { email, password };

      var request = new XMLHttpRequest(); 
      request.open('POST', `${baseUrl}/unreal/signin`, true);
      request.setRequestHeader('Content-Type', 'application/json');
  
      request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
          var data = JSON.parse(request.responseText);

          if (data.data) {
            const emitData = {
              name: "login",
              value: data.data
            };
              
            // startAfkWarningTimer();
            // emitUIInteraction(emitData);
            // root.style.display = "none";
            // playerUI.style.visibility = "visible";

          } else if (!data.hasVerified) window.location.replace("verify.html");
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

  // teste = false;
   
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
