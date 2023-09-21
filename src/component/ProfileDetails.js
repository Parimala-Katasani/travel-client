import React, {Component} from 'react';
import axios from 'axios';
// import DatePicker from 'react-datepicker'
// import 'react-datepicker/dist/react-datepicker.css'
import './ProfileDetails.css';


export class ProfileDetails extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         list:[],
         popupbool: false,
         name:"",
        dest:"",
        people:"",
        date: "",
        guide:"",
        safari:"",
        food:"",
        id:""
      };

    }

    componentDidMount() {
        axios.get('http://localhost:3003/profile')
        .then((res) => {
          this.setState({ list:res.data });
        })
        .catch((err)=>{
          console.log(err)
        })
      }
      deleteProf = (id) => {
        axios
          .delete(`http://localhost:3003/profile/${id}`)
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

      showPopup =(id,name,dest,people,date,guide,safari,food)=>{
        this.setState({
            popupbool:true,
            name:name,
            dest:dest,
            people:people,
            date: date,
            guide:guide,
            safari:safari,
            food:food,
            id:id
        });
      };

      updateProf = () => {
        const { id,name,dest,people,date,guide,safari,food} = this.state;
        axios
          .put(`http://localhost:3003/profile/${id}`, {
            name:name,
            dest:dest,
            people:people,
            date: date,
            guide:guide,
            safari:safari,
            food:food,
          })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      };
  render() {
    const{id,name,dest,people,date,guide,safari,food}=this.state
    return (
      <div>
        <table className="prof-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Destination</th>
              <th>No.of people</th>
              <th>Date</th>
              <th>Guide</th>
              <th>Safari</th>
              <th>Food</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          {this.state.list.map((x) => (
              <>
                <tr>
                  <td>{x.name}</td>
                  <td>{x.dest}</td>
                  <td>{x.people}</td>
                  <td>{x.date}</td>
                  <td>{x.guide}</td>
                  <td>{x.safari}</td>
                  <td>{x.food}</td>
                  <td>
                    <button
                      onClick={() =>
                        this.showPopup(
                          x._id,
                          x.name,
                          x.dest,
                          x.people,
                          x.date,
                          x.guide,
                          x.safari,
                          x.food
                        )
                      }
                    >
                      Update
                      </button>
                    <button onClick={() => this.deleteProf(x._id)}>
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
              <form className="form-updates">
                <button className="popup-cancelpp" onClick={this.cancel}>
                  X
                </button>
                <br></br>
                <label>Name:</label><br></br>
                <input
                  type="text3"
                  value={name}
                  onChange={(e) => this.setState({ name: e.target.value })}
                />
                <br></br>
                <label>Destinstion:</label><br></br>
                <input
                  type="text3"
                  value={dest}
                  onChange={(e) => this.setState({ dest: e.target.value })}
                />
                <br></br>
                <label>No.of People:</label><br></br>
                <input
                  type="text3"
                  value={people}
                  onChange={(e) => this.setState({ people: e.target.value })}
                />
                <br></br>
                <label>Date:</label><br></br>
                <input
                  type="text3"
                  value={date}
                  onChange={(e) => this.setState({ date: e.target.value })}
                />
                <br></br>
                <label className='txtrd'>Guide:</label>
                <input 
                        type="radio" 
                        value="guide_yes" 
                        name="guide" 
                        checked={this.state.guide === "guide_yes"} 
                        onChange={(e)=>this.setState({guide:e.target.value})}/><b>Yes</b>
                <input  
                        type="radio" 
                        value="guide_no" 
                        name="guide" 
                        checked={this.state.guide === "guide_no"} 
                        onChange={(e)=>this.setState({guide:e.target.value})} /><b>No</b>
                <br></br>
                <label  className='txtrd'>Safari:</label>
                <input 
                        type="radio" 
                        value="safari_yes" 
                        name="safari" 
                        checked={this.state.safari === "safari_yes"} 
                        onChange={(e)=>this.setState({safari:e.target.value})}/><b>Yes</b>
                <input 
                        type="radio" 
                        value="safari_no" 
                        name="safari" 
                        checked={this.state.safari === "safari_no"} 
                        onChange={(e)=>this.setState({safari:e.target.value})}/><b>No</b>
                <br></br>
                <label  className='txtrd'>Food:</label>
                <input 
                        type="radio" 
                        value="food_yes" 
                        name="food" 
                        checked={this.state.food === "food_yes"} 
                        onChange={(e)=>this.setState({food:e.target.value})}/><b>Yes</b>
                <input 
                        type="radio" 
                        value="food_no" 
                        name="food" 
                        checked={this.state.food === "food_no"} 
                        onChange={(e)=>this.setState({food:e.target.value})}/><b>No</b>
        <br></br>
                
                <button onClick={this.updateProf}>Update</button>
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

export default ProfileDetails