let userData;
let helpInactive = true;

const emitUIInteraction = value => console.log(value);

const renderQuit = () => {
  const playerUI = document.getElementById('playerUI');


};

const renderControlls = () => {
  const playerUI = document.getElementById('playerUI');

  const controllContainer = document.createElement('div');
  controllContainer.id = 'controll-container';
  controllContainer.className = 'controll-container';

  const headerControll = document.createElement('p');
  headerControll.id = 'header-controll';
  headerControll.className = 'header-controll';

  const controlls = document.createElement('div');
  controlls.id = 'controlls';
  controlls.className = 'controlls';

  const upControll = document.createElement('p');
  upControll.id = 'up-controll';
  upControll.className = 'up-controll';
  upControll.appendChild(document.createTextNode('W'))

  const upControllLabel = document.createElement('p');

  const upControllContainer = document.createElement('div');
  upControllContainer.id = 'upControllContainer';
  upControllContainer.id = 'up-controll-container';
  
  upControllContainer.appendChild(upControllLabel);
  upControllContainer.appendChild(upControll);

  const leftControll = document.createElement('p');
  leftControll.id = 'left-controll';
  leftControll.className = 'left-controll';
  leftControll.appendChild(document.createTextNode('A'))

  const leftControllLabel = document.createElement('p');
  leftControllLabel.id = 'left-controll-label';
  leftControllLabel.className = 'left-controll-label';

  const leftControllContainer = document.createElement('div');
  leftControllContainer.id = 'leftControllContainer';
  leftControllContainer.id = 'left-controll-container';
  
  leftControllContainer.appendChild(leftControllLabel);
  leftControllContainer.appendChild(leftControll);

  const rightControll = document.createElement('p');
  rightControll.id = 'right-controll';
  rightControll.className = 'right-controll';
  rightControll.appendChild(document.createTextNode('D'))

  const rightControllLabel = document.createElement('p');
  rightControllLabel.id = 'right-controll-label';
  rightControllLabel.label = 'right-controll-label';
  
  const rightControllContainer = document.createElement('div');
  rightControllContainer.id = 'rightControllContainer';
  rightControllContainer.id = 'right-controll-container';
  
  rightControllContainer.appendChild(rightControllLabel);
  rightControllContainer.appendChild(rightControll);

  const downControll = document.createElement('p');
  downControll.id = 'down-controll';
  downControll.className = 'down-controll';
  downControll.appendChild(document.createTextNode('S'))

  const downControllLabel = document.createElement('p');
  downControllLabel.id = 'down-controll-label';
  downControllLabel.className = 'down-controll-label';
  
  const downControllContainer = document.createElement('div');
  downControllContainer.id = 'downControllContainer';
  downControllContainer.id = 'down-controll-container';
  
  downControllContainer.appendChild(downControllLabel);
  downControllContainer.appendChild(downControll);

  const cameraControll = document.createElement('p');
  cameraControll.id = 'camera-controll';
  cameraControll.className = 'camera-controll';
  cameraControll.appendChild(document.createTextNode('V'))

  const cameraControllLabel = document.createElement('p');
  cameraControllLabel.id = 'camera-controll-label';
  cameraControllLabel.className = 'camera-controll-label';

  const cameraControllContainer = document.createElement('div');
  cameraControllContainer.id = 'cameraControllContainer';
  cameraControllContainer.id = 'camera-controll-container';
  
  cameraControllContainer.appendChild(cameraControllLabel);
  cameraControllContainer.appendChild(cameraControll);

  const jumpControll = document.createElement('p');
  jumpControll.id = 'jump-controll';
  jumpControll.className = 'jump-controll';
  jumpControll.appendChild(document.createTextNode('Barra de Espaço'))

  const jumpControllLabel = document.createElement('p');
  jumpControllLabel.id = 'jump-controll-label';

  const jumpControllContainer = document.createElement('div');
  jumpControllContainer.id = 'jumpControllContainer';
  jumpControllContainer.id = 'jump-controll-container';
  
  jumpControllContainer.appendChild(jumpControllLabel);
  jumpControllContainer.appendChild(jumpControll);

  const leftContainer = document.createElement('div');
  leftContainer.id = 'left-container-controll';
  leftContainer.className = 'left-container-controll side-container-controll';

  leftContainer.appendChild(upControllContainer);
  leftContainer.appendChild(leftControllContainer);
  leftContainer.appendChild(rightControllContainer);
  leftContainer.appendChild(downControllContainer);

  const rightContainer = document.createElement('div');
  rightContainer.id = 'right-container-controll';
  rightContainer.className = 'right-container-controll side-container-controll';

  rightContainer.appendChild(cameraControllContainer);
  rightContainer.appendChild(jumpControllContainer);

  controlls.appendChild(leftContainer);
  controlls.appendChild(rightContainer);

  controllContainer.appendChild(headerControll);
  controllContainer.appendChild(controlls);

  playerUI.appendChild(controllContainer);
};

