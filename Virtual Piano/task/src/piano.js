class Piano {
    constructor(containerEl) {
        this.containerEl = containerEl;

        document.addEventListener("keydown", this.handleKeyPressDown.bind(this));
    }
    async handleKeyPressDown(ev) {
        if (!"adefghjstuwy".includes(ev.key)) {
            return;
        }
        const key = ev.key.toUpperCase();

        const audio = new Audio(`sounds/${key}.mp3`);
        await audio.play();
        audio.remove();
    }
}

const piano = new Piano(document.querySelector(".container"));
