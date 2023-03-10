import './App.css';
import Header from '../components/header';
import Footer from '../components/footer';
import home1 from '../images/home1.webp';
import Simon_Tautz from '../images/Simon_Tautz.webp';
import Henri_Mache from '../images/Henri_Mache.webp';
import Simon_Lang from '../images/Simon_Lang.webp';
import Formular_Image from '../images/Formular_Image.webp';
import Sponsor_TZL from '../images/Sponsor_IBIZ.webp';
import Sponsor_UNI from '../images/Sponsor_SEMMELBROTHERS.webp';

function Home() {
  return (
    <div className="Shop">
      <Header></Header>
      <div className="image-Wrapper1">
        <img src={home1} className="home1" alt="home1"/>
        <div className="hometext">
          <p className='hometitle'>Was machen wir?</p>
          <p className='homedescription'>Unser Club ist für junge motivierte und ambitionierte Menschen, die einen Unterschied machen möchten. Unser Fokus liegt darauf, Probleme zu lösen und gleichzeitig ein Netzwerk und Freundschaften aufzubauen. 
          Der Club ist der perfekte Ort für Debatten/Diskussionen über jegliche Themen und Ideen, für Hilfe und Unterstützung bei Prototyping, Geschäftsberatung oder einfach nur jemanden zum Reden. Wir treffen uns wöchentlich online und haben 
          monatliche Treffen vor Ort. Diese Treffen bieten die Möglichkeit, tiefere Verbindungen und Beziehungen aufzubauen, sowie Fortschritte und Ideen zu präsentieren und zu diskutieren.</p>
        </div>
      </div>
      <div className='homegrid'>
        <p className='hometitlegrid'>Was machen wir?</p>
        <p className='homedescriptiongrid'>Unser Club ist für junge motivierte und ambitionierte Menschen, die einen Unterschied machen möchten. Unser Fokus liegt darauf, Probleme zu lösen und gleichzeitig ein Netzwerk und Freundschaften aufzubauen. 
          Der Club ist der perfekte Ort für Debatten/Diskussionen über jegliche Themen und Ideen, für Hilfe und Unterstützung bei Prototyping, Geschäftsberatung oder einfach nur jemanden zum Reden. Wir treffen uns wöchentlich online und haben 
          monatliche Treffen vor Ort. Diese Treffen bieten die Möglichkeit, tiefere Verbindungen und Beziehungen aufzubauen, sowie Fortschritte und Ideen zu präsentieren und zu diskutieren.</p>
      </div>
      <div className='hometitle5'>Was bieten wir?</div>
      <div className='homeinformationcontainer'>
        <div className='homeinformation1'>Wöchentliche online Meetings (monatlich auch in Präsenz) mit Diskussionen und Debatten über Themen, Vorstellungen von Geschäftsideen, Raum für persönlichen Entwicklung und Zusammenarbeit an Projekten.</div>
        <div className='homeinformation2'>Vorträge und Weiterbildungen von Professoren (der universität Lübeck) und Personen aus der Freien Wirtschaft über verschiedene Themen, wie Themen in naturwissenschaftlichen oder gewerblichen Bereichen.</div>
        <div className='homeinformation3'>Netzwerk von motivierten und ambitionierten Personen, die Probleme lösen wollen, eine enge Zusammenarbeit untereinander führen und bereit sind Ideen auszustauschen und umzusetzen. </div>
      </div>
      <div className='hometitle3'>Unser Team</div>
      <div className='homedescriptionrow'>
        <div className='homedescriptioncontainer'>
          <div class="card">
            <div class="card-info">
              <div class="card-avatar"><img src={Simon_Tautz}/></div>
                <div class="card-title">Simon Tautz</div>
                  <div class="card-subtitle">SemmelBrothers CEO & OPTIMIND Co-Founder</div>
                  </div>
                  <ul class="card-social">
                    <li class="card-social__item">
                    <a href='https://www.linkedin.com/in/simon-tautz-137501248/'>
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.547 3c.406 0 .75.133 1.031.398.281.266.422.602.422 1.008v15.047c0 .406-.14.766-.422 1.078a1.335 1.335 0 0 1-1.031.469h-15c-.406 0-.766-.156-1.078-.469C3.156 20.22 3 19.86 3 19.453V4.406c0-.406.148-.742.445-1.008C3.742 3.133 4.11 3 4.547 3h15zM8.578 18V9.984H6V18h2.578zM7.36 8.766c.407 0 .743-.133 1.008-.399a1.31 1.31 0 0 0 .399-.96c0-.407-.125-.743-.375-1.009C8.14 6.133 7.813 6 7.406 6c-.406 0-.742.133-1.008.398C6.133 6.664 6 7 6 7.406c0 .375.125.696.375.961.25.266.578.399.984.399zM18 18v-4.688c0-1.156-.273-2.03-.82-2.624-.547-.594-1.258-.891-2.133-.891-.938 0-1.719.437-2.344 1.312V9.984h-2.578V18h2.578v-4.547c0-.312.031-.531.094-.656.25-.625.687-.938 1.312-.938.875 0 1.313.578 1.313 1.735V18H18z"></path>
                    </svg></a>
                    </li>
                  </ul>
                </div>
        </div>
        <div className='homedescriptioncontainer'>
        <div class="card">
            <div class="card-info">
              <div class="card-avatar"><img src={Henri_Mache}/></div>
                <div class="card-title">Henri Mache</div>
                  <div class="card-subtitle">SemmelBrothers Developer & OPTIMIND Co-Founder</div>
                  </div>
                  <ul class="card-social">
                    <li class="card-social__item">
                    <a href='https://www.linkedin.com/in/henri-mache-a3a231244/'>
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.547 3c.406 0 .75.133 1.031.398.281.266.422.602.422 1.008v15.047c0 .406-.14.766-.422 1.078a1.335 1.335 0 0 1-1.031.469h-15c-.406 0-.766-.156-1.078-.469C3.156 20.22 3 19.86 3 19.453V4.406c0-.406.148-.742.445-1.008C3.742 3.133 4.11 3 4.547 3h15zM8.578 18V9.984H6V18h2.578zM7.36 8.766c.407 0 .743-.133 1.008-.399a1.31 1.31 0 0 0 .399-.96c0-.407-.125-.743-.375-1.009C8.14 6.133 7.813 6 7.406 6c-.406 0-.742.133-1.008.398C6.133 6.664 6 7 6 7.406c0 .375.125.696.375.961.25.266.578.399.984.399zM18 18v-4.688c0-1.156-.273-2.03-.82-2.624-.547-.594-1.258-.891-2.133-.891-.938 0-1.719.437-2.344 1.312V9.984h-2.578V18h2.578v-4.547c0-.312.031-.531.094-.656.25-.625.687-.938 1.312-.938.875 0 1.313.578 1.313 1.735V18H18z"></path>
                    </svg>
                    </a>
                    </li>
                  </ul>
                </div>
        </div>
        <div className='homedescriptioncontainer'>
        <div class="card">
            <div class="card-info">
              <div class="card-avatar"><img src={Simon_Lang}/></div>
                <div class="card-title">Simon Lang</div>
                  <div class="card-subtitle">SemmelBrothers  Manager für Human Resources & OPTIMIND Co-Founder</div>
                  </div>
                  <ul class="card-social">
                    <li class="card-social__item">
                    <a href='https://www.linkedin.com/in/simon-lang-2aa854248/'>  
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.547 3c.406 0 .75.133 1.031.398.281.266.422.602.422 1.008v15.047c0 .406-.14.766-.422 1.078a1.335 1.335 0 0 1-1.031.469h-15c-.406 0-.766-.156-1.078-.469C3.156 20.22 3 19.86 3 19.453V4.406c0-.406.148-.742.445-1.008C3.742 3.133 4.11 3 4.547 3h15zM8.578 18V9.984H6V18h2.578zM7.36 8.766c.407 0 .743-.133 1.008-.399a1.31 1.31 0 0 0 .399-.96c0-.407-.125-.743-.375-1.009C8.14 6.133 7.813 6 7.406 6c-.406 0-.742.133-1.008.398C6.133 6.664 6 7 6 7.406c0 .375.125.696.375.961.25.266.578.399.984.399zM18 18v-4.688c0-1.156-.273-2.03-.82-2.624-.547-.594-1.258-.891-2.133-.891-.938 0-1.719.437-2.344 1.312V9.984h-2.578V18h2.578v-4.547c0-.312.031-.531.094-.656.25-.625.687-.938 1.312-.938.875 0 1.313.578 1.313 1.735V18H18z"></path>
                    </svg>
                    </a>
                    </li>
                  </ul>
                </div>
              </div>
      </div>
      <div className='homeformularcontainer'>
        <div className='homeformulardescription'>
          <div className='homeformulartext'>
            <p className='hometitle'>Beitritt</p>
            <p>Wir freuen uns, dass Sie sich für eine Mitgliedschaft interessieren. Um in OPTIMIND aufgenommen zu werden, bitten wir Sie, unser kurzes Aufnahmeformular auszufüllen.
              Das Formular enthält einige grundlegende Fragen zu Ihrem Hintergrund, Ihren Interessen und Ihren Zielen. Diese Informationen helfen uns dabei, sicherzustellen, dass unsere Mitglieder gut zusammenpassen und dass wir Ihnen die bestmögliche Unterstützung bieten können.
              Nachdem wir Ihr Formular erhalten haben, werden wir uns schnellstmöglich mit Ihnen in Verbindung setzen.</p>
              <button className="primarybutton" type="button"  onClick={()=> window.open('/aufnahme')}>zum Formular</button>
          </div>
        </div>
        <div className='homeformularimage'>
          <img src={Formular_Image} className='formularimage'></img>
        </div>
      </div>
      <div className='homesponsorcontainer'>
        <div className='homesponsortitle'>
          <p className='hometitle2'>Unsere Sponsoren und Partner</p>
        </div>
        <div className='homesponsorrow'>
          <div className='sponsorcard' onClick={()=> window.open('http://bildung-in-zukunft.de/')}><img className='sponsorimage' src={Sponsor_TZL}></img></div>
          <div className='sponsorcard' onClick={()=> window.open('https://semmelbrothers.de/')}><img className='sponsorimage' src={Sponsor_UNI}></img></div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Home;
