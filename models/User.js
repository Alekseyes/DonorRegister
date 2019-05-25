const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: "user"
  },
  surname: { // фамлия
    type: String
  }, 
  firstName: { // имя
    type: String
  },  
  secondName: { // отчество
    type: String
  },  
  gender: { // пол
    type: String
  },  
  bday: { // день рождения
    type: String
  }, 
  mobilePhone: { // телефон
    type: String
  },  
  email: {
    type: String
  }, 
  otherContacts: { // другие контакты
    type: String
  },  
  adressIndex: { // индекс проживания
    type: String
  }, 
  adressCity: { // город
    type: String
  },  
  adressStreet: { // улица
    type: String
  },  
  adressHouse: { // дом
    type: String
  },  
  adressHousing: { //  корпус
    type: String
  },  
  adressApartment: { // квартира
    type: String
  },   
  wasPregnant: { // была ли беременность?
    type: Boolean
  },
  numberPregnants: { // количество беременостей?
    type: Number
  },
  bloodType: { // группа крови и резус-фактор?
    type: String
  },
  wasBloodTransfusion: { //было ли переливание?
    type: Boolean
  },
  whatPoured: { // что переливалось?
    type: String
  },
  transfusionYear: { // год переливания
    type: Number
  },
  numberTransfusion: { // количество переливаний
    type: Number
  },
  haveAllergies: { // есть ли аллергия?
    type: Boolean
  },
  whichAllergies: { // какая аллергия?
    type: String
  },
  height: { // рост
    type: Number
  },
  weigth: { // вес
    type: Number
  },
  isSmoking: { // курите ли вы?
    type: Boolean
  },
  isDrinking: { // регулярно ли употребляете алкоголь?
    type: Boolean
  },
  isBloodDonor: { // были ли донором крови?
    type: Boolean
  },
  reasonDonor: { // причина донорства крови?
    type: String
  },
  takePills: { // принимаете таблетки?
    type: Boolean
  },
  whatPills: { // если да, то такие?
    type: String
  },
  wasSurgeryLastYear: { // была ли хирургия в последний год?
    type: Boolean
  },
  whatSurgery: { // какая хирургия была?
    type: String
  },
  wasFever: { // была ли лихорадка?
    type: Boolean
  },
  wasAccident: { // была ли авария?
    type: Boolean
  },
  wasCancer: { // были ли опухоли?
    type: Boolean
  },
  wasDiabet: { // есть диабет?
    type: Boolean
  },
  wasAsthma: { // была астма?
    type: Boolean
  },
  highPressure: { // высокое кровяное давление?
    type: Boolean
  },
  heartDesease: { // болезни сердца?
    type: Boolean
  },
  vascularDesease: { // болезни сосудов?
    type: Boolean
  },
  cougulationDesease: { // кровь свертывается?
    type: Boolean
  },
  hereditaryBloodDesease: { // наследственные заболевания крови?
    type: Boolean
  },
  severKidneyDesease: { // тяжелые заболевания почек?
    type: Boolean
  },
  thyroidDesease: { // заболевания щитовидной железы?
    type: Boolean
  },
  autoimmuneDesease: { // аутоимунные болезни?
    type: Boolean
  },
  nervousSystemDesease: { // болезни нервной системы ?
    type: Boolean
  },
  mentalProblam: { // Психические проблемы
    type: Boolean
  },
  hivInfection: { // Вич-инфекция?
    type: Boolean
  },
  viralHepatitis: { // Вирусный геппатит ?
    type: Boolean
  },
  syphilis: { // Сифилис?
    type: Boolean
  },
  tuberculosis: { // Туберкулез?
    type: Boolean
  },
  infectiousDesease: { // Инфекционные болезни?
    type: Boolean
  },
  healPituitary: { // Лечились ли вы гормонами гипофиза?
    type: Boolean
  },
  tissueTransplantation: { // Трансплантация тканей?
    type: Boolean
  },
  relativesLeukemia: { // Болели ли родственники лейкемией?
    type: Boolean
  },
  relativesCancer: { // Болели ли родственники раком?
    type: Boolean
  },
  relativeCreutzfeld: { // Болели ли родственники Крейтцфельдом?
    type: Boolean
  },
  knowHepatitHIV: { // знакомы с Гепатитом, ВИЧ?
    type: Boolean
  },
  clearInformation: { // понятна информация выше?
    type: Boolean
  },
  dangerHepatitHIV: { // в группе риска Гепатит или ВИЧ?
    type: Boolean
  },
  wasGeneralAnesthesia: { // была общая анастезия?
    type: Boolean
  },
  wasAnasthesiaComplications: { // были ли осложнения от анастезии?
    type: Boolean
  },
  whichAnasthesiaComplications: { // какие осложнения?
    type: String
  },
  siblingsAnasthesiaComplications: { // какие осложнения от анастезии были у родственников?
    type: String
  },
  concerns: { // есть ли опасения о возможность стать донором?
    type: String
  },
});
module.exports = User = mongoose.model("users", UserSchema);
