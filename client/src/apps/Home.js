import './App.css';
import Header from '../components/header'
import Footer from '../components/footer';
import home1 from '../images/home1.webp'

function Home() {
  return (
    <div className="Shop">
      <Header></Header>
      <div className="image-Wrapper1">
        <img src={home1} className="home1" alt="home1"/>
        <div className="hometext">
          <p className='hometitle'>SemmelBrothers</p>
          <p className='homedescription'>Unser Bäckerei-Lieferservice bringt frische Backwaren direkt zu Ihnen nach Hause. Wählen 
          Sie aus einer Vielzahl von Broten, Brötchen, Kuchen und anderen süßen und herzhaften 
          Leckereien. Bestellen Sie einfach online, um Ihre Bestellung aufzugeben. Wir liefern 
          schnell und zuverlässig in der ganzen Stadt. Probieren Sie es aus und genießen Sie die 
          Frische unserer Backwaren in den eigenen vier Wänden.</p>
        </div>
      </div>
      <div className='homegrid'>
        <p className='hometitlegrid'>SemmelBrothers</p>
        <p className='homedescriptiongrid'>Unser Bäckerei-Lieferservice bringt frische Backwaren direkt zu Ihnen nach Hause. Wählen 
        Sie aus einer Vielzahl von Broten, Brötchen, Kuchen und anderen süßen und herzhaften 
        Leckereien. Bestellen Sie einfach online, um Ihre Bestellung aufzugeben. Wir liefern 
        schnell und zuverlässig in der ganzen Stadt. Probieren Sie es aus und genießen Sie die 
        Frische unserer Backwaren in den eigenen vier Wänden.</p>
      </div>
      <div className='homedescriptionrow'>
        <div className='homedescriptioncontainer'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className='homeicondescription'><path d="M312 32c-13.3 0-24 10.7-24 24s10.7 24 24 24h25.7l34.6 64H222.9l-27.4-38C191 99.7 183.7 96 176 96H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h43.7l22.1 30.7-26.6 53.1c-10-2.5-20.5-3.8-31.2-3.8C57.3 224 0 281.3 0 352s57.3 128 128 128c65.3 0 119.1-48.9 127-112h49c8.5 0 16.3-4.5 20.7-11.8l84.8-143.5 21.7 40.1C402.4 276.3 384 312 384 352c0 70.7 57.3 128 128 128s128-57.3 128-128s-57.3-128-128-128c-13.5 0-26.5 2.1-38.7 6L375.4 48.8C369.8 38.4 359 32 347.2 32H312zM458.6 303.7l32.3 59.7c6.3 11.7 20.9 16 32.5 9.7s16-20.9 9.7-32.5l-32.3-59.7c3.6-.6 7.4-.9 11.2-.9c39.8 0 72 32.2 72 72s-32.2 72-72 72s-72-32.2-72-72c0-18.6 7-35.5 18.6-48.3zM133.2 368h65c-7.3 32.1-36 56-70.2 56c-39.8 0-72-32.2-72-72s32.2-72 72-72c1.7 0 3.4 .1 5.1 .2l-24.2 48.5c-9 18.1 4.1 39.4 24.3 39.4zm33.7-48l50.7-101.3 72.9 101.2-.1 .1H166.8zm90.6-128H365.9L317 274.8 257.4 192z"/></svg>
          <p className="homedescriptioncontainertext">
          Wir sind der Meinung, dass es wichtig ist, unseren ökologischen Fußabdruck so gering wie möglich zu halten und denkt daher bei jeder Entscheidung, die wir treffen, auch an die Umwelt. <br/>

          Durch die Verwendung von Fahrrädern anstelle von Autos oder Lieferwagen tragen wir dazu bei, den CO2-Ausstoß zu reduzieren und somit einen Beitrag zum Klimaschutz zu leisten. <br/>

          Wir sind überzeugt, dass nachhaltiges Denken und Handeln in allen Bereichen wichtig ist und freuen uns, dass wir mit unserer Entscheidung, Backwaren mit dem Fahrrad zu liefern, auch einen Beitrag zum Schutz der Umwelt leisten können.
          </p>
        </div>
        <div className='homedescriptioncontainer'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='homeicondescription'><path d="M256 512C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256s-114.6 256-256 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>
          <p className="homedescriptioncontainertext">
            Wir legen großen Wert darauf, dass alle Lieferungen pünktlich ankommen, damit unsere Kunden immer mit frischen und leckeren Backwaren versorgt sind. <br/>
            
            Wir verstehen, dass eine verspätete Lieferung für Sie ärgerlich sein kann und wir werden alles in unserer Macht Stehende tun, um sicherzustellen, dass Ihre Bestellung rechtzeitig bei Ihnen ankommt. <br/>

            Bestellungen sind bis Freitagabend 18:00 Uhr möglich. <br/>
            
            Wir hoffen, dass Sie weiterhin unsere Dienste in Anspruch nehmen und uns die Möglichkeit geben, Ihnen den besten Service zu bieten.
          </p>
        </div>
        <div className='homedescriptioncontainer'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='homeicondescription'><path d="M256 32C192 32 0 64 0 192c0 35.3 28.7 64 64 64V432c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V256c35.3 0 64-28.7 64-64C512 64 320 32 256 32z"/></svg>
          <p className="homedescriptioncontainertext">
          Bei unserem Backwarenlieferservice legen wir großen Wert auf die Unterstützung lokaler Unternehmen und Gemeinden. <br/>
          
          Deshalb haben wir es zu einer Priorität gemacht, alle unsere Backwaren von lokalen Bäckereien zu beziehen. <br/>

          Durch die Zusammenarbeit mit diesen lokalen Bäckereien können wir unseren Kunden nicht nur frische, hochwertige Backwaren bieten, sondern auch die hart arbeitenden Einzelpersonen und Familien unterstützen, die diese Unternehmen besitzen und betreiben. <br/>
          
          Wir glauben, dass wir durch die Zusammenarbeit eine stärkere und lebendigere Gemeinschaft schaffen können.
          </p>
        </div>
      </div>
      <div className='homemap'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d150518.3032082885!2d10.621294103989968!3d53.881121494997856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b20953f70b9df3%3A0xf4725f573e7e12b4!2zTMO8YmVjaw!5e0!3m2!1sen!2sde!4v1671748391970!5m2!1sen!2sde" title="Liefergebietmap" width="1000" height="550" style={{border: "0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className='homemapcontainer'>
        <div className='homemapcontainertext'>
          <div className="textlogo">Unser Liefergebiet und Lieferzeiten</div>
          <p className='homemaptext'>
          Leider können wir im Moment unseren Backwarenlieferservice nur in den Gebieten Hochschulstadtteil, Bornkamp, Falkenwiesenviertel und Altstadtinsel anbieten.  <br/>
          
          Wir hoffen jedoch, in naher Zukunft unsere Liefergebiete erweitern zu können, um noch mehr Kunden mit unseren frischen, leckeren Backwaren beliefern zu können. <br/>

          Bitte beachten Sie auch, dass wir derzeit nur zwischen 8 und 12 Uhr ausliefern. <br/>
          
          Wir bemühen uns, unsere Lieferzeiten so flexibel wie möglich zu gestalten, aber im Moment sind dies die einzigen Zeiten, zu denen wir Backwaren liefern können. Wir hoffen, bald in der Lage zu sein, unsere Lieferzeiten zu erweitern und noch mehr Kunden bedienen zu können. <br/>
          </p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Home;
