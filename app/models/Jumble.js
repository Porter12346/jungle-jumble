import { generateId } from "../utils/GenerateId.js"

export class Jumble {
    constructor(data) {
        this.id = generateId()
        this.name = data.name
        this.body = data.body
        // to best keep track of the fastest times you might want these properties too! They would start null cause no one has completed these yet.
        this.fastestTime = 999
        this.startTime = null
        this.endTime = null
    }

    get ListTemplate() { // a basic list template to get drawing
        return `<div class="d-flex gap-2 mb-2">
                <button onclick="app.JumbleController.setActiveJumble('${this.name}')">START</button>
                <p>${this.name}</p>
                <p><i class="mdi mdi-clock">${this.fastestTime}</i></p>
                <p>55.4 wpm</p>
        </div>`
    }

    get ActiveTemplate() {
        return `
        <div class= "m-5">
            <div>
                <div class="d-flex justify-content-between">
                    <h3>${this.name}</h3>
                    <h3>Fastest Time ${this.fastestTime}s</h3>
                </div>
                    <p>${this.body}</p>
            </div>
        </div>
        `
    }
}
