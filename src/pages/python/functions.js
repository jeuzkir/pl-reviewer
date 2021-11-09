import React from "react";
import Layout from "../../components/layout/Layout";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Functions = () => {
  return (
    <Layout>
      <div class="container">
        <div class="card">
          <div class="card-content">
            <h1 class="title">Python Functions</h1>
            <div class="content mt-5">
              <ul>
                <li>
                  A function is a block of code which only runs when it is
                  called.
                </li>
                <li>
                  You can pass data, known as parameters, into a function.
                </li>
                <li>A function can return data as a result.</li>
              </ul>
            </div>
            <div class="content mt-5">
              <h2 class="subtitle">Creating a Function</h2>
              <p>
                In Python a function is defined using the <code>def</code>{" "}
                keyword:
              </p>
            </div>
            <div class="card">
              <div class="card-content">
                <header class="card-header">
                  <p class="card-header-title">Example</p>
                </header>
                <div class="content">
                  <SyntaxHighlighter language="python">
                    {`def my_function(): \n  print("Hello from a function")`}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
            <div class="content mt-5">
              <h2 class="subtitle">Calling a Function</h2>
              <p>
                To call a function, use the function name followed by
                parenthesis:
              </p>
            </div>
            <div class="card">
              <div class="card-content">
                <header class="card-header">
                  <p class="card-header-title">Example</p>
                </header>
                <div class="content">
                  <SyntaxHighlighter language="python">
                    {`def my_function(): \n print("Hello from a function") 
                    \nmy_function()`}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
            <div class="card mt-5">
              <div class="card-content">
                <header class="card-header">
                  <p class="card-header-title">Output</p>
                </header>
                <div class="content">
                  <SyntaxHighlighter language="python" style={atomDark}>
                    Hello from a function
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
            <div class="content mt-5">
              <h2 class="subtitle">Arguments</h2>
              <p>Information can be passed into functions as arguments.</p>
              <p>
                Arguments are specified after the function name, inside the
                parentheses. You can add as many arguments as you want, just
                separate them with a comma. The following example has a function
                with one argument (fname). When the function is called, we pass
                along a first name, which is used inside the function to print
                the full name:
              </p>
            </div>
            <div class="card">
              <div class="card-content">
                <header class="card-header">
                  <p class="card-header-title">Example</p>
                </header>
                <div class="content">
                  <SyntaxHighlighter language="python">
                    {`def my_function(fname): \n  print(fname + " Refsnes") 
                    \nmy_function("Emil") \nmy_function("Tobias") \nmy_function("Linus")`}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
            <div class="card mt-5">
              <div class="card-content">
                <header class="card-header">
                  <p class="card-header-title">Output</p>
                </header>
                <div class="content">
                  <SyntaxHighlighter language="python" style={atomDark}>
                    {`Emil Refsnes \nTobias Refsnes \nLinus Refsnes`}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
            <div class="content mt-5">
              <h2 class="subtitle">Number of Arguments</h2>
              <p>
                By default, a function must be called with the correct number of
                arguments. Meaning that if your function expects 2 arguments,
                you have to call the function with 2 arguments, not more, and
                not less.
              </p>
            </div>
            <div class="card">
              <div class="card-content">
                <header class="card-header">
                  <p class="card-header-title">Example</p>
                </header>
                <div class="content">
                  <SyntaxHighlighter language="python">
                    {`def my_function(fname, lname): \n  print(fname + " " + lname) 
                    \nmy_function("Emil", "Refsnes")`}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
            <div class="card mt-5">
              <div class="card-content">
                <header class="card-header">
                  <p class="card-header-title">Output</p>
                </header>
                <div class="content">
                  <SyntaxHighlighter language="python" style={atomDark}>
                    Emil Refsnes{" "}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
            <p className="mt-5">
              If you try to call the function with 1 or 3 arguments, you will
              get an error:
            </p>
            <div class="card mt-5" style={{ backgroundColor: "#FFDDDD" }}>
              <header class="card-header">
                <p class="card-header-title">
                  This function expects 2 arguments, but gets only 1:
                </p>
              </header>
              <div class="card-content ">
                <div class="content">
                  <SyntaxHighlighter language="python">
                    {`def my_function(fname, lname): \n  print(fname + " " + lname) 
                    \nmy_function("Emil")`}
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
export default Functions;
