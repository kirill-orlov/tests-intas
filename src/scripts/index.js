import { domInstance } from './domHelper'
import appInstance from './app'
import utilityInstance from './utility'
import handlersInstance from './eventHandlers'

appInstance.init()

// Sidebar localStorage state

if (window.innerWidth > 768) {
	try {
		const savedState = localStorage.getItem('sidebarState')
		const { isOpen } = JSON.parse(savedState)

		if (isOpen) {
			utilityInstance.showSidebar(domInstance.sidebarElement)
		} else {
			utilityInstance.hideSidebar(domInstance.sidebarElement)
		}
	} catch (error) {
		localStorage.setItem('sidebarState', JSON.stringify({ isOpen: false }))
	}
}

// Event Listeners

domInstance.appElement.addEventListener('change', handlersInstance.changeAnswer)
document.addEventListener('click', handlersInstance.documentClick)
