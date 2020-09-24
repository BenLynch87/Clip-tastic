import React from "react";
import LoginForm from "../loginForm/LoginForm";
import Modal from "react-bootstrap/Modal";

class RegisterPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
  }

  handleClose = () => this.setState({ show: false });

  render() {
    return (
      <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thank You for Registering!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LoginForm
            username={this.props.username}
            password={this.props.password}
          />
        </Modal.Body>
      </Modal>
    );
  }
}

export default RegisterPopup;
