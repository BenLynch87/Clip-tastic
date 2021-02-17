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
      <div className="Menu">
        {this.props.isAuthenticated && (
          <div id="menu-links">
            <Navigation username={this.state.link} />
            <Link to="/" onClick={this.handleLogout}>
              LOGOUT
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default withAsyncAction("auth", "logout")(Menu);
