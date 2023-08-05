import { drum } from "./data.js";

document.getElementById("drums").checked = true;
const mainEl = document.querySelector("main");
let keys = document.querySelectorAll(".keyboardKey");

const radioButtons = document.querySelectorAll('input[name="toggle"]');

function createElements(data, type) {
    if (type === "drums") {
        const drumsContainer = document.createElement("div");
        drumsContainer.classList = "drums";

        const svg = document.createElement("object");
        svg.classList = "drumSVG";
        svg.setAttribute("data", "images/drumSVGtest.svg");
        svg.type = "image/svg+xml";
        svg.setAttribute(
            "onload",
            "this.parentNode.replaceChild(this.contentDocument.documentElement, this);"
        );

        drumsContainer.append(svg);

        svg.addEventListener("load", () => {
            const newSVG = document.querySelector(".drums svg");
            const drums = newSVG.querySelectorAll(".drum");
            drums.forEach((drum) => {
                drum.addEventListener("click", () => {
                    drum.classList.toggle("drumhit");
                    setTimeout(() => {
                        drum.classList.toggle("drumhit");
                    }, 100);
                    const soundPath = drum.getAttribute("data-sound");
                    const audioPlayer = new Audio(`sounds/${soundPath}`);
                    audioPlayer.play();
                });
            });
            const keys = document.querySelectorAll(".keyboardKey");
            // console.log(keys);
            document.addEventListener("keypress", (e) => {
                // e.key ===
                let i = 1;
                keys.forEach((key) => {
                    if (key.textContent === e.key) {
                        const toggleEl = document.querySelectorAll(
                            `#${key.id}`
                        );
                        toggleEl.forEach((el) => {
                            el.classList.toggle("drumhit");
                        });
                        // key.classList.toggle("drumhit");
                        setTimeout(() => {
                            toggleEl.forEach((el) => {
                                // console.log(el);
                                el.classList.toggle("drumhit");
                            });
                            // key.classList.toggle("drumhit");
                        }, 100);
                        const soundPath = key.getAttribute("data-sound");
                        const audioPlayer = new Audio(`sounds/${soundPath}`);
                        audioPlayer.play();
                    }
                });
            });
            // keys.forEach((key) => {
            //     key.addEventListener("keypress", (e) => {
            //         console.log(e.key);
            //         key.classList.toggle("drumhit");
            //         setTimeout(() => {
            //             key.classList.toggle("drumhit");
            //         }, 1000);
            //         const soundPath = key.getAttribute("data-sound");
            //         const audioPlayer = new Audio(`sounds/${soundPath}`);
            //         audioPlayer.play();
            //     });
            // });
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
    // let keys = document.querySelectorAll(".keyboardKey");

    const drumKeys = ["a", "s", "d", "f", "j", "k", "l", "ø", "æ"];

    let index = 1;
    drumKeys.forEach((key) => {
        const KBKey = document.createElement("div");
        KBKey.classList = "keyboardKey";
        KBKey.id = `drum${index}`;
        KBKey.dataset.sound = `drumsound${index}.wav`;
        KBKey.append((document.createElement("h1").textContent = key));
        index <= 4 ? left.append(KBKey) : right.append(KBKey);
        index++;
    });
    keyboard.append(left, right);
    return keyboard;
}

function render(data, drumtype) {
    mainEl.innerHTML = "";
    if (drumtype === "drums") {
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
