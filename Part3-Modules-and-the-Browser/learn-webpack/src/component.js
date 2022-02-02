export default (text = "boss rat") => {
    const element = document.createElement("h1");
  
    element.innerHTML = text;
  
    return element;
  };