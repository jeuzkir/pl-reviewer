import React from "react";
import Layout from "../../components/layout/Layout";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const GetStarted = () => {
  return (
    <Layout>
      <div class="container">
        <div class="card">
          <div class="card-content">
            <h1 class="title"> Python Getting Started </h1>

            <div class="content">
              <h2 class="subtitle"> Python Install</h2>
              <p>
                Many PCs and Macs will have python already installed. To check
                if you have python installed on a Windows PC, search in the
                start bar for Python or run the following on the Command Line{" "}
              </p>
            </div>

            <div class="card">
              <header class="card-header">
                <p class="card-header-title">Example</p>
              </header>
              <div class="card-content">
                <div class="content">
                  <SyntaxHighlighter language="python" style={atomDark}>
                    C:\Users\Your Name> python --version
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>

            <div class="content mt-4">
              <p>
                Many PCs and Macs will have python already installed. To check
                if you have python installed on a Windows PC, search in the
                start bar for Python or run the following on the Command Line{" "}
              </p>
            </div>

            <div class="card">
              <header class="card-header">
                <p class="card-header-title">Example</p>
              </header>
              <div class="card-content">
                <div class="content">
                  <SyntaxHighlighter language="python" style={atomDark}>
                    python --version
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>

            <div class="content mt-4">
              <p>
                If you find that you do not have python installed on your
                computer, then you can download it for free from the following
                website: <b>https://www.python.org/</b>
              </p>
            </div>

            <div class="content">
              <h2 class="subtitle"> Python Quickstart</h2>
              <p>
                Python is an interpreted programming language, this means that
                as a developer you write Python (.py) files in a text editor and
                then put those files into the python interpreter to be executed.
              </p>
              <p>
                The way to run a python file is like this on the command line:
              </p>
            </div>

            <div class="card">
              <header class="card-header">
                <p class="card-header-title">Example</p>
              </header>
              <div class="card-content">
                <div class="content">
                  <SyntaxHighlighter language="python" style={atomDark}>
                    C:\Users\Your Name>python helloworld.py
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>

            <div class="content mt-5">
              <p>
                Where <b>"helloworld.py"</b> is the name of your python file.
              </p>
              <p>
                Let's write our first Python file, called helloworld.py, which
                can be done in any text editor.
              </p>
            </div>

            <div class="card">
              <header class="card-header">
                <p class="card-header-title">helloworld.py</p>
              </header>
              <div class="card-content">
                <div class="content">
                  <SyntaxHighlighter language="python" style={atomDark}>
                    print("Hello, World!")
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>

            <div class="content mt-5">
              <p>
                Simple as that. Save your file. Open your command line, navigate
                to the directory where you saved your file, and run:
              </p>
            </div>

            <div class="card">
              <header class="card-header">
                <p class="card-header-title">helloworld.py</p>
              </header>
              <div class="card-content">
                <div class="content">
                  <SyntaxHighlighter language="python" style={atomDark}>
                    C:\Users\Your Name>python helloworld.py
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>

            <div class="content mt-5">
              <p>The output should read:</p>
            </div>

            <div class="card">
              <header class="card-header">
                <p class="card-header-title">Output</p>
              </header>
              <div class="card-content">
                <div class="content">
                  <SyntaxHighlighter language="python" style={atomDark}>
                    Hello, World!
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>

            <div class="content mt-5">
              <p>
                Congratulations, you have written and executed your first Python
                program.
              </p>
            </div>

            <div class="content">
              <h2 class="subtitle">The Python Command Line</h2>
              <p>
                To test a short amount of code in python sometimes it is
                quickest and easiest not to write the code in a file. This is
                made possible because Python can be run as a command line
                itself.
              </p>
              <p>
                Type the following on the Windows, Mac or Linux command line:
              </p>
            </div>

            <div class="card">
              <div class="card-content">
                <div class="content">
                  <SyntaxHighlighter language="python" style={atomDark}>
                    C:\Users\Your Name>python
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>

            <div class="content mt-5">
              <p>Or, if the "python" command did not work, you can try "py":</p>
            </div>

            <div class="card">
              <div class="card-content">
                <div class="content">
                  <SyntaxHighlighter language="python" style={atomDark}>
                    C:\Users\Your Name>py
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>

            <div class="content mt-5">
              <p>
                From there you can write any python, including our hello world
                example from earlier in the tutorial:
              </p>
            </div>

            <div class="card">
              <div class="card-content">
                <div class="content">
                  <SyntaxHighlighter
                    language="python"
                    wrapLines={true}
                    style={atomDark}
                  >
                    {`C:\Users\Your Name>python \nPython 3.6.4 (v3.6.4:d48eceb, Dec 19 2017, 06:04:45) [MSC v.1900 32 bit (Intel)] on win32 \nType "help", "copyright", "credits" or "license" for more information. \n>>>> print("Hello, World!")`}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>

            <div class="content mt-5">
              <p>Which will write "Hello, World!" in the command line:</p>
            </div>

            <div class="card">
              <div class="card-content">
                <div class="content">
                  <SyntaxHighlighter
                    language="python"
                    wrapLines={true}
                    style={atomDark}
                  >
                    {`C:\Users\Your Name>python \nPython 3.6.4 (v3.6.4:d48eceb, Dec 19 2017, 06:04:45) [MSC v.1900 32 bit (Intel)] on win32 \nType "help", "copyright", "credits" or "license" for more information. \n>>>> print("Hello, World!")\nHello World`}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>

            <div class="content mt-5">
              <p>Which will write "Hello, World!" in the command line:</p>
            </div>

            <div class="content mt-5">
              <p>
                Whenever you are done in the python command line, you can simply
                type the following to quit the python command line interface:
              </p>
            </div>

            <div class="card">
              <div class="card-content">
                <div class="content">
                  <SyntaxHighlighter
                    language="python"
                    wrapLines={true}
                    style={atomDark}
                  >
                    exit()
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

export default GetStarted;
