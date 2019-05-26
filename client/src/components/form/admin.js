import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import classnames from "classnames";
//import adminActions from "../../actions/adminActions";


class adminInfo extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      users: [],
      user: {},
      isList: true
    };
  }

  componentDidMount(){
    axios
      .get("/api/admin")
      .then(res => {
        this.setState({users: res.data.filter(x => x.role === "user")});
      })
  }

  onClick(uname){
    this.setState({isList: false});
    
    axios
      .get("/api/admin?uname="+uname)
      .then(res => {
        this.setState({user: res.data});
      })
  }

  render() {
    const { auth } = this.props;
    
    let userList = this.state.users.map(x => <li onClick={() => this.onClick(x.name)} key={x._id}>{x.name}, {x.surname} {x.firstName} {x.secondName}</li>)
    return (
      <div hidden = {!this.state.isList} className="listAdmin">
        <ul>{userList}</ul>
      </div>
    );
  }
}

adminInfo.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, {})(withRouter(adminInfo));
