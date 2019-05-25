import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class Landing extends Component {
  render() {
    const { auth } = this.props;
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner">
          <div className="container">
            <div className="row">
              {(!auth.isAuthenticated) ? (
                <div className="col-md-12 text-center">
                  <h1 className="display-3 mb-4">WebWeekend+</h1>
                  <p className="lead"> Create your own application</p>
                  <hr />
                  <Link to="/register" className="btn btn-lg btn-info mr-2">
                    Sign Up
                  </Link>
                  <Link to="/login" className="btn btn-lg btn-light">
                    Login
                  </Link>
                </div>
              ) : (
                (auth.user.role === "user") ? (
                  <div className="col-md-12 text-center">
                  <h1 className="display-3 mb-4">{`Здравтсвуйте,  ${auth.user.name} `}</h1>
                  <h1 className="display-3 mb-4"> </h1>
                  <Link to="/form" className="btn btn-lg btn-light">
                    Заполнить анкету
                  </Link>
                </div>

                ) : null // перенаправление
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(withRouter(Landing));
