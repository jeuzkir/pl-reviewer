import React from "react";
import Layout from "../../components/layout/Layout";
import SyntaxHighlighter from "react-syntax-highlighter";

const Videos = () => {
  return (
    <Layout>
      <div class="container">
        <div class="card">
          <div class="card-content">
            <h1 class="title">Python Video Tutorial for Beginners</h1>
           <figure class="image is-16by9">
             <iframe class="has-ratio" width="640" height="360" src="https://www.youtube.com/embed/_uQrJ0TkZlc" frameborder="0" allowfullscreen></iframe>
           </figure>
            </div>
          </div>
        </div>
    </Layout>
  );
};
export default Videos;
