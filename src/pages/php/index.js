import * as React from "react";
import Layout from "../../components/layout/Layout";

const Index = () => {
  return (
    <Layout>
      <div className="container">
        <div className="card">
          <div className="card-content">
            <div className="content">
              <p>PHP code is executed on the server.</p>
              <hr />
              <h2 className="title">What You Should Already Know</h2>
              <p>
                Before you continue you should have a basic understanding of the following:
              </p>
              <ul>
                <li><a href="https://www.w3schools.com/html/default.asp">HTML</a></li>
                <li><a href="https://www.w3schools.com/css/default.asp">CSS</a></li>
                <li><a href="https://www.w3schools.com/js/default.asp">JavaScript</a></li>
              </ul>
            </div>
            
            <p>
              If you want to study these subjects first, find the tutorials on our
              <span>&nbsp;</span>
              <a href="https://www.w3schools.com/default.asp">Home page</a>.
            </p>
            <hr />

            <div className="content">
              <h2 className="title">What is PHP?</h2>
              <ul>
                <li>PHP is an acronym for "PHP: Hypertext Preprocessor"</li>
                <li>PHP is a widely-used, open source scripting language</li>
                <li>PHP scripts are executed on the server</li>
                <li>PHP is free to download and use</li>
              </ul>
              <div class="w3-panel w3-note">
                <p><strong>PHP is an amazing and popular language!</strong></p>
                <p>
                  It is powerful enough to be at the core of the biggest blogging system on
                  the web (WordPress)!<br />It is deep enough to run large social networks!<br />It
                  is also easy enough to be a beginner's first server side language!
                </p>
              </div>
            </div>
            
            <hr />
            <div className="content">
              <h2 className="title">What is a PHP File?</h2>
              <ul>
                <li>PHP files can contain text, HTML, CSS, JavaScript, and PHP code</li>
                <li>
                  PHP code is executed on the server, and the result is returned to the
                  browser as plain HTML
                </li>
                <li>PHP files have extension "<code class="w3-codespan">.php</code>"</li>
              </ul>
            </div>

            <hr />

            <div className="content">
              <h2 className="title">What Can PHP Do?</h2>
              <ul>
                <li>PHP can generate dynamic page content</li>
                <li>
                  PHP can create, open, read, write, delete, and close files on the server
                </li>
                <li>PHP can collect form data</li>
                <li>PHP can send and receive cookies</li>
                <li>PHP can add, delete, modify data in your database</li>
                <li>PHP can be used to control user-access</li>
                <li>PHP can encrypt data</li>
              </ul>
              <p>
                With PHP you are not limited to output HTML. You can output images, PDF files,
                and even Flash movies. You can also output any text, such as XHTML and XML.
              </p>
            </div>
            
            <hr />

            <div className="content">
              <h2 className="title">Why PHP?</h2>
              <ul>
                <li>PHP runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.)</li>
                <li>
                  PHP is compatible with almost all servers used today (Apache, IIS, etc.)
                </li>
                <li>PHP supports a wide range of databases</li>
                <li>
                  PHP is free. Download it from the official PHP resource:<span>&nbsp;</span>
                  <a target="_blank" href="http://www.php.net/" rel="noopener">www.php.net</a>
                </li>
                <li>PHP is easy to learn and runs efficiently on the server side</li>
              </ul>
            </div>
            
            <hr />

            <div className="content">
              <h2 className="title">What's new in PHP 7</h2>
              <ul>
                <li>
                  PHP 7 is much faster than the previous popular stable release (PHP 5.6)
                </li>
                <li>PHP 7 has improved Error Handling</li>
                <li>PHP 7 supports stricter Type Declarations for function arguments</li>
                <li>
                  PHP 7 supports new operators (like the spaceship operator:<span>&nbsp;</span>
                  <code class="w3-codespan">&lt;=&gt;</code>)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
