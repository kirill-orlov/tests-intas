const app = document.querySelector('.app')
const appInner = app.querySelector('.app__inner')
const sidebar = app.querySelector('.sidebar')
const sidebarLinks = sidebar.querySelector('.sidebar__links')

// Data

const DATA_TESTS = [
	{
		id: 0,
		name: 'Путешествия',
		time: 3600,
		descr: `Добро пожаловать в квиз о путешествиях! 
		Этот захватывающий квиз предлагает вам увлекательное путешествие по различным странам и культурам. 
		Вам предстоит ответить на пять интересных вопросов, касающихся столиц, знаменитых памятников, 
		культурных особенностей и многого другого. 
		Проверьте свои знания и обогатите свой опыт в путешествиях, 
		в то время как наслаждаетесь этим захватывающим квизом о мире!`,
		questions: [
			{
				question: `Какой город является столицей Франции?`,
				type: `options`,
				answers: [
					{
						id: 0,
						value: `Лондон`,
						correct: false
					},
					{
						id: 1,
						value: `Париж`,
						correct: true
					},
					{
						id: 2,
						value: `Берлин`,
						correct: false
					},
					{
						id: 3,
						value: `Мадрид`,
						correct: false
					},
					{
						id: 4,
						value: `Рим`,
						correct: false
					},
					{
						id: 5,
						value: `Амстердам`,
						correct: false
					}
				]
			},
			{
				question: `Какой памятник считается символом США и находится в Нью-Йорке?`,
				type: `options`,
				answers: [
					{
						id: 0,
						value: `Статуя Единства`,
						correct: false
					},
					{
						id: 1,
						value: `Тадж-Махал`,
						correct: false
					},
					{
						id: 2,
						value: `Статуя Свободы`,
						correct: true
					},
					{
						id: 3,
						value: `Биг Бен`,
						correct: false
					},
					{
						id: 4,
						value: `Эйфелева башня`,
						correct: false
					},
					{
						id: 5,
						value: `Мост Золотые ворота`,
						correct: false
					}
				]
			},
			{
				question: `Какая страна известна своими пирамидами и сфинксом?`,
				type: `options`,
				answers: [
					{
						id: 0,
						value: `Греция`,
						correct: false
					},
					{
						id: 1,
						value: `Египет`,
						correct: true
					},
					{
						id: 2,
						value: `Италия`,
						correct: false
					},
					{
						id: 3,
						value: `Турция`,
						correct: false
					},
					{
						id: 4,
						value: `Япония`,
						correct: false
					},
					{
						id: 5,
						value: `Индия`,
						correct: false
					}
				]
			},
			{
				question: `Какой канал является одним из наиболее известных инженерных 
				чудес мира и соединяет Атлантический и Тихий океаны?`,
				type: `options`,
				answers: [
					{
						id: 0,
						value: `Канал Манчеты`,
						correct: false
					},
					{
						id: 1,
						value: `Канал Панама`,
						correct: true
					},
					{
						id: 2,
						value: `Канал Суэц`,
						correct: false
					},
					{
						id: 3,
						value: `Канал Север-Юг`,
						correct: false
					},
					{
						id: 4,
						value: `Канал Манчестер`,
						correct: false
					},
					{
						id: 5,
						value: `Канал Норфолк`,
						correct: false
					}
				]
			},
			{
				question: `Какой из следующих городов считается "Венецией Севера" благодаря своим каналам и мостам, 
				расположенным над Штокгольмским архипелагом?`,
				type: `text`,
				answers: [
					{
						id: 0,
						value: `Амстердам — культурная столица Нидерландов, известная своими уникальными 
						каналами и великолепной архитектурой.`,
						correct: false
					},
					{
						id: 1,
						value: `Венеция — итальянский город, лежащий на 118 островах, известный своими каналами, 
						гондолами и величественной базиликой Святого Марка.`,
						correct: false
					},
					{
						id: 2,
						value: `Стокгольм — столица Швеции, возвышающаяся над Балтийским морем, которая славится своими красивыми 
						фьордами, историческими замками и многочисленными музеями.`,
						correct: true
					}
				]
			}
		]
	},
	{
		id: 1,
		name: 'Программирование',
		time: 2000,
		descr: `Добро пожаловать в квиз о программировании! 
		В этом увлекательном квизе вы сможете проверить свои знания в области программирования. 
		Вам предстоит ответить на три интересных вопроса, которые затронут различные аспекты программирования, 
		включая языки программирования, алгоритмы и логику программирования. 
		Подтяните свои знания, проверьте себя и наслаждайтесь этим захватывающим квизом о мире программирования!`,
		questions: [
			{
				question: `Что такое "замыкание" (closure) в JavaScript?`,
				type: `text`,
				answers: [
					{
						id: 0,
						value: `Это процесс, при котором JavaScript автоматически преобразует 
						типы данных для удобства программиста.`,
						correct: false
					},
					{
						id: 1,
						value: `Это способ объявления переменных без использования ключевого слова "var".`,
						correct: false
					},
					{
						id: 2,
						value: `Это функция, которая не имеет доступа к внешним переменным своего контекста.`,
						correct: false
					},
					{
						id: 3,
						value: `Это функция, которая имеет доступ к переменным из своего лексического окружения, 
						даже после завершения выполнения.`,
						correct: true
					}
				]
			},
			{
				question: `Какой из приведенных ниже паттернов JavaScript используется для обработки асинхронных операций?`,
				type: `options`,
				answers: [
					{
						id: 0,
						value: `Singleton`,
						correct: false
					},
					{
						id: 1,
						value: `Observer`,
						correct: false
					},
					{
						id: 2,
						value: `Factory`,
						correct: false
					},
					{
						id: 3,
						value: `Promise`,
						correct: true
					}
				]
			},
			{
				question: `Что такое RESTful API?`,
				type: `text`,
				answers: [
					{
						id: 0,
						value: `Это способ организации данных в реляционных базах данных.`,
						correct: false
					},
					{
						id: 1,
						value: `Это стандартный способ оформления HTML-кода на веб-страницах.`,
						correct: false
					},
					{
						id: 2,
						value: `Это архитектурный стиль, который определяет правила для создания веб-сервисов.`,
						correct: true
					},
					{
						id: 3,
						value: `Это язык программирования для создания интерактивных элементов на веб-страницах.`,
						correct: false
					}
				]
			},
			{
				question: `Что такое принцип SOLID в объектно-ориентированном программировании?`,
				type: `text`,
				answers: [
					{
						id: 0,
						value: `Это набор базовых правил для написания стилей CSS.`,
						correct: false
					},
					{
						id: 1,
						value: ` Это принцип проектирования баз данных для обеспечения их эффективности и целостности.`,
						correct: false
					},
					{
						id: 2,
						value: `Это набор принципов, которые помогают написать чистый и поддерживаемый код.`,
						correct: true
					},
					{
						id: 3,
						value: `Это способ объединения нескольких файлов JavaScript в один для уменьшения загрузки страницы.`,
						correct: false
					}
				]
			}
		]
	},
	{
		id: 2,
		name: 'Экономика',
		time: 600,
		descr: `Добро пожаловать в квиз по экономике! 
		В этом увлекательном квизе вы сможете проверить свои знания в области экономики. 
		Вам предстоит ответить на три интересных вопроса, которые охватывают различные аспекты экономической теории, 
		мировую финансовую систему и ключевые экономические показатели. 
		Проверьте свои знания, расширьте свои познания в экономике и наслаждайтесь этим захватывающим квизом!`,
		questions: [
			{
				question: `Что такое инфляция?`,
				type: `text`,
				answers: [
					{
						id: 0,
						value: `Это процесс уменьшения общего уровня цен на товары и услуги в экономике.`,
						correct: false
					},
					{
						id: 1,
						value: `Это увеличение производственной мощности предприятий и уровня технологий.`,
						correct: false
					},
					{
						id: 2,
						value: `Это снижение уровня безработицы в стране.`,
						correct: false
					},
					{
						id: 3,
						value: `Это увеличение общего уровня цен на товары и услуги в экономике со временем.`,
						correct: true
					}
				]
			},
			{
				question: `Что такое диверсификация?`,
				type: `options`,
				answers: [
					{
						id: 0,
						value: `Увеличение налогов`,
						correct: false
					},
					{
						id: 1,
						value: `Расширение производства`,
						correct: false
					},
					{
						id: 2,
						value: `Разнообразие инвестиций`,
						correct: true
					}
				]
			},
			{
				question: `Что такое спрос и предложение на рынке?`,
				type: `text`,
				answers: [
					{
						id: 0,
						value: `Спрос - это количество товаров и услуг, которые производители готовы предоставить, 
						а предложение - это количество товаров и услуг, которое потребители хотят приобрести.`,
						correct: false
					},
					{
						id: 1,
						value: `Спрос - это количество товаров и услуг, которое потребители хотят приобрести, а предложение 
						- это количество товаров и услуг, которые производители готовы предоставить.`,
						correct: true
					},
					{
						id: 2,
						value: `Спрос - это количество товаров и услуг, которое производители хотят продать, а предложение - 
						это количество товаров и услуг, которые потребители готовы купить.`,
						correct: false
					},
					{
						id: 3,
						value: `Спрос - это количество товаров и услуг, которое производители готовы произвести, а предложение - 
						это количество товаров и услуг, которые потребители хотят приобрести.`,
						correct: false
					}
				]
			},
			{
				question: `Что такое инвестиции в экономике?`,
				type: `text`,
				answers: [
					{
						id: 0,
						value: `Это расходы государства на социальные программы и образование.`,
						correct: false
					},
					{
						id: 1,
						value: `Это деньги, вложенные в различные финансовые инструменты для получения прибыли.`,
						correct: false
					},
					{
						id: 2,
						value: `Это денежные средства, которые люди хранят в банках.`,
						correct: false
					},
					{
						id: 3,
						value: `Это капитал, вложенный в предприятия, оборудование 
						и другие активы с целью увеличения производства и прибыли.`,
						correct: true
					}
				]
			}
		]
	},
	{
		id: 3,
		name: 'Менеджмент',
		time: 7200,
		descr: `Добро пожаловать в квиз по менеджменту! 
		В этом увлекательном квизе вы сможете проверить свои знания в области менеджмента и лидерства. 
		Вам предстоит ответить на три интересных вопроса, которые касаются различных аспектов управления бизнесом, 
		эффективного лидерства, коммуникации и мотивации сотрудников. 
		Проверьте свои знания в области менеджмента, расширьте свои навыки управления и
		наслаждайтесь этим захватывающим квизом!`,
		questions: [
			{
				question: `Что такое SWOT-анализ?`,
				type: `text`,
				answers: [
					{
						id: 0,
						value: `Инструмент управления проектами`,
						correct: false
					},
					{
						id: 1,
						value: `Метод повышения мотивации сотрудников`,
						correct: false
					},
					{
						id: 2,
						value: `Методика принятия оперативных решений`,
						correct: false
					},
					{
						id: 3,
						value: `Инструмент стратегического анализа`,
						correct: true
					}
				]
			},
			{
				question: `Что означает термин "делегирование"?`,
				type: `text`,
				answers: [
					{
						id: 0,
						value: `Отказ от ответственности`,
						correct: false
					},
					{
						id: 1,
						value: `Подмена исполнителей`,
						correct: false
					},
					{
						id: 2,
						value: `Передача полномочий и ответственности сотрудникам`,
						correct: true
					},
					{
						id: 3,
						value: `Зависимость от внешних ресурсов`,
						correct: false
					},
					{
						id: 4,
						value: `Перенос сроков выполнения задачи`,
						correct: true
					}
				]
			},
			{
				question: `Что представляет собой "тимбилдинг"?`,
				type: `options`,
				answers: [
					{
						id: 0,
						value: `Доверие и сотрудничество`,
						correct: false
					},
					{
						id: 1,
						value: `Повышение зарплаты`,
						correct: false
					},
					{
						id: 2,
						value: `Конфликтное разрешение`,
						correct: false
					},
					{
						id: 3,
						value: `Мероприятия для команды`,
						correct: true
					}
				]
			},
			{
				question: `Что означает термин "эмповермент" (empowerment) в управлении командой?`,
				type: `text`,
				answers: [
					{
						id: 0,
						value: `Методика развития конфликтного поведения`,
						correct: false
					},
					{
						id: 1,
						value: `Передача полномочий и ответственности сотрудникам для принятия решений`,
						correct: true
					},
					{
						id: 2,
						value: `Метод управления конкурентоспособностью команды`,
						correct: false
					},
					{
						id: 3,
						value: `Применение инновационных стратегий для повышения производительности`,
						correct: false
					}
				]
			}
		]
	}
]
let localResults = {}

