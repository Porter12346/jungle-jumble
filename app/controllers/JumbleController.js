import { AppState } from "../AppState.js"
import { jumbleService } from "../services/JumbleService.js"
import { setHTML } from "../utils/Writer.js"

export class JumbleController {
    constructor() {
        console.log('Jumble COntroller init')
        this.drawJumbleList()
    }

    drawJumbleList() {
        let jumbles = AppState.jumbles
        let innerHTMLString = ''
        console.log('drawing Jumbles')
        jumbles.forEach(jumble => {
            innerHTMLString += jumble.ListTemplate
        });
        setHTML('jumbleListSection', innerHTMLString)
    }
}
