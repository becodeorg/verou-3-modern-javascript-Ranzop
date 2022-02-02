import globalVariables from "./globalVariables.js";

const regularFluff = (element, cssClass, parent) => {
    let x = document.createElement(element);
    x.classList.add(cssClass);
    parent.appendChild(x);
    return(x);
}

export default regularFluff;