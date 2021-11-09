import React from 'react'
class Quiz extends React.Component {
  constructor(props) {
    super(props);

    this.nextQuestion = this.nextQuestion.bind(this);
    this.answer = this.answer.bind(this);

    this.state = {
      currentQuestion: 0,
      score: 0,
      answeredValue: '',
      alreadyAnswered: false,
      questions: [
        {
          "question": "What is a correct syntax to output \"Hello World\" in Python?",
          "choices": [
            " p(\"Hello World\")",
            " print(\"Hello World\")",
            " echo \"Hello World\"",
            " echo(\"Hello World\");"
          ],
          "correctAnswer": 1
        },
        {
          "question": "How do you insert COMMENTS in Python code?",
          "choices": [
            " /*This is a comment*/",
            " //This is a comment",
            " #This is a comment"
          ],
          "correctAnswer": 2
        },
        {
          "question": "What is the correct file extension for Python files?",
          "choices": [
            ".pt",
            ".pyth",
            ".pyt",
            ".py"
          ],
          "correctAnswer": 3
        },
        {
          "question": "What is the correct way to create a function in Python?",
          "choices": [
            " create myFunction():",
            " def myFunction():",
            " function myfunction():"
          ],
          "correctAnswer": 1
        },
        {
          "question": "Which method can be used to remove any whitespace from both the beginning and the end of a string?",
          "choices": [
            "trim()",
            "strip()",
            "len()",
            "ptrim()"
          ],
          "correctAnswer": 0
        },
        {
          "question": "Who is the founder of Python?",
          "choices": ["Founder A", "Founder B", "Founder C", "Founder D"],
          "correctAnswer": 0
        },
        {
          "question": "Who is the founder of Java?",
          "choices": ["Alexander Graham-Bell", "Isaac Newton", "Joey De Leon", "Vic Sotto"],
          "correctAnswer": 3
        }
      ]
    };
  }

  nextQuestion() {
    let currentQuestion = this.state.currentQuestion + 1;
    if (currentQuestion >= this.state.questions.length) {
      currentQuestion = 0;
    }

    this.setState({ 
      alreadyAnswered: false, 
      currentQuestion: currentQuestion
    });
  }

  answer(index) {
    this.setState({ 
      alreadyAnswered: true, 
      answeredValue: this.state.questions[this.state.currentQuestion].choices[index] 
    });

    if (index === this.state.questions[this.state.currentQuestion].correctAnswer) {
      this.setState({ score: this.state.score + 1 });
    }
  }

  showCorrectOrWrongTag(index) {
    if (this.state.alreadyAnswered) {
      if (index === this.state.questions[this.state.currentQuestion].correctAnswer) {
        return <span class="tag is-success ml-2">Correct</span>;
      } else {
        return <span class="tag is-danger ml-2">Wrong</span>;
      }
    }
  }

  render() {
    return (
      <div className="box">
        <div class="content">
          <div className="columns">
            <div className="column">
              <p className="title is-4">Python Quiz</p>
            </div>
            <div className="column">
              <p className="has-text-weight-bold has-text-right">Score: { this.state.score }</p>
            </div>
          </div>

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
        </div>

        <button 
          disabled={!this.state.alreadyAnswered} 
          class="button is-primary" 
          onClick={() => this.nextQuestion()}
        >
          Next Question
        </button>
      </div>
    )
  }
}

export default Quiz