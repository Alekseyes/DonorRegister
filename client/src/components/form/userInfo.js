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
  surname: "", 
  firstName: "", 
  secondName: "", 
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
  adressApartment: "",
  wasPregnant: "",// была ли беременность?
  numberPregnants: "", // количество беременостей?
  bloodType: "", // группа крови и резус-фактор?
  wasBloodTransfusion: "", //было ли переливание?
  whatPoured: "", // что переливалось?
  transfusionYear: "", // год переливания
  numberTransfusion: "", // количество переливаний
  haveAllergies: "", // есть ли аллергия?
  whichAllergies: "", // какая аллергия?
  height: "", // рост
  weigth: "", // вес
  isSmoking: "", // курите ли вы?
  isDrinking: "", // регулярно ли употребляете алкоголь?
  isBloodDonor: "", // были ли донором крови?
  isBloodDonorCancel: "",  //отстранение от донорства
  reasonDonorCancel: "", // причина отстранения донорства крови?
  takePills: "", // принимаете таблетки?
  whatPills: "", // если да, то такие?
  wasSurgeryLastYear: "", // была ли хирургия в последний год?
  whatSurgery: "", // какая хирургия была?
  wasFever: "", // была ли лихорадка?
  wasAccident: "", // была ли авария?
  wasCancer: "", // были ли опухоли?
  wasDiabet: "", // есть диабет?
  wasAsthma: "", // была астма?
  highPressure: "", // высокое кровяное давление?
  heartDesease: "", // болезни сердца?
  vascularDesease: "", // болезни сосудов?
  cougulationDesease: "", // кровь свертывается?
  hereditaryBloodDesease: "", // наследственные заболевания крови?
  severKidneyDesease: "", // тяжелые заболевания почек?
  thyroidDesease: "", // заболевания щитовидной железы?
  autoimmuneDesease: "", // аутоимунные болезни?
  nervousSystemDesease: "", // болезни нервной системы ?
  mentalProblam: "",// Психические проблемы
  hivInfection: "", // Вич-инфекция?
  viralHepatitis: "", // Вирусный геппатит ?
  syphilis: "", // Сифилис?
  tuberculosis: "", // Туберкулез?
  infectiousDesease: "", // Инфекционные болезни?
  healPituitary: "", // Лечились ли вы гормонами гипофиза?
  tissueTransplantation: "", // Трансплантация тканей?
  relativesLeukemia: "", // Болели ли родственники лейкемией?
  relativesCancer: "", // Болели ли родственники раком?
  relativeCreutzfeld: "", // Болели ли родственники Крейтцфельдом?
  knowHepatitHIV: "", // знакомы с Гепатитом, ВИЧ?
  clearInformation: "", // понятна информация выше?
  dangerHepatitHIV: "", // в группе риска Гепатит или ВИЧ?
  wasGeneralAnesthesia: "", // была общая анастезия?
  wasAnasthesiaComplications: "", // были ли осложнения от анастезии?
  whichAnasthesiaComplications: "", // какие осложнения?
  siblingsAnasthesiaComplications: "", // какие осложнения от анастезии были у родственников?
  concerns: "", // есть ли опасения о возможность стать донором?
};

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

    this.props.setUserData({...this.state, auth: this.props.auth}); // ??
  };

  render()
  {
    const { auth } = this.props;

    const form =
    <React.Fragment>
      <div className="login">
        <p>Информация о пользователе:</p>
        <form onSubmit={this.onSubmit}>

          {/* Основные данные о пользователе */}

          <div className="form-group">
            <label>Фамилия:</label>
            <input
              type="text"
              placeholder="Введите фамилию"
              name="surname"
              required
              value={this.state.surname}
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <label>Имя</label>
            <input
              type="text"
              placeholder="Введите имя"
              name="firstName"
              required
              value={this.state.firstName}
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <label>Отчество:</label>
            <input
              type="text"
              placeholder="Введите отчество"
              name="secondName"
              required
              value={this.state.secondName}
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <label>Дата рождения:</label>
            <input
              type="text"
              placeholder="Введите дату рождения"
              name="bday"
              required
              value={this.state.bday}
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <fieldset>
              <legend>Пол:</legend>
              <input
                type="radio"
                name="gender"
                required
                value="мужской"
                onClick={this.onClick}
              />
              <label>Мужской</label>

              <input
                type="radio"
                name="gender"
                required
                value="женский"
                onClick={this.onClick}
              />
              <label>Женский</label>
            </fieldset>
          </div>

          <div className="form-group">
            <label>Мобильный телефон:</label>
            <input
              type="text"
              name="mobilePhone"
              required
              value={this.state.mobilePhone}
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <label>Электронная почта:</label>
            <input
              type="text"
              name="email"
              required
              value={this.state.email}
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <label>Другие актуальные способы связи:</label>
            <input
              type="text"
              name="otherContacts"
              required
              value={this.state.otherContacts}
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <label>Почтовый индекс:</label>
            <input
              type="text"
              name="adressIndex"
              required
              value={this.state.adressIndex}
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <label>Город:</label>
            <input
              type="text"
              name="adressCity"
              required
              value={this.state.adressCity}
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <label>Улица:</label>
            <input
              type="text"
              name="adressStreet"
              required
              value={this.state.adressStreet}
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <label>Дом:</label>
            <input
              type="text"
              name="adressHouse"
              required
              value={this.state.adressHouse}
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <label>Корпус:</label>
            <input
              type="text"
              name="adressHousing"
              required
              value={this.state.adressHousing}
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <label>Квартира:</label>
            <input
              type="text"
              name="adressApartment"
              required
              value={this.state.adressApartment}
              onChange={this.onChange}
            />
          </div>

          {/* Данные о состоянии здоровья */}

          <div className="form-group">
            <div>
              <p>Были ли у Вас беременности</p>
              <input
                type="radio"
                name="gender"
                required
                value="да"
                onClick={this.onClick}
              />
              <label>Да</label>

              <input
                type="radio"
                name="gender"
                required
                value="нет"
                onClick={this.onClick}
              />
              <label>Нет</label>

              <p>Сколько раз?</p>
              <input
                type="text"
                name="numberPregnants"
                required
                value={this.state.numberPregnants}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Группа крови и резус фактор</label>
            <input
              type="text"
              placeholder=""
              name="bloodType"
              required
              value={this.state.bloodType}
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <div>
              <p>Проводилось ли Вам переливание крови</p>
              <input
                type="radio"
                name="wasBloodTransfusion"
                required
                value="да"
                onClick={this.onClick}
              />
              <label>Да</label>

              <input
                type="radio"
                name="wasBloodTransfusion"
                required
                value="нет"
                onClick={this.onClick}
              />
              <label>Нет</label>

              <p>Что переливалось?</p>
              <input
                type="text"
                name="whatPoured"
                required
                value={this.state.whatPoured}
              />
              <p>Когда (год)?</p>
              <input
                type="text"
                name="transfusionYear"
                required
                value={this.state.transfusionYear}
              />
              <p>Сколько раз?</p>
              <input
                type="text"
                name="numberTransfusion"
                required
                value={this.state.numberTransfusion}
              />
            </div>
          </div>

          <div className="form-group">
            <div>
              <p>Есть ли у Вас аллергия?</p>
              <input
                type="radio"
                name="haveAllergies"
                required
                value="да"
                onClick={this.onClick}
              />
              <label>Да</label>

              <input
                type="radio"
                name="haveAllergies"
                required
                value="нет"
                onClick={this.onClick}
              />
              <label>Нет</label>

              <p>На какие аллергены?</p>
              <input
                type="text"
                name="whichAllergies"
                required
                value={this.state.whichAllergies}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Ваш рост (см):</label>
            <input
              type="text"
              placeholder=""
              name="height"
              required
              value={this.state.height}
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <label>Ваш вес (кг):</label>
            <input
              type="text"
              placeholder=""
              name="weigth"
              required
              value={this.state.weigth}
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <div>
              <p>Курите ли Вы?</p>
              <input
                type="radio"
                name="isSmoking"
                required
                value="да"
                onClick={this.onClick}
              />
              <label>Да</label>

              <input
                type="radio"
                name="isSmoking"
                required
                value="нет"
                onClick={this.onClick}
              />
              <label>Нет</label>
            </div>
          </div>

          <div className="form-group">
            <div>
              <p>Регулярно ли Вы употребляете алкоголь?</p>
              <input
                type="radio"
                name="isDrinking"
                required
                value="да"
                onClick={this.onClick}
              />
              <label>Да</label>

              <input
                type="radio"
                name="isDrinking"
                required
                value="нет"
                onClick={this.onClick}
              />
              <label>Нет</label>
            </div>
          </div>

          <div className="form-group">
            <div>
              <p>Вы когда-нибудь были донором крови?</p>
              <input
                type="radio"
                name="isBloodDonor"
                required
                value="да"
                onClick={this.onClick}
              />
              <label>Да</label>

              <input
                type="radio"
                name="isBloodDonor"
                required
                value="нет"
                onClick={this.onClick}
              />
              <label>Нет</label>
            </div>
          </div>

          <div className="form-group">
            <div>
              <p>Вас когда-нибудь отстраняли от донорства?</p>
              <input
                type="radio"
                name="isBloodDonorCancel"
                required
                value="да"
                onClick={this.onClick}
              />
              <label>Да</label>

              <input
                type="radio"
                name="isBloodDonorCancel"
                required
                value="нет"
                onClick={this.onClick}
              />
              <label>Нет</label>

              <p>Причина отстранения:</p>
              <input
                type="text"
                name="reasonDonorCancel"
                required
                value={this.state.reasonDonorCancel}
              />
            </div>
          </div>

          <div className="form-group">
            <div>
              <p>Принимаете ли Вы на данный моммент какие-нибудь медицинские препараты?</p>
              <input
                type="radio"
                name="takePills"
                required
                value="да"
                onClick={this.onClick}
              />
              <label>Да</label>

              <input
                type="radio"
                name="takePills"
                required
                value="нет"
                onClick={this.onClick}
              />
              <label>Нет</label>

              <p>Какие?</p>
              <input
                type="text"
                name="whatPills"
                required
                value={this.state.whatPills}
              />
            </div>
          </div>

          <div className="form-group">
            <div>
              <p>Проводили ли Вам хирургические вмешательства в течение последнего года?</p>
              <input
                type="radio"
                name="wasSurgeryLastYear"
                required
                value="да"
                onClick={this.onClick}
              />
              <label>Да</label>

              <input
                type="radio"
                name="wasSurgeryLastYear"
                required
                value="нет"
                onClick={this.onClick}
              />
              <label>Нет</label>

              <p>Какие?</p>
              <input
                type="text"
                name="whatSurgery"
                required
                value={this.state.whatSurgery}
              />
            </div>
          </div>

          <div className="form-group">
            <div>
              <p>Были ли у Вас необъяснимые лихорадки?</p>
              <input
                type="radio"
                name="wasFever"
                required
                value="да"
                onClick={this.onClick}
              />
              <label>Да</label>

              <input
                type="radio"
                name="wasFever"
                required
                value="нет"
                onClick={this.onClick}
              />
              <label>Нет</label>
            </div>
          </div>

          <div className="form-group">
            <div>
              <p>Были ли Вы в серьезной аварии?</p>
              <input
                type="radio"
                name="wasAccident"
                required
                value="да"
                onClick={this.onClick}
              />
              <label>Да</label>

              <input
                type="radio"
                name="wasAccident"
                required
                value="нет"
                onClick={this.onClick}
              />
              <label>Нет</label>
            </div>
          </div>
          

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
