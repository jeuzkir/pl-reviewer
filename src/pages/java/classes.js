import React from "react";
import Layout from "../../components/layout/Layout";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  xonokai,
  atomDark,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import Class1 from "../../images/class1.png";
import Class2 from "../../images/class2.png";

const Classes = () => {
  return (
    <Layout>
      <div class="container">
        <div class="card">
          <div class="card-content">
            <div class="content mt-5">
              <h2>Java - What is OOP?</h2>
              <p>
                OOP stands for<span>&nbsp;</span>
                <strong>Object-Oriented Programming</strong>.
              </p>
              <p>
                Procedural programming is about writing procedures or methods
                that perform operations on the data, while object-oriented
                programming is about creating objects that contain both data and
                methods.
              </p>
              <p>
                Object-oriented programming has several advantages over
                procedural programming:
              </p>
              <ul>
                <li>OOP is faster and easier to execute</li>
                <li>OOP provides a clear structure for the programs</li>
                <li>
                  OOP helps to keep the Java code DRY "Don't Repeat Yourself",
                  and makes the code easier to maintain, modify and debug
                </li>
                <li>
                  OOP makes it possible to create full reusable applications
                  with less code and shorter development time
                </li>
              </ul>
              <p>
                <strong>Tip:</strong>
                <span>&nbsp;</span>The "Don't Repeat Yourself" (DRY) principle
                is about reducing the repetition of code. You should extract out
                the codes that are common for the application, and place them at
                a single place and reuse them instead of repeating it.
              </p>
              <h2>Java - What are Classes and Objects?</h2>
              <p>
                Classes and objects are the two main aspects of object-oriented
                programming.
              </p>
              <p>
                Look at the following illustration to see the difference between
                class and objects:
              </p>
              <img src={Class1} alt="Class 1" />
              <p class="mt-5">Another example:</p>
              <img src={Class2} alt="Class 2" />
              <p class="mt-5">
                So, a class is a template for objects, and an object is an
                instance of a class.
              </p>
              <p>
                When the individual objects are created, they inherit all the
                variables and methods from the class.
              </p>
              <h2>Java Classes/Objects</h2>
              <p>Java is an object-oriented programming language.</p>
              <p>
                Everything in Java is associated with classes and objects, along
                with its attributes and methods. For example: in real life, a
                car is an object. The car has<span>&nbsp;</span>
                <strong>attributes</strong>, such as weight and color, and
                <span>&nbsp;</span>
                <strong>methods</strong>, such as drive and brake.
              </p>
              <p>
                A Class is like an object constructor, or a "blueprint" for
                creating objects.
              </p>
              <hr />
              <h2>Create a Class</h2>
              <p>
                To create a class, use the keyword<span>&nbsp;</span>
                <code class="w3-codespan">class</code>:
              </p>
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title">
                    Create a class named "Main" with a variable x:
                  </p>
                </header>
                <div class="card-content">
                  <div class="content">
                    <SyntaxHighlighter language="java" style={xonokai}>
                      {`public class Main {\n   int x = 5;\n}`}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
              <h2>Create an Object</h2>
              <p>
                In Java, an object is created from a class. We have already
                created the class named<span>&nbsp;</span>
                <code class="w3-codespan">Main</code>, so now we can use this to
                create objects.
              </p>
              <p>
                To create an object of<span>&nbsp;</span>
                <code class="w3-codespan">Main</code>, specify the class name,
                followed by the object name, and use the keyword
                <span>&nbsp;</span>
                <code class="w3-codespan">new</code>:
              </p>
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title">
                    Create an object called "
                    <code class="w3-codespan">myObj</code>" and print the value
                    of x:
                  </p>
                </header>
                <div class="card-content">
                  <div class="content">
                    <SyntaxHighlighter language="java" style={xonokai}>
                      {`public class Main { \n   int x = 5; \n   public static void main(String[] args) { \n     Main myObj = new Main(); \n     System.out.println(myObj.x); \n   } \n}`}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
              <h2>Multiple Objects</h2>
              <p>You can create multiple objects of one class:</p>
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title">
                    Create an object called "
                    <code class="w3-codespan">myObj</code>" and print the value
                    of x:
                  </p>
                </header>
                <div class="card-content">
                  <div class="content">
                    <SyntaxHighlighter language="java" style={xonokai}>
                      {`public class Main { \n     int x = 5; \n \n   public static void main(String[] args) { \n     Main myObj1 = new Main();  // Object 1 Main \n     myObj2 = new Main();  // Object 2 \n     System.out.println(myObj1.x); \n     System.out.println(myObj2.x); \n   } \n}`}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
              <h2>Using Multiple Classes</h2>
              <p>
                You can also create an object of a class and access it in
                another class. This is often used for better organization of
                classes (one class has all the attributes and methods, while the
                other class holds the<span>&nbsp;</span>
                <code class="w3-codespan">main()</code>
                <span>&nbsp;</span>method (code to be executed)).
              </p>
              <p>
                Remember that the name of the java file should match the class
                name. In this example, we have created two files in the same
                directory/folder:
              </p>
              <ul>
                <li>Main.java</li>
                <li>Second.java</li>
              </ul>
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title">Main.java</p>
                </header>
                <div class="card-content">
                  <div class="content">
                    <SyntaxHighlighter language="java" style={xonokai}>
                      {`public class Main { \n   int x = 5; \n}`}
                    </SyntaxHighlighter>
                  </div>
                </div>
                <header class="card-header">
                  <p class="card-header-title">Second.java</p>
                </header>
                <div class="card-content">
                  <div class="content">
                    <SyntaxHighlighter language="java" style={xonokai}>
                      {`class Second { \n   public static void main(String[] args) { \n     Main myObj = new Main(); \n     System.out.println(myObj.x); \n   } \n}`}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
              <p class="mt-5">When both files have been compiled:</p>
              <div class="card">
                <div class="card-content">
                  <div class="content">
                    <SyntaxHighlighter language="powershell" style={atomDark}>
                      {`C:\Users\Your Name>javac Main.java \nC:\Users\Your Name>javac Second.java`}
                    </SyntaxHighlighter>
                    <p>Run the Second.java file:</p>
                    <SyntaxHighlighter language="powershell" style={atomDark}>
                      C:\Users\Your Name>java Second
                    </SyntaxHighlighter>
                    <p>And the output will be:</p>
                    <SyntaxHighlighter language="powershell" style={atomDark}>
                    5
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
export default Classes;
