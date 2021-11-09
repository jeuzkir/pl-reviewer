import React from "react";
import Layout from "../../components/layout/Layout";
import SyntaxHighlighter from "react-syntax-highlighter";

const Arrays = () => {
  return (
    <Layout>
      <div class="container">
        <div class="card">
          <div class="card-content">
            <h1 class="title">Python Arrays</h1>
            <div class="content mt-5">
              <h2 class="subtitle">Arrays</h2>
              <p>
                Arrays are used to store multiple values in one single variable:
              </p>
            </div>
            <div class="card">
              <div class="card-content">
                <header class="card-header">
                  <p class="card-header-title">
                    Create an array containing car names:
                  </p>
                </header>
                <div class="content">
                  <SyntaxHighlighter language="python">
                    cars = ["Ford", "Volvo", "BMW"]
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
            <div class="content mt-5">
              <h2 class="subtitle">What is an Array?</h2>
              <p>
                An array is a special variable, which can hold more than one
                value at a time.
              </p>
              <p>
                If you have a list of items (a list of car names, for example),
                storing the cars in single variables could look like this:
              </p>
            </div>
            <div class="card">
              <div class="card-content">
                <div class="content">
                  <SyntaxHighlighter language="python">
                    {`car1 = "Ford" \ncar2 = "Volvo" \ncar3 = "BMW"`}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
            <div class="content mt-5">
              <p>
                However, what if you want to loop through the cars and find a
                specific one? And what if you had not 3 cars, but 300?
              </p>
              <p>The solution is an array!</p>
              <p>
                An array can hold many values under a single name, and you can
                access the values by referring to an index number.
              </p>
            </div>
            <div class="content mt-5">
              <h2 class="subtitle">Access the Elements of an Array</h2>
              <p>
                You refer to an array element by referring to the index number.
              </p>
            </div>
            <div class="card">
              <div class="card-content">
                <header class="card-header">
                  <p class="card-header-title">
                    Get the value of the first array item:
                  </p>
                </header>
                <div class="content">
                  <SyntaxHighlighter language="python">
                    x = cars[0]
                  </SyntaxHighlighter>
                  <p>
                    <b>Modify the value of the first array item:</b>
                  </p>
                  <SyntaxHighlighter language="python">
                    cars[0] = "Toyota"
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>

            <div class="content mt-5">
              <h2 class="subtitle">Adding Array Elements</h2>
              <p>
                You can use the <code>append()</code> method to add an element
                to an array.
              </p>
            </div>
            <div class="card">
              <div class="card-content">
                <header class="card-header">
                  <p class="card-header-title">
                    Add one more element to the <code>cars</code> array:
                  </p>
                </header>
                <div class="content">
                  <SyntaxHighlighter language="python">
                    cars.append("Honda")
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>

            <div class="content mt-5">
              <h2 class="subtitle">Removing Array Elements</h2>
              <p>
                You can use the <code>pop()</code> method to remove an element
                to an array.
              </p>
            </div>
            <div class="card">
              <div class="card-content">
                <header class="card-header">
                  <p class="card-header-title">
                    Delete the element that has the value "Volvo":
                  </p>
                </header>
                <div class="content">
                  <SyntaxHighlighter language="python">
                    cars.remove("Volvo")
                  </SyntaxHighlighter>
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
