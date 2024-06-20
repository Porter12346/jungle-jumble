import { AppState } from "../AppState.js"

class JumbleService {

    constructor() {
        console.log('Jumble Service init')
    }

    setActiveJumble(jumbleName) {
        let jumbles = AppState.jumbles
        let foundJumble = jumbles.find((jumble) => jumble.name == jumbleName)
        AppState.activeJumble = foundJumble
    }
}

export const jumbleService = new JumbleService()