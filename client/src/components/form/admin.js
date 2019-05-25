import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { loginUser } from "../../actions/authActions";
import ReactDataGrid from 'react-data-grid';
import 'bootstrap/dist/css/bootstrap.css';

const columns = [
  { key: 'id', name: 'ID' },
  { key: 'title', name: 'Title' },
  { key: 'count', name: 'Count' } ];

const rows = [{id: 0, title: 'row1', count: 20}, {id: 1, title: 'row1', count: 40}, {id: 2, title: 'row1', count: 60}];

function HelloWorld() {
  return (<ReactDataGrid
  columns={columns}
  rowGetter={i => rows[i]}
  rowsCount={3}
  minHeight={150} />);
}




class adminForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      surname: "",
    };
  }

  


  componentDidMount() {
    const { auth, history } = this.props;
    if (auth.isAuthenticated) {
      history.push("/");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/");
    }
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();

    const userData = {
      name: this.state.name,
      password: this.state.password
    };

    this.props.loginUser(userData);
  };



  render() {
    const { errors } = this.state;
    return (
      <div><ReactDataGrid
      columns={columns}
      rowGetter={i => rows[i]}
      rowsCount={4}
      minHeight={150} />
      <Link className="nav-link" to="/register">
            Sign Up2
          </Link>
      </div>
      // <div className="login">
      //   <div className="container">
      //     <div className="row">
      //       <div className="col-md-8 m-auto">
      //         <h1 className="display-4 text-center">Log In</h1>
      //         <p className="lead text-center">Sign in to your account</p>
      //         <form onSubmit={this.onSubmit}>
      //           <div className="form-group">
      //             <input
      //               type="text"
      //               className={classnames("form-control form-control-lg", {
      //                 "is-invalid": errors.name
      //               })}
      //               placeholder="Name"
      //               name="name"
      //               value={this.state.name}
      //               onChange={this.onChange}
      //             />
      //             {/* {errors.name && (
      //               <div className="invalid-feedback">{errors.name}</div>
      //             )} */}
      //           </div>
      //           <div className="form-group">
      //             <input
      //               type="password"
      //               className={classnames("form-control form-control-lg", {
      //                 "is-invalid": errors.password
      //               })}
      //               placeholder="Password"
      //               name="password"
      //               value={this.state.password}
      //               onChange={this.onChange}
      //             />
      //             {errors.password && (
      //               <div className="invalid-feedback">{errors.password}</div>
      //             )}
      //           </div>
      //           <input type="submit" className="btn btn-info btn-block mt-4" />
      //         </form>
      //       </div>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

// userInfo.propTypes = {
//   loginUser: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired,
//   errors: PropTypes.object.isRequired
// };

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(adminForm);
