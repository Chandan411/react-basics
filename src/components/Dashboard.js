import React, { Component } from "react";
import {Form,FormGroup,FormControl,Col,Button,Modal,ButtonToolbar,Table} from "react-bootstrap";


class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: "",
      mobile: "",
      date: "",
      show: false,
      formdata: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.showEditModal = this.showEditModal.bind(this);
    
  }

  componentDidMount(){
    this.refreshList();
}

refreshList(){
        this.setState({
          formdata : [{"name" : "Chandan", "description" : "Programmer", "mobile":"8268786060","date" : "11/04/1995"},
            {"name" : "Sunny", "description" : "Engineer", "mobile":"1234567890","date" : "25/08/1993"},
            {"name" : "Dinesh", "description" : "Chef", "mobile":"9221111129","date" : "03/12/1986"}]
        })
    }

   //function to show the Pop-up  
  showModal() {
    this.setState({ show: true });
  }

  //Edit Button Code
  showEditModal(event, i) {
    const recordToEdit = this.state.formdata.filter((item, index) => {
      return index === i;
    })[0];

    this.setState({
      show: true,

      name: recordToEdit.name,
      description: recordToEdit.description,
      mobile: recordToEdit.mobile,
      date: recordToEdit.date
    });
  }

  //function to hide the Pop-up
  hideModal() {this.setState({show: false});}

  //Hnadling input change of the modal form
  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  
  //Submit Button Code
  handleSubmit(event) {
    const formItem = {
      name: this.state.name,
      description: this.state.description,
      mobile: this.state.mobile,
      date: this.state.date
    };

    if (
      this.state.name === "" ||
      this.state.mobile === "" ||
      this.state.date === ""
    ) {
      alert("Please fill mandatory filed");
    } else {
      if (this.state.formdata.filter(item => item.name === formItem.name).length > 0) {
        // update item if name is already exist
        this.setState(prevState => ({
          formdata: prevState.formdata.map(item => {
            if (item.name === formItem.name)
              return formItem;
            else
              return item;
          })
        }));

      } else {
        // add new item if name is not exist
        this.setState(prevState => ({
          formdata: prevState.formdata.concat(formItem)
        }));

      }

      alert("Form submited Successfully: ");

      this.hideModal();
    }
    event.preventDefault();
  }

  //Function to delete the record
  deleteRecord(i) {
    alert("Are you sure you want to Delete?");
    this.setState({
      formdata: this.state.formdata.filter((item, index) => {
        return index !== i;
      })
    });
  }

 
  render() {
    return (
      <div>
        <h2>CRUD Operation Using REACT </h2>
        <Table className="mt-4" striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Mobile</th>
                <th>Date Of Birth</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.formdata.map((item, i) => (
                <tr key={i}>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.mobile}</td>
                  <td>{item.date}</td>
                  <td>
                  <button className="btn btn-primary" onClick = {(e) => this.showEditModal(e, i)}>Edit</button>&nbsp;&nbsp;&nbsp;&nbsp;
                  <button className="btn btn-danger" onClick={() => this.deleteRecord(i)}>Delete</button>
                  </td>
                  <td />
                </tr>
              ))}
            </tbody>
          </Table>
         
          <ButtonToolbar style={{justifyContent: 'center',alignItems: 'center',marginBottom:"20px"}}> 
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
              <Modal.Title
                id="contained-modal-title-vcenter">
                Add Record
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form horizontal onSubmit={this.handleSubmit}>
               
                <FormGroup controlId="name">
                  <Col smOffset={6} sm={6}>
                  <Form.Label>Full Name</Form.Label>
                    <FormControl
                      type="text"
                      placeholder="Enter Name"
                      name="name"
                      value={this.state.name}
                      onChange={this.handleInputChange}
                    />
                  </Col>
                </FormGroup>
                
                <FormGroup controlId="description">
                  <Col smOffset={6} sm={6}>
                  <Form.Label>Description</Form.Label>
                    <FormControl
                      type="text"
                      placeholder="Enter Description"
                      name="description"
                      value={this.state.description}
                      onChange={this.handleInputChange}
                    />
                  </Col>
                </FormGroup>
                
                <FormGroup controlId="mobile">
                  <Col smOffset={6} sm={6}>
                  <Form.Label>Mobile Number</Form.Label>
                    <FormControl
                      type="tel"
                      placeholder="Enter Mobile Number"
                      name="mobile"
                      value={this.state.mobile}
                      onChange={this.handleInputChange}
                    />
                  </Col>
                </FormGroup>
               
                <FormGroup controlId="date">
                  <Col smOffset={6} sm={6}>
                  <Form.Label>Date Of Birth</Form.Label>
                    <FormControl
                      type="date"
                      placeholder="Select Date"
                      name="date"
                      value={this.state.date}
                      onChange={this.handleInputChange}
                    />
                  </Col>
                </FormGroup>

                <FormGroup>
                  <Col smOffset={6} sm={6}>
                    <Button type="submit" bsStyle="primary">
                      Submit
                    </Button>
                  </Col>
                </FormGroup>
              </Form>
            </Modal.Body>
            <Modal.Footer>
        <Button variant="danger" onClick={this.hideModal}>Close</Button>
      </Modal.Footer>
          </Modal>
    
      </div>
    );
  }
}
export default Dashboard;