// Rendering Functions

function renderStartPage() {
	appInner.innerHTML = `
	<div class="test-start">
		<span>Выберите тест из списка</span>
	</div>`
}
renderStartPage()

function renderTestsList() {
	try {
		DATA_TESTS.forEach((item) => {
			sidebarLinks.insertAdjacentHTML(
				'beforeend',
				`
				<li class="sidebar__link" data-test="${item.id}"><span></span><a href="#">${item.name}</a></li>`
			)
		})
	} catch (error) {
		console.error('Ошибка при редеринге списка тестов: ', error)
	}
}
renderTestsList()

function renderDescription(testObj) {
	appInner.innerHTML = `
	<div class="top-panel">
		<div class="top-panel__inner">
		<div class="top-panel__left">
			<span class="top-panel__descr">Описание</span>
		</div>
		</div>
	</div>
	<div class="test-mobile-content">
		<div class="test-mobile-content__mobile-info">
		<h2>${testObj.name}</h2>
		</div>
	</div>
	<div class="test-descr">
		<p>${testObj.descr}</p>
		<div class="test-descr-buttons">
		<a class="btn-primary btn-start" data-test="${testObj.id}" href="#">Начать</a>
		<a class="btn-secondary btn-cancel" href="#">Отмена</a>
		</div>
	</div>`
}

