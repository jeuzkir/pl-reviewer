import * as React from "react";
import Layout from "../../components/layout/Layout";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Variables = () => {
  return (
    <Layout>
      <div className="container">
        <div className="card">
          <div className="card-content">
            <div className="content">
              {/* <SyntaxHighlighter language="php" showLineNumbers={true} style={dracula}>
                {``}
              </SyntaxHighlighter> */}

              <h2>PHP Variables</h2>
              <hr />
              <p>Variables are "containers" for storing information.</p>
              <hr />
              <h2>Creating (Declaring) PHP Variables</h2>
              <p>
                In PHP, a variable starts with the&nbsp;<code>$</code>&nbsp;sign, followed by
                the name of the variable:
              </p>

              <SyntaxHighlighter language="php" showLineNumbers={true} style={dracula}>
                {`<?php
$txt = "Hello world!";
$x = 5;
$y = 10.5;
?>`}
              </SyntaxHighlighter>

              <p>
                After the execution of the statements above, the
                variable&nbsp;<code>$txt</code>&nbsp;will hold the value&nbsp;<code>Hello world!</code>, the variable&nbsp;<code>$x</code>&nbsp;will hold the
                value&nbsp;<code>5</code>, and the variable&nbsp;<code>$y</code>&nbsp;will
                hold the value&nbsp;<code>10.5</code>.
              </p>
              <p>
                <strong>Note:</strong>&nbsp;When you assign a text value to a variable, put
                quotes around the value.
              </p>
              <p>
                <strong>Note:</strong>&nbsp;Unlike other programming languages, PHP has no
                command for declaring a variable. It is created the moment you first assign a
                value to it.
              </p>

              <div>
                <blockquote>
                  <p>Think of variables as containers for storing data.</p>
                </blockquote>
              </div>
              <hr />
              <h2>PHP Variables</h2>
              <p>
                A variable can have a short name (like x and y) or a more descriptive name
                (age, carname, total_volume).
              </p>
              <p>Rules for PHP variables:</p>
              <ul>
                <li>
                  A variable starts with the&nbsp;<code>$</code>&nbsp;sign, followed by the
                  name of the variable
                </li>
                <li>A variable name must start with a letter or the underscore character</li>
                <li>A variable name cannot start with a number</li>
                <li>
                  A variable name can only contain alpha-numeric characters and underscores
                  (A-z, 0-9, and _ )
                </li>
                <li>
                  Variable names are case-sensitive
                  (<code>$age</code>&nbsp;and&nbsp;<code>$AGE</code>&nbsp;are two different
                  variables)
                </li>
              </ul>
              <div>
                <blockquote>
                  <p>Remember that PHP variable names are case-sensitive!</p>
                </blockquote>
              </div>
              <hr />
              <hr />
              <h2>Output Variables</h2>
              <p>
                The PHP&nbsp;<code>echo</code>&nbsp;statement is often used to output data to
                the screen.
              </p>
              
              <h3>Example</h3>
              <p>The following example will show how to output text and a variable:</p>
              <SyntaxHighlighter language="php" showLineNumbers={true} style={dracula}>
                {`<?php
$txt = "W3Schools.com";
echo "I love $txt!";
?>`}
              </SyntaxHighlighter>

              <h3>Example</h3>
              <p>The following example will produce the same output as the example above:</p>
              <SyntaxHighlighter language="php" showLineNumbers={true} style={dracula}>
                {`<?php
$txt = "W3Schools.com";
echo "I love " . $txt . "!";
?>`}
              </SyntaxHighlighter>

              <h3>Example</h3>
              <p>The following example will output the sum of two variables:</p>
              <SyntaxHighlighter language="php" showLineNumbers={true} style={dracula}>
                {`<?php
$x = 5;
$y = 4;
echo $x + $y;
?>`}
              </SyntaxHighlighter>

              <p>
                <strong>Note:</strong>&nbsp;You will learn more about
                the&nbsp;<code>echo</code>&nbsp;statement and how to output data to the screen
                in the next chapter.
              </p>
              <hr />
              <h2>PHP is a Loosely Typed Language</h2>
              <p>
                In the example above, notice that we did not have to tell PHP which data type
                the variable is.
              </p>
              <p>
                PHP automatically associates a data type to the variable, depending on its
                value. Since the data types are not set in a strict sense, you can do things
                like adding a string to an integer without causing an error.
              </p>
              <p>
                In PHP 7, type declarations were added. This gives an option to specify the
                data type expected when declaring a function, and by enabling the strict
                requirement, it will throw a "Fatal Error" on a type mismatch.
              </p>
              <p>
                You will learn more
                about&nbsp;<code>strict</code>&nbsp;and&nbsp;<code>non-strict</code>&nbsp;requirements,
                and data type declarations in the&nbsp;<a href="https://www.w3schools.com/php/php_functions.asp">PHP Functions</a>&nbsp;chapter.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Variables;
