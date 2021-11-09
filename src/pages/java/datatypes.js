import React from "react";
import Layout from "../../components/layout/Layout";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { xonokai } from "react-syntax-highlighter/dist/esm/styles/prism";

const DataTypes = () => {
  return (
    <Layout>
      <div class="container">
        <div class="card">
          <div class="card-content">
            <div class="content mt-5">
              <h2>Java Data Types</h2>
              <p>
                As explained in the previous chapter, a variable in Java must be
                a specified data type:
              </p>
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title">Example</p>
                </header>
                <div class="card-content">
                  <div class="content">
                    <SyntaxHighlighter language="java" style={xonokai}>
                      {`int myNum = 5;               // Integer (whole number) \nfloat myFloatNum = 5.99f;    // Floating point number \nchar myLetter = 'D';         // Character \nboolean myBool = true;       // Boolean \nString myText = "Hello";     // String`}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
              <p>Data types are divided into two groups:</p>
              <ul>
                <li>
                  Primitive data types - includes<span>&nbsp;</span>
                  <code class="w3-codespan">byte</code>,<span>&nbsp;</span>
                  <code class="w3-codespan">short</code>,<span>&nbsp;</span>
                  <code class="w3-codespan">int</code>,<span>&nbsp;</span>
                  <code class="w3-codespan">long</code>,<span>&nbsp;</span>
                  <code class="w3-codespan">float</code>,<span>&nbsp;</span>
                  <code class="w3-codespan">double</code>,<span>&nbsp;</span>
                  <code class="w3-codespan">boolean</code>
                  <span>&nbsp;</span>and<span>&nbsp;</span>
                  <code class="w3-codespan">char</code>
                </li>
                <li>
                  Non-primitive data types - such as<span>&nbsp;</span>
                  String ,<span>&nbsp;</span>
                  Arrays
                  <span>&nbsp;</span>and<span>&nbsp;</span>
                  Classes
                  <span>&nbsp;</span>(you will learn more about these in a later
                  chapter)
                </li>
              </ul>
              <hr />
              <h2>Primitive Data Types</h2>
              <p>
                A primitive data type specifies the size and type of variable
                values, and it has no additional methods.
              </p>
              <p>There are eight primitive data types in Java:</p>
              <div class="w3-responsive">
                <table class="ws-table-all notranslate">
                  <tbody>
                    <tr>
                      <th>Data Type</th>
                      <th>Size</th>
                      <th>Description</th>
                    </tr>
                    <tr>
                      <td>byte</td>
                      <td>1 byte</td>
                      <td>Stores whole numbers from -128 to 127</td>
                    </tr>
                    <tr>
                      <td>short</td>
                      <td>2 bytes</td>
                      <td>Stores whole numbers from -32,768 to 32,767</td>
                    </tr>
                    <tr>
                      <td>int</td>
                      <td>4 bytes</td>
                      <td>
                        Stores whole numbers from -2,147,483,648 to
                        2,147,483,647
                      </td>
                    </tr>
                    <tr>
                      <td>long</td>
                      <td>8 bytes</td>
                      <td>
                        Stores whole numbers from -9,223,372,036,854,775,808 to
                        9,223,372,036,854,775,807
                      </td>
                    </tr>
                    <tr>
                      <td>float</td>
                      <td>4 bytes</td>
                      <td>
                        Stores fractional numbers. Sufficient for storing 6 to 7
                        decimal digits
                      </td>
                    </tr>
                    <tr>
                      <td>double</td>
                      <td>8 bytes</td>
                      <td>
                        Stores fractional numbers. Sufficient for storing 15
                        decimal digits
                      </td>
                    </tr>
                    <tr>
                      <td>boolean</td>
                      <td>1 bit</td>
                      <td>Stores true or false values</td>
                    </tr>
                    <tr>
                      <td>char</td>
                      <td>2 bytes</td>
                      <td>Stores a single character/letter or ASCII values</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <hr />
              <h2>Numbers</h2>
              <p>Primitive number types are divided into two groups:</p>
              <p>
                <strong>Integer types</strong>
                <span>&nbsp;</span>stores whole numbers, positive or negative
                (such as 123 or -456), without decimals. Valid types are
                <span>&nbsp;</span>
                <code class="w3-codespan">byte</code>,<span>&nbsp;</span>
                <code class="w3-codespan">short</code>,<span>&nbsp;</span>
                <code class="w3-codespan">int</code>
                <span>&nbsp;</span>and<span>&nbsp;</span>
                <code class="w3-codespan">long</code>. Which type you should
                use, depends on the numeric value.
              </p>
              <p>
                <strong>Floating point types</strong>
                <span>&nbsp;</span>represents numbers with a fractional part,
                containing one or more decimals. There are two types:
                <span>&nbsp;</span>
                <code class="w3-codespan">float</code>
                <span>&nbsp;</span>and<span>&nbsp;</span>
                <code class="w3-codespan">double</code>.
              </p>
              <h2>Integer Types</h2>
              <h3>Byte</h3>
              <p>
                The<span>&nbsp;</span>
                <code class="w3-codespan">byte</code>
                <span>&nbsp;</span>data type can store whole numbers from -128
                to 127. This can be used instead of<span>&nbsp;</span>
                <code class="w3-codespan">int</code>
                <span>&nbsp;</span>or other integer types to save memory when
                you are certain that the value will be within -128 and 127:
              </p>
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title">Example</p>
                </header>
                <div class="card-content">
                  <div class="content">
                    <SyntaxHighlighter language="java" style={xonokai}>
                      {`byte myNum = 100; \nSystem.out.println(myNum);`}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
              <h3>Short</h3>
              <p>
                The<span>&nbsp;</span>
                <code class="w3-codespan">short</code>
                <span>&nbsp;</span>data type can store whole numbers from -32768
                to 32767:
              </p>
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title">Example</p>
                </header>
                <div class="card-content">
                  <div class="content">
                    <SyntaxHighlighter language="java" style={xonokai}>
                      {`short myNum = 5000; \nSystem.out.println(myNum);`}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
              <h3>Int</h3>
              <p>
                The<span>&nbsp;</span>
                <code class="w3-codespan">int</code>
                <span>&nbsp;</span>data type can store whole numbers from
                -2147483648 to 2147483647.<span>&nbsp;</span>In general, and in
                our tutorial, the<span>&nbsp;</span>
                <code class="w3-codespan">int</code>
                <span>&nbsp;</span>data type is the preferred data type when we
                create variables with a numeric value.
              </p>
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title">Example</p>
                </header>
                <div class="card-content">
                  <div class="content">
                    <SyntaxHighlighter language="java" style={xonokai}>
                      {`int myNum = 100000; \nSystem.out.println(myNum);`}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
              <h3>Long</h3>
              <p>
                The<span>&nbsp;</span>
                <code class="w3-codespan">long</code>
                <span>&nbsp;</span>data type can store whole numbers from
                -9223372036854775808 to 9223372036854775807. This is used when
                int is not large enough to store the value. Note that you should
                end the value with an "L":
              </p>
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title">Example</p>
                </header>
                <div class="card-content">
                  <div class="content">
                    <SyntaxHighlighter language="java" style={xonokai}>
                      {`long myNum = 15000000000L; \nSystem.out.println(myNum);`}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
              <h3>Double</h3>
              <p>
                The<span>&nbsp;</span>
                <code class="w3-codespan">double</code>
                <span>&nbsp;</span>data type can store fractional numbers from
                1.7e&minus;308 to 1.7e+308. Note that you should end the value
                with a "d":
              </p>
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title">Example</p>
                </header>
                <div class="card-content">
                  <div class="content">
                    <SyntaxHighlighter language="java" style={xonokai}>
                      {`double myNum = 19.99d; \nSystem.out.println(myNum);`}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
              <h2>Booleans</h2>
              <p>
                A boolean data type is declared with the<span>&nbsp;</span>
                <code class="w3-codespan">boolean</code>
                <span>&nbsp;</span>keyword and can only take the values
                <span>&nbsp;</span>
                <code class="w3-codespan">true</code>
                <span>&nbsp;</span>or<span>&nbsp;</span>
                <code class="w3-codespan">false</code>:
              </p>
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title">Example</p>
                </header>
                <div class="card-content">
                  <div class="content">
                    <SyntaxHighlighter language="java" style={xonokai}>
                      {`boolean isJavaFun = true; \nboolean isFishTasty = false; \nSystem.out.println(isJavaFun);     // Outputs true \nSystem.out.println(isFishTasty);   // Outputs false`}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
              <h2>Strings</h2>
              <p>
                The<span>&nbsp;</span>
                <code class="w3-codespan">String</code>
                <span>&nbsp;</span>data type is used to store a sequence of
                characters (text). String values must be surrounded by double
                quotes:
              </p>
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title">Example</p>
                </header>
                <div class="card-content">
                  <div class="content">
                    <SyntaxHighlighter language="java" style={xonokai}>
                      {`String greeting = "Hello World"; \nSystem.out.println(greeting);`}
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
export default DataTypes;
