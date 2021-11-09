import * as React from "react";
import Layout from "../../components/layout/Layout";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const IfElseIf = () => {
  return (
    <Layout>
      <div className="container">
        <div className="card">
          <div className="card-content">
            <div className="content">
              <h1>PHP&nbsp;if...else...elseif&nbsp;Statements</h1>
              <hr />
              <p>
                Conditional statements are used to perform different actions based on
                different conditions.
              </p>
              <hr />
              <h2>PHP Conditional Statements</h2>
              <p>
                Very often when you write code, you want to perform different actions for
                different conditions. You can use conditional statements in your code to do
                this.
              </p>
              <p>In PHP we have the following conditional statements:</p>
              <ul>
                <li>
                  <code>if</code>&nbsp;statement - executes some code if one condition is true
                </li>
                <li>
                  <code>if...else</code>&nbsp;statement - executes some code if a condition is
                  true and another code if that condition is false
                </li>
                <li>
                  <code>if...elseif...else</code>&nbsp;statement - executes different codes
                  for more than two conditions
                </li>
                <li>
                  <code>switch</code>&nbsp;statement - selects one of many blocks of code to
                  be executed
                </li>
              </ul>
              <hr />
              <h2>PHP - The if Statement</h2>
              <p>
                The&nbsp;<code>if</code>&nbsp;statement executes some code if one condition is
                true.
              </p>
              <h3>Syntax</h3>
              <div>
                <pre>if (condition) {`{`}<br /> &nbsp; code to be executed if condition is true;<br />{`}`}</pre>
              </div>

              <br />

              <div>
                <h3>Example</h3>
                <p>Output "Have a good day!" if the current time (HOUR) is less than 20:</p>
              </div>

              <SyntaxHighlighter language="php" showLineNumbers={true} style={dracula}>
                {`<?php
$t = date("H");

if ($t < "20") {
  echo "Have a good day!";
}
?>`}
              </SyntaxHighlighter>

              <hr />

              <h2>PHP - The if...else Statement</h2>
              <p>
                The&nbsp;<code>if...else</code>&nbsp;statement executes some code if a
                condition is true and another code if that condition is false.
              </p>
              <h3>Syntax</h3>
              <div>
                <div>
                  <pre>if (condition)&nbsp;{`{`}<br />&nbsp;&nbsp;code to be executed if condition is true;<br />{`}`}&nbsp;else&nbsp;{`{`}<br />&nbsp;&nbsp;code to be executed if condition is false;<br />{`}`}</pre>
                </div>
              </div>

              <h3>Example</h3>
              <p>Output "Have a good day!" if the current time is less than 20, and "Have a good night!" otherwise:</p>
              
              <SyntaxHighlighter language="php" showLineNumbers={true} style={dracula}>
                {`<?php
$t = date("H");

if ($t < "20") {
  echo "Have a good day!";
} else {
  echo "Have a good night!";
}
?>`}
              </SyntaxHighlighter>

              <hr />
              <h2>PHP - The if...elseif...else Statement</h2>
              <p>The&nbsp;<code>if...elseif...else</code>&nbsp;statement executes different codes for more than two conditions.</p>
              <h3>Syntax</h3>
              <div>
                <pre>if (condition) {`{`}<br />&nbsp;&nbsp;code to be executed if this condition is true;<br />{`}`} elseif (condition) {`{`}<br />&nbsp;&nbsp;code to be executed if first condition is false and this condition is true;<br />{`}`} else {`{`}<br />&nbsp;&nbsp;code to be executed if all conditions are false;<br />{`}`}</pre>
              </div>
              <h3>Example</h3>
              <p>Output "Have a good morning!" if the current time is less than 10, and "Have a good day!" if the current time is less than 20. Otherwise it will output "Have a good night!":</p>

              <SyntaxHighlighter language="php" showLineNumbers={true} style={dracula}>
                {`<?php
$t = date("H");

if ($t < "10") {
  echo "Have a good morning!";
} elseif ($t < "20") {
  echo "Have a good day!";
} else {
  echo "Have a good night!";
}
?>`}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IfElseIf;
