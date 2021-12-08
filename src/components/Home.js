import React, { Component, useState, useEffect } from "react";
import { getUserList } from "../actions/home_actions";
import {
  CardImg,
  Card,
  CardBody,
  Col,
  Row,
  CardTitle,
  Alert,
  Container,
  Button,
  Table,
  Badge,
  CardFooter,
  Modal,
} from "reactstrap";
import axios from "axios";




// function Home() {

//  const [state, setstate] = useState([]);

//  axios.get('https://60f2479f6d44f300177885e6.mockapi.io/users')
//  .then(response =>{
//    console.log(response.data)
//  })
//  .catch(err =>{
//    console.log(err)
//  })

//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Home




class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {home : {

    }};
  }

  componentDidMount() {
    this.fetchUserList();
  }

  fetchUserList = () => {

    const api = "https://60f2479f6d44f300177885e6.mockapi.io/users"
    fetch(api)
    .then((response) => {
        console.log(response)
        this.setState({
          getUserList: response,
        });
        this.state.getUserList = response;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    let userListMap = [];

    if (this.state.hasOwnProperty("fetch")) {
      userListMap = this.state.fetch.data;
    }
const{first_name, last_name,user_type,district,divison} =this.state.home;
    return (
      <div>
        <Table className="table mb-0">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>District</th>
              <th>Divison</th>
              <th>Active / False</th>
              <th>Details View</th>
            </tr>
          </thead>
          <tbody>
            {userListMap.map((users) => (
              <tr key={users.id.toString()}>
                <td>{users.first_name}</td>
                <td>{users.last_name}</td>
                <td>{users.user_type}</td>
                <td>{users.division}</td>
                <td>{users.district}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Home;