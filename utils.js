export const createInput = (id, className, labelText, type) => {
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

export const createButton = (className, onClick, buttonText) => {
  const button = document.createElement("button");
  button.appendChild(document.createTextNode(buttonText));

  button.class = className;

  button.onclick = onClick;

  return button;
}

export const appendChilds = (father, childs) => childs.forEach(value => father.appendChild(value));

export const createTitle = (text) => {
  const title = document.createElement("h1");
  title.appendChild(document.createTextNode(text));
  return title;
};

export const baseUrl = "https://agriland11971.c42.integrator.host/services"
