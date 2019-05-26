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
    type: String
  },
  numberPregnants: { // количество беременостей?
    type: Number
  },
  bloodType: { // группа крови и резус-фактор?
    type: String
  },
  wasBloodTransfusion: { //было ли переливание?
    type: String
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
    type: String
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
    type: String
  },
  isDrinking: { // регулярно ли употребляете алкоголь?
    type: String
  },
  isBloodDonor: { // были ли донором крови?
    type: String
  },
  isBloodDonorCancel: { // были ли донором крови?
    type: String
  },
  reasonDonorCancel: { // причина донорства крови?
    type: String
  },
  takePills: { // принимаете таблетки?
    type: String
  },
  whatPills: { // если да, то такие?
    type: String
  },
  wasSurgeryLastYear: { // была ли хирургия в последний год?
    type: String
  },
  whatSurgery: { // какая хирургия была?
    type: String
  },
  wasFever: { // была ли лихорадка?
    type: String
  },
  wasAccident: { // была ли авария?
    type: String
  },
  wasCancer: { // были ли опухоли?
    type: String
  },
  wasDiabet: { // есть диабет?
    type: String
  },
  wasAsthma: { // была астма?
    type: String
  },
  highPressure: { // высокое кровяное давление?
    type: String
  },
  heartDesease: { // болезни сердца?
    type: String
  },
  vascularDesease: { // болезни сосудов?
    type: String
  },
  cougulationDesease: { // кровь свертывается?
    type: String
  },
  hereditaryBloodDesease: { // наследственные заболевания крови?
    type: String
  },
  severKidneyDesease: { // тяжелые заболевания почек?
    type: String
  },
  thyroidDesease: { // заболевания щитовидной железы?
    type: String
  },
  autoimmuneDesease: { // аутоимунные болезни?
    type: String
  },
  nervousSystemDesease: { // болезни нервной системы ?
    type: String
  },
  mentalProblam: { // Психические проблемы
    type: String
  },
  hivInfection: { // Вич-инфекция?
    type: String
  },
  viralHepatitis: { // Вирусный геппатит ?
    type: String
  },
  syphilis: { // Сифилис?
    type: String
  },
  tuberculosis: { // Туберкулез?
    type: String
  },
  infectiousDesease: { // Инфекционные болезни?
    type: String
  },
  healPituitary: { // Лечились ли вы гормонами гипофиза?
    type: String
  },
  tissueTransplantation: { // Трансплантация тканей?
    type: String
  },
  relativesLeukemia: { // Болели ли родственники лейкемией?
    type: String
  },
  relativesCancer: { // Болели ли родственники раком?
    type: String
  },
  relativeCreutzfeld: { // Болели ли родственники Крейтцфельдом?
    type: String
  },
  knowHepatitHIV: { // знакомы с Гепатитом, ВИЧ?
    type: String
  },
  clearInformation: { // понятна информация выше?
    type: String
  },
  dangerHepatitHIV: { // в группе риска Гепатит или ВИЧ?
    type: String
  },
  wasGeneralAnesthesia: { // была общая анастезия?
    type: String
  },
  wasAnasthesiaComplications: { // были ли осложнения от анастезии?
    type: String
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
