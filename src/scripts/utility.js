import DATA_TESTS from './data'
import DOMHelper from './domHelper'
import userResponses from './userResponses'

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
		for (let i = 0; i < checkedInputs.length; i++) {
			checkedInputs[i].checked = false
		}
		userResponses.resetResponce()
	}
}

const utilityInstance = new Utility()

export default utilityInstance
