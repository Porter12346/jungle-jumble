import { generateId } from "../utils/GenerateId.js"

export class Jumble {
    constructor(data) {
        this.id = generateId()
        this.name = data.name
        this.body = data.body
        // to best keep track of the fastest times you might want these properties too! They would start null cause no one has completed these yet.
        this.fastestTime = null
        this.startTime = null
        this.endTime = null
    }

    get ListTemplate() { // a basic list template to get drawing
        return `<div class="d-flex gap-2 mb-2">
                <button>START</button>
                <p>Crazy Jumble</p>
                <p><i class="mdi mdi-clock">30.5s</i></p>
                <p>55.4 wpm</p>
</div>`
    }
}
