import * as React from "react";
import Layout from "../../components/layout/Layout";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const DataTypes = () => {
  return (
    <Layout>
      <div className="container">
        <div className="card">
          <div className="card-content">
            <div className="content">
            <h1>PHP Data Types</h1>
              <hr />
              <h2>PHP Data Types</h2>
              <p>
                Variables can store data of different types, and different data types can do
                different things.
              </p>
              <p>PHP supports the following data types:</p>
              <ul>
                <li>String</li>
                <li>Integer</li>
                <li>Float (floating point numbers - also called double)</li>
                <li>Boolean</li>
                <li>Array</li>
                <li>Object</li>
                <li>NULL</li>
                <li>Resource</li>
              </ul>
              <hr />
              <h2>PHP String</h2>
              <p>A string is a sequence of characters, like "Hello world!".</p>
              <p>
                A string can be any text inside quotes. You can use single or double quotes:
              </p>

              <SyntaxHighlighter language="php" showLineNumbers={true} style={dracula}>
                {`<?php
$x = "Hello world!";
$y = 'Hello world!';

echo $x;
echo "<br>";
echo $y;
?>`}
              </SyntaxHighlighter>

              <hr />
              <h2>PHP Integer</h2>
              <p>
                An integer data type is a non-decimal number between -2,147,483,648 and
                2,147,483,647.
              </p>
              <p>Rules for integers:</p>
              <ul>
                <li>An integer must have at least one digit</li>
                <li>An integer must not have a decimal point</li>
                <li>An integer can be either positive or negative</li>
                <li>
                  Integers can be specified in: decimal (base 10), hexadecimal (base 16),
                  octal (base 8), or binary (base 2) notation
                </li>
              </ul>
              <p>
                In the following example $x is an integer. The PHP var_dump() function returns
                the data type and value:
              </p>

              <SyntaxHighlighter language="php" showLineNumbers={true} style={dracula}>
                {`<?php
$x = 5985;
var_dump($x);
?>`}
              </SyntaxHighlighter>

              <div>
                <hr />
                <h2>PHP Float</h2>
                <p>
                  A float (floating point number) is a number with a decimal point or a number
                  in exponential form.
                </p>
                <p>
                  In the following example $x is a float. The PHP var_dump() function returns
                  the data type and value:
                </p>
              </div>
              <SyntaxHighlighter language="php" showLineNumbers={true} style={dracula}>
                {`<?php
$x = 10.365;
var_dump($x);
?>`}
              </SyntaxHighlighter>

              <h2>PHP Boolean</h2>
              <p>A Boolean represents two possible states: TRUE or FALSE.</p>
              <div>
                <pre>$x = true;<br />$y = false;</pre>
              </div>
              <p>
                Booleans are often used in conditional testing. You will learn more about
                conditional testing in a later chapter of this tutorial.
              </p>
              <p>&nbsp;</p>

              <hr />
              <h2>PHP Array</h2>
              <p>An array stores multiple values in one single variable.</p>
              <p>In the following example $cars is an array. The PHP var_dump() function returns the data type and value:</p>
              <SyntaxHighlighter language="php" showLineNumbers={true} style={dracula}>
                {`<?php
$cars = array("Volvo","BMW","Toyota");
var_dump($cars);
?>`}
              </SyntaxHighlighter>

              <p>You will learn a lot more about arrays in later chapters of this tutorial.</p>


              <h2>PHP Object</h2>
              <p>
                Classes and objects are the two main aspects of object-oriented programming.
              </p>
              <p>
                A class is a template for objects, and an object is an instance of a class.
              </p>
              <p>
                When the individual objects are created, they inherit all the properties and
                behaviors from the class, but each object will have different values for the
                properties.
              </p>
              <p>
                Let's assume we have a class named Car. A Car can have properties like model,
                color, etc. We can define variables like $model, $color, and so on, to hold
                the values of these properties.
              </p>
              <p>
                When the individual objects (Volvo, BMW, Toyota, etc.) are created, they
                inherit all the properties and behaviors from the class, but each object will
                have different values for the properties.
              </p>
              <p>
                If you create a __construct() function, PHP will automatically call this
                function when you create an object from a class.
              </p>

              <SyntaxHighlighter language="php" showLineNumbers={true} style={dracula}>
                {`<?php
class Car {
  public $color;
  public $model;
  public function __construct($color, $model) {
    $this->color = $color;
    $this->model = $model;
  }
  public function message() {
    return "My car is a " . $this->color . " " . $this->model . "!";
  }
}

$myCar = new Car("black", "Volvo");
echo $myCar -> message();
echo "<br>";
$myCar = new Car("red", "Toyota");
echo $myCar -> message();
?>`}
              </SyntaxHighlighter>

              <hr />
              
              <h2>PHP NULL Value</h2>
              <p>Null is a special data type which can have only one value: NULL.</p>
              <p>
                A variable of data type NULL is a variable that has no value assigned to it.
              </p>
              <p>
                <strong>Tip:</strong>&nbsp;If a variable is created without a value, it is
                automatically assigned a value of NULL.
              </p>
              <p>Variables can also be emptied by setting the value to NULL:</p>

              <SyntaxHighlighter language="php" showLineNumbers={true} style={dracula}>
                {`<?php
$x = "Hello world!";
$x = null;
var_dump($x);
?>`}
              </SyntaxHighlighter>

              <hr />

              <h2>PHP Resource</h2>
              <p>
                The special resource type is not an actual data type. It is the storing of a
                reference to functions and resources external to PHP.
              </p>
              <p>A common example of using the resource data type is a database call.</p>
              <p>
                We will not talk about the resource type here, since it is an advanced topic.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DataTypes;
