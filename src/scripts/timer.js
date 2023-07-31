import userResponses from './userResponses'
import renderInstance from './render'
import utilityInstance from './utility'

class Timer {
	constructor() {
		this.timer = 0
		this.timerInterval = 0
	}

	startTimer(duration, displayElem) {
		this.timer = duration
		const currTest = utilityInstance.getCurrentTest()
		this.timerInterval = setInterval(() => {
			const hours = Math.floor(this.timer / 3600)
			const minutes = Math.floor((this.timer % 3600) / 60)
			const seconds = this.timer % 60

			displayElem.textContent = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${
				seconds < 10 ? '0' : ''
			}${seconds}`

			this.timer--

			if (this.timer < 0) {
				clearInterval(this.timerInterval)
				renderInstance.renderResults(currTest, userResponses.localResults)
			}
		}, 1000)
	}

	resetTimer() {
		this.timer = 0
		clearInterval(this.timerInterval)
	}
}

const timerInstance = new Timer()
export default timerInstance
