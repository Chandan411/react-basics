import React, { Component } from 'react'
import {Table} from 'react-bootstrap'
import{Button, ButtonToolbar} from 'react-bootstrap'
import {AddNewRecord} from './AddNewRecord'


class Person extends Component {

    constructor(props){
        super(props);
        this.state = {
            requiredItem : 0,
            persons : [],
            firstName:'',
            lastName:'',
            mobileNumber:'',
            addModalShow : false

        }

        this.saveModalDetails = this.saveModalDetails.bind(this);

    }

   componentDidMount(){
        this.refreshList();
    }


    refreshList(){
        this.setState({
            persons : [{"ID" : 1, "firstName" : "Chandan", "lastName":"Gupta","mobileNumber" : 8268786060},
                       {"ID":2,"firstName":"Sunny","lastName":"Nahar","mobileNumber" : 1231231231}]
        })
    }

    replaceModalItem(index) {
        this.setState({
          requiredItem: index,
          addModalShow : true
        });
      }

    deleteItem(index) {
        let tempBrochure = this.state.persons;
        tempBrochure.splice(index, 1);
        this.setState({ persons: tempBrochure });
      }

      saveModalDetails(item) {
        const requiredItem = this.state.requiredItem;
        let tempbrochure = this.state.persons;
        tempbrochure[requiredItem] = item;
        this.setState({ persons: tempbrochure });
      }
    

    render() {
           
        const {persons} = this.state;
        let addModalClose = () => this.setState({addModalShow:false})

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
                    {persons.map((person,index)=> 
                        <tr key={index}>
                            <td><button className="btn btn-warning" onClick = {() => this.replaceModalItem(index)}>Edit</button></td>
                            <td><button className="btn btn-danger" onClick={() => this.deleteItem(index)}>Delete</button></td>
                            <td>{person.ID}</td>
                            <td>{person.firstName}</td>
                            <td>{person.lastName}</td>
                            <td>{person.mobileNumber}</td>
                        </tr>
                        )}
                </tbody>
            </Table>

            <ButtonToolbar style={{justifyContent: 'center',alignItems: 'center'}}> 
                <Button 
                variant='primary' 
                onClick={()=>this.setState({addModalShow:true})}>
                Add New Record</Button>
                <AddNewRecord show={this.state.addModalShow}
                              onHide = {addModalClose}
                />
            </ButtonToolbar>
            </div>
        )
    }
}

export default Person
