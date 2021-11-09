import React from "react";
import Layout from "../../components/layout/Layout";
import SyntaxHighlighter from "react-syntax-highlighter";

const Comments = () => {
  return (
    <Layout>
      <div class="container">
        <div class="card">
          <div class="card-content">
            <h1 class="title">Python Comments</h1>

            <div class="content">
              <ul>
                <li>Comments can be used to explain Python code.</li>
                <li>Comments can be used to make the code more readable.</li>
                <li>
                  Comments can be used to prevent execution when testing code.
                </li>
              </ul>
            </div>

            <div class="content">
              <h2 class="subtitle">Creating a Comment</h2>
              <p>Comments starts with a #, and Python will ignore them:</p>
            </div>

            <div class="card">
              <div class="card-content">
                <header class="card-header">
                  <p class="card-header-title">Example</p>
                </header>
                <div class="content">
                  <SyntaxHighlighter language="python">
                    {`#This is a comment \nprint("Hello, World!")`}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>

            <div class="content mt-5">
              <p>
                {" "}
                Comments can be placed at the end of a line, and Python will
                ignore the rest of the line:
              </p>
            </div>

            <div class="card">
              <div class="card-content">
                <header class="card-header">
                  <p class="card-header-title">Example</p>
                </header>
                <div class="content">
                  <SyntaxHighlighter language="python">
                    print("Hello, World!") #This is a comment
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>

            <div class="content mt-5">
              <p>
                Comments can be placed at the end of a line, and Python will
                ignore the rest of the line:
              </p>
            </div>

            <div class="card">
              <div class="card-content">
                <header class="card-header">
                  <p class="card-header-title">Example</p>
                </header>
                <div class="content">
                  <SyntaxHighlighter language="python">
                    {`#print("Hello, World!") \nprint("Cheers, Mate!")`}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>

            <div class="content">
              <h2 class="subtitle">Multi Line Comments</h2>
              <p>
                Python does not really have a syntax for multi line comments.
              </p>
              <p>
                To add a multiline comment you could insert a # for each line:
              </p>
            </div>

            <div class="card">
              <div class="card-content">
                <header class="card-header">
                  <p class="card-header-title">Example</p>
                </header>
                <div class="content">
                  <SyntaxHighlighter language="python">
                    {`#This is a comment \n#written in \n#more than just one line \nprint("Hello, World!")`}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>

            <div class="content mt-5">
              <p>Or, not quite as intended, you can use a multiline string.</p>
              <p>
                Since Python will ignore string literals that are not assigned
                to a variable, you can add a multiline string (triple quotes) in
                your code, and place your comment inside it:
              </p>
            </div>

            <div class="card">
              <div class="card-content">
                <header class="card-header">
                  <p class="card-header-title">Example</p>
                </header>
                <div class="content">
                  <SyntaxHighlighter language="python">
                    {`""" \nThis is a comment \nwritten in \nmore than just one line \n""" \nprint("Hello, World!")`}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>

            <div class="content mt-5">
              <p>
                As long as the string is not assigned to a variable, Python will
                read the code, but then ignore it, and you have made a multiline
                comment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Comments;
