import React from "react";
import Layout from "../../components/layout/Layout";
import SyntaxHighlighter from "react-syntax-highlighter";

const Operators = () => {
  return (
    <Layout>
      <div class="container">
        <div class="card">
          <div class="card-content">
            <h1 class="title">Python Operators</h1>

            <div class="content">
              <p>
                Operators are used to perform operations on variables and
                values.
              </p>
              <p>
                In the example below, we use the <code>+</code> operator to add
                together two values:
              </p>
            </div>

            <div class="card">
              <div class="card-content">
                <header class="card-header">
                  <p class="card-header-title">Example</p>
                </header>
                <div class="content">
                  <SyntaxHighlighter language="python">
                    print(10 + 5)
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>

            <div class="content mt-5">
              <p>Python divides the operators in the following groups:</p>
              <ul>
                <li>Arithmetic operators</li>
                <li>Assignment operators</li>
                <li>Comparison operators</li>
                <li>Logical operators</li>
                <li>Identity operators</li>
                <li>Membership operators</li>
                <li>Bitwise operators</li>
              </ul>
            </div>

            <h1 class="title">Python Arithmetic Operators</h1>
            <p>
              Arithmetic operators are used with numeric values to perform
              common mathematical operations:
            </p>

            <div class="table-container">
              <table class="table">
                <thead>
                  <tr>
                    <th>Operator</th>
                    <th>Name</th>
                    <th>Example</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>+</td>
                    <td>Addition</td>
                    <td> x + y</td>
                  </tr>
                  <tr>
                    <td>-</td>
                    <td>Subtraction</td>
                    <td> x - y</td>
                  </tr>
                  <tr>
                    <td>*</td>
                    <td>Multiplication</td>
                    <td> x * y</td>
                  </tr>
                  <tr>
                    <td>/</td>
                    <td>Division</td>
                    <td> x / y</td>
                  </tr>
                  <tr>
                    <td>%</td>
                    <td>Modulus</td>
                    <td> x % y</td>
                  </tr>
                  <tr>
                    <td>**</td>
                    <td>Exponentiation</td>
                    <td> x ** y</td>
                  </tr>
                  <tr>
                    <td>//</td>
                    <td>Floor division </td>
                    <td> x // y</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h1 class="title">Python Assignment Operators</h1>
            <p>Assignment operators are used to assign values to variables:</p>

            <div class="table-container">
              <table class="table">
                <thead>
                  <tr>
                    <th>Operator</th>
                    <th>Example</th>
                    <th>Same as</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>=</td>
                    <td>x = 5 </td>
                    <td>x = 5 </td>
                  </tr>
                  <tr>
                    <td>+=</td>
                    <td>x += 3</td>
                    <td>x = x + 3 </td>
                  </tr>
                  <tr>
                    <td>-= </td>
                    <td>x -= 3</td>
                    <td>x = x - 3 </td>
                  </tr>
                  <tr>
                    <td>*=</td>
                    <td>x *= 3</td>
                    <td>x = x / 3 </td>
                  </tr>
                  <tr>
                    <td>%=</td>
                    <td>x %= 3</td>
                    <td>x = x % 3 </td>
                  </tr>
                  <tr>
                    <td>//= </td>
                    <td>x //= 3 </td>
                    <td>x = x // 3 </td>
                  </tr>
                  <tr>
                    <td>**= </td>
                    <td>x **= 3 </td>
                    <td>x = x ** 3 </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h1 class="title">Python Comparison Operators</h1>
            <p>Comparison operators are used to compare two values:</p>

            <div class="table-container">
              <table class="table">
                <thead>
                  <tr>
                    <th>Operator</th>
                    <th>Name</th>
                    <th>Example</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>==</td>
                    <td>Equal</td>
                    <td>x == y</td>
                  </tr>
                  <tr>
                    <td>!=</td>
                    <td>Not equal </td>
                    <td>x != y </td>
                  </tr>
                  <tr>
                    <td> {`>`} </td>
                    <td>Greater than </td>
                    <td> {`x > y`}</td>
                  </tr>
                  <tr>
                    <td>{`<`}</td>
                    <td>Less than </td>
                    <td>{`x < y`}</td>
                  </tr>
                  <tr>
                    <td> {`>=`} </td>
                    <td>Greater than or equal to </td>
                    <td> {`x >= y`} </td>
                  </tr>
                  <tr>
                    <td>{`<=`} </td>
                    <td>Less than or equal to </td>
                    <td>{`x <= y`}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Operators;
