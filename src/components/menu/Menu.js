import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import { withAsyncAction } from "../../redux/HOCs";
import Navigation from "../navigation/Navigation.js";
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
<<<<<<< HEAD
          <div id="menu-links">
            <Navigation username={this.state.link} />
            <Link to="/" onClick={this.handleLogout}>
              LOGOUT
=======
          <div className="MenuLinks">
            <Link to={this.state.link} title="Go To Profile">
              Profile
            </Link>
            <Link to="/messagefeed" title="Go To Message Feed">
              Message Feed
            </Link>
            <Link to="/" onClick={this.handleLogout} title="Logout">
              Logout
>>>>>>> ef1763fada37c3a21728993d3e5415691bbaa36b
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default withAsyncAction("auth", "logout")(Menu);
