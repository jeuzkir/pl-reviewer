import React from "react";
import Layout from "../../components/layout/Layout";
import SyntaxHighlighter from "react-syntax-highlighter";

const Variables = () => {
  return (
    <Layout>
      <div class="container">
        <div class="card">
          <div class="card-content">
            <h1 class="title">Python Variables</h1>

            <div class="content">
              <p>Variables are containers for storing data values.</p>
            </div>

            <div class="content mt-5">
              <h2 class="subtitle">Python Variables</h2>

              <p>Python has no command for declaring a variable.</p>
              <p>
                A variable is created the moment you first assign a value to it.
              </p>
            </div>

            <div class="card">
              <div class="card-content">
                <header class="card-header">
                  <p class="card-header-title">Example</p>
                </header>
                <div class="content">
                  <SyntaxHighlighter language="python">
                    {`x = 5 \ny = "John" \nprint(x) \nprint(y)`}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>

            <div class="content mt-5">
              <p>
                Variables do not need to be declared with any particular type,
                and can even change type after they have been set.
              </p>
            </div>

            <div class="content mt-5">
              <h2 class="subtitle">Casting</h2>
              <p>
                If you want to specify the data type of a variable, this can be
                done with casting.
              </p>
            </div>

            <div class="card">
              <div class="card-content">
                <header class="card-header">
                  <p class="card-header-title">Example</p>
                </header>
                <div class="content">
                  <SyntaxHighlighter language="python">
                    {`x = str(3)    # x will be '3' \ny = int(3)    # y will be 3 \nz = float(3)  # z will be 3.0`}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>

            <div class="content mt-5">
              <h2 class="subtitle">Get the Type</h2>
              <p>
                You can get the data type of a variable with the type()
                function.
              </p>
            </div>

            <div class="card">
              <div class="card-content">
                <header class="card-header">
                  <p class="card-header-title">Example</p>
                </header>
                <div class="content">
                  <SyntaxHighlighter language="python">
                    {`x = 5 \ny = "John" \nprint(type(x)) \nprint(type(y))`}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>

            <div class="content mt-5">
              <h2 class="subtitle">Single or Double Quotes?</h2>
              <p>
                String variables can be declared either by using single or
                double quotes:
              </p>
            </div>

            <div class="card">
              <div class="card-content">
                <header class="card-header">
                  <p class="card-header-title">Example</p>
                </header>
                <div class="content">
                  <SyntaxHighlighter language="python">
                    {`x = "John" \n# is the same as \nx = 'John'`}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>

            <div class="content mt-5">
              <h2 class="subtitle">Case-Sensitive</h2>
              <p>Variable names are case-sensitive.</p>
            </div>

            <div class="card">
              <div class="card-content">
                <header class="card-header">
                  <p class="card-header-title">Example</p>
                </header>
                <div class="content">
                  <SyntaxHighlighter language="python">
                    {`a = 4 \nA = "Sally" \n#A will not overwrite a`}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>

            <div class="content mt-5">
              <h2 class="subtitle">Variable Names</h2>
              <p>
                A variable can have a short name (like x and y) or a more
                descriptive name (age, carname, total_volume). Rules for Python
                variables:
              </p>
              <ul>
                <li>
                  A variable name must start with a letter or the underscore
                  character
                </li>
                <li>A variable name cannot start with a number</li>
                <li>
                  A variable name can only contain alpha-numeric characters and
                  underscores (A-z, 0-9, and _ )
                </li>
                <li>
                  Variable names are case-sensitive (age, Age and AGE are three
                  different variables)
                </li>
              </ul>
            </div>

            <div class="card">
              <div class="card-content">
                <header class="card-header">
                  <p class="card-header-title">Example</p>
                </header>
                <div class="content">
                  <SyntaxHighlighter language="python">
                    {`myvar = "John" \nmy_var = "John" \n_my_var = "John" \nmyVar = "John" \nMYVAR = "John" \nmyvar2 = "John"`}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>

            <div class="card mt-5" style={{ backgroundColor: "#FFDDDD" }}>
              <div class="card-content">
                <header class="card-header">
                  <p class="card-header-title">
                    Illegal Variable Names Example
                  </p>
                </header>
                <div class="content">
                  <SyntaxHighlighter language="python">
                    {`2myvar = "John" \nmy-var = "John" \nmy var = "John"`}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>

            <div class="content mt-5">
              <h2 class="subtitle">Multi Words Variable Names</h2>
              <p>
                Variable names with more than one word can be difficult to read.
              </p>
              <p>
                There are several techniques you can use to make them more
                readable:
              </p>
            </div>

            <div class="content mt-5">
              <h2 class="subtitle">Camel Case</h2>
              <p>Each word, except the first, starts with a capital letter:</p>
            </div>

            <div class="card">
              <div class="card-content">
                <header class="card-header">
                  <p class="card-header-title">Example</p>
                </header>
                <div class="content">
                  <SyntaxHighlighter language="python">
                    myVariableName = "John"
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>

            <div class="content mt-5">
              <h2 class="subtitle">Pascal Case</h2>
              <p>Each word starts with a capital letter:</p>
            </div>

            <div class="card">
              <div class="card-content">
                <header class="card-header">
                  <p class="card-header-title">Example</p>
                </header>
                <div class="content">
                  <SyntaxHighlighter language="python">
                    MyVariableName = "John"
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>

            <div class="content mt-5">
              <h2 class="subtitle">Snake Case</h2>
              <p>Each word is separated by an underscore character:</p>
            </div>

            <div class="card">
              <div class="card-content">
                <header class="card-header">
                  <p class="card-header-title">Example</p>
                </header>
                <div class="content">
                  <SyntaxHighlighter language="python">
                    my_variable_name = "John"
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
export default Variables;
