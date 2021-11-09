import React from "react";
import Layout from "../../components/layout/Layout";
import SyntaxHighlighter from "react-syntax-highlighter";

const Boolean = () => {
  return (
    <Layout>
      <div class="container">
        <div class="card">
          <div class="card-content">
            <h1 class="title">Python Booleans</h1>

            <div class="content">
              <p>
                Booleans represent one of two values: <code>True</code> or{" "}
                <code>False</code>.
              </p>
              <h2 class="subtitle">Boolean Values</h2>
              <ul>
                <li>
                  In programming you often need to know if an expression is{" "}
                  <code>True</code> or <code>False</code>.
                </li>
                <li>
                  You can evaluate any expression in Python, and get one of two
                  answers, <code>True</code> or <code>False</code>.
                </li>
                <li>
                  When you compare two values, the expression is evaluated and
                  Python returns the Boolean answer:
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
                    {`print(10 > 9) \nprint(10 == 9) \nprint(10 < 9)`}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>

            <div class="content mt-5">
              <p>
                When you run a condition in an if statement, Python returns{" "}
                <code>True</code> or <code>False</code>:
              </p>
            </div>

            <div class="card">
              <div class="card-content">
                <header class="card-header">
                  <p class="card-header-title">Example</p>
                </header>
                <div class="content">
                  <SyntaxHighlighter language="python">
                    {`a = 200 \nb = 33 \nif b > a: \n  print("b is greater than a") \nelse: \n  print("b is not greater than a")`}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>

            <div class="content mt-5">
              <h2 class="subtitle">Most Values are True</h2>
              <ul>
                <li>
                  Almost any value is evaluated to <code>True</code> if it has
                  some sort of content.
                </li>
                <li>
                  Any string is <code>True</code>, except empty strings.
                </li>
                <li>
                  Any number is <code>True</code>, except <code>0</code>.
                </li>
                <li>
                  Any list, tuple, set, and dictionary are <code>True</code>,
                  except empty ones.
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
                    {`bool("abc") \nbool(123) \nbool(["apple", "cherry", "banana"])`}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>

            <div class="content mt-5">
              <h2 class="subtitle">Some Values are False</h2>
              <p>
                In fact, there are not many values that evaluate to{" "}
                <code>False</code>, except empty values, such as{" "}
                <code>(), [], {}, "",</code> the number <code>0</code>, and the
                value <code>None</code>. And of course the value{" "}
                <code>False</code> evaluates to
                <code>False</code>.
              </p>
            </div>

            <div class="card">
              <div class="card-content">
                <header class="card-header">
                  <p class="card-header-title">Example</p>
                </header>
                <div class="content">
                  <SyntaxHighlighter language="python">
                    {`bool(False)\nbool(None)\nbool(0)\nbool("")\nbool(())\nbool([])\nbool({})`}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
            <div class="content mt-5">
              <p>
                One more value, or object in this case, evaluates to False, and
                that is if you have an object that is made from a class with a
                <code>__len__</code> function that returns <code>0</code> or{" "}
                <code>False</code>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Boolean;
