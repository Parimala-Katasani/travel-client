import React, { Component } from 'react'
import axios from 'axios'
import './Admin.css'

export class Admin extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        list: [],
        popupbool: false,
        firstName: "",
        lastName: "",
        email:"",
        id:""
      };
    }
    componentDidMount() {
        axios.get(`http://localhost:3003/users`)
        .then((res) => {
          this.setState({ list:res.data });
        })
        .catch((err)=>{
          console.log(err)
        })
      }
      deleteEmp = (id) => {
        axios
          .delete(`http://localhost:3003/users/${id}`)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
        alert("Deleted");
        window.location.reload();
      };
      cancel = (e) => {
        this.setState({ popupbool: false });
        e.preventDefault();
      };
      showPopup = (id, firstName, lastName, email) => {
        this.setState({
          popupbool: true,
          firstName: firstName,
          lastName: lastName,
          email:email,
          id: id,
        });
      };
      updateEmp = () => {
        const { firstName, lastName, email, id } = this.state;
        axios
          .put(`http://localhost:3003/users/${id}`, {
            firstName: firstName,
            lastName: lastName,
            email:email
          })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      };
  render() {
    const { firstName, lastName,email, id } = this.state;
    return (
      <div>
        <h2>Tourist Details</h2>
        <br></br>
        <table className="admin-table">
          <thead>
            <tr>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.list.map((x) => (
              <>
                <tr>
                  <td>{x.firstName}</td>
                  <td>{x.lastName}</td>
                  <td>{x.email}</td>
                  <td>
                    <button
                      onClick={() =>
                        this.showPopup(
                          x._id,
                          x.firstName,
                          x.lastName,
                          x.email
                          
                        )
                      }
                    >
                      Update
                    </button>
                    <button onClick={() => this.deleteEmp(x._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
        {this.state.popupbool ? (
          <>
            <div className="popup">
              <form className="form-update">
                <button className="popup-cancel" onClick={this.cancel}>
                  X
                </button>
                <label>FirstName</label>
                <input
                  type="textad"
                  value={firstName}
                  onChange={(e) => this.setState({ firstName: e.target.value })}
                />
                <br></br>
                <label>LastName</label>
                <input
                  type="textad"
                  value={lastName}
                  onChange={(e) => this.setState({ lastName: e.target.value })}
                />
                <br></br>
                <label>Email</label>
                <input
                  type="textad"
                  value={email}
                  onChange={(e) => this.setState({ email: e.target.value })}
                />
                <br></br>
                <button onClick={this.updateEmp}>Update</button>
              </form>
            </div>
          </>
        ) : (
          ""
        )}
        <br></br>
      </div>
    )
  }
}

export default Admin