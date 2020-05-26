import React, { Component } from 'react'
import Form from './form'

class Table extends Component {

  state = {
    students : ["std1","std2","std3"]
  };

    render() {
      return(
       
          <div id="Table">
            <table>
              <tbody>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Mobile No.</th>
                </tr>
                {this.state.students.map(student => {
                  return (
                    <tr>
                      <td>{student}</td>
                      <td>{student}</td>
                      <td>{student}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        );
      }


      //   const items = this.props.items;
      //   return (
      //     <div id="Table">
      //       <table>
      //         <tbody>
      //           <tr>
      //             <th>First Name</th>
      //             <th>Last Name</th>
      //             <th>Mobile No.</th>
      //           </tr>
      //           {items.map(item => {
      //             return (
      //               <tr>
      //                 <td>{item.first_name}</td>
      //                 <td>{item.last_name}</td>
      //                 <td>{item.mobile_number}</td>
      //               </tr>
      //             );
      //           })}
      //         </tbody>
      //       </table>
      //     </div>
      //   );
      // }
}

export default Table
