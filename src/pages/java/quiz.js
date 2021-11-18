import * as React from "react";
import Layout from "../../components/layout/Layout";
import Quiz from "../../components/Quiz";

const questions = [
  {
    "question": "Who is the founder of Java?",
    "choices": ["Guido van Rossum", "James Gosling", "Yukihiro Matsumoto", "Ken Thompson"],
    "correctAnswer": 1
  },
  {
    "question": "What is a correct syntax to output \"Hello World\" in Java?",
    "choices": [
      " System.out.println(\"Hello World\")",
      " print(\"Hello World\")",
      " echo \"Hello World\"",
      " Console.WriteLine(\"Hello World\");"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Java is short for \"JavaScript\".",
    "choices": [
      " True",
      " False"
    ],
    "correctAnswer": 1
  },
  {
    "question": "How do you insert COMMENTS in Java code?",
    "choices": [
      " /*This is a comment*/",
      " // This is a comment",
      " # This is a comment"
    ],
    "correctAnswer": 1
  },
  {
    "question": "Which data type is used to create a variable that should store text?",
    "choices": [
      "string",
      "myString",
      "Txt",
      "String"
    ],
    "correctAnswer": 3
  },
  {
    "question": "What is the correct file extension for Java files?",
    "choices": [
      ".jv",
      ".jav",
      ".jar",
      ".java"
    ],
    "correctAnswer": 3
  },
  {
    "question": "How do you create a variable with the floating number 2.8?",
    "choices": [
      "float x = 2.8f; ",
      "x = 2.8f; ",
      "byte x = 2.8f;",
      "int x = 2.8f;"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Which method can be used to find the length of a string?",
    "choices": [
      "getSizes()",
      "getLength()",
      "len()",
      "length()"
    ],
    "correctAnswer": 3
  },
  {
    "question": "Which operator is used to add together two values?",
    "choices": [
      "The + sign",
      "The & sign",
      "The * sign"
    ],
    "correctAnswer": 0
  },
  {
    "question": "The value of a string variable can be surrounded by single quotes.",
    "choices": [
      "True",
      "False"
    ],
    "correctAnswer": 1
  },
  {
    "question": "Which method can be used to return a string in upper case letters?",
    "choices": [
      "upperCase()",
      "touppercase()",
      "tuc()",
      "toUpperCase()"
    ],
    "correctAnswer": 3
  },
  {
    "question": "How do you create a variable with the numeric value 5?",
    "choices": [
      "num x = 5;",
      "x = 5;",
      "int x = 5;",
      "float x = 5;"
    ],
    "correctAnswer": 2
  }
]

const JavaQuiz = () => {
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

export default JavaQuiz;
