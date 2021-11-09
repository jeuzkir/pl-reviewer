import * as React from "react";
import Layout from "../../components/layout/Layout";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { xonokai } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CopyBlock, dracula } from "react-code-blocks";
import Quiz from "../../components/Quiz";


const Introduction = () => {
  return (
    <Layout>
      <div className="container">
        <div className="card">
          <div className="card-content">
            <Quiz />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Introduction;
