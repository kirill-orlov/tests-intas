import DATA_TESTS from './data'
import DOMHelper from './domHelper'
import userResponses from './userResponses'
import appInstance from './app'
import renderInstance from './render'
import utilityInstance from './utility'

class Handlers extends DOMHelper {
	changeAnswer = (event) => {
		if (event.target.classList.contains('question__answer-input')) {
			userResponses.setResponce(event.target.name, event.target.value)
			const currStep = Object.keys(userResponses.localResults).length
			const currTest = utilityInstance.getCurrentTest()
			renderInstance.renderIndicator(currStep, currTest)
		}
	}

	documentClick = (event) => {
		const { target } = event

		// Sidebar

		if (target.classList.contains('hamburger')) {
			const sidebarIsActive = this.sidebarElement.classList.contains('sidebar--active')

			if (sidebarIsActive) {
				utilityInstance.hideSidebar(this.sidebarElement)
				localStorage.setItem('sidebarState', JSON.stringify({ isOpen: false }))
			} else {
				utilityInstance.showSidebar(this.sidebarElement)
				localStorage.setItem('sidebarState', JSON.stringify({ isOpen: true }))
			}
		}

		if (target.classList.contains('sidebar__link') && window.innerWidth < 769) {
			utilityInstance.hideSidebar(this.sidebarElement)
		}

		// Test Description

		if (target.classList.contains('sidebar__link')) {
			const test = this.appInnerElement.querySelector('.test')
			const testResults = this.appInnerElement.querySelector('.test-results')
			if (test || testResults) {
				const modal = document.getElementById('modal-exit')
				utilityInstance.openModal(modal)
				return
			}
			const activeTest = this.appElement.querySelector('.sidebar__link--active')

			if (activeTest) activeTest.classList.remove('sidebar__link--active')

			target.classList.add('sidebar__link--active')
			const currTest = DATA_TESTS[target.dataset.test]
			renderInstance.renderDescription(currTest)
		}

		// Cancel Button

		if (target.classList.contains('btn-cancel')) {
			event.preventDefault()
			const activeTest = this.appElement.querySelector('.sidebar__link--active')
			activeTest.classList.remove('sidebar__link--active')

			appInstance.renderStartPage()
		}

		// Starting Test

		if (target.classList.contains('btn-start') || target.classList.contains('btn-restart')) {
			event.preventDefault()
			userResponses.resetResponce()
			const currTest = utilityInstance.getCurrentTest()
			renderInstance.renderTest(currTest)
			renderInstance.renderQuestions(currTest)
			const timerElem = document.querySelector('.top-panel__timer')
			utilityInstance.startTimer(currTest.time, timerElem)
		}

		// Reset Answers
		if (target.classList.contains('top-panel__reset-btn')) {
			const currTest = utilityInstance.getCurrentTest()

			utilityInstance.resetAnswers()
			renderInstance.renderIndicator(0, currTest)
		}

		// Results

		if (target.classList.contains('btn-get-results')) {
			event.preventDefault()
			const currTest = utilityInstance.getCurrentTest()

			renderInstance.renderResults(currTest, userResponses.localResults)
		}

		// Modals

		if (target.classList.contains('js-modal-open')) {
			const modalId = target.dataset.modal
			const modal = document.getElementById(modalId)
			utilityInstance.openModal(modal)
		}

		if (target.classList.contains('js-modal-close') || target.classList.contains('modal--active')) {
			const activeModal = document.querySelector('.modal--active')
			utilityInstance.closeModal(activeModal)
		}
	}
}
const handlersInstance = new Handlers()

export default handlersInstance
