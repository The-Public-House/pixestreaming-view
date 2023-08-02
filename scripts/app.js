const emitUIInteraction = value => console.log(value);

const serverLogin = () => {
  const root = document.getElementById('root');
  const playerUI = document.getElementById('playerUI');

  root.style.display = "none";
  playerUI.style.visibility = "visible";
}

const renderSchedule = data => {
  const list = data.data;
  const playerUI = document.getElementById('playerUI');
  const scheduleContainer = document.createElement('div');

  scheduleContainer.id = 'schedule-container';
  scheduleContainer.className = 'schedule-container';

  const closeScheduleBttn = document.createElement('button');
  closeScheduleBttn.id = 'close-schedule-bttn';
  closeScheduleBttn.className = 'close-schedule-bttn bttn';
  closeScheduleBttn.appendChild(document.createTextNode('X'));
  closeScheduleBttn.onclick = () => playerUI.removeChild(scheduleContainer);

  scheduleContainer.appendChild(closeScheduleBttn);

  const header = document.createElement('div');
  header.id = 'header-display';
  header.className = 'header-display';

  for (let el of ['Nome', 'Local', 'Inicia', 'Finaliza']) {
    const pEl = document.createElement('p');
    pEl.appendChild(document.createTextNode(el));
    
    header.appendChild(pEl);
  }

  scheduleContainer.appendChild(header);

  for (let el of list) {
    const eventName = document.createElement('p');
    eventName.id = 'event-display';
    eventName.ClassName = 'event-display';
    eventName.appendChild(document.createTextNode(el.eventName));

    const place = document.createElement('p');
    place.id = 'event-display';
    place.ClassName = 'event-display';
    place.appendChild(document.createTextNode(el.placeName));    

    const startAt = document.createElement('p');
    startAt.id = 'event-display';
    startAt.className = 'event-display';
    const startAtContent = `${el.startAt.year}/${el.startAt.month}/${el.startAt.day} ${el.startAt.hour}:${el.startAt.minute}`;
    startAt.appendChild(document.createTextNode(startAtContent));

    const endAt = document.createElement('p');
    endAt.id = 'event-display';
    endAt.ClassName = 'event-display';
    const endAtContent = `${el.endAt.year}/${el.endAt.month}/${el.endAt.day} ${el.endAt.hour}:${el.endAt.minute}`;
    endAt.appendChild(document.createTextNode(endAtContent));

    const row = document.createElement('div');
    row.id = 'row';
    row.className = 'row';

    row.appendChild(eventName);
    row.appendChild(place);
    row.appendChild(startAt);
    row.appendChild(endAt);

    scheduleContainer.appendChild(row);
  }
  
  playerUI.appendChild(scheduleContainer);
}

const renderChat = () => {
  const playerUI = document.getElementById('playerUI');
  const chatBttn = document.getElementById('chat-bttn');

  const displayChat = document.createElement('div');
  displayChat.id = 'display-chat';
  displayChat.className = 'display-chat';

  const inputChat = document.createElement('input');
  inputChat.id = 'input-chat';
  inputChat.className = 'input-chat';
  
  const closeChat = document.createElement('button');
  closeChat.id = 'close-chat-bttn';
  closeChat.className = 'close-chat-bttn bttn';
  closeChat.appendChild(document.createTextNode('X'));

  const chatContainer = document.createElement('div');
  chatContainer.id = 'container-chat';
  chatContainer.className = 'container-chat';

  closeChat.onclick = () => {
    chatBttn.style.visibility = 'visible';
    playerUI.removeChild(chatContainer);
  };

  chatContainer.appendChild(closeChat);
  chatContainer.appendChild(displayChat);
  chatContainer.appendChild(inputChat);

  inputChat.addEventListener('keydown', event => {
    if (event.keyCode === 13) {
      const value = inputChat.value;

      const message = document.createElement('p');
      message.appendChild(document.createTextNode(value));

      displayChat.appendChild(message);

      inputChat.value = '';
    }
  });

  chatBttn.style.visibility = 'hidden';
  playerUI.appendChild(chatContainer);
};

