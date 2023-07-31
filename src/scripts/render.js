import DOMHelper from './domHelper'

class Render extends DOMHelper {
	renderDescription(testObj) {
		this.appInnerElement.innerHTML = `
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

	renderTest(testObj) {
		this.appInnerElement.innerHTML = `
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
							<span>0/${testObj.questions.length}</span>
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

	renderQuestions(testObj) {
		const test = this.appElement.querySelector('.test')
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

	renderResults(testObj, results) {
		const keys = Object.keys(results)

		this.appInnerElement.innerHTML = `
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

		const resultsArea = this.appElement.querySelector('.test-results__list')
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

	renderIndicator(currStep, testObj) {
		const questionsIndicator = this.appElement.querySelector('.top-panel__progress span')
		questionsIndicator.textContent = `${currStep}/${testObj.questions.length}`
	}
}

const renderInstance = new Render()

export default renderInstance