function renderTest(testObj) {
	appInner.innerHTML = `
		<div class="top-panel">
			<div class="top-panel__inner">
				<div class="top-panel__left">
					<a class="top-panel__exit js-modal-open" data-modal="modal-exit">Выход</a>
				</div>
				<div class="top-panel__center">
					<span class="top-panel__test-name">${testObj.name}</span>
				</div>
				<div class="top-panel__right">
					<div class="top-panel__reset">
						<span class="top-panel__reset-btn">Сбросить все ответы</span>
					</div>
					<div class="top-panel__mobile-column">
						<div class="top-panel__progress">
							<span>0/5</span>
						</div>
						<div class="top-panel__timer">
							<span>00:00:00</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="test-mobile-content">
			<div class="test-mobile-content__mobile-info">
				<h2>${testObj.name}</h2>
				<a class="js-modal-open" data-modal="modal-exit">Выход</a>
			</div>
		</div>
		<div class="test">
			
		</div>
		<div class="bottom-panel">
			<a class="btn-primary btn-primary-outline btn-get-results" href="#">Завершить</a>
		</div>`
}

function renderQuestions(testObj) {
	const test = app.querySelector('.test')
	test.innerHTML = testObj.questions
		.map((question, index) => {
			const answers = question.answers
				.map(
					(answer) => `
			  <label class="question__answer">
				<input class="question__answer-input" type="radio" name="${index}" value="${answer.id}">
				<span class="radio-custom"></span>
				${answer.value}
			  </label>
			`
				)
				.join('')

			return `
		  <div class="question question--${question.type}">
			<div class="question__content">
			  <span class="question__number">${index + 1}. </span>
			  <span class="question__text">${question.question}</span>
			</div>
			<div class="question__answers">
			  <form class="question__answers-list">${answers}</form>
			</div>
		  </div>
		`
		})
		.join('')
}

