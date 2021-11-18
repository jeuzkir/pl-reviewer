import * as React from "react";
import Layout from "../../components/layout/Layout";
import Quiz from "../../components/Quiz";

const questions = [
  {
    "question": "Who is the founder of Python?",
    "choices": ["Guido van Rossum", "James Gosling", "Yukihiro Matsumoto", "Ken Thompson"],
    "correctAnswer": 0
  },
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
    "question": "Which one is NOT a legal variable name?",
    "choices": [
      "Myvar",
      "_myvar",
      "my_var",
      "my-var"
    ],
    "correctAnswer": 3
  },
  {
    "question": "How do you create a variable with the numeric value 5?",
    "choices": [
      "x = 5",
      "x = int(5)",
      "Both the answers are correct"
    ],
    "correctAnswer": 2
  }
]

const PythonQuiz = () => {
  return (
    <Layout>
      <div className="container">
        <div className="card">
          <div className="card-content">
            <Quiz questions={ questions } />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PythonQuiz;
