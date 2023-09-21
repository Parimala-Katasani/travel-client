import { hover } from "@testing-library/user-event/dist/hover";
import axios from "axios";
import React, { Component } from "react";
import './Review.css'


export class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      review: "",
      rating:"",
      list: [],
    };
  }
  addtodb = () => {
    const { name, review,rating } = this.state;
    axios
      .post(`http://localhost:3003/reviews`, {
        name: name,
        review: review,
        rating: rating
      })
      .then((res) => {
        console.log(res);
        alert("Your review is posted!");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  componentDidMount() {
    axios
      .get("http://localhost:3003/reviews")
      .then((res) => {
        this.setState({ list: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    const { name, review, rating} = this.state;

    return (
        <>
         
            <h2 id="rev-h">Tourist Reviews</h2>
            <div className="row">
            <div className="column">
              <table className="styled-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Review</th>
                    <th>Rating</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.list.map((x) => (
                    <tr>
                      <td>{x.name}</td>
                      <td>{x.review}</td>
                      <td>{x.rating}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            
            <div className="column">
              <table className="styled-table2">
                <tr><td>
              <input
                type="text2"
                value={name}
                placeholder="Name"
                onChange={(e) => this.setState({ name: e.target.value })}
              /></td></tr>
              <tr><td>
              <input
                type="text2"
                value={review}
                placeholder="Write review here"
                onChange={(e) => this.setState({ review: e.target.value })}
              />
              </td></tr>
              <tr><td>
              <select value={rating} placeholder="Rating" onChange={(e)=> this.setState({rating:e.target.value})}>
                <option value = "⭐">1 star</option>
                <option value = "⭐⭐">2 star</option>
                <option value = "⭐⭐⭐">3 star</option>
                <option value = "⭐⭐⭐⭐">4 star</option>
                <option value = "⭐⭐⭐⭐⭐">5 star</option>
          </select>
              </td></tr>
              <tr><td>
              <button onClick={this.addtodb} id="btn-sub">Submit</button>
              </td></tr>
              </table>
            </div>
          </div>
        </>
    );
  }
}

export default Review;


