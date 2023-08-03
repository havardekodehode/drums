import { drum } from "./data.js";

document.getElementById("drums").checked = true;
const mainEl = document.querySelector("main");
let keys = document.querySelectorAll(".keyboardKey");

const radioButtons = document.querySelectorAll('input[name="toggle"]');

function createElements(data, type) {
    // const keyboard = document.createElement("div");
    // keyboard.classList = "keyboard";
    // const left = document.createElement("div");
    // left.classList = "left";
    // const right = document.createElement("div");
    // right.classList = "right";

    // const goatContainer = document.createElement("div");
    // goatContainer.classList = name;

    // function playSound() {
    //     console.log("ææææææ");
    //     const audioPlayer = new Audio();
    //     audioPlayer.scr = "sounds/sound1.mp3";
    //     audioPlayer.play();
    // }

    if (type === "drums") {
        const drumsContainer = document.createElement("div");
        drumsContainer.classList = "drums";
        const img = document.createElement("img");
        img.src = "images/drumSet.png";
        drumsContainer.append(img);

        const buttonsRelContainer = document.createElement("div");
        buttonsRelContainer.classList = "buttonsRelContainer";

        drum[1].forEach((drum) => {
            const buttonsRelContainer = document.createElement("div");
            buttonsRelContainer.classList = `buttonsRelContainer${drum.name}`;
            const btn = document.createElement("button");
            btn.classList = drum.name;
            btn.style.opacity = "0";
            btn.dataset.property = `images/${drum.sound}`;

            btn.addEventListener("click", () => {
                // console.log("AAbbcc");
                const audioPlayer = new Audio();
                audioPlayer.src = `sounds/${drum.sound}`;
                audioPlayer.play();
            });

            buttonsRelContainer.append(btn);
            drumsContainer.append(buttonsRelContainer);
        });
        return drumsContainer;
    } else {
        const goats = document.createElement("div");
        goats.classList = "goats";

        drum[0].forEach((goat) => {
            const container = document.createElement("div");
            const buttonContainer = document.createElement("div");
            const goatButton = document.createElement("button");
            const key = document.createElement("div");
            container.classList = "buttonContainerWKey";
            buttonContainer.classList = "buttonContainer";
            goatButton.classList = "goatButton";
            goatButton.dataset.property = goat.goat;
            goatButton.style.backgroundImage = `url(${goat.image})`;
            key.textContent = goat.key;
            key.classList = "key";
            buttonContainer.append(goatButton);
            container.append(buttonContainer, key);
            goats.append(container);
        });
        return goats;
        // data.forEach((goat) => {});
    }
}

function createKeys() {
    const keyboard = document.createElement("div");
    keyboard.classList = "keyboard";
    const left = document.createElement("div");
    left.classList = "left";
    const right = document.createElement("div");
    right.classList = "right";
    let keys = document.querySelectorAll(".keyboardKey");

    const keyboardLeft = ["a", "s", "d", "f"];
    const keyboardRight = ["j", "k", "l", "ø", "æ"];
    keyboardLeft.forEach((key) => {
        const KBKey = document.createElement("div");
        KBKey.classList = "keyboardKey";
        KBKey.id = `${key}Key`;

        KBKey.append((document.createElement("h1").textContent = key));
        left.append(KBKey);
    });

    keyboardRight.forEach((key) => {
        const KBKey = document.createElement("div");
        KBKey.classList = "keyboardKey";

        KBKey.append((document.createElement("h1").textContent = key));
        right.append(KBKey);
    });

    keyboard.append(left, right);
    return keyboard;
}

function render(data, drumtype) {
    mainEl.innerHTML = "";
    if (drumtype === "drums") {
        // mainEl.innerHTML = "";
        console.log(createKeys);
        mainEl.append(createElements(data, drumtype), createKeys());
    } else {
        mainEl.innerHTML = "";
        mainEl.append(createElements(data, drumtype), createKeys());
    }
}

for (let radio of radioButtons) {
    radio.checked ? render(drum, radio.value) : null;
    radio.addEventListener("change", () =>
        radio.checked ? render(drum, radio.value) : null
    );
}
