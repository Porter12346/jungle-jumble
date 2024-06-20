import { AppState } from "../AppState.js"

class JumbleService {

    constructor() {
        console.log('Jumble Service init')
    }

    setActiveJumble(jumbleName) {
        let jumbles = AppState.jumbles
        let foundJumble = jumbles.find((jumble) => jumble.name == jumbleName)
        AppState.activeJumble = foundJumble
        let date = new Date()
        foundJumble.startTime = (`${date.getTime()}`)
        console.log(foundJumble.startTime)
    }

    checkText(text) {
        const bodyText = AppState.activeJumble.body
        if (bodyText == text) {
            let endTime = new Date().getTime()
            AppState.activeJumble.endTime = endTime
            console.log('YOU DID IT')
            this.calculateTime()
        }
        else {
            window.alert('YOUR BAD AT TYPING')
        }
    }
    calculateTime() {
        const jumble = AppState.activeJumble
        const startTime = jumble.startTime
        const endTime = jumble.endTime
        let takenTime = endTime - startTime
        console.log(takenTime)
        let timeTakenConverted = new Date(takenTime)
        let realTime = (`${timeTakenConverted.getSeconds()}.${timeTakenConverted.getMilliseconds()}`)
        window.alert(`You completed this jumble in ${realTime} seconds`);

    }

}
// let timeTemp = 1718919136728
// let timeTaken = Number(foundJumble.startTime) - timeTemp
// let timeTakenConverted = new Date(timeTaken).getSeconds()
// console.log(timeTaken);
// console.log(timeTakenConverted)
export const jumbleService = new JumbleService()