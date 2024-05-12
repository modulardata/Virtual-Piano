// class Piano {
//     constructor(containerEl) {
//         this.containerEl = containerEl;
//
//         document.addEventListener("keydown", this.handleKeyPressDown.bind(this));
//     }
//     async handleKeyPressDown(ev) {
//         if (!"asdfghj".includes(ev.key)) {
//             console.warn("Warning");
//             return;
//         }
//         const key = ev.key.toUpperCase();
//
//         const audio = new Audio(`./sounds/${key}.mp3`);
//         await audio.play();
//         audio.remove();
//     }
// }
//
// const piano = new Piano(document.querySelector(".container"));

document.addEventListener("DOMContentLoaded", event => {
    const keys = ['A', 'S', 'D', 'F', 'G', 'H', 'J'];
    const container = document.querySelector('.container');

    for (let k of keys) {
        let key = document.createElement('kbd');
        key.textContent = k;
        container.appendChild(key);
    }

    document.addEventListener("keypress", e => {
        let char = e.code.charAt(3);

        if (keys.includes(char)) {
            let audio = new Audio(`sounds/${char}.mp3`);
            audio.play();
        } else
            console.log("Error: press a valid key!");
    });
});

