import React from "react";
import Layout from "../../components/layout/Layout";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  xonokai,
  atomDark,
} from "react-syntax-highlighter/dist/esm/styles/prism";

const Strings = () => {
  return (
    <Layout>
      <div class="container">
        <div class="card">
          <div class="card-content">
            <h1 class="title">Java Strings</h1>
            <div class="content mt-5">
              <h2>Java Strings</h2>
              <p>Strings are used for storing text.</p>
              <p>
                A<span>&nbsp;</span>
                <code class="w3-codespan">String</code>
                <span>&nbsp;</span>variable contains a collection of characters
                surrounded by double quotes:
              </p>
              <div class="card">
                <div class="card-content">
                  <header class="card-header">
                    <p class="card-header-title">
                      Example: Create a variable of type String and assign it a
                      value:
                    </p>
                  </header>
                  <div class="content">
                    <SyntaxHighlighter language="java" style={xonokai}>
                      {`String greeting = "Hello";`}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
              <h2>String Length</h2>
              <p>
                A String in Java is actually an object, which contain methods
                that can perform certain operations on strings. For example, the
                length of a string can be found with the<span>&nbsp;</span>
                <code class="w3-codespan">length()</code>
                <span>&nbsp;</span>method:
              </p>
              <div class="card">
                <div class="card-content">
                  <header class="card-header">
                    <p class="card-header-title">Example</p>
                  </header>
                  <div class="content">
                    <SyntaxHighlighter language="java" style={xonokai}>
                      {`String txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; \nSystem.out.println("The length of the txt string is: " + txt.length());`}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
              <h2>More String Methods</h2>
              <p>
                There are many string methods available, for example
                <span>&nbsp;</span>
                <code class="w3-codespan">toUpperCase()</code>
                <span>&nbsp;</span>and<span>&nbsp;</span>
                <code class="w3-codespan">toLowerCase()</code>:
              </p>
              <div class="card">
                <div class="card-content">
                  <header class="card-header">
                    <p class="card-header-title">Example</p>
                  </header>
                  <div class="content">
                    <SyntaxHighlighter language="java" style={xonokai}>
                      {`String txt = "Hello World"; \nSystem.out.println(txt.toUpperCase());   // Outputs "HELLO WORLD" \nSystem.out.println(txt.toLowerCase());   // Outputs "hello world"`}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
              <h2>Finding a Character in a String</h2>
              <p>
                The<span>&nbsp;</span>
                <code class="w3-codespan">indexOf()</code>
                <span>&nbsp;</span>method returns the<span>&nbsp;</span>
                <strong>index</strong>
                <span>&nbsp;</span>(the position) of the first occurrence of a
                specified text in a string (including whitespace):
              </p>
              <div class="card">
                <div class="card-content">
                  <header class="card-header">
                    <p class="card-header-title">Example</p>
                  </header>
                  <div class="content">
                    <SyntaxHighlighter language="java" style={xonokai}>
                      {`String txt = "Please locate where 'locate' occurs!"; \nSystem.out.println(txt.indexOf("locate")); // Outputs 7`}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
              <h2>String Concatenation</h2>
              <p>
                The<span>&nbsp;</span>
                <code class="w3-codespan">+</code>
                <span>&nbsp;</span>operator can be used between strings to
                combine them. This is called<span>&nbsp;</span>
                <strong>concatenation</strong>:
              </p>
              <div class="card">
                <div class="card-content">
                  <header class="card-header">
                    <p class="card-header-title">Example</p>
                  </header>
                  <div class="content">
                    <SyntaxHighlighter language="java" style={xonokai}>
                      {`String firstName = "John"; \nString lastName = "Doe"; \nSystem.out.println(firstName + " " + lastName);`}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
              <p class="mt-5">
                You can also use the<span>&nbsp;</span>
                <code class="w3-codespan">concat()</code>
                <span>&nbsp;</span>method to concatenate two strings:
              </p>
              <div class="card">
                <div class="card-content">
                  <header class="card-header">
                    <p class="card-header-title">Example</p>
                  </header>
                  <div class="content">
                    <SyntaxHighlighter language="java" style={xonokai}>
                      {`String firstName = "John "; \nString lastName = "Doe"; \nSystem.out.println(firstName.concat(lastName));`}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
              <h2>Special Characters</h2>
              <p>
                Because strings must be written within quotes, Java will
                misunderstand this string, and generate an error:
              </p>
              <div class="card" style={{ backgroundColor: "#FFDDDD" }}>
                <header class="card-header">
                  <p class="card-header-title">Example</p>
                </header>
                <div class="card-content">
                  <div class="content">
                    <SyntaxHighlighter language="java" style={xonokai}>
                      {`String txt = "We are the so-called "Vikings" from the north.";`}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
              <p class="mt-5">
                The solution to avoid this problem, is to use the
                <span>&nbsp;</span>
                <strong>backslash escape character</strong>.
              </p>
              <p>
                The backslash (<code class="w3-codespan">\</code>) escape
                character turns special characters into string characters:
              </p>
              <table class="ws-table-all notranslate">
                <tbody>
                  <tr>
                    <th width="35%">Escape character</th>
                    <th>Result</th>
                    <th>Description</th>
                  </tr>
                  <tr>
                    <td>\'</td>
                    <td>'</td>
                    <td>Single quote</td>
                  </tr>
                  <tr>
                    <td>\"</td>
                    <td>"</td>
                    <td>Double quote</td>
                  </tr>
                  <tr>
                    <td>\\</td>
                    <td>\</td>
                    <td>Backslash</td>
                  </tr>
                </tbody>
              </table>
              <p>
                The sequence<span>&nbsp;</span>
                <code class="w3-codespan">\"</code>&nbsp; inserts a double quote
                in a string:
              </p>
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title">Example</p>
                </header>
                <div class="card-content">
                  <div class="content">
                    <SyntaxHighlighter language="java" style={xonokai}>
                      {`String txt = "We are the so-called \"Vikings\" from the north.";`}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
              <p class="mt-5">
                The sequence<span>&nbsp;</span>
                <code class="w3-codespan">\'</code>&nbsp; inserts a single quote
                in a string:
              </p>
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title">Example</p>
                </header>
                <div class="card-content">
                  <div class="content">
                    <SyntaxHighlighter language="java" style={xonokai}>
                      {`String txt = "It\'s alright.";`}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
              <p class="mt-5">
                The sequence<span>&nbsp;</span>
                <code class="w3-codespan">\\'</code>&nbsp; inserts a single
                backslash in a string:
              </p>
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title">Example</p>
                </header>
                <div class="card-content">
                  <div class="content">
                    <SyntaxHighlighter language="java" style={xonokai}>
                      {`String txt = "The character \\ is called backslash.";`}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
              <p>Six other escape sequences are valid in Java:</p>
              <table class="ws-table-all notranslate">
                <tbody>
                  <tr>
                    <th width="25%">Code</th>
                    <th>Result</th>
                    <th>Try it</th>
                  </tr>
                  <tr>
                    <td>\n</td>
                    <td>New Line</td>
                    <td>
                      <a
                        target="_blank"
                        class="w3-btn btnsmall btnsmall"
                        href="https://www.w3schools.com/java/tryjava.asp?filename=demo_strings_newline"
                        rel="noopener"
                      >
                        Try it &raquo;
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>\r</td>
                    <td>Carriage Return</td>
                    <td>
                      <a
                        target="_blank"
                        class="w3-btn btnsmall btnsmall"
                        href="https://www.w3schools.com/java/tryjava.asp?filename=demo_strings_r"
                        rel="noopener"
                      >
                        Try it &raquo;
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>\t</td>
                    <td>Tab</td>
                    <td>
                      <a
                        target="_blank"
                        class="w3-btn btnsmall btnsmall"
                        href="https://www.w3schools.com/java/tryjava.asp?filename=demo_strings_tab"
                        rel="noopener"
                      >
                        Try it &raquo;
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>\b</td>
                    <td>Backspace</td>
                    <td>
                      <a
                        target="_blank"
                        class="w3-btn btnsmall btnsmall"
                        href="https://www.w3schools.com/java/tryjava.asp?filename=demo_strings_b"
                        rel="noopener"
                      >
                        Try it &raquo;
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>\f</td>
                    <td>Form Feed</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
              <hr />
              <h2>Adding Numbers and Strings</h2>
              <div class="w3-panel w3-warning">
                <b>WARNING!</b>
                <p>
                  Java uses the<span>&nbsp;</span>
                  <code class="w3-codespan">+</code>
                  <span>&nbsp;</span>operator for both addition and
                  concatenation.
                </p>
                <p>Numbers are added. Strings are concatenated.</p>
              </div>
              <p>If you add two numbers, the result will be a number:</p>
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title">Example</p>
                </header>
                <div class="card-content">
                  <div class="content">
                    <SyntaxHighlighter language="java" style={xonokai}>
                      {`int x = 10; \nint y = 20; \nint z = x + y;      // z will be 30 (an integer/number)`}
                    </SyntaxHighlighter>
                  </div>
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
