import * as React from "react";
import Layout from "../../components/layout/Layout";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const EchoPrint = () => {
  return (
    <Layout>
      <div className="container">
        <div className="card">
          <div className="card-content">
            <div className="content">
              <h2>PHP Echo / Print</h2>
              <hr />
              <p>
                With PHP, there are two basic ways to get
                output:&nbsp;<code>echo</code>&nbsp;and&nbsp;<code>print</code>.
              </p>
              <p>
                In this tutorial we
                use&nbsp;<code>echo</code>&nbsp;or&nbsp;<code>print</code>&nbsp;in almost
                every example. So, this chapter contains a little more info about those two
                output statements.
              </p>
              <hr />
              <h2>PHP echo and print Statements</h2>
              <p>
                <code>echo</code>&nbsp;and&nbsp;<code>print</code>&nbsp;are more or less the
                same. They are both used to output data to the screen.
              </p>
              <p>
                The differences are small:&nbsp;<code>echo</code>&nbsp;has no return value
                while&nbsp;<code>print</code>&nbsp;has a return value of 1 so it can be used
                in expressions.&nbsp;<code>echo</code>&nbsp;can take multiple parameters
                (although such usage is rare) while&nbsp;<code>print</code>&nbsp;can take one
                argument.&nbsp;<code>echo</code>&nbsp;is marginally faster
                than&nbsp;<code>print</code>.
              </p>
              <hr />
              <h2>The PHP echo Statement</h2>
              <p>
                The&nbsp;<code>echo</code>&nbsp;statement can be used with or without
                parentheses:&nbsp;<code>echo</code>&nbsp;or&nbsp;<code>echo()</code>.
              </p>
              <p><strong>Display Text</strong></p>
              <p>
                The following example shows how to output text with
                the&nbsp;<code>echo</code>&nbsp;command (notice that the text can contain HTML
                markup):
              </p>

              <SyntaxHighlighter language="php" showLineNumbers={true} style={dracula}>
                {`<?php
echo "<h2>PHP is Fun!</h2>";
echo "Hello world!<br>";
echo "I'm about to learn PHP!<br>";
echo "This ", "string ", "was ", "made ", "with multiple parameters.";
?>`}
              </SyntaxHighlighter>

              <h3>Example</h3>
              <p><strong>Display Variables</strong></p>
              <p>The following example shows how to output text and variables with the&nbsp;<code>echo</code>&nbsp;statement:</p>

              <SyntaxHighlighter language="php" showLineNumbers={true} style={dracula}>
                {`<?php
$txt1 = "Learn PHP";
$txt2 = "W3Schools.com";
$x = 5;
$y = 4;

echo "<h2>" . $txt1 . "</h2>";
echo "Study PHP at " . $txt2 . "<br>";
echo $x + $y;
?>`}
              </SyntaxHighlighter>

              <h2>The PHP print Statement</h2>
              <p>The&nbsp;<code>print</code>&nbsp;statement can be used with or without parentheses:&nbsp;<code>print</code>&nbsp;or&nbsp;<code>print()</code>.</p>

              <h3>Example</h3>
              <p><strong>Display Text</strong></p>
              <p>The following example shows how to output text with the&nbsp;<code>print</code>&nbsp;command (notice that the text can contain HTML markup):</p>
              
              <SyntaxHighlighter language="php" showLineNumbers={true} style={dracula}>
                {`<?php
print "<h2>PHP is Fun!</h2>";
print "Hello world!<br>";
print "I'm about to learn PHP!";
?>`}
              </SyntaxHighlighter>

              <h3>Example</h3>
              <p><b>Display Variables</b></p>
              <p>The following example shows how to output text and variables with the print statement:</p>
              <SyntaxHighlighter language="php" showLineNumbers={true} style={dracula}>
                {`<?php
$txt1 = "Learn PHP";
$txt2 = "W3Schools.com";
$x = 5;
$y = 4;

print "<h2>" . $txt1 . "</h2>";
print "Study PHP at " . $txt2 . "<br>";
print $x + $y;
?>`}
              </SyntaxHighlighter>

            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EchoPrint;
