import React,{Component} from "react";
import { useAuth } from "./auth";
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import axios from "axios";
import "./Profile.css";
import ProfileDetails from "./ProfileDetails";
export default class Profile extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      name:"",
      dest:"Dubai",
      people:"",
      date: new Date(),
      guide:"",
      safari:"",
      food:""
       
    };
    this.onRadioChange1 = this.onRadioChange1.bind(this);
    this.onRadioChange2 = this.onRadioChange2.bind(this);
    this.onRadioChange3 = this.onRadioChange3.bind(this);
    this.handleChange=this.handleChange.bind(this);

    // const auth = useAuth();
    // const handlelogout = () => {
    //   auth.logout();
    // };
  }

  onRadioChange1 = (e) =>{
    this.setState({
      guide: e.target.value
    });
  }

  onRadioChange2 = (e) =>{
    this.setState({
      safari:e.target.value
    });
  }

  onRadioChange3 = (e) =>{
    this.setState({
      food:e.target.value
    });
  }

  handleChange(date){
    this.setState({
      date:date
    })
  }

 

  addtodb = () =>{
    const{name,dest,people,date,guide,safari,food}=this.state
    axios.post(`http://localhost:3003/profile`,{
      name:name,
      dest:dest,
      people:people,
      date: date,
      guide:guide,
      safari:safari,
      food:food
    })
    .then(res=>{
      console.log(res)
      alert("Your requirements are saved!")
  })
  .catch(err=>{
      console.log(err)
  })
  }

  render() {
    const{name,dest,people}=this.state
  return (
    <div>
      <form  className="container1">
        <h2>Plan Your Trip</h2>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e)=>this.setState({name:e.target.value})} />
        <br></br>

        <label>Destination:
          <select value={dest} onChange={(e)=> this.setState({dest:e.target.value})}>
            <option value = "TajMahal">TajMahal</option>
            <option value = "Munnar">Munnar</option>
            <option value = "Darjiling">Darjiling</option>
            <option value = "Charminar">Charminar</option>
            <option value = "Ooty">Ooty</option>
            <option value = "Tirupati">Tirupati</option>
            <option value = "goa">Goa</option>
          </select>
        </label>
        <br></br>

        <label>People:</label>
        <input type="text" value={people} onChange={(e)=> this.setState({people:e.target.value})} />
        <br></br>

        <label>Pick Date:</label>
        <DatePicker selected={this.state.date} name="date" type=
        "text1" onChange={this.handleChange}  dateFormat="dd/MM/yyyy"/>
        <br></br>

        <label>Guide:</label>
        <input type="radio" value="guide_yes" name="guide" checked={this.state.guide === "guide_yes"} onChange={this.onRadioChange1}/><b>Yes</b>
        <input type="radio" value="guide_no" name="guide" checked={this.state.guide === "guide_no"} onChange={this.onRadioChange1} /><b>No</b>
        <br></br>

        <label>Safari:</label>
        <input type="radio" value="safari_yes" name="safari" checked={this.state.safari === "safari_yes"} onChange={this.onRadioChange2}/><b>Yes</b>
        <input type="radio" value="safari_no" name="safari" checked={this.state.safari === "safari_no"} onChange={this.onRadioChange2}/><b>No</b>
        <br></br>

        <label>Food:</label>
        <input type="radio" value="food_yes" name="food" checked={this.state.food === "food_yes"} onChange={this.onRadioChange3}/><b>Yes</b>
        <input type="radio" value="food_no" name="food" checked={this.state.food === "food_no"} onChange={this.onRadioChange3}/><b>No</b>
        <br></br>

        <button onClick={this.addtodb} id="btn-set">Submit</button>




      </form>
      <br></br>
     {/* <input onClick={handlelogout} type="sumbit" value="Logout"/>   */}
      <ProfileDetails/>
      
    </div>
  );
}
}

