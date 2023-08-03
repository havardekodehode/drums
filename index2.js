import { drum } from "./data.js";

const mainEl = document.querySelector("main");
let keys = document.querySelectorAll(".keyboardKey");

const radioButtons = document.querySelectorAll('input[name="toggle"]');

function createElements(data, type) {
    const keyboard = document.createElement("div");
    keyboard.classList = "keyboard";
    const left = document.createElement("div");
    left.classList = "left";
    const right = document.createElement("div");
    right.classList = "right";

    const goatContainer = document.createElement("div");
    goatContainer.classList = name;

    if (type === "drums") {
        const div = document.createElement("div");
        div.classList = "drums";
        const img = document.createElement("img");
        img.src = "images/drumsSet.png";
    } else {
        data.forEach((goat) => {
            const containerWKey = document.createElement("div");
            containerWKey.classList = "buttonContainerWKey";
            const container = document.createElement("div");
            container.classList = "buttonContainer";
            const dekstopKey = document.createElement("div");
            dekstopKey.classList = "key";
            dekstopKey.textContent = goat.key;
            const goatButton = document.createElement("button");
            goatButton.classList = "goatButton";
            goatButton.style.backgroundImage = `url(${goat.image})`;
            goatButton.dataset.property = goat.goat;

            const keyboardLeft = ["a", "s", "d", "f"];
            // const keyboardRight = ["j", "k", "l", "ø"];
            const KBKey = document.createElement("div");
            KBKey.classList = "keyboardKey";
            if (keyboardLeft.includes(goat.key)) {
                KBKey.append(
                    (document.createElement("h1").textContent = goat.key)
                );
                left.append(KBKey);
            } else {
                KBKey.append(
                    (document.createElement("h1").textContent = goat.key)
                );
                right.append(KBKey);
            }

            // goatButton.addEventListener("click", play(goat, container));
            // document.addEventListener("keypress", async (e) =>
            //     e.key === goat.key ? play(goat, container, e) : null
            // );

            container.append(goatButton);
            containerWKey.append(container, dekstopKey);
            goatContainer.append(containerWKey);
            keyboard.append(left, right);
            mainEl.append(goatContainer, keyboard);
            keys = document.querySelectorAll(".keyboardKey");
        });
    }
}

async function play(goat, container, e) {
    const delay = (ms) => new Promise((res) => setTimeout(res, ms));

    const audioPlayer = new Audio();
    audioPlayer.src = goat.sound;
    audioPlayer.play();
    // const keykey = HTMLElement;
    console.log(keys);
    keys.forEach((key) => {
        if (key.textContent === goat.key) {
            key.style.backgroundColor = "red";
        }
    });
    container.style.backgroundColor = "red";
    // keykey.style.backgroundColor = "red";
    await delay(1000);
    keys.forEach((key) => {
        if (key.textContent === goat.key) {
            key.style.backgroundColor = "gray";
        }
    });
    container.style.backgroundColor = "black";
}

function render(data, drumtype) {
    if (drumtype === "drums") {
        // mainEl.innerHTML = "";
        // mainEl.append(createElements(data, drumtype));
    } else {
        // mainEl.innerHTML = "";
        mainEl.append(createElements(data, drumtype));
    }
}

for (let radio of radioButtons) {
    radio.addEventListener("change", () =>
        radio.checked ? render(drum, radio.value) : null
    );
}
// alert(radio.value)
//
