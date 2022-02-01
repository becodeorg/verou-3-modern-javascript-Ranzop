const container = document.querySelector(".container");

const resetWeather = () => {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    };
}

export default resetWeather;