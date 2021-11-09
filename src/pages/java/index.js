import * as React from "react";
import Layout from "../../components/layout/Layout";


const Introduction = () => {
  return (
    <Layout>
      <div className="container">
        <div className="card">
          <div className="card-content">
            <h2 className="title">Java Introduction</h2>
            <h2 className="title">What is Java?</h2>
            <div className="content">
              <p>Java is a popular programming language, created in 1995.</p>
              <p>
                It is owned by Oracle, and more than 3 billion devices run Java.
              </p>
              <p>It is used for:</p>
              <ul>
                <li>Mobile applications (specially Android apps)</li>
                <li>Desktop applications</li>
                <li>Web applications</li>
                <li>Web servers and application servers</li>
                <li>Games</li>
                <li>Database connection</li>
                <li>And much, much more!</li>
              </ul>
            </div>
            
            <hr />

            <h2 className="title">Why Use Java?</h2>
            <div className="content">
              <ul>
                <li>
                  Java works on different platforms (Windows, Mac, Linux, Raspberry Pi, etc.)
                </li>
                <li>It is one of the most popular programming language in the world</li>
                <li>It is easy to learn and simple to use</li>
                <li>It is open-source and free</li>
                <li>It is secure, fast and powerful</li>
                <li>It has a huge community support (tens of millions of developers)</li>
                <li>
                  Java is an object oriented language which gives a clear structure to
                  programs and allows code to be reused, lowering development costs
                </li>
                <li>
                  As Java is close to C++ and C#, it makes it easy
                  for programmers to switch to Java or vice versa
                </li>
              </ul>
            </div>
            
            <hr />
            
            <h2 className="title">Get Started</h2>
            <p>It is not necessary to have any prior programming experience.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Introduction;
