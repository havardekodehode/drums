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

    if (type === "drums") {
        const div = document.createElement("div");
        div.classList = "drums";
        const img = document.createElement("img");
        img.src = "images/drumSet.png";
        div.append(img);
        return div;
    } else {
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
    if (drumtype === "drums") {
        // mainEl.innerHTML = "";
        mainEl.append(createElements(data, drumtype), createKeys());
    } else {
        mainEl.innerHTML = "";
        // mainEl.append(createElements(data, drumtype));
    }
}

for (let radio of radioButtons) {
    radio.checked ? render(drum, radio.value) : null;
    radio.addEventListener("change", () =>
        radio.checked ? render(drum, radio.value) : null
    );
}
