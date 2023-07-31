export default class DOMHelper {
	constructor() {
		this.appElement = document.querySelector('.app')
		this.appInnerElement = this.appElement.querySelector('.app__inner')
		this.sidebarElement = this.appElement.querySelector('.sidebar')
		this.sidebarLinksElement = this.sidebarElement.querySelector('.sidebar__links')
	}
}

const domInstance = new DOMHelper()
export { domInstance }
