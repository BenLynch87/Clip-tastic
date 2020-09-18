import React from "react";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";
import Button from "react-bootstrap/Button";
import Image from 'react-bootstrap/Image'

class Profile extends React.Component {
  render() {
    return (
      <div className="Profile">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>
        <ListGroup>
          <ListGroup.Item>bio</ListGroup.Item>
          <ListGroup.Item>location</ListGroup.Item>
          <ListGroup.Item>joined date</ListGroup.Item>
          <ListGroup.Item>preferred brands</ListGroup.Item>
          <ListGroup.Item>display name</ListGroup.Item>
      </ListGroup>
        <Button>hi<Button/>
      </div>
    );
  }
}


export default userIsAuthenticated(Profile);