const renderHud = () => {
  const playerUI = document.getElementById('playerUI');

  const baseUrl = "http://localhost:9098/auth/schedule";

  const getRequestBase = async (endPoint, onSuccess) => {
    try {
      var request = new XMLHttpRequest(); 
      request.open('GET', `${baseUrl}/${endPoint}`, true);
      request.setRequestHeader('Content-Type', 'application/json');
  
      request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
          var data = JSON.parse(request.responseText);

          onSuccess(data);
        }
      };
  
      request.onerror = function() {
        console.log("aqui2");
        submitContainer.removeChild(animationLoading);
        submitContainer.appendChild(bttnSubmit);

        console.error('Erro na requisição.');
      };
  
      request.send();
    } catch (err) {
      console.log(err);
    }
  }

  const createButton = (id, className, onClick, content) => {
    const button = document.createElement('button');

    button.onclick = onClick;
    button.id = id;
    button.className = className;
    button.appendChild(document.createTextNode(content));

    return button;
  };

  const emit = name => emitUIInteraction({ name });

  const scheduleBttn = createButton(
    'schedule-bttn',
    'schedule-bttn bttn',
    () => getRequestBase("?futures=true&dateType=obj", renderSchedule),
    ''
  );

  const helpBttn = createButton(
    'help-bttn',
    'help-bttn bttn',
    () => {
      emit('help');
    },
    ''
  );

  const avatarBttn = createButton(
    'avatar-bttn',
    'avatar-bttn bttn',
    () => {
      const iframeContainer = document.createElement('div');
      const iframe = document.createElement('iframe');

      iframe.src = 'https://readyplayer.me/avatar?frameApi&bodyType=fullbody';
      iframe.style.width = '1500px';
      iframe.style.height = '900px';
      iframe.id = 'rpm-iframe';
      iframe.className ='rpm-iframe';

      const closeIframe = document.createElement('button');
      closeIframe.appendChild(document.createTextNode('X'));
      closeIframe.onclick = () => playerUI.removeChild(iframeContainer);

      iframeContainer.appendChild(closeIframe);
      iframeContainer.appendChild(iframe)

      playerUI.appendChild(iframeContainer);
    },
    'Avatar'
  );

  const mapBttn = createButton(
    'map-bttn',
    'map-bttn bttn',
    () => {
      emit('openMap');
    },
    ''
  );

  const controlsBttn = createButton(
    'controls-bttn',
    'controls-bttn bttn',
    () => console.log('controls'),
    ''
  );

  const soundBttn = createButton(
    'sound-bttn',
    'sound-bttn bttn',
    () => console.log('sound'),
    ''
  );

  const logoutBttn = createButton(
    'logout-bttn',
    'logout-bttn bttn',
    () => {
      emit('quitAgriland');
    },
    ''
  );

  const chatBttn = createButton(
    'chat-bttn',
    'chat-bttn bttn',
    () => {
      renderChat();
    },
    ''
  );

  const sideLeftBar = document.createElement('div');
  sideLeftBar.className ='side-left-bar';

  const topSideBar = document.createElement('div');
  topSideBar.className = 'top-side-bar';

  const topSideBarElements = [
    avatarBttn,
    mapBttn,
    scheduleBttn,
    controlsBttn,
    soundBttn,
    logoutBttn,
  ]

  for (let el of topSideBarElements) topSideBar.appendChild(el);

  for (let el of [topSideBar, chatBttn]) sideLeftBar.appendChild(el);
  
  const hudElements = [sideLeftBar, helpBttn];

  for (let hudElement of hudElements) playerUI.appendChild(hudElement);
};

