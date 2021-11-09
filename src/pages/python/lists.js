import React from "react";
import Layout from "../../components/layout/Layout";
import SyntaxHighlighter from "react-syntax-highlighter";

const Lists = () => {
  return (
    <Layout>
      <div class="container">
        <div class="card">
          <div class="card-content">
            <h1 class="title">Python Lists</h1>
            <div class="card">
              <div class="card-content">
                <div class="content">
                  <SyntaxHighlighter language="python">
                    mylist = ["apple", "banana", "cherry"]
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>

            <div class="content mt-5">
              <h2 class="subtitle">Lists</h2>
              <p>
                Lists are used to store multiple items in a single variable.
              </p>
              <p>
                Lists are one of 4 built-in data types in Python used to store
                collections of data, the other 3 are Tuple, Set, and Dictionary,
                all with different qualities and usage.
              </p>
              <p>Lists are created using square brackets:</p>
            </div>

            <div class="card">
              <div class="card-content">
                <header class="card-header">
                  <p class="card-header-title">Example</p>
                </header>
                <div class="content">
                  <SyntaxHighlighter language="python">
                    {`thislist = ["apple", "banana", "cherry"] \nprint(thislist)`}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>

            <div class="content mt-5">
              <h2 class="subtitle">List Items</h2>
              <p>
                List items are ordered, changeable, and allow duplicate values.
              </p>
              <p>
                List items are indexed, the first item has index{" "}
                <code>[0]</code>, the second item has index <code>[1]</code>{" "}
                etc.
              </p>
            </div>

            <div class="content mt-5">
              <h2 class="subtitle">Ordered</h2>
              <p>
                When we say that lists are ordered, it means that the items have
                a defined order, and that order will not change.
              </p>
              <p>
                If you add new items to a list, the new items will be placed at
                the end of the list. etc.
              </p>
            </div>

            <div class="content mt-5">
              <h2 class="subtitle">Changeable</h2>
              <p>
                The list is changeable, meaning that we can change, add, and
                remove items in a list after it has been created.
              </p>
            </div>

            <div class="content mt-5">
              <h2 class="subtitle">Allow Duplicates</h2>
              <p>
                Since lists are indexed, lists can have items with the same
                value:
              </p>
            </div>

            <div class="card">
              <div class="card-content">
                <header class="card-header">
                  <p class="card-header-title">Example</p>
                </header>
                <div class="content">
                  <SyntaxHighlighter language="python">
                    {`thislist = ["apple", "banana", "cherry", "apple", "cherry"] \nprint(thislist)`}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>

            <div class="content mt-5">
              <h2 class="subtitle">List Length</h2>
              <p>
                To determine how many items a list has, use the len() function:
              </p>
            </div>

            <div class="card">
              <div class="card-content">
                <header class="card-header">
                  <p class="card-header-title">Example</p>
                </header>
                <div class="content">
                  <SyntaxHighlighter language="python">
                    {`thislist = ["thislist = ["apple", "banana", "cherry"] \nprint(len(thislist))`}
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
export default Lists;
