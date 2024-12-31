import { operations } from "../../Common/Enumerations/Operations.js";

class HomePage extends HTMLElement
{
    constructor()
    {
        super();
    }
    
    applyStyles()
    {
        
    }
    connectedCallback()
    {
        this.innerHTML = `
            Hello
        `;

        this.style.flex = 1;
        this.style.display = "flex";

        this.applyStyles();

    }
}

customElements.define("home-page", HomePage);
export default HomePage;