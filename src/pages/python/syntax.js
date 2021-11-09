import React from "react";
import Layout from "../../components/layout/Layout";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Syntax = () => {
  return (
    <Layout>
      <div class="container">
        <div class="card">
          <div class="card-content">
            <h1 class="title"> Python Syntax </h1>

            <div class="content">
              <h2 class="subtitle"> Execute Python Syntax </h2>
              <p>
                As we learned in the previous page, Python syntax can be
                executed by writing directly in the Command Line:
              </p>
            </div>

            <div class="card">
              <div class="card-content">
                <div class="content">
                  <SyntaxHighlighter language="python" style={atomDark}>
                    {`>>> print("Hello, World!") \nHello, World!`}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>

            <div class="content mt-5">
              <p>
                Or by creating a python file on the server, using the .py file
                extension, and running it in the Command Line:
              </p>
            </div>

            <div class="card">
              <div class="card-content">
                <div class="content">
                  <SyntaxHighlighter language="python" style={atomDark}>
                    {`C:\Users\Your Name>python myfile.py`}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>

            <div class="content mt-5">
              <h2 class="subtitle"> Python Indentation</h2>
              <p>
                Indentation refers to the spaces at the beginning of a code
                line.
              </p>
              <p>
                Where in other programming languages the indentation in code is
                for readability only, the indentation in Python is very
                important.
                <br />
              </p>
              <p>Python uses indentation to indicate a block of code.</p>
            </div>
            <div class="card">
              <header class="card-header">
                <p class="card-header-title">Example</p>
              </header>
              <div class="card-content">
                <div class="content">
                  <SyntaxHighlighter language="python">
                    {`if 5 > 2: \n print("Five is greater than two!")`}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
            <div class="content mt-5">
              <p>Python will give you an error if you skip the indentation:</p>
            </div>
            <div class="card" style={{ backgroundColor: "#FFDDDD" }}>
              <header class="card-header">
                <p class="card-header-title">Syntax Error Example</p>
              </header>
              <div class="card-content">
                <div class="content">
                  <SyntaxHighlighter language="python">
                    {`if 5 > 2:\nprint("Five is greater than two!")`}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>

            <div class="content mt-5">
              <p>
                The number of spaces is up to you as a programmer, but it has to
                be at least one.
              </p>
            </div>
            <div class="card">
              <header class="card-header">
                <p class="card-header-title">Example</p>
              </header>
              <div class="card-content">
                <div class="content">
                  <SyntaxHighlighter language="python">
                    {`if 5 > 2: \n print("Five is greater than two!") \nif 5 > 2: \n print("Five is greater than two!") `}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
            <div class="content mt-5">
              <p>
                You have to use the same number of spaces in the same block of
                code, otherwise Python will give you an error:
              </p>
            </div>
            <div class="card" style={{ backgroundColor: "#FFDDDD" }}>
              <header class="card-header">
                <p class="card-header-title">Syntax Error Example</p>
              </header>
              <div class="card-content">
                <div class="content">
                  <SyntaxHighlighter language="python">
                    {`if 5 > 2:\n print("Five is greater than two!")\n        print("Five is greater than two!")`}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Syntax;