const renderTutorial  = () => {
  const playerUI = document.getElementById('playerUI');

  const tutorialContainer = document.createElement('div');
  tutorialContainer.id = 'tutorial-container';
  tutorialContainer.className = 'tutorial-container';

  const tutorialPlayer = document.createElement('div');
  tutorialPlayer.id = 'tutorial-player';
  tutorialPlayer.className = 'tutorial-player';

  const player = document.createElement('video');
  player.src = './video/Video_Tutorial.mp4';
  player.id = 'player';
  player.className = 'player';

  const markProgress = document.createElement('div');
  
  player.addEventListener('timeupdate', () => {
    const currentMinutos = Math.floor(player.currentTime / 60);
    const currentSegundos = Math.floor(player.currentTime % 60).toString().padStart(2, '0');
    document.getElementById('video-timer').innerHTML = `00:${currentMinutos.toString().padStart(2, '0')}:${currentSegundos}`
    document.getElementById('mark-progress').style.marginLeft = '3';

    const duracaoTotal = player.duration;
    const tempoAtual = player.currentTime;

    const porcentagemCompleta = (tempoAtual / duracaoTotal) * 100;

    document.getElementById('mark-progress').style.marginLeft = `${porcentagemCompleta}%`;

  });

  const controlls = document.createElement('div');
  controlls.id = 'player-controlls';
  controlls.className = 'player-controlls';
  
  const progressVideo = document.createElement('div');
  progressVideo.id = 'progress-video';
  progressVideo.className = 'progress-video';

  markProgress.id = 'mark-progress';
  markProgress.className = 'mark-progress';

  progressVideo.appendChild(markProgress);
  
  let playVideo = true;

  const playBttn = document.createElement('button');
  playBttn.id = 'play-bttn';
  playBttn.className = 'play-bttn bttn';
  playBttn.onclick = () => {
    if (playVideo) {
      player.play()
      playVideo = false;
    } else {
      player.pause();
      playVideo = true;
    }
  };

  const videoTimer = document.createElement('p');
  videoTimer.id = 'video-timer';
  videoTimer.className = 'video-timer';
  videoTimer.appendChild(document.createTextNode('00:00:00'));

  controlls.appendChild(progressVideo);
  controlls.appendChild(playBttn);
  controlls.appendChild(videoTimer);

  tutorialPlayer.appendChild(player);
  tutorialPlayer.appendChild(controlls);

  const tutorialActions = document.createElement('div');
  tutorialActions.id = 'tutorial-actions';
  tutorialActions.className = 'tutorial-actions';
  
  const maximizeContainer = document.createElement('div');
  maximizeContainer.id = 'minimize-container';
  maximizeContainer.className = 'minimize-container';

  const minimizeContainer = document.createElement('div');

  const closeContainer = document.createElement('div');

  const maximizeBttn = document.createElement('button');
  maximizeBttn.id = 'maximize-bttn';
  maximizeBttn.className = 'maximize-bttn bttn';
  maximizeBttn.onclick = () => {
    tutorialContainer.style.width = '70%';
    tutorialContainer.style.height = '90%';
    tutorialContainer.style.top = '50%';
    tutorialContainer.style.left = '50%';
    tutorialContainer.style.transform = 'translate(-50%, -50%)';

    document.getElementById('tutorial-player').style.height = '95%';
    document.getElementById('progress-video').style.bottom = '148px';
    document.getElementById('play-bttn').style.bottom = '81px';
    document.getElementById('video-timer').style.bottom = '33px';
    
    tutorialActions.removeChild(closeContainer);
    tutorialActions.removeChild(maximizeContainer);

    tutorialActions.appendChild(minimizeContainer)
    tutorialActions.appendChild(closeContainer)
  }

  const maximizeLabel = document.createElement('p');
  maximizeLabel.id = 'maximize-label';
  maximizeLabel.className = 'maximize-label';
  maximizeLabel.appendChild(document.createTextNode('Maximizar Player'));

  maximizeContainer.appendChild(maximizeBttn);
  maximizeContainer.appendChild(maximizeLabel);

  minimizeContainer.id = 'minimize-container';
  minimizeContainer.className = 'minimize-container';

  const minimizeBttn = document.createElement('button');
  minimizeBttn.id = 'minimize-bttn';
  minimizeBttn.className = 'minimize-bttn bttn';
  minimizeBttn.onclick = () => {
    tutorialContainer.style.width = '20%';
    tutorialContainer.style.height = '40%';
    tutorialContainer.style.top = '30%';
    tutorialContainer.style.left = '15%';

    document.getElementById('tutorial-player').style.height = '85%';
    document.getElementById('progress-video').style.bottom = '167px';
    document.getElementById('play-bttn').style.bottom = '100px';
    document.getElementById('video-timer').style.bottom = '52px';

    tutorialContainer.style.top
    
    tutorialActions.appendChild(closeContainer)
    tutorialActions.removeChild(minimizeContainer);
    tutorialActions.appendChild(maximizeContainer)
    tutorialActions.appendChild(closeContainer)
  }

  const minimizeLabel = document.createElement('p');
  minimizeLabel.id = 'minimize-label';
  minimizeLabel.className = 'minimize-label';
  minimizeLabel.appendChild(document.createTextNode('Reduzir Player'));

  minimizeContainer.appendChild(minimizeBttn);
  minimizeContainer.appendChild(minimizeLabel);
  
  closeContainer.id = 'close-container';
  closeContainer.className = 'close-container';

  const closeBttn = document.createElement('button');
  closeBttn.id = 'close-bttn-video';
  closeBttn.className = 'close-bttn-video bttn';
  closeBttn.onclick = () => {
    helpInactive = true;
    playerUI.removeChild(tutorialContainer)
  };

  const closeLabel = document.createElement('p');
  closeLabel.id = 'close-label';
  closeLabel.className = 'close-label';
  closeLabel.appendChild(document.createTextNode('Fechar Player'));

  closeContainer.appendChild(closeBttn);
  closeContainer.appendChild(closeLabel);

  tutorialActions.appendChild(minimizeContainer);
  tutorialActions.appendChild(closeContainer);

  tutorialContainer.appendChild(tutorialPlayer);
  tutorialContainer.appendChild(tutorialActions);

  playerUI.appendChild(tutorialContainer);
};

