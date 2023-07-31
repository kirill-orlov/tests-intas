class UserResponses {
	constructor() {
		this.localResults = {}
	}

	setResponce(questionIndex, answerIndex) {
		this.localResults[questionIndex] = answerIndex
	}

	getResponce(questionIndex) {
		return this.localResults[questionIndex]
	}

	resetResponce() {
		this.localResults = {}
	}
}

const userResponses = new UserResponses()

export default userResponses
