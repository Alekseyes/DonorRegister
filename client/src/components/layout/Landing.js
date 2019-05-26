import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class Landing extends Component {
  render() {
    const { auth } = this.props;
    console.log({auth});
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner">
          <div className="container">
            <div className="row">
              {(!auth.isAuthenticated) ? (
                <div className="col-md-12 text-center">
                  <h1 className="display-3 mb-4 text-center">Карельский регистр доноров костного мозга</h1>
                  <p className="lead">Стань потенциальным донором!</p>
                  <hr />
                  <Link to="/register" className="btn btn-lg btn-info mr-2">
                    Регистрация
                  </Link>
                  <Link to="/login" className="btn btn-lg btn-light">
                    Войти
                  </Link>
                </div>
              ) : (
                (auth.user.role === "admin") ? (
                  <div className="col-md-12 text-center">
                  <h1 className="display-3 mb-4 text-center">{`Здравтсвуйте,  ${auth.user.name} `}</h1>
                  <h1 className="display-3 mb-4"> </h1>
                  <Link to="/admin" className="btn btn-lg btn-light">
                    Вывести список доноров
                  </Link>
                </div>

                ) : (
                  <div className="col-md-12 text-center">
                  <h1 className="display-3 mb-4 text-center">{`Здравствуйте,  ${auth.user.name} `}</h1>
                  <Link to="/form" className="btn btn-lg btn-light">
                    Заполнить анкету
                  </Link>
                </div>

                ) // перенаправление
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
