import React from "react";
import Layout from "../../components/layout/Layout";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { xonokai } from "react-syntax-highlighter/dist/esm/styles/prism";

const Booleans = () => {
  return (
    <Layout>
      <div class="container">
        <div class="card">
          <div class="card-content">
            <div class="content mt-5">
              <h2>Java Booleans</h2>
              <p>
                Very often, in programming, you will need a data type that can
                only have one of two values, like:
              </p>
              <ul>
                <li>YES / NO</li>
                <li>ON / OFF</li>
                <li>TRUE / FALSE</li>
              </ul>
              <p>
                For this, Java has a<span>&nbsp;</span>
                <code class="w3-codespan">boolean</code>
                <span>&nbsp;</span>data type, which can take the values
                <span>&nbsp;</span>
                <code class="w3-codespan">true</code>
                <span>&nbsp;</span>or<span>&nbsp;</span>
                <code class="w3-codespan">false</code>.
              </p>
              <hr />
              <h2>Boolean Values</h2>
              <p>
                A boolean type is declared with the<span>&nbsp;</span>
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
              <p class="mt-5">
                However, it is more common to return boolean values from boolean
                expressions, for conditional testing (see below).
              </p>
              <hr />
              <h2>Boolean Expression</h2>
              <p>
                A<span>&nbsp;</span>
                <strong>Boolean expression</strong>
                <span>&nbsp;</span>is a Java expression that returns a Boolean
                value:<span>&nbsp;</span>
                <code class="w3-codespan">true</code>
                <span>&nbsp;</span>or<span>&nbsp;</span>
                <code class="w3-codespan">false</code>.
              </p>
              <p>
                You can use a comparison operator, such as the
                <span>&nbsp;</span>
                <strong>greater than</strong>
                <span>&nbsp;</span>(<code class="w3-codespan">&gt;</code>)
                operator to find out if an expression (or a variable) is true:
              </p>
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title">Example</p>
                </header>
                <div class="card-content">
                  <div class="content">
                    <SyntaxHighlighter language="java" style={xonokai}>
                      {`int x = 10; \nint y = 9; \nSystem.out.println(x > y); // returns true, because 10 is higher than 9`}
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
export default Booleans;
