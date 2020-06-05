import React, { Component } from 'react'
import {Modal,Button,Row,Col,Form} from 'react-bootstrap'


export class AddNewRecord extends Component {

    constructor(props){
        super(props);

        this.state = {
          first_name: '',
          last_name: '',
          mobile_number:'',
          items: []
      }
    }

    handleSubmit(event){
     event.preventDefault();
  
      let firstName_value = event.target.firstName.value;
      let lastName_value = event.target.lastName.value;
      let mobileNumber_value = event.target.mobileNumber.value;

      let records = [firstName_value,lastName_value,mobileNumber_value];
      console.log(records);

      this.props.saveModalDetails(records)
       alert(records);

    }
    

    render() {

        return (
            <Modal
      {...this.props}
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
              <Form onSubmit = {this.handleSubmit}>
                <Form.Group controlId="firstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                  type="text"
                  name = "firstName" required
                  placeholder = "First Name"/>
                  </Form.Group>

                <Form.Group controlId="lastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                  type="text"
                  name = "lastName" required
                  placeholder = "Last Name"/>
                </Form.Group>

                <Form.Group controlId="mobileNumber">
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control
                  type="tel"
                  name = "mobileNumber" required
                  placeholder = "Mobile Number"/>
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
        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
   
        )
    }
}

export default AddNewRecord
