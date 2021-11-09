import React from "react";
import { Link } from "gatsby";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <Link className="navbar-item" to="/">
            {/* <img
              src="https://bulma.io/images/bulma-logo.png"
              width="112"
              height="28"
              alt="Bulma logo"
            /> */}
            <span className="has-text-weight-bold">PL Reviewer</span>
          </Link>

          <a
            href="#burger"
            role="button"
            class="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
          {this.props.lessons.map((lesson, index) => (
            <Link 
              className="navbar-item" 
              to={ lesson.to }
              partiallyActive={true} 
              activeStyle={{
                color: "white",
                fontWeight: "500",
                backgroundColor: "#495ec6"
              }}
            >
              { lesson.name }
            </Link>
          ))}
          </div>
        </div>
      </nav>
    );
  }
}
export default Navbar;