function renderResults(testObj, results) {
	const keys = Object.keys(results)

	appInner.innerHTML = `
	  <div class="top-panel">
	  <div class="top-panel__inner">
	  <div class="top-panel__left">
		  <a class="top-panel__exit js-modal-open" data-modal="modal-exit">Выход</a>
	  </div>
	  <div class="top-panel__center">
		  <span class="top-panel__test-name">${testObj.name}</span>
	  </div>
  		</div>
	  </div>
	  <div class="test-mobile-content">
	  <div class="test-mobile-content__mobile-info">
		  <h2>${testObj.name}</h2>
		  <a class="js-modal-open" data-modal="modal-exit">Выход</a>
	  </div>
  	  </div>
	  <div class="test-results">
		<div class="test-results__info">
		  <h2>Тест завершён</h2>
		  <p>Вы ответили на <span class="test-results__answered">${keys.length}</span> из
			<span class="test-results__total">${testObj.questions.length}</span> вопросов.</p>
		</div>
		<div class="test-results__list">
		  <p class="test-results__heading">Ваши ответы</p>
		</div>
	  </div>
	  <div class="bottom-panel">
		<a class="btn-primary btn-primary-outline btn-restart" href="#">Пройти еще раз</a>
	  </div>`

	const resultsArea = app.querySelector('.test-results__list')
	const { questions } = testObj

	questions.forEach((item, i) => {
		let trueAnswer = ''

		item.answers.forEach((answer) => {
			if (answer.correct === true) trueAnswer = answer.value
		})

		const userAnswerIndex = results[i]
		let userAnswer = ''
		if (typeof userAnswerIndex !== 'undefined') {
			const userAnswerObject = item.answers[userAnswerIndex]
			userAnswer = userAnswerObject ? userAnswerObject.value : 'Не ответили'
		} else {
			userAnswer = 'Не ответили'
		}

		resultsArea.insertAdjacentHTML(
			'beforeend',
			`
		<div class="test-results__item">
		  <p class="test-results__question">
			<span class="test-results__question-number">${i + 1}.</span>
			<span class="test-results__question-text">${item.question}</span>
		  </p>
		  <p class="test-results__correct-answer">Правильный ответ:
			<span class="test-results__correct-answer-text">${trueAnswer}</span>
		  </p>
		  <p class="test-results__your-answer">Вы ответили:
			<span class="test-results__your-answer-text">${userAnswer}</span>
		  </p>
		</div>
		`
		)
	})
}

