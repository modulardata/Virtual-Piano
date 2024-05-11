// class Piano {
//     constructor(containerEl) {
//         this.containerEl = containerEl;
//
//         document.addEventListener("keydown", this.handleKeyPressDown.bind(this));
//     }
//     handleKeyPressDown(ev) {
//         const key = ["a", "s", "d", "f", "g", "h", "j"];
//         if (key.includes(ev.key)) {
//             console.log(`The '${ev.key.toUpperCase()}' key is pressed.`);
//         } else {
//             console.warn("Warning");
//         }
//     }
// }
//
// const piano = new Piano(document.querySelector(".container"));

//
// const validInputs = ["A","S","D","F","G","H","J","a","s","d","f","g","h","j"]
//
// document.addEventListener("keydown", function (event){
//     if (validInputs.includes(event.key)) {
//
//         console.log("The '" + event.key.toUpperCase()  + "' key is pressed.")
//     }
//     else {
//         console.warn("This is a warning!")
//     }
// })


let keyCodes = ['KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ']

document.addEventListener("keydown", function(event) {
	keyCodes.includes(event.code)
			? console.log(`The '${event.key.toUpperCase()}' key is pressed`)
			: console.warn('An unregistered key is pressed');
});