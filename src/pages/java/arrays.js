import React from "react";
import Layout from "../../components/layout/Layout";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  xonokai,
  atomDark,
} from "react-syntax-highlighter/dist/esm/styles/prism";

const Arrays = () => {
  return (
    <Layout>
      <div class="container">
        <div class="card">
          <div class="card-content">
            <div class="content mt-5">
              <h2>Java Arrays</h2>
              <p>
                Arrays are used to store multiple values in a single variable,
                instead of declaring separate variables for each value.
              </p>
              <p>
                To declare an array, define the variable type with
                <span>&nbsp;</span>
                <strong>square brackets</strong>:
              </p>
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title">Example</p>
                </header>
                <div class="card-content">
                  <div class="content">
                    <SyntaxHighlighter language="java" style={xonokai}>
                      String[] cars;
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
              <p class="mt-5">
                We have now declared a variable that holds an array of strings.
                To insert values to it, we can use an array literal - place the
                values in a comma-separated list, inside curly braces:
              </p>
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title">Example</p>
                </header>
                <div class="card-content">
                  <div class="content">
                    <SyntaxHighlighter language="java" style={xonokai}>
                      {`String[] cars = {("Volvo", "BMW", "Ford", "Mazda")};`}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
              <p class="mt-5">
                To create an array of integers, you could write:
              </p>
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title">Example</p>
                </header>
                <div class="card-content">
                  <div class="content">
                    <SyntaxHighlighter language="java" style={xonokai}>
                      {`int[] myNum = {10, 20, 30, 40};`}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
              <h2>Access the Elements of an Array</h2>
              <p>
                You access an array element by referring to the index number.
              </p>
              <p>
                This statement accesses the value of the first element in cars:
              </p>
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title">Example</p>
                </header>
                <div class="card-content">
                  <div class="content">
                    <SyntaxHighlighter language="java" style={xonokai}>
                      {`String[] cars = {"Volvo", "BMW", "Ford", "Mazda"}; \nSystem.out.println(cars[0]); \n// Outputs Volvo`}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
              <h2>Change an Array Element</h2>
              <p>
                To change the value of a specific element, refer to the index
                number:
              </p>
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title">Example</p>
                </header>
                <div class="card-content">
                  <div class="content">
                    <SyntaxHighlighter language="java" style={xonokai}>
                      cars[0] = "Opel";
                    </SyntaxHighlighter>
                  </div>

                  <SyntaxHighlighter language="java" style={xonokai}>
                    {`String[] cars = {"Volvo", "BMW", "Ford", "Mazda"}; \ncars[0] = "Opel"; \nSystem.out.println(cars[0]); \n// Now outputs Opel instead of Volvo`}
                  </SyntaxHighlighter>
                </div>
              </div>
              <h2>Array Length</h2>
              <p>
                To find out how many elements an array has, use the
                <span>&nbsp;</span>
                <code class="w3-codespan">length</code>
                <span>&nbsp;</span>property:
              </p>
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title">Example</p>
                </header>
                <div class="card-content">
                  <div class="content">
                    <SyntaxHighlighter language="java" style={xonokai}>
                      {`String[] cars = {"Volvo", "BMW", "Ford", "Mazda"}; \nSystem.out.println(cars.length); \n// Outputs 4`}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
              <h2>Loop Through an Array</h2>
              <p>
                You can loop through the array elements with the
                <span>&nbsp;</span>
                <code class="w3-codespan">for</code>
                <span>&nbsp;</span>loop, and use the<span>&nbsp;</span>
                <code class="w3-codespan">length</code>
                <span>&nbsp;</span>property to specify how many times the loop
                should run.
              </p>
              <p>
                The following example outputs all elements in the
                <span>&nbsp;</span>
                <strong>cars</strong>
                <span>&nbsp;</span>array:
              </p>
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title">Example</p>
                </header>
                <div class="card-content">
                  <div class="content">
                    <SyntaxHighlighter language="java" style={xonokai}>
                      {`String[] cars = {"Volvo", "BMW", "Ford", "Mazda"}; \nfor (int i = 0; i < cars.length; i++) { \n   System.out.println(cars[i]); \n}`}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
              <h2>Loop Through an Array with For-Each</h2>
              <p>
                There is also a "<b>for-each</b>" loop, which is used
                exclusively to loop through elements in arrays:
              </p>
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title">Example</p>
                </header>
                <div class="card-content">
                  <div class="content">
                    <SyntaxHighlighter language="java" style={xonokai}>
                      {`for (type variable : arrayname) { \n   ... \n}`}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
              <p class="mt-5">
                The following example outputs all elements in the cars array,
                using a "for-each" loop:
              </p>
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title">Example</p>
                </header>
                <div class="card-content">
                  <div class="content">
                    <SyntaxHighlighter language="java" style={xonokai}>
                      {`String[] cars = {"Volvo", "BMW", "Ford", "Mazda"}; \nfor (String i : cars) { \n   System.out.println(i); \n}`}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
              <p class="mt-5">
                The example above can be read like this:<span>&nbsp;</span>
                <strong>for each</strong>
                <span>&nbsp;</span>
                <code class="w3-codespan">String</code>
                <span>&nbsp;</span>element (called<span>&nbsp;</span>
                <strong>i</strong>
                <span>&nbsp;</span>- as in<span>&nbsp;</span>
                <strong>i</strong>ndex) in<span>&nbsp;</span>
                <strong>cars</strong>, print out the value of
                <strong>
                  <span>&nbsp;</span>i
                </strong>
                .
              </p>
              <p>
                If you compare the<span>&nbsp;</span>
                <code class="w3-codespan">for</code>
                <span>&nbsp;</span>loop and<span>&nbsp;</span>
                <strong>for-each</strong>
                <span>&nbsp;</span>loop, you will see that the
                <span>&nbsp;</span>
                <b>for-each</b>
                <span>&nbsp;</span>method is easier to write, it does not
                require a counter (using the length property), and it is more
                readable.
              </p>
              <hr />
              <h2>Multidimensional Arrays</h2>
              <p>A multidimensional array is an array of arrays.</p>
              <p>
                To create a two-dimensional array, add each array within its own
                set of<span>&nbsp;</span>
                <strong>curly braces</strong>:
              </p>
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title">Example</p>
                </header>
                <div class="card-content">
                  <div class="content">
                    <SyntaxHighlighter language="java" style={xonokai}>
                      {`int[][] myNumbers = { {1, 2, 3, 4}, {5, 6, 7} };`}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
              <p class="mt-5">
                <strong>myNumbers</strong>
                <span>&nbsp;</span>is now an array with two arrays as its
                elements.
              </p>
              <p>
                To access the elements of the<span>&nbsp;</span>
                <strong>myNumbers</strong>
                <span>&nbsp;</span>array, specify two indexes: one for the
                array, and one for the element inside that array. This example
                accesses the third element (2) in the second array (1) of
                myNumbers:
              </p>
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title">Example</p>
                </header>
                <div class="card-content">
                  <div class="content">
                    <SyntaxHighlighter language="java" style={xonokai}>
                      {`int[][] myNumbers = { {1, 2, 3, 4}, {5, 6, 7} }; \nint x = myNumbers[1][2]; \nSystem.out.println(x); // Outputs 7`}
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
export default Arrays;