const render = () => {
  const loading = () => {
    const mother = document.createElement("div");
    mother.id = "loading";
    mother.className = "lds-ellipsis";

    const one = document.createElement("div");
    const two = document.createElement("div");
    const three = document.createElement("div");
    const four = document.createElement("div");

    mother.appendChild(one);
    mother.appendChild(two);
    mother.appendChild(three);
    mother.appendChild(four);

    return mother;
  }

  const createDivider = (className) => {
    const div = document.createElement("div");

    div.className = className;

    return div;
  };

  const baseUrl = "https://admin-brasilagriland.com.br/services";
  // const baseUrl = "http://localhost:3090";
  
  const createInput = (id, className, labelText, type) => {
    const input = document.createElement("input");
    const label = document.createElement("label");
    
    input.id = id;
    input.type = type;
    
    label.for = id;
    
    label.appendChild(document.createTextNode(labelText));
  
    const div = document.createElement("div");

    div.className = className;
      
    div.appendChild(label);
    div.appendChild(input);
  
    return div;
  };

  const createButton = (className, onClick, buttonText) => {
    const button = document.createElement("button");
    button.appendChild(document.createTextNode(buttonText));
  
    button.className = className;

    button.id = className;
  
    button.onclick = onClick;
  
    return button;
  }

  const createTitle = (text) => {
    const title = document.createElement("h1");
    title.style.color = "#dcdc01";
    title.appendChild(document.createTextNode(text));
    return title;
  };

  const appendChilds = (father, childs) => childs.forEach(value => father.appendChild(value));

  const root = document.getElementById('root');

  const playerUI = document.getElementById('playerUI');

  playerUI.style.visibility = 'hidden';

  const title = createTitle("Login");

  const emailInput = createInput("email", "email-input", "Usuário", "email");

  const passwordInput = createInput("password", "password-input", "Senha", "password");

  const alert = document.createElement("div");
  alert.id = "alert";

  const onSubmit = async () => {
    const alertContainer = document.getElementById("alert");
    alertContainer.innerHTML = "";

    const bttnSubmit = createButton("button-signin", onSubmit, "ENTRAR");
    const submitContainer = document.getElementById("submit-container")
    const animationLoading = loading();
    
    submitContainer.removeChild(document.getElementById('button-signin'));
    submitContainer.appendChild(animationLoading);
    
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
              
            // emitUIInteraction(emitData);
            serverLogin();
            renderHud();
          } else if (!data.hasVerified && data.success) {
            let url = new URL("verify.html", window.location.href);
            url.searchParams.set("email", email);
            console.log(url);
            window.location.replace(url.href);
          } else if (!data.success)  {
            submitContainer.removeChild(animationLoading);
            submitContainer.appendChild(bttnSubmit);

            alertContainer.innerHTML = `<p>Email ou senha estão incorretos</p>`;
          }
        } else {
          console.log("aqui");
          submitContainer.removeChild(animationLoading);
          submitContainer.appendChild(bttnSubmit);

          console.error('Erro na requisição. Status:', request.status);
        }
      };
  
      request.onerror = function() {
        console.log("aqui2");
        submitContainer.removeChild(animationLoading);
        submitContainer.appendChild(bttnSubmit);

        console.error('Erro na requisição.');
      };
  
      request.send(JSON.stringify(data));
    } catch(err) {
      console.log("aqui3");
      submitContainer.removeChild(animationLoading);
      submitContainer.appendChild(bttnSubmit);

      console.log(err);
    }
  };

  // teste = false;

  const dividerTop = createDivider('divider divider-top');

  const dividerFooter = createDivider('divider-footer');
  
  const dividerBottom = createDivider('divider divider-bottom');
   
  const buttonSubmit = createButton("button-signin", onSubmit, "ENTRAR");

  const buttonRegister = createButton("button-register", () => window.location.replace("register.html"), "Cadastre-se");

  const buttonForget = createButton("button-forget", () => window.location.replace("forget.html"), "Esqueceu sua senha?");

  const card = document.createElement("div");
  
  card.className = "card-login";

  card.id = "card-login";

  const footerCard = document.createElement("div");

  footerCard.className = "footer-login";

  const submitContainer = document.createElement("div");
  submitContainer.id = "submit-container";
  submitContainer.appendChild(buttonSubmit);

  appendChilds(footerCard, [buttonRegister, dividerFooter, buttonForget]);

  appendChilds(card, [
    title,
    dividerTop,
    emailInput,
    passwordInput,
    submitContainer,
    dividerBottom,    
    footerCard,
    alert,
  ]);

  root.appendChild(card);

  root.style.position = 'absolute';
  root.style.zIndex = "1";
};

document.addEventListener("DOMContentLoaded", () => render());
