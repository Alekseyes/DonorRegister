import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { loginUser } from "../../actions/authActions";
import ReactDataGrid from 'react-data-grid';
import 'bootstrap/dist/css/bootstrap.css';
import PrintForm from './PrintForm.js' ;
const columns = [
  { key: 'id', name: 'Код Донора' },
  { key: 'linkPaper', name: 'Анкета' },
  { key: 'status', name: 'Статус' },
  { key: 'print', name: 'Печать' } ];

const rows = [{id: 0, linkPaper: <Link className="nav-link" to="/register">
Открыть Анкету
</Link>, status: "Проверена",
 print:<Link className="nav-link" to="/PrintForm"> Печать</Link>},
 {id: 1,linkPaper:<Link className="nav-link" to="/register">
Открыть Анкету
</Link>, status: "Есть ошибки",
 print:<Link className="nav-link" to="/PrintForm"> Печать</Link> },
{id: 2, 
linkPaper: <Link className="nav-link" to="/register">Открыть Анкету</Link>,
status: "Не проверена",
print:<Link className="nav-link" to="/PrintForm"> Печать</Link>} ];




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
      <div>
        <ReactDataGrid
      columns={columns}
      rowGetter={i => rows[i]}
      rowsCount={4}
      minHeight={150} /> 
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
