import React from 'react'
class Quiz extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentQuestion: 0,
      score: 0,
      answeredValue: '',
      alreadyAnswered: false,
      isQuizFinished: false,
      questions: props.questions
    };
  }

  nextQuestion = () => {
    let currentQuestion = this.state.currentQuestion + 1;
    if (currentQuestion >= this.state.questions.length) {
      this.setState({ isQuizFinished: true });
    }

    this.setState({ 
      alreadyAnswered: false, 
      currentQuestion: currentQuestion
    });
  }

  answer = (index) => {
    this.setState({ 
      alreadyAnswered: true, 
      answeredValue: this.state.questions[this.state.currentQuestion].choices[index] 
    });

    if (index === this.state.questions[this.state.currentQuestion].correctAnswer) {
      this.setState({ score: this.state.score + 1 });
    }
  }

  retakeQuiz = () => {
    this.setState({
      currentQuestion: 0,
      score: 0,
      answeredValue: '',
      alreadyAnswered: false,
      isQuizFinished: false
    });
  }

  showCorrectOrWrongTag = (index) => {
    if (this.state.alreadyAnswered) {
      if (index === this.state.questions[this.state.currentQuestion].correctAnswer) {
        return <span class="tag is-success ml-2">Correct</span>;
      }
    }
  }

  render() {
    return (
      <div className="box">
        {!this.state.isQuizFinished ? (
          <div class="content">
            <div className="columns">
              <div className="column">
                <p className="title is-4">Python Quiz</p>
              </div>
              <div className="column">
                <p className="has-text-weight-bold has-text-right">Score: { this.state.score }</p>
              </div>
            </div>

            <p className="title is-5">Question { this.state.currentQuestion + 1 } of { this.state.questions.length }:</p>
            <p className="title is-5">{this.state.questions[this.state.currentQuestion].question}</p>

            {this.state.questions[this.state.currentQuestion].choices.map((choice, index) => (
              <div class="field">
                <div class="control">
                  {/* Uncheck radio on next question resource: https://stackoverflow.com/a/51514357/7209628 */}
                  <label class="radio">
                    <input 
                      type="radio" 
                      name={`choiceForQuestion${this.state.currentQuestion}`} 
                      checked={this.state.answeredValue === choice}
                      onClick={() => this.answer(index)}
                      disabled={this.state.alreadyAnswered} 
                    />
                    { ` ${choice}` }

                    { this.showCorrectOrWrongTag(index) }

                  </label>
                </div>
              </div>
            ))}

            <button 
              disabled={!this.state.alreadyAnswered} 
              class="button is-primary" 
              onClick={() => this.nextQuestion()}
            >
              Next Question
            </button>
          </div>
        ) : (
          <div className="content">
            <p className="title is-4">Final Score: { this.state.score } / { this.state.questions.length }</p>
            <p className="title is-4">Thank you for taking the test!</p>

            <button 
              class="button is-primary" 
              onClick={() => this.retakeQuiz()}
            >
              Retake Quiz
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default Quiz