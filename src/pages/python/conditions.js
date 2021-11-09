import React from "react";
import Layout from "../../components/layout/Layout";
import SyntaxHighlighter from "react-syntax-highlighter";

const Conditions = () => {
  return (
    <Layout>
      <div class="container">
        <div class="card">
          <div class="card-content">
            <h1 class="title">Python Conditions and If statements</h1>

            <div class="content mt-5">
              <p>
                Python supports the usual logical conditions from mathematics:
              </p>
              <ul>
                <li>
                  Equals: <code>a == b</code>
                </li>
                <li>
                  Not Equals: <code>a != b</code>
                </li>
                <li>
                  Less than: <code>{`a < b`}</code>
                </li>
                <li>
                  Less than or equal to: <code>{`a <= b`}</code>
                </li>
                <li>
                  Greater than: <code>{`a > b`}</code>
                </li>
                <li>
                  Greater than or equal to: <code>{`a >= b`}</code>
                </li>
              </ul>
              <p>
                These conditions can be used in several ways, most commonly in
                "if statements" and loops.
              </p>
              <p>
                An "if statement" is written by using the <code>if</code>{" "}
                keyword.
              </p>
            </div>
            <div class="card">
              <div class="card-content">
                <header class="card-header">
                  <p class="card-header-title">Example</p>
                </header>
                <div class="content">
                  <SyntaxHighlighter language="python">
                    {`a = 33 b = 200 \nif b > a: \n   print("b is greater than a")`}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
            <div class="content mt-5">
              <p>
                In this example we use two variables, <code>a</code> and{" "}
                <code>b</code>, which are used as part of the if statement to
                test whether <code>b</code> is greater than <code>a</code>. As
                <code>a</code> is <code>33</code>, and <code>b</code> is{" "}
                <code>200</code>, we know that 200 is greater than 33, and so we
                print to screen that "b is greater than a".
              </p>
            </div>

            <div class="content mt-5">
              <h2 class="subtitle">Indentation</h2>
              <p>
                Python relies on indentation (whitespace at the beginning of a
                line) to define scope in the code. Other programming languages
                often use curly-brackets for this purpose.
              </p>
            </div>

            <div class="card" style={{ backgroundColor: "#FFDDDD" }}>
              <header class="card-header">
                <p class="card-header-title">
                  If statement, without indentation (will raise an error):
                </p>
              </header>
              <div class="card-content">
                <div class="content">
                  <SyntaxHighlighter language="python">
                    {`a = 33 \nb = 200 \nif b > a: \nprint("b is greater than a") # you will get an error`}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>

            <div class="content mt-5">
              <h2 class="subtitle">Elif</h2>
              <p>
                The <code>elif</code> keyword is pythons way of saying "if the
                previous conditions were not true, then try this condition".
              </p>
            </div>

            <div class="card">
              <div class="card-content">
                <header class="card-header">
                  <p class="card-header-title">Example</p>
                </header>
                <div class="content">
                  <SyntaxHighlighter language="python">
                    {`a = 33 \nb = 33 \nif b > a: \n   print("b is greater than a") \nelif a == b: \n   print("a and b are equal")`}
                  </SyntaxHighlighter>
                  <p>
                    In this example <code>a</code> is equal to <code>b</code>,
                    so the first condition is not true, but the{" "}
                    <code>elif</code> condition is true, so we print to screen
                    that "a and b are equal".
                  </p>
                </div>
              </div>
            </div>

            <div class="content mt-5">
              <h2 class="subtitle">Else</h2>
              <p>
                The <code>else</code> keyword catches anything which isn't
                caught by the preceding conditions.
              </p>
            </div>

            <div class="card">
              <div class="card-content">
                <header class="card-header">
                  <p class="card-header-title">Example</p>
                </header>
                <div class="content">
                  <SyntaxHighlighter language="python">
                    {`a = 200 \nb = 33 \nif b > a: \n   print("b is greater than a") \nelif a == b: \n   print("a and b are equal") \nelse: \n   print("a is greater than b")`}
                  </SyntaxHighlighter>
                  <p>
                    In this example <code>a</code> is greater than{" "}
                    <code>b</code>, so the first condition is not true, also the{" "}
                    <code>elif</code> condition is not true, so we go to the{" "}
                    <code>else</code> condition and print to screen that "a is
                    greater than b".
                  </p>
                  <p>
                    You can also have an <code>else</code> without the{" "}
                    <code>elif</code>:
                  </p>
                  <SyntaxHighlighter language="python">
                    {`a = 200 \nb = 33 \nif b > a: \n   print("b is greater than a") \nelse: \n   print("b is not greater than a")`}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>

            <div class="content mt-5">
              <h2 class="subtitle">Short Hand If</h2>
              <p>
                If you have only one statement to execute, you can put it on the
                same line as the if statement.
              </p>
            </div>

            <div class="card">
              <div class="card-content">
                <header class="card-header">
                  <p class="card-header-title">Example</p>
                </header>
                <div class="content">
                  <SyntaxHighlighter language="python">
                    if a > b: print("a is greater than b")
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>

            <div class="content mt-5">
              <h2 class="subtitle">Short Hand If ... Else </h2>
              <p>
                If you have only one statement to execute, one for if, and one
                for else, you can put it all on the same line:
              </p>
            </div>

            <div class="card">
              <div class="card-content">
                <header class="card-header">
                  <p class="card-header-title">Example</p>
                </header>
                <div class="content">
                  <SyntaxHighlighter language="python">
                    a = 2 b = 330 print("A") if a > b else print("B")
                  </SyntaxHighlighter>
                </div>
                <p>
                  You can also have multiple else statements on the same line.
                </p>
                <p>One line if else statement, with 3 conditions:</p>
                <SyntaxHighlighter language="python">
                  {`a = 330 \nb = 330 \nprint("A") if a > b else print("=") if a == b else print("B")`}
                </SyntaxHighlighter>
              </div>
            </div>

            <div class="content mt-5">
              <h2 class="subtitle">Python While Loop </h2>
              <p>
                With the <code>while</code> loop we can execute a set of
                statements as long as a condition is true.
              </p>
            </div>

            <div class="card">
              <div class="card-content">
                <header class="card-header">
                  <p class="card-header-title">
                    Print i as long as i is less than 6:
                  </p>
                </header>
                <div class="content">
                  <SyntaxHighlighter language="python">
                    {`i = 1 \nwhile i < 6: \n  print(i) \n  i += 1`}
                  </SyntaxHighlighter>
                </div>
                <p>
                  <b>Note:</b> remember to increment i, or else the loop will
                  continue forever.
                </p>
                <p>
                  The <code>while</code> loop requires relevant variables to be
                  ready, in this example we need to define an indexing variable,
                  i, which we set to 1.
                </p>
              </div>
            </div>

            <div class="content mt-5">
              <h2 class="subtitle">Python For Loop </h2>
              <ul>
                <li>
                  A <code>for</code> loop is used for iterating over a sequence
                  (that is either a list, a tuple, a dictionary, a set, or a
                  string).
                </li>
                <li>
                  This is less like the <code>for</code> keyword in other
                  programming languages, and works more like an iterator method
                  as found in other object-orientated programming languages.
                </li>
                <li>
                  With the <code>for</code> loop we can execute a set of
                  statements, once for each item in a list, tuple, set etc.
                </li>
              </ul>
            </div>
            <div class="card">
              <div class="card-content">
                <header class="card-header">
                  <p class="card-header-title">
                    Print each fruit in a fruit list:
                  </p>
                </header>
                <div class="content">
                  <SyntaxHighlighter language="python">
                    {`fruits = ["apple", "banana", "cherry"] \nfor x in fruits: \n  print(x)`}
                  </SyntaxHighlighter>
                  <p>
                    The <code>for</code> loop does not require an indexing
                    variable to set beforehand.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Conditions;
