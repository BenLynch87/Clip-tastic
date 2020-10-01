import React from "react";
import Menu from "../menu/Menu.js";
import { userIsAuthenticated } from "../../redux/HOCs";
import SocialappService from "../../socialappService.js";
import Message from "../message/Message.js";
import Post from "../post/Post.js";
import Button from "react-bootstrap/Button";
import Popover from "react-bootstrap/Popover";
import { OverlayTrigger } from "react-bootstrap";
import MiniProfile from "../miniLogin/MiniLogin.js";

class SentMessageFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messages: [], text: "", currentUser: {} };
    this.api = new SocialappService();
    this.popover = (
      <Popover id="newPost">
        {/* <Popover.Title as="h2">NEW POST</Popover.Title> */}
        <Popover.Content>
          <Post post={this.handleNewPost} change={this.handleChange} />
        </Popover.Content>
      </Popover>
    );
  }

  componentDidMount() {
    this.retrieveMessages();
    this.api
      .getUser(localStorage.getItem("user"))
      .then((response) => this.setState({ currentUser: response.data.user }));
  }

  retrieveMessages() {
    this.api
      .getMessages()
      .then((response) =>
        this.setState({ messages: response.data.messages }, () =>
          console.log(response.data.messages)
        )
      );
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    if (this.state.messages.length === 0) {
      return (
        <div className="SentMessageList">
          <div className="SentMessageLoading">
            Sent Message Feed Is Loading......
          </div>
        </div>
      );
    }
    return (
      <div className="Body">
        <MiniProfile user={this.state.currentUser} />
        <div className="SentMessageList">
          <Menu isAuthenticated={this.props.isAuthenticated} />
          <div className="SentMessageHeader">Sent Message Feed</div>
          <br></br>
          <OverlayTrigger
            trigger="click"
            placement="bottom"
            overlay={this.popover}
            rootClose={true}
          ></OverlayTrigger>
          <div className="TheFeed">
            <ul>
              {this.state.messages.map((messageObject) => {
                return <Message {...messageObject} />;
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default userIsAuthenticated(SentMessageFeed);
