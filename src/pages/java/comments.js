import React from "react";
import Layout from "../../components/layout/Layout";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  xonokai,
  atomDark,
} from "react-syntax-highlighter/dist/esm/styles/prism";

const Comments = () => {
  return (
    <Layout>
      <div class="container">
        <div class="card">
          <div class="card-content">
            <div class="content mt-5">
              <h2>Java Comments</h2>
              <p>
                Comments can be used to explain Java code, and to make it more
                readable. It can also be used to prevent execution when testing
                alternative code.
              </p>
              <hr />
              <h2>Single-line Comments</h2>
              <p>
                Single-line comments start with two forward slashes (
                <code class="w3-codespan">//</code>).
              </p>
              <p>
                Any text between<span>&nbsp;</span>
                <code class="w3-codespan">//</code>
                <span>&nbsp;</span>and the end of the line is ignored by Java
                (will not be executed).
              </p>
              <p>
                This example uses a single-line comment before a line of code:
              </p>
              <div class="card">
                <div class="card-content">
                  <div class="content">
                    <SyntaxHighlighter language="java" style={xonokai}>
                      {`// This is a comment \nSystem.out.println("Hello World");`}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
              <p class="mt-5">
                This example uses a single-line comment at the end of a line of
                code:
              </p>
              <div class="card">
                <div class="card-content">
                  <div class="content">
                    <SyntaxHighlighter language="java" style={xonokai}>
                      {`System.out.println("Hello World"); // This is a comment`}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
              <h2>Java Multi-line Comments</h2>
              <p>
                Multi-line comments start with<span>&nbsp;</span>
                <code class="w3-codespan">/*</code>
                <span>&nbsp;</span>and ends with<span>&nbsp;</span>
                <code class="w3-codespan">*/</code>.
              </p>
              <p>
                Any text between<span>&nbsp;</span>
                <code class="w3-codespan">/*</code>
                <span>&nbsp;</span>and<span>&nbsp;</span>
                <code class="w3-codespan">*/</code>
                <span>&nbsp;</span>will be ignored by Java.
              </p>
              <p>
                This example uses a multi-line comment (a comment block) to
                explain the code:
              </p>
              <div class="card">
                <div class="card-content">
                  <div class="content">
                    <SyntaxHighlighter language="java" style={xonokai}>
                      {`/* The code below will print the words Hello World \nto the screen, and it is amazing */ \nSystem.out.println("Hello World");`}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
              <h4 class="subtitle mt-5">Single or multi-line comments?</h4>
              <p>
                It is up to you which you want to use. Normally, we use
                <span>&nbsp;</span>
                <code class="w3-codespan">//</code>
                <span>&nbsp;</span>for short comments, and<span>&nbsp;</span>
                <code class="w3-codespan">/* */</code>
                <span>&nbsp;</span>for longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Comments;
