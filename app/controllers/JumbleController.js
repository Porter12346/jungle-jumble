import { AppState } from "../AppState.js"
import { jumbleService } from "../services/JumbleService.js"
import { setHTML } from "../utils/Writer.js"

export class JumbleController {
    constructor() {
        console.log('Jumble COntroller init')
        this.drawJumbleList()
        this.setActiveJumble('🐒 Jumble')
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

    setActiveJumble(jumbleName) {
        console.log('setting active jumble')
        jumbleService.setActiveJumble(jumbleName)
        this.drawActiveJumble()
    }

    drawActiveJumble() {
        let activeJumble = AppState.activeJumble
        let innerHTMLString = ''
        console.log('drawing active jumble', activeJumble)
        innerHTMLString += activeJumble.ActiveTemplate
        setHTML('activeJumble', innerHTMLString)
    }

    checkText() {
        event.preventDefault()
        const form = event.target
        // @ts-ignore
        const text = form.typedText
        jumbleService.checkText(text.value)
        // @ts-ignore
        form.reset()
    }
}
