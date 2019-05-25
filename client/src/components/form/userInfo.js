import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import classnames from "classnames";
import setUserData from "../../actions/formActions";

let aboutUser =
{ 
  firstName: "", 
  secondName: "", 
  surname: "", 
  gender: "", 
  bday: "", 
  mobilePhone: "", 
  email: "", 
  otherContacts: "", 
  adressIndex: "", 
  adressCity: "", 
  adressStreet: "", 
  adressHouse: "", 
  adressHousing: "", 
  adressApartment: "" 
 }; 
  
let health =
{
  pregnant: "", 
  pregnantCount: "", 
  blood: "", 
  allergy: "", 
  specsHeight: "", 
  specsWeight: "", 
  
  smoke: "", 
  alcohol: "", 
}

class userInfo extends Component
{
  constructor()
  {
    super();

    this.state = aboutUser;
  }

  onClick = (e) =>
  { 
    this.state.gender = e.target.value; 
    console.log(this.state.gender); 
  }

  onChange = e =>
  {
    this.setState({[e.target.name]: e.target.value});
  };

  onSubmit = e =>
  {
    e.preventDefault();

    this.props.setUserData(this.state);
  };

  render()
  {
    const { auth } = this.props;

    const form =
    <React.Fragment>
       <div className="login">
        <p>���������� � ������������:</p>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>�������:</label>
            <input
              type="text"
              placeholder="������� �������"
              name="surname"
              required="required"
              value={this.state.surname}
              onChange={this.onChange}
            />
          </div>

          {/* <div className="form-group">
            <label>���</label>
            <input
              type="text"
              placeholder="������� ���"
              name="firstName"
              required="required"
              value={this.state.firstName}
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <label>��������:</label>
            <input
              type="text"
              placeholder="������� ��������"
              name="secondName"
              required="required"
              value={this.state.secondName}
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <label>���� ��������:</label>
            <input
              type="text"
              placeholder="������� ���� ��������"
              name="birthday"
              required="required"
              value={this.state.bday}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <fieldset>
              <legend>���:</legend>
              <input
                type="radio"
                name="gender"
                required="required"
                value="�������"
                onClick={this.onClick}
              />
              <label>�������</label>

              <input
                type="radio"
                name="gender"
                required="required"
                value="�������"
                onClick={this.onClick}
              />
              <label>�������</label>
            </fieldset>
          </div>

          <div className="form-group">
            <label>��������� �������:</label>
            <input
                  type="tel"
                  name="mobilePhone"
                  required="required"
                  value={this.state.mobilePhone}
                  onChange={this.onChange}
                />
          </div>

          <div className="form-group">
            <label>����������� �����:</label>
            <input
                  type="email"
                  name="email"
                  required="required"
                  value={this.state.mobilePhone}
                  onChange={this.onChange}
                />
          </div>

          <div className="form-group">
            <label>����������� �����:</label>
            <input
                  type="email"
                  name="email"
                  required="required"
                  value={this.state.email}
                  onChange={this.onChange}
                />
          </div>

          <div className="form-group">
            <label>������ ���������� ������� �����:</label>
            <input
                  type="text"
                  name="otherContacts"
                  required="required"
                  value={this.state.otherContacts}
                  onChange={this.onChange}
                />
          </div>

          <div className="form-group">
            <label>����� (������):</label>
            <input
                  type="text"
                  name="adressIndex"
                  required="required"
                  value={this.state.adressIndex}
                  onChange={this.onChange}
                />
          </div>

          <div className="form-group">
            <label>����� (�����):</label>
            <input
                  type="text"
                  name="adressCity"
                  required="required"
                  value={this.state.adressCity}
                  onChange={this.onChange}
                />
          </div>

          <div className="form-group">
            <label>����� (�����):</label>
            <input
                  type="text"
                  name="adressStreet"
                  required="required"
                  value={this.state.adressStreet}
                  onChange={this.onChange}
                />
          </div>

          <div className="form-group">
            <label>����� (���):</label>
            <input
                  type="text"
                  name="adressHouse"
                  required="required"
                  value={this.state.adressHouse}
                  onChange={this.onChange}
                />
          </div>

          <div className="form-group">
            <label>����� (������):</label>
            <input
                  type="text"
                  name="adressHousing"
                  required="required"
                  value={this.state.adressHousing}
                  onChange={this.onChange}
                />
          </div>

          <div className="form-group">
            <label>����� (������):</label>
            <input
                  type="text"
                  name="adressApartment"
                  required="required"
                  value={this.state.adressApartment}
                  onChange={this.onChange}
                />
          </div> */}

          <input type="submit" className="btn btn-info btn-block mt-4" />
        </form>
      </div>
    </React.Fragment>

    return form;
  }
}

userInfo.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, {setUserData})(withRouter(userInfo));
