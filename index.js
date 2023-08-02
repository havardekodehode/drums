import { drum } from "./data.js";

const mainEl = document.getElementById("main");

async function play(goat, container){
    const delay = ms => new Promise(res => setTimeout(res, ms));

    const audioPlayer = new Audio;
    audioPlayer.src=goat.sound
    audioPlayer.play()
    container.style.backgroundColor="red"
    await delay(1000);
    container.style.backgroundColor="black"
}

function render(drum, name){
    const goatContainer = document.createElement("div")
    goatContainer.classList = name

    drum.forEach(goat => {
        const containerWKey = document.createElement("div")
        containerWKey.classList= "buttonContainerWKey"
        const container = document.createElement("div")
        container.classList= "buttonContainer"
        const dekstopKey = document.createElement("div")
        dekstopKey.classList = "key"
        dekstopKey.textContent = goat.key
        // dekstopKey.style.display = "none"
        const goatButton = document.createElement("button")
        goatButton.classList = "goatButton"
        goatButton.style.backgroundImage = `url(${goat.image})`
        goatButton.dataset.property = goat.goat

        goatButton.addEventListener("click",()=>play(goat, container))
        document.addEventListener("keypress", async(e) => e.key === goat.key?play(goat, container):null);



        container.append(goatButton)
        containerWKey.append(container, dekstopKey)
        goatContainer.append(containerWKey)
    });

    mainEl.append(goatContainer)

}

render(drum[0], "goats")


