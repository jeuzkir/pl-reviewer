import React from "react";
import Layout from "../../components/layout/Layout";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { xonokai } from "react-syntax-highlighter/dist/esm/styles/prism";

const Conditions = () => {
  return (
    <Layout>
      <div class="container">
        <div class="card">
          <div class="card-content">
            <div class="content mt-5">
              <h2>Java Conditions and If Statements</h2>
              <p>
                Java supports the usual logical conditions from mathematics:
              </p>
              <ul>
                <li>
                  Less than:<span>&nbsp;</span>
                  <span class="w3-codespan">a &lt; b</span>
                </li>
                <li>
                  Less than or equal to:<span>&nbsp;</span>
                  <span class="w3-codespan">a &lt;= b</span>
                </li>
                <li>
                  Greater than:<span>&nbsp;</span>
                  <span class="w3-codespan">a &gt; b</span>
                </li>
                <li>
                  Greater than or equal to:<span>&nbsp;</span>
                  <span class="w3-codespan">a &gt;= b</span>
                </li>
                <li>
                  Equal to<span>&nbsp;</span>
                  <span class="w3-codespan">a == b</span>
                </li>
                <li>
                  Not Equal to:<span>&nbsp;</span>
                  <span class="w3-codespan">a != b</span>
                </li>
              </ul>
              <p>
                You can use these conditions to perform different actions for
                different decisions.
              </p>
              <p>Java has the following conditional statements:</p>
              <ul>
                <li>
                  Use<span>&nbsp;</span>
                  <code class="w3-codespan">if</code>
                  <span>&nbsp;</span>to specify a block of code to be executed,
                  if a specified condition is true
                </li>
                <li>
                  Use<span>&nbsp;</span>
                  <code class="w3-codespan">else</code>
                  <span>&nbsp;</span>to specify a block of code to be executed,
                  if the same condition is false
                </li>
                <li>
                  Use<span>&nbsp;</span>
                  <code class="w3-codespan">else if</code>
                  <span>&nbsp;</span>to specify a new condition to test, if the
                  first condition is false
                </li>
                <li>
                  Use<span>&nbsp;</span>
                  <code class="w3-codespan">switch</code>
                  <span>&nbsp;</span>to specify many alternative blocks of code
                  to be executed
                </li>
              </ul>
              <hr />
              <h2>The if Statement</h2>
              <p>
                Use the<span>&nbsp;</span>
                <code class="w3-codespan">if</code>
                <span>&nbsp;</span>statement to specify a block of Java code to
                be executed if a condition is<span>&nbsp;</span>
                <code class="w3-codespan">true</code>.
              </p>
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title">Example</p>
                </header>
                <div class="card-content">
                  <div class="content">
                    <SyntaxHighlighter language="java" style={xonokai}>
                      {`if (condition) { \n   // block of code to be executed if the condition is true \n}`}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>

              <div class="mt-5">
                <p>
                  Note that<span>&nbsp;</span>
                  <code class="w3-codespan">if</code>
                  <span>&nbsp;</span>is in lowercase letters. Uppercase letters
                  (If or IF) will generate an error.
                </p>
                <p>
                  In the example below, we test two values to find out if 20 is
                  greater than 18. If the condition is true, print some text:
                </p>
              </div>
              <div class="card mt-5">
                <header class="card-header">
                  <p class="card-header-title">Example</p>
                </header>
                <div class="card-content">
                  <div class="content">
                    <SyntaxHighlighter language="java" style={xonokai}>
                      {`if (20 > 18) { \n   System.out.println("20 is greater than 18"); \n}`}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
              <p class="mt-5">We can also test variables:</p>
              <div class="card mt-5">
                <header class="card-header">
                  <p class="card-header-title">Example</p>
                </header>
                <div class="card-content">
                  <div class="content">
                    <SyntaxHighlighter language="java" style={xonokai}>
                      {`int x = 20; \nint y = 18; 
                      \nif (x > y) { \n   System.out.println("x is greater than y"); \n}`}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
              <div class="mt-5">
                <h4>Example explained</h4>
                <p>
                  In the example above we use two variables,<span>&nbsp;</span>
                  <strong>x</strong>
                  <span>&nbsp;</span>and<span>&nbsp;</span>
                  <strong>y</strong>, to test whether x is greater than y (using
                  the<span>&nbsp;</span>
                  <code class="w3-codespan">&gt;</code>
                  <span>&nbsp;</span>operator). As x is 20, and y is 18, and we
                  know that 20 is greater than 18, we print to the screen that
                  "x is greater than y".
                </p>
                <div class="w3-panel w3-note">
                  <h2>The else Statement</h2>
                  <p>
                    Use the<span>&nbsp;</span>
                    <code class="w3-codespan">else</code>
                    <span>&nbsp;</span>statement to specify a block of code to
                    be executed if the condition is<span>&nbsp;</span>
                    <code class="w3-codespan">false</code>.
                  </p>
                </div>
              </div>
              <div class="card mt-5">
                <header class="card-header">
                  <p class="card-header-title">Example</p>
                </header>
                <div class="card-content">
                  <div class="content">
                    <SyntaxHighlighter language="java" style={xonokai}>
                      {`if (condition) { \n   // block of code to be executed if the condition is true \n} else { \n   // block of code to be executed if the condition is false \n}`}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
              <div class="card mt-5">
                <header class="card-header">
                  <p class="card-header-title">Example</p>
                </header>
                <div class="card-content">
                  <div class="content">
                    <SyntaxHighlighter language="java" style={xonokai}>
                      {`int time = 20; \nif (time < 18) { \n   System.out.println("Good day."); \n} else { \n   System.out.println("Good evening."); \n} \n// Outputs "Good evening."`}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
              <div class="mt-5">
                <h4>Example explained</h4>
                <p>
                  In the example above, time (20) is greater than 18, so the
                  condition is<span>&nbsp;</span>
                  <code class="w3-codespan">false</code>. Because of this, we
                  move on to the<span>&nbsp;</span>
                  <code class="w3-codespan">else</code>
                  <span>&nbsp;</span>condition and print to the screen "Good
                  evening". If the time was less than 18, the program would
                  print "Good day".
                </p>
                <hr />
                <h2>The else if Statement</h2>
                <p>
                  Use the<span>&nbsp;</span>
                  <code class="w3-codespan">else if</code>
                  <span>&nbsp;</span>statement to specify a new condition if the
                  first condition is<span>&nbsp;</span>
                  <code class="w3-codespan">false</code>.
                </p>
              </div>
              <div class="card mt-5">
                <header class="card-header">
                  <p class="card-header-title">Example</p>
                </header>
                <div class="card-content">
                  <div class="content">
                    <SyntaxHighlighter language="java" style={xonokai}>
                      {`if (condition1) { \n   // block of code to be executed if condition1 is true \n} else if (condition2) { \n   // block of code to be executed if the condition1 is false and condition2 is true \n} else { \n   // block of code to be executed if the condition1 is false and condition2 is false \n}`}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
              <div class="card mt-5">
                <header class="card-header">
                  <p class="card-header-title">Example</p>
                </header>
                <div class="card-content">
                  <div class="content">
                    <SyntaxHighlighter language="java" style={xonokai}>
                      {`int time = 22; \nif (time < 10) { \n   System.out.println("Good morning."); \n} else if (time < 20) { \n   System.out.println("Good day."); \n} else { \n   System.out.println("Good evening."); \n} \n// Outputs "Good evening."`}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
              <div class="mt-5">
                <h4>Example explained</h4>
                <p>
                  In the example above, time (22) is greater than 10, so the
                  <span>&nbsp;</span>
                  <strong>first condition</strong>
                  <span>&nbsp;</span>is<span>&nbsp;</span>
                  <code class="w3-codespan">false</code>. The next condition, in
                  the<span>&nbsp;</span>
                  <code class="w3-codespan">else if</code>
                  <span>&nbsp;</span>statement, is also<span>&nbsp;</span>
                  <code class="w3-codespan">false</code>, so we move on to the
                  <code class="w3-codespan">else</code>
                  <span>&nbsp;</span>condition since<span>&nbsp;</span>
                  <strong>condition1</strong>
                  <span>&nbsp;</span>and<span>&nbsp;</span>
                  <strong>condition2</strong> is both
                  <code class="w3-codespan">false</code>- and print to the
                  screen "Good evening".
                </p>
                <p>
                  However, if the time was 14, our program would print "Good
                  day."
                </p>
                <hr />
                <h2>Short Hand If...Else (Ternary Operator)</h2>
                <p>
                  There is also a short-hand if else, which is known as the
                  <strong> ternary operator</strong>
                  because it consists of three operands. It can be used to
                  replace multiple lines of code with a single line. It is often
                  used to replace simple if else statements:
                </p>
                <div class="card mt-5">
                  <header class="card-header">
                    <p class="card-header-title">Example</p>
                  </header>
                  <div class="card-content">
                    <div class="content">
                      <SyntaxHighlighter language="java" style={xonokai}>
                        {`variable = (condition) ? expressionTrue :  expressionFalse;`}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                </div>
                <p class="mt-5">Instead of writing:</p>
                <div class="card mt-5">
                  <header class="card-header">
                    <p class="card-header-title">Example</p>
                  </header>
                  <div class="card-content">
                    <div class="content">
                      <SyntaxHighlighter language="java" style={xonokai}>
                        {`int time = 20; \nif (time < 18) { \n   System.out.println("Good day."); \n} else { \n   System.out.println("Good evening."); \n}`}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                </div>
                <p class="mt-5">You can simply write:</p>
                <div class="card mt-5">
                  <header class="card-header">
                    <p class="card-header-title">Example</p>
                  </header>
                  <div class="card-content">
                    <div class="content">
                      <SyntaxHighlighter language="java" style={xonokai}>
                        {`int time = 20; \nString result = (time < 18) ? "Good day." : "Good evening."; \nSystem.out.println(result);`}
                      </SyntaxHighlighter>
                    </div>
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
export default Conditions;
