import * as React from "react";
import Layout from "../../components/layout/Layout";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  xonokai,
  atomDark,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import ImageStep1 from "../../images/step1.png";
import ImageStep2 from "../../images/step2.png";
import ImageStep3 from "../../images/step3.png";
import ImageStep4 from "../../images/step4.png";

const GetStarted = () => {
  return (
    <Layout>
      <div className="container">
        <div className="card">
          <div className="card-content">
            <h1 class="title"> Java Getting Started </h1>

            <div class="content">
              <h2 class="subtitle">Java Install</h2>
              <p>Some PCs might have Java already installed.</p>
              <p>
                To check if you have Java installed on a Windows PC, search in
                the start bar for Java or type the following in Command Prompt
                (cmd.exe):
              </p>
              <div class="card">
                <div class="card-content">
                  <div class="content">
                    <SyntaxHighlighter language="powershell" style={atomDark}>
                      C:\Users\Your Name{`>`}java -version
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
              <div class="content mt-5">
                <p>
                  If Java is installed, you will see something like this
                  (depending on version):
                </p>
              </div>
              <div class="card">
                <div class="card-content">
                  <div class="content">
                    <SyntaxHighlighter language="powershell" style={atomDark}>
                      {`java version "11.0.1" 2018-10-16 LTS \nJava(TM) SE Runtime Environment 18.9 (build 11.0.1+13-LTS) \nJava HotSpot(TM) 64-Bit Server VM 18.9 (build 11.0.1+13-LTS, mixed mode)`}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
              <div class="content mt-5">
                <p>
                  If you do not have Java installed on your computer, you can
                  download it for free at oracle.com.
                </p>
                <p>
                  <b>Note:</b> In this tutorial, we will write Java code in a
                  text editor. However, it is possible to write Java in an
                  Integrated Development Environment, such as IntelliJ IDEA,
                  Netbeans or Eclipse, which are particularly useful when
                  managing larger collections of Java files.
                </p>
              </div>
              <div class="content mt-5">
                <h2 class="subtitle">Setup for Windows</h2>
                <p>To install Java on Windows:</p>
                <ol>
                  <li>
                    Go to "System Properties" (Can be found on Control Panel >
                    System and Security > System > Advanced System Settings)
                  </li>
                  <li>
                    Click on the "Environment variables" button under the
                    "Advanced" tab
                  </li>
                  <li>
                    Then, select the "Path" variable in System variables and
                    click on the "Edit" button
                  </li>
                  <li>
                    Click on the "New" button and add the path where Java is
                    installed, followed by \bin. By default, Java is installed
                    in C:\Program Files\Java\jdk-11.0.1 (If nothing else was
                    specified when you installed it). In that case, You will
                    have to add a new path with: <br />
                    <b>C:\Program Files\Java\jdk-11.0.1\bin</b> Then, click
                    "OK", and save the settings
                  </li>
                  <li>
                    At last, open Command Prompt (cmd.exe) and type java
                    -version to see if Java is running on your machine
                  </li>
                </ol>
              </div>
              <div class="content mt-5">
                <h2 class="subtitle">Step 1</h2>
                <img src={ImageStep1} alt="Step 1" />

                <h2 class="subtitle">Step 2</h2>
                <img src={ImageStep2} alt="Step 2" />

                <h2 class="subtitle">Step 3</h2>
                <img src={ImageStep3} alt="Step 3" />

                <h2 class="subtitle">Step 4</h2>
                <img src={ImageStep4} alt="Step 4" />

                <h2 class="subtitle">Step 5</h2>
                <p>Write the following in the command line (cmd.exe):</p>

                <div class="card">
                  <div class="card-content">
                    <div class="content">
                      <SyntaxHighlighter language="powershell" style={atomDark}>
                        {`C:\Users\Your Name>java -version`}
                      </SyntaxHighlighter>
                      <p>
                        If Java was successfully installed, you will see
                        something like this (depending on version):
                      </p>
                      <SyntaxHighlighter language="powershell" style={atomDark}>
                        {`java version "11.0.1" 2018-10-16 LTS \nJava(TM) SE Runtime Environment 18.9 (build 11.0.1+13-LTS) \nJava HotSpot(TM) 64-Bit Server VM 18.9 (build 11.0.1+13-LTS, mixed mode)`}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                </div>
              </div>
              <div class="content mt-5">
                <h2 class="subtitle">Java Quickstart</h2>
                <p>
                  In Java, every application begins with a class name, and that
                  class must match the filename.
                </p>
                <p>
                  Let's create our first Java file, called Main.java, which can
                  be done in any text editor (like Notepad).
                </p>
                <p>
                  The file should contain a "Hello World" message, which is
                  written with the following code:
                </p>
              </div>
              <div class="card">
                <div class="card-content">
                  <header class="card-header">
                    <p class="card-header-title">Example</p>
                  </header>
                  <div class="content">
                    <SyntaxHighlighter language="java" style={xonokai}>
                      {`public class Main { \n   public static void main(String[] args) { \n     System.out.println("Hello World"); \n   } \n}`}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
              <div class="content mt-5">
                <p>
                  Don't worry if you don't understand the code above - we will
                  discuss it in detail in later chapters. For now, focus on how
                  to run the code above.
                </p>
                <p>
                  Save the code in Notepad as "Main.java". Open Command Prompt
                  (cmd.exe), navigate to the directory where you saved your
                  file, and type "javac Main.java":
                </p>
              </div>
              <div class="card">
                <div class="card-content">
                  <div class="content">
                    <SyntaxHighlighter language="powershell" style={atomDark}>
                      C:\Users\Your Name>javac Main.java
                    </SyntaxHighlighter>
                    <p>
                      This will compile your code. If there are no errors in the
                      code, the command prompt will take you to the next line.
                      Now, type "java Main" to run the file:
                    </p>
                    <SyntaxHighlighter language="powershell" style={atomDark}>
                      C:\Users\Your Name>java Main
                    </SyntaxHighlighter>
                    <p>The output should read:</p>
                    <SyntaxHighlighter language="powershell" style={atomDark}>
                      Hello World
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
export default GetStarted;
