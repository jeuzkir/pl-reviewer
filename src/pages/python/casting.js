import React from "react";
import Layout from "../../components/layout/Layout";
import SyntaxHighlighter from "react-syntax-highlighter";

const Casting = () => {
  return (
    <Layout>
      <div class="container">
        <div class="card">
          <div class="card-content">
            <h1 class="title">Python Numbers</h1>
            <div class="content mt-5">
              <h2 class="subtitle">Specify a Variable Type</h2>
              <p>
                There may be times when you want to specify a type on to a
                variable. This can be done with casting. Python is an
                object-orientated language, and as such it uses classes to
                define data types, including its primitive types.
              </p>
              <p>
                Casting in python is therefore done using constructor functions:
              </p>
              <ul>
                <li>
                  <code>int()</code> - constructs an integer number from an
                  integer literal, a float literal (by removing all decimals),
                  or a string literal (providing the string represents a whole
                  number)
                </li>
                <li>
                  <code>float()</code> - constructs a float number from an
                  integer literal, a float literal or a string literal
                  (providing the string represents a float or an integer){" "}
                </li>
                <li>
                  <code>str()</code> - constructs a string from a wide variety
                  of data types, including strings, integer literals and float
                  literals
                </li>
              </ul>
            </div>

            <div class="card">
              <div class="card-content">
                <header class="card-header">
                  <p class="card-header-title">Example</p>
                </header>
                <div class="content">
                  <SyntaxHighlighter language="python">
                    {`x = int(1)  # x will be 1 \ny = int(2.8) # y will be 2 \nz = int("3") # z will be 3`}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>

            <div class="card mt-5">
              <div class="card-content">
                <header class="card-header">
                  <p class="card-header-title">Example</p>
                </header>
                <div class="content">
                  <SyntaxHighlighter language="python">
                    {`x = float(1)     # x will be 1.0 \ny = float(2.8)   # y will be 2.8 \nz = float("3")   # z will be 3.0 \nw = float("4.2") # w will be 4.2`}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>

            <div class="card mt-5">
              <div class="card-content">
                <header class="card-header">
                  <p class="card-header-title">Example</p>
                </header>
                <div class="content">
                  <SyntaxHighlighter language="python">
                    {`x = str("s1") # x will be 's1' y = str(2) \n# y will be '2' z = str(3.0)  # z will be '3.0'`}
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
export default Casting;
