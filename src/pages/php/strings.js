import * as React from "react";
import Layout from "../../components/layout/Layout";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Strings = () => {
  return (
    <Layout>
      <div className="container">
        <div className="card">
          <div className="card-content">
            <div className="content">
            <h1>PHP Strings</h1>
              <hr />
              <p>A string is a sequence of characters, like "Hello world!".</p>
              <hr />
              <h2>PHP String Functions</h2>
              <p>
                In this chapter we will look at some commonly used functions to manipulate
                strings.
              </p>
              <hr />
              <h2>strlen() - Return the Length of a String</h2>
              <p>
                The PHP&nbsp;<code>strlen()</code>&nbsp;function returns the length of a
                string.
              </p>

              <h3>Example</h3>
              <p>Return the length of the string "Hello world!":</p>
              <SyntaxHighlighter language="php" showLineNumbers={true} style={dracula}>
                {`<?php
echo strlen("Hello world!"); // outputs 12
?>`}
              </SyntaxHighlighter>

              <h2>str_word_count() - Count Words in a String</h2>
              <p>
                The PHP&nbsp;<code>str_word_count()</code>&nbsp;function counts the number of
                words in a string.
              </p>
              <div>
                <h3>Example</h3>
                <p>Count the number of word in the string "Hello world!":</p>
              </div>
              
              <SyntaxHighlighter language="php" showLineNumbers={true} style={dracula}>
                {`<?php
echo str_word_count("Hello world!"); // outputs 2
?>`}
              </SyntaxHighlighter>

              <h2>strrev() - Reverse a String</h2>
              <p>The PHP&nbsp;<code>strrev()</code>&nbsp;function reverses a string.</p>
              <div>
              <h3>Example</h3>
              <p>Reverse the string "Hello world!":</p>
              </div>
              <SyntaxHighlighter language="php" showLineNumbers={true} style={dracula}>
                {`<?php
echo strrev("Hello world!"); // outputs !dlrow olleH
?>`}
              </SyntaxHighlighter>

              <h2>strpos() - Search For a Text Within a String</h2>
              <p>The PHP&nbsp;<code>strpos()</code>&nbsp;function searches for a specific text within a string. If a match is found, the function returns the character position of the first match. If no match is found, it will return FALSE.</p>
              <div>
              <h3>Example</h3>
              <p>Search for the text "world" in the string "Hello world!":</p>
              </div>
              <SyntaxHighlighter language="php" showLineNumbers={true} style={dracula}>
                {`<?php
echo strpos("Hello world!", "world"); // outputs 6
?>`}
              </SyntaxHighlighter>
              <p><strong>Tip:</strong>&nbsp;The first character position in a string is 0 (not 1).</p>

              <hr />

              <h2>str_replace() - Replace Text Within a String</h2>
              <p>The PHP&nbsp;<code>str_replace()</code>&nbsp;function replaces some characters with some other characters in a string.</p>
              <SyntaxHighlighter language="php" showLineNumbers={true} style={dracula}>
                {`<?php
echo str_replace("world", "Dolly", "Hello world!"); // outputs Hello Dolly!
?>`}
              </SyntaxHighlighter>

              <h2>Complete PHP String Reference</h2>
              <p>For a complete reference of all string functions, go to our complete&nbsp;<a href="https://www.w3schools.com/php/php_ref_string.asp">PHP String Reference</a>.</p>
              <p>The PHP string reference contains description and example of use, for each function!</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Strings;
