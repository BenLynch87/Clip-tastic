import React from "react";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";
import ProfileContent from "../components/profileContent/ProfileContent";
import "../pages/Profile.css";
import SentMessagesFeed from "../components/sentMessageFeed/SentMessageFeed.js";

class Profile extends React.Component {
  render() {
    //<SentMessageFeed />
    return (
      <div>
        <div className="SentMessagesSideBar"></div>
        <div className="Body">
          <div className="Profile">
            <Menu isAuthenticated={this.props.isAuthenticated} />
            <div className="ProfileHeader">My Profile</div>
            <ProfileContent />
          </div>
        </div>
      </div>
    );
  }
}

export default userIsAuthenticated(Profile);
