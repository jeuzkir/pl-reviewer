import React from "react";
import Layout from "../../components/layout/Layout";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  xonokai,
  atomDark,
} from "react-syntax-highlighter/dist/esm/styles/prism";

const TypeCasting = () => {
  return (
    <Layout>
      <div class="container">
        <div class="card">
          <div class="card-content">
            <div class="content mt-5">
              <h2>Java Type Casting</h2>
              <p>
                Type casting is when you assign a value of one primitive data
                type to another type.
              </p>
              <p>In Java, there are two types of casting:</p>
              <ul>
                <li>
                  <strong>Widening Casting</strong>
                  <span>&nbsp;</span>(automatically) - converting a smaller type
                  to a larger type size
                  <br />
                  <code class="w3-codespan">byte</code>
                  <span>&nbsp;</span>-&gt;<span>&nbsp;</span>
                  <code class="w3-codespan">short</code>
                  <span>&nbsp;</span>-&gt;<span>&nbsp;</span>
                  <code class="w3-codespan">char</code>
                  <span>&nbsp;</span>-&gt;<span>&nbsp;</span>
                  <code class="w3-codespan">int</code>
                  <span>&nbsp;</span>-&gt;<span>&nbsp;</span>
                  <code class="w3-codespan">long</code>
                  <span>&nbsp;</span>-&gt;<span>&nbsp;</span>
                  <code class="w3-codespan">float</code>
                  <span>&nbsp;</span>-&gt;<span>&nbsp;</span>
                  <code class="w3-codespan">double</code>
                  <br />
                  <br />
                </li>
                <li>
                  <strong>Narrowing Casting</strong>
                  <span>&nbsp;</span>(manually) - converting a larger type to a
                  smaller size type
                  <br />
                  <code class="w3-codespan">double</code>
                  <span>&nbsp;</span>-&gt;<span>&nbsp;</span>
                  <code class="w3-codespan">float</code>
                  <span>&nbsp;</span>-&gt;<span>&nbsp;</span>
                  <code class="w3-codespan">long</code>
                  <span>&nbsp;</span>-&gt;<span>&nbsp;</span>
                  <code class="w3-codespan">int</code>
                  <span>&nbsp;</span>-&gt;<span>&nbsp;</span>
                  <code class="w3-codespan">char</code>
                  <span>&nbsp;</span>-&gt;<span>&nbsp;</span>
                  <code class="w3-codespan">short</code>
                  <span>&nbsp;</span>-&gt;<span>&nbsp;</span>
                  <code class="w3-codespan">byte</code>
                </li>
              </ul>
              <hr />
              <h2>Widening Casting</h2>
              <p>
                Widening casting is done automatically when passing a smaller
                size type to a larger size type:
              </p>
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title">Example</p>
                </header>
                <div class="card-content">
                  <div class="content">
                    <SyntaxHighlighter language="java" style={xonokai}>
                      {`public class Main { \n   public static void main(String[] args) { \n     int myInt = 9; \n     double myDouble = myInt; // Automatic casting: int to double \n     System.out.println(myInt);      // Outputs 9 \n     System.out.println(myDouble);   // Outputs 9.0 \n   } \n}`}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
              <h2>Narrowing Casting</h2>
              <p>
                Narrowing casting must be done manually by placing the type in
                parentheses in front of the value:
              </p>
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title">Example</p>
                </header>
                <div class="card-content">
                  <div class="content">
                    <SyntaxHighlighter language="java" style={xonokai}>
                      {`public class Main { \n   public static void main(String[] args) { \n     double myDouble = 9.78d; \n     int myInt = (int) myDouble; // Manual casting: double to int \n     System.out.println(myDouble);   // Outputs 9.78 \n     System.out.println(myInt);      // Outputs 9 \n   } \n}`}
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
export default TypeCasting;
