import React, { Component } from "react";
import { getUserList } from "../actions/home_actions";
import "../components/home.css"
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
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      home: {

      }
    };
  }

  componentDidMount() {
    this.fetchUserList();
  }

  fetchUserList = () => {

    getUserList()
      .then((response) => {
        console.log('avssas', response)
        this.setState({
          getUserList: response.data,
        });
        this.state.getUserList = response.data;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    let userListMap = [];

    if (this.state.hasOwnProperty("getUserList")) {
      userListMap = this.state.getUserList;
    }
    const { first_name, last_name, user_type, district, divison } = this.state.home;
    return (
      <div className="page-content">
        <Container>
          <Row>
            <Col>
              <Card>
                <CardBody>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12 bg-light text-right">
                        <CardTitle style={{ textAlign: "left", fontSize: '20px', margin: '20px' }}><b>User List</b></CardTitle>
                        <button style={{ fontSize: '20px', margin: '20px' }}>Add User</button>
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <hr></hr>
                  <Table>
                    <thead>
                      <tr>
                        <th>Full Name</th>
                        <th>Last Name</th>
                        <th>User Type</th>
                        <th>Division</th>
                        <th>District</th>
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
                          <td><button>Detail View</button> </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
