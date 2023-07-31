import DATA_TESTS from './data'
import DOMHelper from './domHelper'
import userResponses from './userResponses'
import renderInstance from './render'

class Utility extends DOMHelper {
	hideSidebar(sidebarElement) {
		sidebarElement.classList.remove('sidebar--active')
	}

	showSidebar(sidebarElement) {
		sidebarElement.classList.add('sidebar--active')
	}

	openModal(modalElement) {
		modalElement.classList.add('modal--active')
	}

	closeModal(modalElement) {
		modalElement.classList.remove('modal--active')
	}

	getCurrentTest() {
		const activeTest = this.appElement.querySelector('.sidebar__link--active')

		return DATA_TESTS[activeTest.dataset.test]
	}

	resetAnswers() {
		const checkedInputs = this.appElement.querySelectorAll('.question__answer-input')
		checkedInputs.forEach((input) => {
			input.checked = false
		})
		userResponses.resetResponce()
	}

	startTimer(duration, displayElem) {
		let timer = duration
		const currTest = this.getCurrentTest()
		const timerInterval = setInterval(() => {
			const hours = Math.floor(timer / 3600)
			const minutes = Math.floor((timer % 3600) / 60)
			const seconds = timer % 60

			displayElem.textContent = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${
				seconds < 10 ? '0' : ''
			}${seconds}`

			timer--

			if (timer < 0) {
				clearInterval(timerInterval)
				renderInstance.renderResults(currTest, userResponses.localResults)
			}
		}, 1000)
	}
}

const utilityInstance = new Utility()

export default utilityInstance
