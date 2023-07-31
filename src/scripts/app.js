import DATA_TESTS from './data'
import DOMHelper from './domHelper'

class App extends DOMHelper {
	init() {
		this.renderStartPage()
		this.renderTestsList()
	}

	renderStartPage() {
		this.appInnerElement.innerHTML = `
          <div class="test-start">
            <span>Выберите тест из списка</span>
          </div>
        `
	}

	renderTestsList() {
		try {
			DATA_TESTS.forEach((item) => {
				this.sidebarLinksElement.insertAdjacentHTML(
					'beforeend',
					`
              <li class="sidebar__link" data-test="${item.id}"><span></span><a href="#">${item.name}</a></li>
            `
				)
			})
		} catch (error) {
			console.error('Ошибка при редеринге списка тестов: ', error)
		}
	}
}

const appInstance = new App()

export default appInstance
