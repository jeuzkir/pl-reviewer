import React from 'react'
import { Link } from 'gatsby'

class Sidebar extends React.Component {
  render() {
    return (
      <div class="column is-2">
        <aside class="menu">
          <p class="menu-label">{this.props.subject}</p>
          <ul class="menu-list">
            {this.props.pages.map((page) => (
              <li>
                <Link to={page.to} activeClassName="is-active">{page.name}</Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    )
  }
}
export default Sidebar
