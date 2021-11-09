import React from "react";
import Layout from "../../components/layout/Layout";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  xonokai,
  atomDark,
} from "react-syntax-highlighter/dist/esm/styles/prism";

const Variables = () => {
  return (
    <Layout>
      <div class="container">
        <div class="card">
          <div class="card-content">
            <div class="content mt-5">
              <h2>Java Variables</h2>
              <p>Variables are containers for storing data values.</p>
              <p>
                In Java, there are different<span>&nbsp;</span>
                <strong>types</strong>
                <span>&nbsp;</span>of variables, for example:
              </p>
              <ul>
                <li>
                  <code class="w3-codespan">String</code>
                  <span>&nbsp;</span>- stores text, such as "Hello". String
                  values are surrounded by double quotes
                </li>
                <li>
                  <code class="w3-codespan">int</code>
                  <span>&nbsp;</span>- stores integers (whole numbers), without
                  decimals, such as 123 or -123
                </li>
                <li>
                  <code class="w3-codespan">float</code>
                  <span>&nbsp;</span>- stores floating point numbers, with
                  decimals, such as 19.99 or -19.99
                </li>
                <li>
                  <code class="w3-codespan">char</code>
                  <span>&nbsp;</span>- stores single characters, such as 'a' or
                  'B'. Char values are surrounded by single quotes
                </li>
                <li>
                  <code class="w3-codespan">boolean</code>
                  <span>&nbsp;</span>- stores values with two states: true or
                  false
                </li>
              </ul>
              <hr />
              <h2>Declaring (Creating) Variables</h2>
              <p>
                To create a variable, you must specify the type and assign it a
                value:
              </p>
              <div class="card">
                <div class="card-content">
                  <header class="card-header">
                    <p class="card-header-title">Syntax</p>
                  </header>
                  <div class="content">
                    <SyntaxHighlighter language="java" style={xonokai}>
                      type variableName = value;
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
              <p class="mt-5">
                Where<span>&nbsp;</span>
                <em>type</em>
                <span>&nbsp;</span>is one of Java's types (such as
                <span>&nbsp;</span>
                <code class="w3-codespan">int</code>
                <span>&nbsp;</span>or<span>&nbsp;</span>
                <code class="w3-codespan">String</code>), and<span>&nbsp;</span>
                <em>variableName</em>
                <span>&nbsp;</span>is the name of the variable (such as
                <span>&nbsp;</span>
                <strong>x</strong>
                <span>&nbsp;</span>or<span>&nbsp;</span>
                <strong>name</strong>). The<span>&nbsp;</span>
                <b>equal sign</b>
                <span>&nbsp;</span>is used to assign values to the variable.
              </p>
              <p>
                To create a variable that should store text, look at the
                following example:
              </p>
              <div class="card">
                <div class="card-content">
                  <header class="card-header">
                    <p class="card-header-title">
                      <p>
                        Create a variable called<span>&nbsp;</span>
                        <strong>name</strong>
                        <span>&nbsp;</span>of type<span>&nbsp;</span>
                        <code class="w3-codespan">String</code>
                        <span>&nbsp;</span>and assign it the value "
                        <strong>John</strong>":
                      </p>
                    </p>
                  </header>
                  <div class="content">
                    <SyntaxHighlighter language="java" style={xonokai}>
                      {`String name = "John"; \nSystem.out.println(name);`}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
              <p class="mt-5">
                To create a variable that should store a number, look at the
                following example:
              </p>
              <div class="card">
                <div class="card-content">
                  <header class="card-header">
                    <p class="card-header-title">
                      <p>
                        Create a variable called<span>&nbsp;</span>
                        <strong>myNum</strong>
                        <span>&nbsp;</span>of type<span>&nbsp;</span>
                        <code class="w3-codespan">int</code>
                        and assign it the value
                        <strong> 15</strong>:
                      </p>
                    </p>
                  </header>
                  <div class="content">
                    <SyntaxHighlighter language="java" style={xonokai}>
                      {`int myNum = 15; \nSystem.out.println(myNum);`}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
              <p class="mt-5">
                You can also declare a variable without assigning the value, and
                assign the value later:
              </p>
              <div class="card">
                <div class="card-content">
                  <header class="card-header">
                    <p class="card-header-title"> Example</p>
                  </header>
                  <div class="content">
                    <SyntaxHighlighter language="java" style={xonokai}>
                      {`int myNum; \nmyNum = 15; \nSystem.out.println(myNum);`}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
              <p class="mt-5">
                Note that if you assign a new value to an existing variable, it
                will overwrite the previous value:
              </p>
              <div class="card">
                <div class="card-content">
                  <header class="card-header">
                    <p class="card-header-title">
                      Example: Change the value of myNum from 15 to 20:
                    </p>
                  </header>
                  <div class="content">
                    <SyntaxHighlighter language="java" style={xonokai}>
                      {`int myNum = 15; \nmyNum = 20;  // myNum is now 20 \nSystem.out.println(myNum);`}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
              <h2>Final Variables</h2>
              <p>
                However, you can add the<span>&nbsp;</span>
                <code class="w3-codespan">final</code>
                <span>&nbsp;</span>keyword if you don't want others (or
                yourself) to overwrite existing values (this will declare the
                variable as "final" or "constant", which means unchangeable and
                read-only):
              </p>
              <div class="card" style={{ backgroundColor: "#FFDDDD" }}>
                <header class="card-header">
                  <p class="card-header-title">Example</p>
                </header>
                <div class="card-content">
                  <div class="content">
                    <SyntaxHighlighter language="java" style={xonokai}>
                      {`final int myNum = 15; \nmyNum = 20;  // will generate an error: cannot assign a value to a final variable`}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
              <h2>Other Types</h2>
              <p>
                A demonstration of how to declare variables of other types:
              </p>
              <div class="card">
                <div class="card-content">
                  <header class="card-header">
                    <p class="card-header-title">
                      Example: Change the value of myNum from 15 to 20:
                    </p>
                  </header>
                  <div class="content">
                    <SyntaxHighlighter language="java" style={xonokai}>
                      {`int myNum = 5; \nfloat myFloatNum = 5.99f; \nchar myLetter = 'D'; \nboolean myBool = true; \nString myText = "Hello";`}
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
export default Variables;
