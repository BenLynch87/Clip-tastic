import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Tooltip from "react-bootstrap/Tooltip";
import SocialappService from "../../socialappService";
import { userIsAuthenticated } from "../../redux/HOCs";
import { OverlayTrigger } from "react-bootstrap";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.client = new SocialappService();
    this.state = {
      message: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handlePost = (e) => {
    e.preventDefault();
    this.client.postMessage(this.state);
  };

  render() {
    return (
      <Card>
        <Card.Title>Post New Message</Card.Title>
        <Card.Body>
          <Form>
            <Form.Control
              type="post"
              as="textarea"
              rows="3"
              placeholder="Your amazing message"
              onSubmit={this.handleChange}
            />
            <OverlayTrigger
              placement="right"
              overlay={
                <Tooltip id="tooltip-proof-of-concept">
                  This API cannot post images along with messages, however we
                  wanted to include it as proof of concept for what the real
                  site would be like.
                </Tooltip>
              }
            >
              <Form.File id="uploadImage" label="Upload Image" disabled />
            </OverlayTrigger>
          </Form>
          <Button variant="info" onClick={this.handlePost}>
            Post!
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default userIsAuthenticated(Post);
