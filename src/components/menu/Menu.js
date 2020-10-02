import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import { withAsyncAction } from "../../redux/HOCs";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { link: "" };
  }

  componentDidMount() {
    this.setState({ link: "/profile/" + localStorage.getItem("user") });
  }

  handleLogout = (event) => {
    event.preventDefault();
    this.props.logout();
  };

  render() {
    return (
      <div className="MenuBody">
        {this.props.isAuthenticated && (
          <div id="menu-links">
            <Link to={this.state.link}>Profile</Link>
            <Link to="/messagefeed">Message Feed</Link>
            <Link to="/" onClick={this.handleLogout}>
              Logout
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default withAsyncAction("auth", "logout")(Menu);
