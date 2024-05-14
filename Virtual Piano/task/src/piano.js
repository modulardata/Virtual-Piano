document.addEventListener("DOMContentLoaded", () => {
    const validKeys = new Set('AWSEDFTGYHUJ')

    document.addEventListener('keydown', (event) => {
        const key = event.key.toUpperCase()
        if (!validKeys.has(key)) {
            return
        }
        const audio = new Audio(`sounds/${key}.mp3`)
        audio.currentTime = 0
        audio.play()
    })
    
})
