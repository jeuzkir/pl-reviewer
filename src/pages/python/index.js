import React from "react"
import Layout from "../../components/layout/Layout";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { xonokai } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Introduction = () => {
  return (
    <Layout>
      <div className="container">
        <div className="card">
          <div className="card-content">
            <h1 className="title"> What is Python? </h1>
            <div className="content">
              Python is a popular programming language. It was created by Guido
              van Rossum, and released in 1991.
            </div>

            {/* <iframe 
              src="https://widgets.judge0.com?widgetId=ABTASb2J21qdFCReBSZDIMYDo8fu&theme=dark&language=en" 
              style={{
                "width": "100%",
                "height": "30em",
                "border": "none"
              }}
            >
            </iframe> */}

            <div className="content">
              It is used for:
              <ul>
                <li>software development,</li>
                <li>mathematics,</li>
                <li>system scripting.</li>
              </ul>
            </div>
            <div className="content">
              <h3>What can Python do?</h3>
              <ul>
                <li>
                  Python works on different platforms (Windows, Mac, Linux,
                  Raspberry Pi, etc).
                </li>
                <li>
                  Python has a simple syntax similar to the English language.
                </li>
                <li>
                  Python has syntax that allows developers to write programs
                  with fewer lines than some other programming languages.
                </li>
                <li>
                  Python runs on an interpreter system, meaning that code can be
                  executed as soon as it is written. This means that prototyping
                  can be very quick.
                </li>
                <li>
                  Python can be treated in a procedural way, an object-oriented
                  way or a functional way.
                </li>
              </ul>

              <SyntaxHighlighter language="python" showLineNumbers={true} style={xonokai}>
                print("Hello World!");
              </SyntaxHighlighter>

              {/* <CopyBlock
                text={`# print("Hello World!")
print("Hello World!")`}
                language="python"
                showLineNumbers="true"
                theme={dracula}
                codeBlock
                customStyle={{
                  backgroundColor: '#4a4a4a',
                  fontFamily: 'Menlo'
                }}
              /> */}

            </div>
            <div className="content">
              <h3>Good to know</h3>
              <ul>
                <li>
                  The most recent major version of Python is Python 3, which we
                  shall be using in this tutorial. However, Python 2, although
                  not being updated with anything other than security updates,
                  is still quite popular.
                </li>
                <li>
                  In this tutorial Python will be written in a text editor. It
                  is possible to write Python in an Integrated Development
                  Environment, such as Thonny, Pycharm, Netbeans or Eclipse
                  which are particularly useful when managing larger collections
                  of Python files.
                </li>
              </ul>
            </div>
            <div className="content">
              <h3>Python Syntax compared to other programming languages</h3>
              <ul>
                <li>
                  Python was designed for readability, and has some similarities
                  to the English language with influence from mathematics.
                </li>
                <li>
                  Python uses new lines to complete a command, as opposed to
                  other programming languages which often use semicolons or
                  parentheses.
                </li>
                <li>
                  Python relies on indentation, using whitespace, to define
                  scope; such as the scope of loops, functions and classNamees.
                  Other programming languages often use curly-brackets for this
                  purpose.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Introduction;
