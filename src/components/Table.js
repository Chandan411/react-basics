import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


class Table extends Component {

  state = {
    tableData: [{
      index: Math.random(),
      firstName: "",
      lastName: "",
      mobileNumber: ""
    }]
  }

  handleChange = (e) => {

  }

  addNewRow = (e) => {

  }

  handleSubmit = (e) => {
    e.preventDefault();

  }

  render() {
    return (
      <div className="content">
        <form onSubmit={this.handleSubmit} onChange={this.handleChange} >
          <div className="row" style={{ marginTop: 20 }}>
            <div className="col-sm-1"></div>
            <div className="col-sm-10">
              <div className="card">
                <div className="card-header text-center">Add Your Personal Detail</div>
                <div className="card-body">
                  <table className="table">
                    <thead>
                      <tr>
                        <th> </th>
                        <th> </th>
                        <th className="required" >First Name</th>
                        <th className="required" >Last Name</th>
                        <th>Mobile</th>

                      </tr>
                    </thead>
                    <tbody>
                      {/* <TaskList add={this.addNewRow} delete={this.clickOnDelete.bind(this)} taskList={taskList} /> */}
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colSpan="4">
                          <td><button id="delete-btn" className="btn btn-danger" >Delete</button></td>
                          <td><button id="edit-btn" className="btn btn-warning" >Edit</button></td>
                        </td></tr>
                    </tfoot>
                  </table>
                </div>
                {/* <div className="card-footer text-center"> <button type="submit" className="btn btn-primary text-center">Submit</button></div> */}
              </div>
            </div>
            <div className="col-sm-1"></div>
          </div>
        </form>
        <button onClick={this.addNewRow} type="button" className="btn btn-primary text-center">Add New<i className="fa fa-plus-circle" aria-hidden="true"></i></button>
    
      </div>
    );
  }


}

export default Table