const renderRPM  = () => {
  window.addEventListener('message', subscribe);
  document.addEventListener('message', subscribe);

  function subscribe(event) {
      const json = parse(event);

      if (json?.source !== 'readyplayerme') {
          return;
      }

      if (json.eventName === 'v1.frame.ready') {
          frame.contentWindow.postMessage(
              JSON.stringify({
                  target: 'readyplayerme',
                  type: 'subscribe',
                  eventName: 'v1.**'
              }),
              '*'
          );
      }

      if (json.eventName === 'v1.avatar.exported') {
          console.log(`Avatar URL: ${json.data.url}`);
      }

      if (json.eventName === 'v1.user.set') {
          console.log(`User with id ${json.data.id} set: ${JSON.stringify(json)}`);
      }
  }

  function parse(event) {
      try {
          return JSON.parse(event.data);
      } catch (error) {
          return null;
      }
  }

  const iframeContainer = document.createElement('div');
  iframeContainer.id = 'iframe-container';
  iframeContainer.className = 'iframe-container';
  iframeContainer.style.width = '1500px';
  iframeContainer.style.height = '900px';
  
  const iframe = document.createElement('iframe')
  iframe.src = 'https://readyplayer.me/avatar?frameApi&bodyType=fullbody';
  iframe.id = 'rpm-iframe';
  iframe.className ='rpm-iframe'
  
  const closeIframe = document.createElement('button');
  closeIframe.appendChild(document.createTextNode('X'));
  closeIframe.onclick = () => playerUI.removeChild(iframeContainer);
  closeIframe.id = 'close-frame-bttn';
  closeIframe.className = 'close-frame-bttn bttn'
  
  iframeContainer.appendChild(closeIframe);
  iframeContainer.appendChild(iframe)
  
  playerUI.appendChild(iframeContainer);
}

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

