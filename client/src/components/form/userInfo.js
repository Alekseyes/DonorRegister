import React, { Component } from "react";
import axios from "axios";

class userInfo extends Component
{
  constructor()
  {
    super();

    this.state =
    {
      name: "",
      surname: "",
    };
  }

  onChange = e =>
  {
    this.setState({[e.target.name]: e.target.value});
    this.setState({[e.target.surname]: e.target.value});
  };

  onSubmit = e =>
  {
    e.preventDefault();

    const userData =
    {
      name: this.state.name,
      surname: this.state.surname
    };

    console.log(this.state.name);
    console.log(this.state.surname);

    axios
      .post("/api/testForm", {userData})
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
  };

  render()
  {
    return(
      <form>
        <div class="form-group">
          <label for="exampleFormControlInput1">Имя</label>
          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Ваше имя" name="name" value={this.state.name} onChange={this.onChange}/>
        </div>
        
        <div class="form-group">
          <label for="exampleFormControlInput1">Фамилия</label>
          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Ваша Фамилия" name="surname" value={this.state.surname} onChange={this.onChange}/>
        </div>

        <button type="submit" class="btn btn-primary">Отправить</button>
      </form>
    );
  }
}

export default userInfo;
