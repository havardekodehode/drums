import { goats } from "./data.js";

const mainEl = document.getElementById("main");

const audioPlayer = new Audio;

document.addEventListener("click",(e)=>{
    // if(e.target.dataset === )
    switch (e.target.dataset.property) {
        case "image1":
            console.log("white goat");
            break;
        case "image2":
            console.log("brown goat");

            break;
        case  "image3":
            
            break;
        case "image4":
            
            break;
        case "image5":
            
            break;
        case "image6":
            
            break;
        case "image7":
            
            break;
        case "image8":
            
            break;
        case "image9":
            
            break;
    
        default:
            break;
    }
})

function render(){
    const goatContainer = document.createElement("div")
    goatContainer.classList = "goats"

    goats.forEach(goat => {
        const goatButton = document.createElement("button")
        goatButton.classList = "goatButton"
        goatButton.style.backgroundImage = `url(${goat.image})`
        goatButton.dataset.property = goat.goat
        goatContainer.append(goatButton)
    });

    mainEl.append(goatContainer)

}

render()

