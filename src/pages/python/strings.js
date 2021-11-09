import React from "react";
import Layout from "../../components/layout/Layout";
import SyntaxHighlighter from "react-syntax-highlighter";

const Strings = () => {
  return (
    <Layout>
      <div class="container">
        <div class="card">
          <div class="card-content">
            <h1 class="title">Python Strings</h1>

            <div class="content">
              <h2 class="subtitle">Strings</h2>
              <p>
                Strings in python are surrounded by either single quotation
                marks, or double quotation marks.
              </p>
              <p>
                <code>'hello'</code> is the same as <code>"hello"</code>.
              </p>
              <p>
                You can display a string literal with the <code>print()</code>{" "}
                function:
              </p>
            </div>

            <div class="card">
              <div class="card-content">
                <header class="card-header">
                  <p class="card-header-title">Example</p>
                </header>
                <div class="content">
                  <SyntaxHighlighter language="python">
                    {`print("Hello") \nprint('Hello')`}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>

            <div class="content mt-5">
              <h2 class="subtitle">Assign String to a Variable</h2>
              <p>
                Assigning a string to a variable is done with the variable name
                followed by an equal sign and the string:
              </p>
            </div>

            <div class="card">
              <div class="card-content">
                <header class="card-header">
                  <p class="card-header-title">Example</p>
                </header>
                <div class="content">
                  <SyntaxHighlighter language="python">
                    {`a = "Hello" \nprint(a)`}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>

            <div class="content mt-5">
              <h2 class="subtitle">Multiline Strings</h2>
              <p>
                You can assign a multiline string to a variable by using three
                quotes:
              </p>
            </div>

            <div class="card">
              <div class="card-content">
                <header class="card-header">
                  <p class="card-header-title">Example</p>
                </header>
                <div class="content">
                  <SyntaxHighlighter language="python">
                    {`a = """Lorem ipsum dolor sit amet, \nconsectetur adipiscing elit, \nsed do eiusmod tempor incididunt \nut labore et dolore magna aliqua.""" \nprint(a)`}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>

            <code class="mt-5">
              Note: in the result, the line breaks are inserted at the same
              position as in the code.
            </code>

            <div class="content mt-5">
              <h2 class="subtitle">Strings are Arrays</h2>
              <p>
                Like many other popular programming languages, strings in Python
                are arrays of bytes representing unicode characters.
              </p>
              <p>
                However, Python does not have a character data type, a single
                character is simply a string with a length of 1.
              </p>
              <p>
                Square brackets can be used to access elements of the string.
              </p>
            </div>

            <div class="card">
              <div class="card-content">
                <header class="card-header">
                  <p class="card-header-title">Example</p>
                </header>
                <div class="content">
                  <SyntaxHighlighter language="python">
                    {`a = "Hello, World!" \nprint(a[1])`}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>

            <div class="content mt-5">
              <h2 class="subtitle">Looping Through a String</h2>
              <p>
                Since strings are arrays, we can loop through the characters in
                a string, with a <code>for</code> loop.
              </p>
            </div>

            <div class="card">
              <div class="card-content">
                <header class="card-header">
                  <p class="card-header-title">Example</p>
                </header>
                <div class="content">
                  <SyntaxHighlighter language="python">
                    {`for x in "banana": \n  print(x)`}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>

            <div class="content mt-5">
              <h2 class="subtitle">String Length</h2>
              <p>
                To get the length of a string, use the <code>len()</code>{" "}
                function.
              </p>
            </div>

            <div class="card">
              <div class="card-content">
                <header class="card-header">
                  <p class="card-header-title">Example</p>
                </header>
                <div class="content">
                  <SyntaxHighlighter language="python">
                    {`a = "Hello, World!" \nprint(len(a))`}
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
export default Strings;
