import * as React from "react";
import Layout from "../../components/layout/Layout";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { xonokai } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CopyBlock, dracula } from "react-code-blocks";


const Install = () => {
  return (
    <Layout>
      <div className="container">
        <div className="card">
          <div className="card-content">
            <div className="content">
              <h2>What Do I Need?</h2>
              <p>To start using PHP, you can:</p>
              <ul>
                <li>Find a web host with PHP and MySQL support</li>
                <li>Install a web server on your own PC, and then install PHP and MySQL</li>
              </ul>
              <hr />
              <h2>Use a Web Host With PHP Support</h2>
              <p>
                If your server has activated support for PHP you do not need to do anything.
              </p>
              <p>
                Just create some<span>&nbsp;</span><code class="w3-codespan">.php</code><span>&nbsp;</span>files, place them in your web directory, and the server
                will automatically parse them for you.
              </p>
              <p>You do not need to compile anything or install any extra tools.</p>
              <p>Because PHP is free, most web hosts offer PHP support.</p>
              <hr />
              <h2>Set Up PHP on Your Own PC</h2>
              <p>However, if your server does not support PHP, you must:</p>
              <ul>
                <li>install a web server</li>
                <li>install PHP</li>
                <li>install a database, such as MySQL</li>
              </ul>
              <p>
                The official PHP website (PHP.net) has installation instructions for PHP:<span
                  >&nbsp;</span>
                <a target="_blank" href="http://php.net/manual/en/install.php" rel="noopener"
                  >http://php.net/manual/en/install.php
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Install;
