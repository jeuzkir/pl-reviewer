import React from "react";
import Layout from "../../components/layout/Layout";
import SyntaxHighlighter from "react-syntax-highlighter";

const DataTypes = () => {
  return (
    <Layout>
      <div class="container">
        <div class="card">
          <div class="card-content">
            <h1 class="title">Python Data Types</h1>

            <div class="content mt-5">
              <h2 class="subtitle">Built-in Data Types</h2>

              <p>In programming, data type is an important concept.</p>
              <p>
                Variables can store data of different types, and different types
                can do different things.
              </p>
              <p>
                Python has the following data types built-in by default, in
                these categories:
              </p>
            </div>

            <div class="content mt-5">
              <ul>
                <li>
                  Text Type: <code> str </code>
                </li>
                <li>
                  Numeric Types: <code> int, float, complex </code>
                </li>
                <li>
                  Sequence Types: <code> list, tuple, range </code>
                </li>
                <li>
                  Mapping Type: <code> dict </code>
                </li>
                <li>
                  Set Types: <code> set, frozenset </code>
                </li>
                <li>
                  Boolean Type: <code> bool </code>
                </li>
                <li>
                  Binary Types: <code> bytes, bytearray, memoryview </code>
                </li>
              </ul>
            </div>

            <div class="content mt-5">
              <h2 class="subtitle">Getting the Data Type</h2>
              <p>
                You can get the data type of any object by using the{" "}
                <code>type()</code> function:
              </p>
            </div>

            <div class="card">
              <div class="card-content">
                <header class="card-header">
                  <p class="card-header-title">
                    Example (Print the data type of the variable x:)
                  </p>
                </header>
                <div class="content">
                  <SyntaxHighlighter language="python">
                    {`x = 5 \nprint(type(x))`}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>

            <div class="content mt-5">
              <h2 class="subtitle">Setting the Data Type</h2>
              <p>
                In Python, the data type is set when you assign a value to a
                variable:
              </p>

              <div class="table-container">
                <table class="table">
                  <thead>
                    <tr>
                      <th>Example</th>
                      <th>Data Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <code>x = "Hello World"</code>
                      </td>
                      <td>
                        <code>str</code>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <code>x = 20</code>
                      </td>
                      <td>
                        <code>int</code>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <code>x = 20.5</code>
                      </td>
                      <td>
                        <code>float</code>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <code>x = 1j</code>
                      </td>
                      <td>
                        <code>complex</code>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <code>x = ["apple", "banana", "cherry"] </code>
                      </td>
                      <td>
                        <code>list</code>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <code>x = ("apple", "banana", "cherry") </code>
                      </td>
                      <td>
                        <code>tuple</code>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <code>x = range(6) </code>
                      </td>
                      <td>
                        <code>range</code>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <code>x = {("apple", "banana", "cherry")} </code>
                      </td>
                      <td>
                        <code>set</code>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <code>
                          x = frozenset({("apple", "banana", "cherry")})
                        </code>
                      </td>
                      <td>
                        <code>frozen set</code>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <code>true</code>
                      </td>
                      <td>
                        <code>bool</code>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default DataTypes;