function renderIndicator(currStep, testObj) {
	const questionsIndicator = app.querySelector('.top-panel__progress span')
	questionsIndicator.textContent = `${currStep}/${testObj.questions.length}`
}

// Utility Functions

function hideSidebar() {
	sidebar.classList.remove('sidebar--active')
}

function showSidebar() {
	sidebar.classList.add('sidebar--active')
}

function openModal(modal) {
	modal.classList.add('modal--active')
}

function closeModal(modal) {
	modal.classList.remove('modal--active')
}

function getCurrentTest() {
	const activeTest = app.querySelector('.sidebar__link--active')

	return DATA_TESTS[activeTest.dataset.test]
}

function resetAnswers() {
	const checkedInputs = app.querySelectorAll('.question__answer-input')
	checkedInputs.forEach((input) => {
		input.checked = false
	})
	localResults = {}
}

function startTimer(duration, displayElem) {
	let timer = duration
	const currTest = getCurrentTest()
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

			renderResults(currTest, localResults)
		}
	}, 1000)
}

if (window.innerWidth > 768) {
	const savedState = localStorage.getItem('sidebarState')
	const { isOpen } = JSON.parse(savedState)

	if (isOpen) {
		showSidebar()
	} else {
		hideSidebar()
	}
}

// Event Listeners

app.addEventListener('change', (event) => {
	if (event.target.classList.contains('question__answer-input')) {
		localResults[event.target.name] = event.target.value
		const currStep = Object.keys(localResults).length
		const currTest = getCurrentTest()
		renderIndicator(currStep, currTest)
	}
})

document.addEventListener('click', (event) => {
	const { target } = event

	// Sidebar

	if (target.classList.contains('hamburger')) {
		const sidebarIsActive = sidebar.classList.contains('sidebar--active')

		if (sidebarIsActive) {
			hideSidebar(sidebar)
			localStorage.setItem('sidebarState', JSON.stringify({ isOpen: false }))
		} else {
			showSidebar(sidebar)
			localStorage.setItem('sidebarState', JSON.stringify({ isOpen: true }))
		}
	}

	if (target.classList.contains('sidebar__link') && window.innerWidth < 769) {
		hideSidebar(sidebar)
	}

	// Test Desccription

	if (target.classList.contains('sidebar__link')) {
		const activeTest = app.querySelector('.sidebar__link--active')

		if (activeTest) activeTest.classList.remove('sidebar__link--active')

		target.classList.add('sidebar__link--active')
		const currTest = DATA_TESTS[target.dataset.test]
		renderDescription(currTest)
	}

	// Cancel Button

	if (target.classList.contains('btn-cancel')) {
		event.preventDefault()
		const activeTest = app.querySelector('.sidebar__link--active')
		activeTest.classList.remove('sidebar__link--active')

		renderStartPage()
	}

	// Starting Test

	if (target.classList.contains('btn-start') || target.classList.contains('btn-restart')) {
		event.preventDefault()
		localResults = {}
		const currTest = getCurrentTest()
		renderTest(currTest)
		renderQuestions(currTest)
		const timerElem = document.querySelector('.top-panel__timer')
		startTimer(currTest.time, timerElem)
	}

	// Reset Answers
	if (target.classList.contains('top-panel__reset-btn')) {
		const currTest = getCurrentTest()

		resetAnswers()
		renderIndicator(0, currTest)
	}

	// Results

	if (target.classList.contains('btn-get-results')) {
		event.preventDefault()
		const currTest = getCurrentTest()

		renderResults(currTest, localResults)
	}

	// Modals

	if (target.classList.contains('js-modal-open')) {
		const modalId = target.dataset.modal
		const modal = document.getElementById(modalId)
		openModal(modal)
	}

	if (target.classList.contains('js-modal-close') || target.classList.contains('modal--active')) {
		const activeModal = document.querySelector('.modal--active')
		closeModal(activeModal)
	}
})
