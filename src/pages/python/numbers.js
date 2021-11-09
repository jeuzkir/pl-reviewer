import React from "react";
import Layout from "../../components/layout/Layout";
import SyntaxHighlighter from "react-syntax-highlighter";

const DataNumbers = () => {
  return (
    <Layout>
      <div class="container">
        <div class="card">
          <div class="card-content">
            <h1 class="title">Python Numbers</h1>

            <div class="content mt-5">
              <p>
                There are three numeric types in Python:
                <ul>
                  <li>
                    {" "}
                    <code>int</code>
                  </li>
                  <li>
                    {" "}
                    <code>float</code>
                  </li>
                  <li>
                    {" "}
                    <code>complex</code>
                  </li>
                </ul>
              </p>
              <p>
                Variables of numeric types are created when you assign a value
                to them:
              </p>
            </div>

            <div class="card">
              <div class="card-content">
                <header class="card-header">
                  <p class="card-header-title">Example</p>
                </header>
                <div class="content">
                  <SyntaxHighlighter language="python">
                    {`x = 1    # int \ny = 2.8  # float \nz = 1j   # complex`}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>

            <div class="content mt-5">
              <p>
                To verify the type of any object in Python, use the{" "}
                <code>type()</code> function:
              </p>
            </div>

            <div class="card">
              <div class="card-content">
                <header class="card-header">
                  <p class="card-header-title">Example</p>
                </header>
                <div class="content">
                  <SyntaxHighlighter language="python">
                    {`print(type(x)) \nprint(type(y)) \nprint(type(z))x`}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>

            <div class="content mt-5">
              <h1 class="subtitle">Int</h1>
              <p>
                Int, or integer, is a whole number, positive or negative,
                without decimals, of unlimited length.
              </p>
            </div>

            <div class="card">
              <div class="card-content">
                <header class="card-header">
                  <p class="card-header-title">Example</p>
                </header>
                <div class="content">
                  <SyntaxHighlighter language="python">
                    {`x = 1 \ny = 35656222554887711 \nz = -3255522 \nprint(type(x)) \nprint(type(y)) \nprint(type(z))`}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>

            <div class="content mt-5">
              <h1 class="subtitle">Float</h1>
              <p>
                Float, or "floating point number" is a number, positive or
                negative, containing one or more decimals.
              </p>
            </div>

            <div class="card">
              <div class="card-content">
                <header class="card-header">
                  <p class="card-header-title">Example</p>
                </header>
                <div class="content">
                  <SyntaxHighlighter language="python">
                    {`x = 1.10 \ny = 1.0 \nz = -35.59 \nprint(type(x)) \nprint(type(y)) \nprint(type(z))`}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>

            <div class="content mt-5">
              <p>
                Float can also be scientific numbers with an "e" to indicate the
                power of 10.
              </p>
            </div>

            <div class="card">
              <div class="card-content">
                <header class="card-header">
                  <p class="card-header-title">Example</p>
                </header>
                <div class="content">
                  <SyntaxHighlighter language="python">
                    {`x = 35e3 \ny = 12E4 \nz = -87.7e100 \nprint(type(x)) \nprint(type(y)) \nprint(type(z))`}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>

            <div class="content mt-5">
              <h1 class="subtitle">Complex</h1>
              <p>
                Complex numbers are written with a "j" as the imaginary part:
              </p>
            </div>

            <div class="card">
              <div class="card-content">
                <header class="card-header">
                  <p class="card-header-title">Example</p>
                </header>
                <div class="content">
                  <SyntaxHighlighter language="python">
                    {`x = 3+5j \ny = 5j \nz = -5j \nprint(type(x)) \nprint(type(y)) \nprint(type(z))`}
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
export default DataNumbers;
