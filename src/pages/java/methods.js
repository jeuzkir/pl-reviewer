import React from "react";
import Layout from "../../components/layout/Layout";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { xonokai } from "react-syntax-highlighter/dist/esm/styles/prism";

const Methods = () => {
  return (
    <Layout>
      <div class="container">
        <div class="card">
          <div class="card-content">
            <div class="content mt-5">
              <h2>Java Method</h2>
              <p class="intro">
                A<span>&nbsp;</span>
                <strong>method</strong>
                <span>&nbsp;</span>is a block of code which only runs when it is
                called.
              </p>
              <p class="intro">
                You can pass data, known as parameters, into a method.
              </p>
              <p class="intro">
                Methods are used to perform certain actions, and they are also
                known as<span>&nbsp;</span>
                <strong>functions</strong>.
              </p>
              <p class="intro">
                Why use methods? To reuse code: define the code once, and use it
                many times.
              </p>
              <hr />
              <h2>Create a Method</h2>
              <p>
                A method must be declared within a class. It is defined with the
                name of the method, followed by parentheses<span>&nbsp;</span>
                <strong>()</strong>. Java provides some pre-defined methods,
                such as<span>&nbsp;</span>
                <code class="w3-codespan">System.out.println()</code>, but you
                can also create your own methods to perform certain actions:
              </p>
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title">Example</p>
                </header>
                <div class="card-content">
                  <div class="content">
                    <SyntaxHighlighter language="java" style={xonokai}>
                      {`public class Main { \n   static void myMethod() { \n    // code to be executed \n   } \n}`}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
              <h4 class="mt-5">Example Explained</h4>
              <ul>
                <li>
                  <code class="w3-codespan">myMethod()</code>
                  <span>&nbsp;</span>is the name of the method
                </li>
                <li>
                  <code class="w3-codespan">static</code>
                  <span>&nbsp;</span>means that the method belongs to the Main
                  class and not an object of the Main class. You will learn more
                  about objects and how to access methods through objects later
                  in this tutorial.
                </li>
                <li>
                  <code class="w3-codespan">void</code>
                  <span>&nbsp;</span>means that this method does not have a
                  return value. You will learn more about return values later in
                  this chapter
                </li>
              </ul>
              <hr />
              <h2>Call a Method</h2>
              <p>
                To call a method in Java, write the method's name followed by
                two parentheses<span>&nbsp;</span>
                <strong>()</strong>
                <span>&nbsp;</span>and a semicolon<strong>;</strong>
              </p>
              <p>
                In the following example,<span>&nbsp;</span>
                <code class="w3-codespan">myMethod()</code>
                <span>&nbsp;</span>is used to print a text (the action), when it
                is called:
              </p>
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title">
                    Inside<span>&nbsp;</span>
                    <code class="w3-codespan">main</code>, call the
                    <span>&nbsp;</span>
                    <code class="w3-codespan">myMethod()</code>
                    <span>&nbsp;</span>method:
                  </p>
                </header>
                <div class="card-content">
                  <div class="content">
                    <SyntaxHighlighter language="java" style={xonokai}>
                      {`public class Main { \n   static void myMethod() { \n     System.out.println("I just got executed!"); \n   } 
                      \n   public static void main(String[] args) { \n     myMethod(); \n   } \n} // Outputs "I just got executed!"`}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
              <p class="mt-5">A method can also be called multiple times:</p>
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title">Example</p>
                </header>
                <div class="card-content">
                  <div class="content">
                    <SyntaxHighlighter language="java" style={xonokai}>
                      {`public class Main { \n   static void myMethod() { \n     System.out.println("I just got executed!"); \n   } 
        \n   public static void main(String[] args) { \n     myMethod(); \n     myMethod(); \n     myMethod(); \n   } \n} \n// "I just got executed!"\n// "I just got executed!"\n// "I just got executed!"`}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
              <h2>Parameters and Arguments</h2>
              <p>
                Information can be passed to methods as parameter. Parameters
                act as variables inside the method.
              </p>
              <p>
                Parameters are specified after the method name, inside the
                parentheses. You can add as many parameters as you want, just
                separate them with a comma.
              </p>
              <p>
                The following example has a method that takes a
                <span>&nbsp;</span>
                <code class="w3-codespan">String</code>
                <span>&nbsp;</span>called<span>&nbsp;</span>
                <b>fname</b>
                <span>&nbsp;</span>as parameter. When the method is called, we
                pass along a first name, which is used inside the method to
                print the full name:
              </p>
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title">Example</p>
                </header>
                <div class="card-content">
                  <div class="content">
                    <SyntaxHighlighter language="java" style={xonokai}>
                      {`public class Main { \n   static void myMethod(String fname) { \n     System.out.println(fname + " Refsnes"); \n   } \n   public static void main(String[] args) { \n     myMethod("Liam"); \n     myMethod("Jenny"); \n     myMethod("Anja"); \n   } \n} \n// Liam Refsnes \n// Jenny Refsnes \n// Anja Refsnes`}
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
export default Methods;
