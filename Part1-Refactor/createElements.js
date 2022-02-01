
export default function createElement() {
let x;
const createElement = (element, cssClass, parent) => {
    x = document.createElement(element);
    x.classList.add(cssClass);
    parent.appendChild(x);
    return (x);
};
};


  // Create the elements with Data
                                    /* const card = document.createElement('div');
                                    card.classList.add("card");
                                    container.appendChild(card); */
