import * as React from "react";
import Layout from "../../components/layout/Layout";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Syntax = () => {
  return (
    <Layout>
      <div className="container">
        <div className="card">
          <div className="card-content">
            <div className="content">
              <h2>PHP Syntax</h2>
              <hr />
              <p>
                A PHP script is executed on the server, and the plain HTML result is sent back
                to the browser.
              </p>
              <hr />
              <h2>Basic PHP Syntax</h2>
              <p>A PHP script can be placed anywhere in the document.</p>
              <p>
                A PHP script starts with&nbsp;<code>&lt;?php</code>&nbsp;and ends
                with&nbsp;<code>?&gt;</code>:
              </p>
              <SyntaxHighlighter language="php" showLineNumbers={true} style={dracula}>
                {`<?php
// PHP code goes here
?>`}
                </SyntaxHighlighter>
              <p>The default file extension for PHP files is "<code>.php</code>".</p>
              <p>A PHP file normally contains HTML tags, and some PHP scripting code.</p>
              <p>
                Below, we have an example of a simple PHP file, with a PHP script that uses a
                built-in PHP function "<code>echo</code>" to output the text "Hello World!" on
                a web page:
              </p>
              <div>
                <h3>Example</h3>
                <SyntaxHighlighter language="php" showLineNumbers={true} style={dracula}>
                {`<!DOCTYPE html>
<html>
<body>

<h1>My first PHP page</h1>

<?php
echo "Hello World!";
?>

</body>
</html>`}
                </SyntaxHighlighter>
              </div>
              <p>
                <strong>Note:</strong>&nbsp;PHP statements end with a semicolon
                (<code>;</code>).
              </p>
              <hr />
              <hr />
              <h2>PHP Case Sensitivity</h2>
              <p>
                In PHP, keywords
                (e.g.&nbsp;<code>if</code>,&nbsp;<code>else</code>,&nbsp;<code>while</code>,&nbsp;<code>echo</code>,
                etc.), classes, functions, and user-defined functions are not case-sensitive.
              </p>
              <p>
                In the example below, all three echo statements below are equal and legal:
              </p>

              <SyntaxHighlighter language="php" showLineNumbers={true} style={dracula}>
                {`<!DOCTYPE html>
<html>
<body>

<?php
ECHO "Hello World!<br>";
echo "Hello World!<br>";
EcHo "Hello World!<br>";
?>

</body>
</html>`}
                </SyntaxHighlighter>

            
            <p>
              <strong>Note:</strong>&nbsp;However; all variable names are case-sensitive!
            </p>
            <br />
            <p>
              Look at the example below; only the first statement will display the value of
              the&nbsp;<code>$color</code>&nbsp;variable! This is
              because&nbsp;<code>$color</code>,&nbsp;<code>$COLOR</code>,
              and&nbsp;<code>$coLOR</code>&nbsp;are treated as three different variables:
            </p>

            <SyntaxHighlighter language="php" showLineNumbers={true} style={dracula}>
              {`<!DOCTYPE html>
<html>
<body>

<?php
$color = "red";
echo "My car is " . $color . "<br>";
echo "My house is " . $COLOR . "<br>";
echo "My boat is " . $coLOR . "<br>";
?>

</body>
</html>`}
            </SyntaxHighlighter>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Syntax;
