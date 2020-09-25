import React from "react";
// import Image from "../../assets/images/Placeholder_Image.gif";
// import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "../message/Message.css";
import ProfilePic from "../../assets/images/Placeholder_Image.gif";

class Message extends React.Component {
  LikeFunction() {
    return <img src=""></img>; //Sometype of image thumbnail
  }
  render() {
    return (
      <div className="CardBody">
        <Card style={{ width: "575px" }}>
          <Card.Body className="Message">
            <img className="ProfilePic" src={ProfilePic} alt="Profile Pic" />
            <div className="ProfileLink">
              <Link to="/miniProfile">Check Out My Profile</Link>
            </div>
            <div className="MemberTitle">
              <Card.Title> Member: {this.props.username}</Card.Title>
            </div>
            <div className="PostedTitle">
              <Card.Subtitle className="mb-2 text-muted">
                {new Date(this.props.createdAt).toDateString}{" "}
              </Card.Subtitle>
            </div>
            <Card.Text className="MessageText">{this.props.text}</Card.Text>
            <footer>
              {" "}
              <div className="LikesNumber">
                <div className="Likes">Likes: {this.props.likes.length}</div>{" "}
              </div>
              <button className="LikeButton" onClick={this.LikeFunction}>
                LIKE MY POST!
              </button>{" "}
              {/* <div className="LikeButton">
                <input type="submit" value="" onClick={this.LikeFunction} />{" "}
              </div> */}
            </footer>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Message;
