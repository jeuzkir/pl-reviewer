import * as React from "react";
import Layout from "../../components/layout/Layout";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Comments = () => {
  return (
    <Layout>
      <div className="container">
        <div className="card">
          <div className="card-content">
            <div className="content">
              <h2>Comments in PHP</h2>
              <p>
                A comment in PHP code is a line that is not executed as a part of the program.
                Its only purpose is to be read by someone who is looking at the code.
              </p>
              <p>Comments can be used to:</p>
              <ul>
                <li>Let others understand your code</li>
                <li>
                  Remind yourself of what you did - Most programmers have experienced coming
                  back to their own work a year or two later and having to re-figure out what
                  they did. Comments can remind you of what you were thinking when you wrote
                  the code
                </li>
              </ul>
              <p>PHP supports several ways of commenting:</p>

              {/* <SyntaxHighlighter language="php" showLineNumbers={true} style={dracula}>
                {``}
              </SyntaxHighlighter> */}

              <h3>Example</h3>
              <p>Syntax for single-line comments:</p>

              <SyntaxHighlighter language="php" showLineNumbers={true} style={dracula}>
                {`<!DOCTYPE html>
<html>
<body>

<?php
// This is a single-line comment

# This is also a single-line comment
?>

</body>
</html>`}
              </SyntaxHighlighter>

              <h3>Example</h3>
              <p>Syntax for multiple-line comments:</p>

              <SyntaxHighlighter language="php" showLineNumbers={true} style={dracula}>
                {`<!DOCTYPE html>
<html>
<body>

<?php
/*
This is a multiple-lines comment block
that spans over multiple
lines
*/
?>

</body>
</html>`}
              </SyntaxHighlighter>

              <h3>Example</h3>
              <p>Using comments to leave out parts of the code:</p>

              <SyntaxHighlighter language="php" showLineNumbers={true} style={dracula}>
                {`<!DOCTYPE html>
<html>
<body>

<?php
// You can also use comments to leave out parts of a code line
$x = 5 /* + 15 */ + 5;
echo $x;
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

export default Comments;
