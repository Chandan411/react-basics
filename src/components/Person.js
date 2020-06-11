import React, { Component } from 'react'
import { Form, FormGroup, FormControl, Col, Row, Button, Modal, ButtonToolbar, Table } from "react-bootstrap";

class Person extends Component {
  constructor(props) {
    super(props);

    this.state = {
      persons: [],
      firstName: '',
      lastName: '',
      mobileNumber: '',
      show: false

    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);

  }

  componentDidMount() {
    this.refreshList();
  }


  refreshList() {
    this.setState({
      persons: [{ "ID": 1, "firstName": "Chandan", "lastName": "Gupta", "mobileNumber": 8268786060 },
      { "ID": 2, "firstName": "Sunny", "lastName": "Nahar", "mobileNumber": 1231231231 },
      { "ID": 3, "firstName": "John", "lastName": "Smith", "mobileNumber": 9898989898 }]
    })
  }

  showModal() {
    this.setState({ show: true })
  }

  hideModal() {
    this.setState({ show: false })
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div>

        <Table className="mt-4" striped bordered hover size="sm">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Mobile Number</th>

            </tr>
          </thead>

          <tbody>

            {this.state.persons.map((person, index) =>
              <tr key={index}>
                <td><button className="btn btn-warning" >Edit</button></td>
                <td><button className="btn btn-danger" >Delete</button></td>
                <td>{person.ID}</td>
                <td>{person.firstName}</td>
                <td>{person.lastName}</td>
                <td>{person.mobileNumber}</td>
              </tr>
            )}
          </tbody>
        </Table>

        <ButtonToolbar style={{ justifyContent: 'center', alignItems: 'center', marginBottom: "20px" }}>
          <Button
            variant='primary'
            onClick={this.showModal}>
            Add New Record</Button>

        </ButtonToolbar>

        <Modal
          {...this.props}
          show={this.state.show}
          onHide={this.hideModal}

          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Add New Detail
        </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="container">
              <Row>
                <Col sm={6}>
                  <Form onSubmit={this.handleSubmit} >
                    <Form.Group controlId="firstName">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="firstName" required
                        value={this.state.f_name}
                        onChange={this.handleInputChange}
                        placeholder="First Name" />
                    </Form.Group>

                    <Form.Group controlId="lastName">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="lastName" required
                        value={this.state.l_name}
                        onChange={this.handleInputChange}
                        placeholder="Last Name" />
                    </Form.Group>

                    <Form.Group controlId="mobileNumber">
                      <Form.Label>Mobile Number</Form.Label>
                      <Form.Control
                        type="tel"
                        name="mobileNumber" required
                        value={this.state.m_num}
                        onChange={this.handleInputChange}
                        placeholder="Mobile Number" />
                    </Form.Group>

                    <Form.Group>
                      <Button variant="primary" type="submit">Submit</Button>
                    </Form.Group>
                  </Form>
                </Col>
              </Row>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={this.hideModal}>Close</Button>
          </Modal.Footer>
        </Modal>

      </div>
    )
  }
}

export default Person