const renderChat = (chatNameText) => {
  const playerUI = document.getElementById('playerUI');
  const chatBttn = document.getElementById('chat-bttn');

  const displayChat = document.createElement('div');
  displayChat.id = 'display-chat';
  displayChat.className = 'display-chat';

  const inputChat = document.createElement('input');
  inputChat.id = 'input-chat';
  inputChat.className = 'input-chat';
  inputChat.placeholder = "Pressione 'Enter' para interagir com o chat";
  
  const closeChat = document.createElement('button');
  closeChat.id = 'close-chat-bttn';
  closeChat.className = 'close-chat-bttn bttn';
  closeChat.appendChild(document.createTextNode(''));

  const chatContainer = document.createElement('div');
  chatContainer.id = 'container-chat';
  chatContainer.className = 'container-chat';

  closeChat.onclick = () => {
    chatBttn.style.visibility = 'visible';
    playerUI.removeChild(chatContainer);
  };

  const chatName = document.createElement('p');
  chatName.id = 'chat-name';
  chatName.className = 'chat-name';
  chatName.appendChild(document.createTextNode(`Chat ${chatNameText}`));

  chatContainer.appendChild(chatName);
  chatContainer.appendChild(closeChat);
  chatContainer.appendChild(displayChat);
  chatContainer.appendChild(inputChat);

  inputChat.addEventListener('keydown', event => {
    if (event.keyCode === 13) {
      const value = inputChat.value;

      if (value !== '') {
        const user = document.createElement('p');
        user.appendChild(document.createTextNode(`${userData.userData.name} ${userData.userData.lastName}:`));
        user.id = 'user-message';
        user.className = 'user-message';
  
        const message = document.createElement('p');
        message.appendChild(document.createTextNode(`${value}`));
        message.id = 'text-message';
        message.className = 'text-message';
  
        const messageContainer = document.createElement('div');
        messageContainer.id = 'message-container';
        messageContainer.className = 'message-container';
  
        messageContainer.appendChild(user);
        messageContainer.appendChild(message);
  
        displayChat.appendChild(messageContainer);
  
        inputChat.value = '';
  
        displayChat.scrollTop = displayChat.scrollHeight;
  
        emitUIInteraction({  })
      }
    }
  });

  chatBttn.style.visibility = 'hidden';
  playerUI.appendChild(chatContainer);
};

const renderHud = () => {
  const playerUI = document.getElementById('playerUI');

  const baseUrl = "http:///auth/schedule";

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
      if (helpInactive) {
        helpInactive = false;
        renderTutorial();
      }
    },
    ''
  );

  const avatarBttn = createButton(
    'avatar-bttn',
    'avatar-bttn bttn',
    renderRPM,
    ''
  );

  if (userData.rpmLink) avatarBttn.style.backgroundImage = `url("${(userData.rpmLink).replace('.glb', '.png')}")`;

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
    renderControlls,
    ''
  );

  const soundBttn = createButton(
    'sound-bttn',
    'sound-bttn bttn',
    () => emit('sound'),
    ''
  );

  const logoutBttn = createButton(
    'logout-bttn',
    'logout-bttn bttn',
    renderQuit,
    ''
  );

  const chatBttn = createButton(
    'chat-bttn',
    'chat-bttn bttn',
    () => {
      renderChat('local');
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
            userData = data.data;
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


