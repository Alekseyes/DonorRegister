import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import classnames from "classnames";
import "../../Admin.css";


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
    const { user } = this.state;
    const t = '\u00A0'.repeat(4);

    let userList = this.state.users.map(x => <li onClick={() => this.onClick(x.name)} key={x._id}>{x.name}, {x.surname} {x.firstName} {x.secondName}</li>)
    return (
      <div>
        <div hidden = {!this.state.isList} className="listAdmin">
          <ul>{userList}</ul>
        </div>
        <div hidden = {this.state.isList} className="userAdmin">
          <div className="page-break">
            <h1 className="text-center">КАРЕЛЬСКИЙ РЕГИСТР НЕРОДСТВЕННЫХ ДОНОРОВ ГЕМОПОЭТИЧЕСКИХ СТВОЛОВЫХ КЛЕТОК<br/>
            (г. Петрозаводск, Республика Карелия, Российская Федерация)</h1>
            <p><b>Код донора</b>: _______________________________</p>
            <h3 className="text-center">СОГЛАШЕНИЕ О ВСТУПЛЕНИИ В РЕГИСТР ДОНОРОВ ГЕМОПОЭТИЧЕСКИХ СТВОЛОВЫХ КЛЕТОК</h3>
            <p>Этим соглашением я выражаю свою готовность добровольно вступить в члены Карельского Регистра потенциальных доноров гемопоэтических стволовых клеток. Я выражаю свое согласие на добровольную и безвозмездную сдачу гемопоэтических стволовых клеток для нужд неродственных мне пациентов. Я ознакомлен со всей доступной мне информацией, касающейся добровольной сдачи гемопоэтических стволовых клеток. Кроме того, я поставлен в известность о целях и способах проведения забора гемопоэтических стволовых клеток, а также возникающем при этом риске. Я знаю, что на все мои вопросы, касающиеся донорства, которые возникнут в будущем, я получу ответы от сотрудников Регистра. Я согласен с тем, что мои персональные данные, приведенные ниже, а также результаты исследования донорской ткани будут внесены в электронную базу данных при условии соблюдения их защиты. Кроме того, я согласен сообщить необходимую информацию о моем здоровье, которой я располагаю. Я знаю, что вся информация, касающаяся меня и моего здоровья, является конфиденциальной, и будет храниться в Регистре в закодированном виде. К работе с данной информацией будет допущен узкий круг специалистов Регистра. Я сознаю, что в случае изменения моей персональной информации (место жительства, контактные телефоны, е-mail) я должен буду известить об этом сотрудников Регистра с тем, чтобы в случае необходимости они могли обеспечить связь со мной. Я даю согласие на передачу моих данных (HLA-генотип, дата рождения, пол) в Центры поиска доноров гемопоэтических стволовых клеток. Использование и передача третьему лицу любой информации, касающейся меня, без моего согласия категорически запрещена. Я сознаю, что мое согласие стать потенциальным донором является первым этапом донорства гемопоэтических клеток. Я согласен с тем, что у меня будет взято 2-4 мл крови для   молекулярно-биологического анализа параметров совместимости (определение HLA-генотипа) и заморожено некоторое количество пробы крови с целью дальнейшего тестирования. Я согласен с тем, что у меня взята проба крови на определение у меня маркеров цитомегаловируса (CMV), группы крови и иных необходимых тестов. Кроме того, я подтверждаю свое согласие на необходимые дальнейшие исследования. Образец крови для выполнения тестов будет забран в стерильных условиях путем пункции иглой вены на руке. Альтернативным способом забора материала для тестирования является взятие мазков из полости рта, и я даю согласие на такой забор в случае, если мне он будет предложен. Я согласен с тем, что результаты моих тестов будут переданы мне Регистром только после получения Регистром специального запроса от моего врача. Если мой HLA-генотип будет совместим с HLA-генотипом пациента, нуждающегося в трансплантации гемопоэтических клеток, я буду информирован об этом, и только после моего согласия может быть решен вопрос об использовании моих гемопоэтических клеток в качестве трансплантанта. Я оставляю за собой право в любой момент в одностороннем порядке расторгнуть действие данного соглашения. В случае моего решения расторгнуть Соглашения я должен буду известить об этом сотрудников Регистра в письменной форме с использованием одного из следующих способов: электронной почтой, обычной почтой, факсимильной связью. После расторжения Соглашения по моей просьбе и по моему желанию в моем присутствии специалисты Регистра должны уничтожить всю имеющуюся информацию обо мне.</p>
            <p><b>Фамилия:</b> <u>{user.surname}</u>{t}<b>Имя:</b> <u>{user.firstName}</u></p>
            <p><b>Отчество:</b> <u>{user.secondName}</u></p>
            <p><b>Дата рождения:</b> <u>{user.bday}</u>{t}<b>Пол:</b> <u>{(user.gender === "да")?'мужской':'женский'}</u></p>
            <p><b>Телефон:</b> <u>{user.mobilePhone}</u></p>
            <p><b>E.mail:</b> <u>{user.email}</u></p>
            <p><b>Адрес: индекс:</b> <u>{user.adressIndex}</u>{t}<b>г.:</b> <u>{user.adressCity}</u></p>
            <p><b>Улица:</b> <u>{user.adressStreet}</u>{t}<b>дом:</b> <u>{user.adressHouse}</u>{t}<b>корпус:</b> <u>{user.adressStreet}</u>{t}<b>кв.:</b> <u>{user.adressHouse}</u></p>
            <p>{t}</p>
            <p><b>Дата</b>: _______________________________{t}<b>Подпись</b>:_______________________________</p>
            <p>{t}</p>
            <p><b>Соглашение принял сотрудник Регистра (ФИО):</b>_______________________________</p>
            <p>{t}</p>
            <p><b>Дата</b>: _______________________________{t}<b>Подпись</b>:_______________________________</p>
          </div>
          <div className="page-break">
            <p><b>Код донора</b>: _______________________________</p>
            <h1 className="text-center">АНКЕТА  СОСТОЯНИЯ  ЗДОРОВЬЯ.</h1>
            <p>Мы применяем эту анкету, чтобы определить Вашу пригодность к донорству в соответствии с медицинскими рекомендациями, защищающими Ваше здоровье как потенциального донора, а также здоровье пациента. Вопросы посвящены многим факторам, которые могут не позволить человеку вступить в Регистр с медицинской точки зрения. Перечисленные ниже вопросы не включают все ситуации, которые запрещают человеку донорство, таким образом, если у вас есть спорный вопрос или сомнения по поводу Вашей пригодности, обратитесь к персоналу Регистра.</p>
            <p>Просим Вас подробно и добросовестно заполнить следующую анкету:</p>
            <p><b>1. Общие вопросы</b></p>
            <p>Были ли у Вас беременности?**{t}<b>{user.wasPregnant}</b></p>
            <p>Если «да», то сколько раз?{t}<b>{user.numberPregnants}</b></p>
            <p>Ваши группа крови и резус фактор (если известно)?{t}<b>{user.bloodType}</b></p>
            <p>Проводилось ли Вам переливание крови?**{t}<b>{user.wasBloodTransfusion}</b></p>
            <p>если «да»: что переливалось?{t}<b>{user.whatPoured}</b></p>
            <p>если «да»: когда (год)?{t}<b>{user.transfusionYear}</b></p>
            <p>если «да»: сколько раз?{t}<b>{user.numberTransfusion}</b></p>
            <p>Есть ли у Вас аллергия?{t}<b>{user.haveAllergies}</b></p>
            <p>если «да», то на какие аллергены?{t}<b>{user.whichAllergies}</b></p>
            <p>Ваш рост (см)?{t}<b>{user.height}</b></p>
            <p>Ваш вес (кг)?{t}<b>{user.weigth}</b></p>
            <p>Курите ли Вы? **{t}<b>{user.isSmoking}</b></p>
            <p>Регулярно ли Вы употребляете алкоголь?{t}<b>{user.isDrinking}</b></p>
            <p>Вы когда-нибудь были донором крови?**{t}<b>{user.isBloodDonor}</b></p>
            <p>Вас когда-нибудь отстраняли от донорства?{t}<b>{user.isBloodDonorCancel}</b></p>
            <p>Если «да», то какова была причина?{t}<b>{user.reasonDonorCancel}</b></p>
            <p>Принимаете ли Вы на данный момент какие-либо медицинские препараты?{t}<b>{user.takePills}</b></p>
            <p>Если «да», то какие медикаменты?{t}<b>{user.whatPills}</b></p>
            <p>Проводили ли Вам хирургические вмешательства в течение последнего года?{t}<b>{user.wasSurgeryLastYear}</b></p>
            <p>Если «да», то какие?{t}<b>{user.whatSurgery}</b></p>
            <p>Были ли у Вас необъяснимые лихорадки?{t}<b>{user.wasFever}</b></p>
            <p>Попадали ли Вы в серьезные аварии?{t}<b>{user.wasAccident}</b></p>
            <p>Проводили ли Вам какую-либо вакцинацию недавно?{t}<b>(программистам дописать)</b></p>
            <p>{t}</p>
            <p><b>2. Страдаете ли Вы сейчас или страдали ли Вы ранее следующими заболеваниями:</b></p>
            <p>Опухоли (в том числе излеченные)?{t}<b>{user.wasCancer}</b></p>
            <p>Сахарный диабет, требующий лекарственного лечения?{t}<b>{user.wasDiabet}</b></p>
            <p>Бронхиальная астма или хронический обструктивный бронхит, требующие постоянного лечения?{t}<b>{user.wasAsthma}</b></p>
            <p>Высокое кровяное (артериальное) давление?{t}<b>{user.highPressure}</b></p>
            <p>Болезни сердца: ишемическая болезнь сердца, стенокардия, аритмия, в прошлом перенесенный инфаркт миокарда?{t}<b>{user.heartDesease}</b></p>
            <p>Болезни кровеносных сосудов: перенесенный в прошлом инсульт, артериальные тромбозы, повторяющиеся венозные тромбозы?{t}<b>{user.vascularDesease}</b></p>
            <p>Нарушения свертывающей системы крови: повышенная кровоточивость или повышенная свертываемость крови?{t}<b>{user.cougulationDesease}</b></p>
            <p>Наследственные заболевания крови?{t}<b>{user.hereditaryBloodDesease}</b></p>
            <p>Тяжелые заболевания почек?{t}<b>{user.severKidneyDesease}</b></p>
            <p>Болезни щитовидной железы?{t}<b>{user.thyroidDesease}</b></p>
            <p>Аутоиммунные болезни: болезнь Крона, ревматоидный артрит, рассеянный склероз, системная красная волчанка и другие?{t}<b>{user.autoimmuneDesease}</b></p>
            <p>Болезни нервной системы (судороги, проблемы с межпозвоночными дисками, в частности смещенный или поврежденный диск)?{t}<b>{user.nervousSystemDesease}</b></p>
            <p>Психические  проблемы (депрессия или другие состояния)?{t}<b>{user.mentalProblam}</b></p>
            <p>ВИЧ-инфекция (СПИД)?{t}<b>{user.hivInfection}</b></p>
            <p>Острый или хронический вирусный гепатит?{t}<b>{user.viralHepatitis}</b></p>
            <p>Сифилис?{t}<b>{user.syphilis}</b></p>
            <p>Туберкулез?{t}<b>{user.tuberculosis}</b></p>
            <p>Инфекционные болезни: лепра, бабезиоз, трипаносомоз (болезнь Шагаса), энцефалит, малярия, бруцеллез, риккетсиоз, туляремия?{t}<b>{user.infectiousDesease}</b></p>
            <p>Лечились ли Вы гормонами гипофиза, в частности, гормонами роста?{t}<b>{user.healPituitary}</b></p>
            <p>Производилась ли Вам трансплантация тканей или органов?{t}<b>{user.tissueTransplantation}</b></p>
            <p>Болел ли кто-то из Ваших ближайших родственников лейкемией (лейкозом)? **{t}<b>{user.relativesLeukemia}</b></p>
            <p>Болел ли кто-то из Ваших ближайших родственников раком или другими злокачественными новообразованиями? **{t}<b>{user.relativesCancer}</b></p>
            <p>Была ли среди членов Вашей семьи болезнь Крейтцфельда – Якоба?{t}<b>{user.relativeCreutzfeld}</b></p>
            <p>{t}</p>
            <p><b>3. Вопросы, относящиеся к риску инфекций ВИЧ, гепатитов В и С:</b></p>
            <p>1. Знакомы ли Вы с информацией по проблеме СПИДа (ВИЧ) и гепатита?**{t}<b>{user.knowHepatitHIV}</b></p>
            <p>2. Понятна ли Вам эта информация? **{t}<b>{user.clearInformation}</b></p>
            <p>3. Были ли Вы подвержены ранее или подвержены сейчас возможности заражения ВИЧ, гепатитом В или С через контакт с членом семьи или на работе?{t}<b>{user.dangerHepatitHIV}</b></p>
            <p>{t}</p>
            <p>Если Вы подвержены риску ВИЧ-инфекции или гепатитов В и С, Вам не разрешат стать донором на какой-то период времени. Сюда включены также сексуальные и другие тесные контакты с человеком, зараженным этой инфекционной болезнью. Следующие условия могут не позволить Вам стать донором:</p>
            <p>(а) употребление наркотиков;</p>
            <p>(б) сексуальные контакты в обмен на получение денег или наркотиков;</p>
            <p>(в) гомосексуальные контакты для мужчин;</p>
            <p>(г) для женщин: сексуальные отношения с мужчиной, у которого в прошлом были гомосексуальные контакты;</p>
            <p>(д) сексуальный контакт за последние 12 месяцев с партнером, который:</p>
            <p>{t} - имеет положительный статус ВИЧ или болеет гепатитом В или С;</p>
            <p>{t} - принимал или принимает наркотики;</p>
            <p>{t} - имел сексуальные контакты в обмен на получение денег или наркотиков</p>
            <p>{t}</p>
            <p><b>4. Вопросы, относящиеся к рискам анестезии:</b></p>
            <p>1. Вам когда-нибудь делали общую анестезию?**{t}<b>{user.wasGeneralAnesthesia}</b></p>
            <p>2. Если «да», были ли у Вас какие-либо осложнения или реакции?{t}<b>{user.wasAnasthesiaComplications}</b></p>
            <p>{t}Если «да», то укажите какие:{t}<b>{user.whichAnasthesiaComplications}</b></p>
            <p>3. Кто-либо из Ваших родственников сталкивался с проблемами, связанными с общей анестезией?**{t}<b>{user.siblingsAnasthesiaComplications}</b></p>
            <p>{t}</p>
            <p><b>5. Остальные моменты:</b></p>
            <p>Есть ли у Вас еще какие-нибудь опасения или вопросы состояния здоровья, которые могут не позволить Вам стать донором, и которые Вы хотите обсудить? (Пожалуйста, конкретизируйте){t}<b>{user.concerns}</b></p>
            <p>{t}</p>
            <p>При условии, что на один или более вопросов Вы ответили «да» (за исключением вопросов, помеченных  **), или же Вы сомневаетесь в своей пригодности, просим Вас связаться с сотрудниками нашего Регистра.</p>
            <p>{t}</p>
            <p><b>Я подтверждаю, что не страдал и не страдаю тяжелыми, длительными заболеваниями, и, насколько мне известно, полностью здоров.</b></p>
            <p><b>ФИО:</b>_______________________________</p>
            <p>{t}</p>
            <p><b>Дата</b>: _______________________________{t}<b>Подпись</b>:_______________________________</p>
          </div>
          <div className="page-break">
            <h1 className="text-center">БЛАГОТВОРИТЕЛЬНЫЙ  ФОНД «КАРЕЛЬСКИЙ РЕГИСТР НЕРОДСТВЕННЫХ ДОНОРОВ ГЕМОПОЭТИЧЕСКИХ СТВОЛОВЫХ КЛЕТОК» (Россия, Петрозаводск) KARELIAN  REGISTRY OF UNRELATED HEMATOPOIETIC STEM CELL DONORS (RUSSIA, PETROZAVODSK)</h1>
            <p>{t}</p>
            <h3>Данные о доноре / Donor’s data</h3>
            <p>{t}</p>
            <p><b>Данные о доноре / Donor’s data</b>: _______________________________</p>
            <p>Почтовый индекс / Postal code:{t}<b>{user.adressIndex}</b></p>
            <p>Этническая группа / Ethnic Group:{t}<b>{user.ethnicGroup}</b></p>
            <p>{t}</p>
            <p><b>Спасибо за сотрудничество!       Thank you for assistance!</b></p>
          </div>
          <div className="page-break">
            <h1 className="text-center">КАРЕЛЬСКИЙ РЕГИСТР НЕРОДСТВЕННЫХ ДОНОРОВ ГЕМОПОЭТИЧЕСКИХ СТВОЛОВЫХ КЛЕТОК (Российская Федерация, г. Петрозаводск, ул. Анохина, д.47А-44, тел. (8142) 670-180, E.mail: karelian.bmd@onego.ru )</h1>
            <p>{t}</p>
            <p><b>Код донора</b>: _______________________________</p>
            <p>{t}</p>
            <h3>СОГЛАШЕНИЕ ОБ УЧАСТИИ В НАУЧНО-ПРАКТИЧЕСКОМ ИССЛЕДОВАНИИ</h3>
            <p>{t}Этим соглашением я выражаю свою готовность добровольно принять участие в научно-практическом исследовании по изучению частоты HLA-генотипов потенциальных доноров  гемопоэтических стволовых клеток, проводимом Благотворительным Фондом «Карельский Регистр неродственных доноров гемопоэтических стволовых клеток» и DKMS Life Science Lab GmbH (Дрезден, Германия).  Мне было разъяснено, что мои личные данные никоим образом не будут использованы в данном исследовании и потому они не будут переданы Благотворительным Фондом «Карельский Регистр неродственных доноров гемопоэтических стволовых клеток» третьим лицам. Кроме того, мне было разъяснено, что в данном исследовании будет использована только информация о моем HLA-генотипе, индивидуальном коде донора и регионе проживания и потому я даю согласие на передачу перечисленных выше данных в DKMS Life Science Lab GmbH. Я получил полную информацию относительно дальнейшего использования полученных от меня данных, а именно их применения только в рамках научных исследований, которые включают в себя публикацию в научных изданиях, презентацию на научных конференциях, симпозиумах, съездах и т.п.</p>
            <p>{t}Я согласен с тем, чтобы самостоятельно сдать два мазка из полости рта для молекулярно-биологического теста на исследование параметров совместимости (определение HLA-генотипа) и сохранено некоторое количество ДНК с целью дальнейшего тестирования в случае возникновения такой необходимости. Кроме того, я подтверждаю свое согласие на возможные дальнейшие исследования с образцами моей ДНК в рамках научных исследований, проводимых DKMS Life Science Lab GmbH. Я даю согласие на перемещение моих биологических образцов в Германию, в лабораторию DKMS Life Science Lab GmbH в г. Дрездене.</p>
            <p>{t}</p>
            <p><b>Фамилия:</b> <u>{user.surname}</u>{t}<b>Имя:</b> <u>{user.firstName}</u></p>
            <p><b>Отчество:</b> <u>{user.secondName}</u></p>
            <p><b>Дата рождения:</b> <u>{user.bday}</u>{t}<b>Пол:</b> <u>{(user.gender === "да")?'мужской':'женский'}</u></p>
            <p><b>Телефон:</b> <u>{user.mobilePhone}</u></p>
            <p><b>E.mail:</b> <u>{user.email}</u></p>
            <p><b>Адрес: индекс:</b> <u>{user.adressIndex}</u>{t}<b>г.:</b> <u>{user.adressCity}</u></p>
            <p><b>Улица:</b> <u>{user.adressStreet}</u>{t}<b>дом:</b> <u>{user.adressHouse}</u>{t}<b>корпус:</b> <u>{user.adressStreet}</u>{t}<b>кв.:</b> <u>{user.adressHouse}</u></p>
            <p>{t}</p>
            <p><b>Дата</b>: _______________________________{t}<b>Подпись</b>:_______________________________</p>
          </div>
          <div className="page-break">
            <h1 className="text-center">КАРЕЛЬСКИЙ РЕГИСТР НЕРОДСТВЕННЫХ ДОНОРОВ ГЕМОПОЭТИЧЕСКИХ СТВОЛОВЫХ КЛЕТОК (г. Петрозаводск, Республика Карелия, Российская Федерация)</h1>
            <p>{t}</p>
            <p>{t}Сотрудникам регистра важно понимать, какие каналы информирования о донорстве кроветворных клеток наиболее эффективны. Чтобы помочь им, пожалуйста, ответьте на несколько вопросов:</p>  
            <p>1. Откуда Вы узнали о донорстве кроветворных клеток?{t}<b>{user.question1}</b></p>
            <p>2. Когда Вы узнали о донорстве кроветворных клеток?{t}<b>{user.question2}</b></p>
            <p>3. Что мотивировало Вас стать потенциальным донором кроветворных клеток?{t}<b>{user.question3}</b></p>
            <p>4. Какое отношение Ваших родных и друзей к Вашему решению стать донором?{t}<b>{user.question4}</b></p>
          </div>

        </div>
        
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
