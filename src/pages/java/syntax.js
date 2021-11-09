import React from "react";
import Layout from "../../components/layout/Layout";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  xonokai,
  atomDark,
} from "react-syntax-highlighter/dist/esm/styles/prism";

const Syntax = () => {
  return (
    <Layout>
      <div class="container">
        <div class="card">
          <div class="card-content">
            <h1 class="title">Java Syntax</h1>
            <div class="content mt-5">
              <p>
                In the previous chapter, we created a Java file called{" "}
                <code>Main.java</code>, and we used the following code to print{" "}
                <b>"Hello World"</b> to the screen:
              </p>
            </div>
            <div class="card">
              <div class="card-content">
                <header class="card-header">
                  <p class="card-header-title">Main.java</p>
                </header>
                <div class="content">
                  <SyntaxHighlighter language="java" style={xonokai}>
                    {`public class Main { \n   public static void main(String[] args) { \n      System.out.println("Hello World"); \n   } \n}`}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
            <div class="content mt-5">
              <h3>Example explained</h3>
              <p>
                Every line of code that runs in Java must be inside a
                <span>&nbsp;</span>
                <code class="w3-codespan">class</code>. In our example, we named
                the class<span>&nbsp;</span>
                <strong>Main</strong>. A class should always start with an
                uppercase first letter.
              </p>
              <p>
                <strong>Note:</strong>
                <span>&nbsp;</span>Java is case-sensitive: "MyClass" and
                "myclass" has different meaning.
              </p>
              <p>
                The name of the java file<span>&nbsp;</span>
                <strong>must match</strong>
                <span>&nbsp;</span>the class name. When saving the file, save it
                using the class name and add ".java" to the end of the filename.
                To run the example above on your computer, make sure that Java
                is properly installed: Go to the<span>&nbsp;</span>
                <b>Get Started Chapter</b>
                <span>&nbsp;</span>for how to install Java. The output should
                be:
              </p>
            </div>
            <div class="card">
              <div class="card-content">
                <div class="content">
                  <SyntaxHighlighter language="powershell" style={atomDark}>
                    Hello World
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
            <div class="content mt-5">
              <h2>The main Method</h2>
              <p>
                The<span>&nbsp;</span>
                <code class="w3-codespan">main()</code>
                <span>&nbsp;</span>method is required and you will see it in
                every Java program:
              </p>
              <div class="card">
                <div class="card-content">
                  <div class="content">
                    <SyntaxHighlighter language="java" style={xonokai}>
                      public static void main(String[] args)
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
              <p class="mt-5">
                Any code inside the<span>&nbsp;</span>
                <code class="w3-codespan">main()</code>
                <span>&nbsp;</span>method will be executed. You don't have to
                understand the keywords before and after main. You will get to
                know them bit by bit while reading this tutorial.
              </p>
              <p>
                For now, just remember that every Java program has a
                <span>&nbsp;</span>
                <code class="w3-codespan">class</code>
                <span>&nbsp;</span>name which must match the filename, and that
                every program must contain the<span>&nbsp;</span>
                <code class="w3-codespan">main()</code>
                <span>&nbsp;</span>method.
              </p>
              <h2>System.out.println()</h2>
              <p>
                Inside the<span>&nbsp;</span>
                <code class="w3-codespan">main()</code>
                <span>&nbsp;</span>method, we can use the<span>&nbsp;</span>
                <code class="w3-codespan">println()</code>
                <span>&nbsp;</span>method to print a line of text to the screen:
              </p>
              <div class="card">
                <div class="card-content">
                  <div class="content">
                    <SyntaxHighlighter language="java" style={xonokai}>
                      {`public static void main(String[] args) { \n   System.out.println("Hello World"); \n}`}
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
export default Syntax;
