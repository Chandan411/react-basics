import React, { Component, Children } from 'react'
import ReactDOM from 'react-dom';

 class form extends Component {
    constructor(props) {
        super(props);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeMobileNumber = this.onChangeMobileNumber.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
      
  
        this.state = {
            first_name: '',
            last_name: '',
            mobile_number:'',
            showButton:false,
            items: []
        }
    }
    onChangeFirstName(e) {
      this.setState({
        first_name: e.target.value
      });
    }
    onChangeLastName(e) {
      this.setState({
        last_name: e.target.value
      })  
    }
    onChangeMobileNumber(e) {
      this.setState({
        mobile_number: e.target.value
      })
    }
    onSubmit(e) {
      e.preventDefault();

      let items = [...this.state.items];

      items.push({
         first_name: this.state.first_name,
         last_name:this.state.last_name,
         mobile_number:this.state.mobile_number
      });
 
      console.log(`The values are ${this.state.first_name}, ${this.state.last_name}, and ${this.state.mobile_number}`)
      console.log(items)
      this.setState({
        items,
        first_name: '',
        last_name: '',
        mobile_number: ''
      })
    }

  handleDelete(i){
    let items = [...this.state.items]
    items.splice(i,1);
    this.setState({
     items : items
    })
    ReactDOM.findDOMNode(this.refs.myInput).focus();
  }

  handleUpdate (e,i){
    e.preventDefault();
    
    this.setState({
      showButton:true
    })
    ReactDOM.findDOMNode(this.refs.myInput).focus();
  
  }

  handleClick = (i) => {
    let updateItems = [...this.state.items];
    this.setState({
      first_name: '',
      last_name: '',
      mobile_number: ''
    },() =>{
      console.log("handleClick : "+updateItems);
      
    })
    
  }


    render() {
        return (
          <div>
            <div style={{marginTop: 10},{width:600
            },{textAlign:"center"},{display:"inline-block"}}>
            <h3>Add Personal Details</h3>
            <form onSubmit = {this.onSubmit}> 
                
                <div className="form-group">
                    <label>First Name:  </label>
                    <input 
                    type="text" 
                    className="form-control"
                    pattern="^[a-zA-Z]+$"
                    required = "required"
                    value = {this.state.first_name}
                    onChange={this.onChangeFirstName}
                    ref="myInput"/>
                </div>

                <div className="form-group">
                    <label>Last Name: </label>
                    <input 
                    type="text" 
                    className="form-control"
                    pattern="^[a-zA-Z]+$"
                    required = "required"
                    value={this.state.last_name}
                    onChange={this.onChangeLastName}/>
                </div>
                
                <div className="form-group">
                    <label>Mobile Number: </label>
                    <input type="tel" 
                    className="form-control"
                    // pattern="^\d{10}$"
                    // required="required"
                    value={this.state.mobile_number}
                    onChange={this.onChangeMobileNumber}/>
                </div>

                <div className="form-group">
                    <input type="submit" value="Submit" className="btn btn-primary"/>
                   
                </div>
            </form>
            {this.state.showButton ? <button onClick={this.handleClick} className="btn btn-warning">Update</button> : null}
            </div>

            <div>
            <div id="Table" style={{margin: 100,width:"100%"},{textAlign:"center"},{display:"inline-block"}}>
            <table items = {this.state.items}
            style = {{border:"1px solid black",marginBottom:100,borderCollapse:"collapse"}}>
              <tbody>
                <tr>
                <th style={{backgroundColor:"#343a40",color:"white",padding:"15px"}}> Id </th>
                  <th style={{backgroundColor:"#343a40",color:"white",padding:"15px"}}> First Name </th>
                  <th style={{backgroundColor:"#343a40",color:"white",padding:"15px"}}> Last Name </th>
                  <th style={{backgroundColor:"#343a40",color:"white",padding:"15px"}}> Mobile No.</th>
                  <th style={{backgroundColor:"#343a40",color:"white",padding:"15px"}}></th>
                  <th style={{backgroundColor:"#343a40",color:"white",padding:"15px"}}></th>
                </tr>
                {this.state.items.map((item,i) => {
                  return (
                    <tr key={i} style={{padding:"15px", textAlign:"center"}}>
                      <td scope="item">{++i}</td>
                      <td>{item.first_name}</td>
                      <td>{item.last_name}</td>
                      <td>{item.mobile_number}</td>
                      <td><button id="delete-btn" className="btn btn-danger" onClick={this.handleDelete}>Delete</button></td>
                      <td><button id="edit-btn" className="btn btn-warning" onClick={this.handleUpdate}>Edit</button></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
            </div>
        </div>
        )
    }
}

export default form
