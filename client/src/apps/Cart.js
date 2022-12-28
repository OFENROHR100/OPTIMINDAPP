import './App.css';
import './Shop.css';
import React, { useLayoutEffect } from 'react'
import Header from '../components/header'

function Cart() {

  var finaltotalprice = 0;
  function roundToTwo(num) {
      return +(Math.round(num + "e+2")  + "e-2");
  }

  function retrieve(event) {
    var main = event.currentTarget;
    console.log(main.value);
  }

  function loadCart() {
      let productsSection = document.getElementsByClassName("products_section")[0];
      productsSection.innerHTML = '';
      let productHTML = '';
      let totalPrice = 0;
      let cartItems = JSON.parse(localStorage.getItem('cart'));
      if (cartItems && cartItems.length > 0) {
           for (let item of cartItems) {
              totalPrice = totalPrice + (item.quantity * item.price);
              finaltotalprice = roundToTwo(totalPrice);
              productHTML = productHTML + `
          <div className="product-card" data-name="${item.itemName}" data-price="${item.price}" data-id="${item.itemId}">
          <div>
              <img src="./images/Gebäcke/${item.itemName}.jpg" alt="FRUIT" width="180">
          </div>
          <h3>
          ${item.itemName}
          </h3>
          <div>
              Anzahl: ${item.quantity}
          </div>
          <div>
              Preis: ${roundToTwo(item.quantity * item.price)}€
          </div>
      </div>
          `;
          }
          document.getElementsByClassName('total_price_container')[0].style.display = 'block';
          document.getElementsByClassName("total_price").innerHTML = finaltotalprice;
          document.getElementsByClassName("no-products_section")[0].style.display = 'none';
          document.getElementsByClassName("checkout-section")[0].style.display = 'flex';
          document.getElementsByClassName("order-process_section")[0].style.display = 'none';
          productsSection.innerHTML = productHTML;
      }
      else {
          document.getElementsByClassName("no-products_section")[0].style.display = 'block';
          document.getElementsByClassName("checkout-section")[0].style.display = 'none';
          document.getElementsByClassName("total_price_container")[0].style.display = 'none';
      }
  };

    document.addEventListener('DOMContentLoaded', function() {
        loadCart();
     }, false);

  return (
    <div className="Cart">
      <Header></Header>
        <h1 id="text-align-center m-y-30">Produkte im Warenkorb</h1>
        <h3 id="text-align-center" className="total_price_container">Gesamter Preis <span id="total_price"></span>€ + 2€ Liefergebühr</h3>
        <section id="products_section" className="products_section">
        </section>
        <section id="no-products_section" className="no-products_section" style={{display: "none"}}>
        <h1 className="text-align-center">Keine Produkte im Warenkorb!</h1>
        </section>
        <section id="order-process_section" className="order-process_section" style={{display: "none"}}>
        <h1 className="text-align-center">Ihre Bestellung wurde erfolgreich zu uns übermittelt!</h1>
        </section>
        <section id="checkout-section" className="checkout-section">
        <a id="secondary_btn m-x-15" className="clear_cart">Warenkorb leeren</a>
        </section>
	
        <div id="mpopupBox" className="mpopup">
            <div className="modal-content">
                <div className="modal-header">
                    <span className="close">×</span>
                    <h2 className="popuptitle" id="logocolor">SemmelBrothers</h2>
                </div>
            <div className="modal-body">
                <p>Dieser Zeitraum ist leider schon ausgebucht.</p>
                <p>Bitte wählen Sie einen anderen aus!</p>
        </div>
        <div className="modal-footer">
            <a className="primary_btn m-x-15" id="noticed">Verstanden</a>
        </div>
    </div>
    </div>
    
     <div id="mpopupBox2" className="mpopup2">
    <div className="modal-content2">
        <div className="modal-header2">
            <span className="close2">×</span>
            <h2 className="popuptitle2" id="logocolor2">SemmelBrothers</h2>
        </div>
        <div className="modal-body2">
            <p>Bitte füllen Sie alle Kontaktinformationen aus!</p>
        </div>
        <div className="modal-footer2">
            <a className="primary_btn m-x-15" id="noticed2">Verstanden</a>
        </div>
    </div>
    </div>
    
    <div id="mpopupBox3" className="mpopup3">
    <div className="modal-content3">
        <div className="modal-header3">
            <span className="close3">×</span>
            <h2 className="popuptitle3" id="logocolor3">SemmelBrothers</h2>
        </div>
        <div className="modal-body3">
            <p>Bitte wählen Sie einen validen Zeitraum aus!</p>
        </div>
        <div className="modal-footer3">
            <a className="primary_btn m-x-15" id="noticed3">Verstanden</a>
        </div>
    </div>
    </div>
    
    <div id="mpopupBox4" className="mpopup4">
    <div className="modal-content4">
        <div className="modal-header4">
            <span className="close4">×</span>
            <h2 className="popuptitle4" id="logocolor4">SemmelBrothers</h2>
        </div>
        <div className="modal-body4">
            <p>Bitte wählen Sie einen validen Anlieferungstag aus!</p>
        </div>
        <div className="modal-footer4">
            <a className="primary_btn m-x-15" id="noticed4">Verstanden</a>
        </div>
    </div>
    </div>
	
     <div id="mpopupBox5" className="mpopup5">
    <div className="modal-content5">
        <div className="modal-header5">
            <span className="close5">×</span>
            <h2 className="popuptitle5" id="logocolor5">SemmelBrothers</h2>
        </div>
        <div className="modal-body5">
            <p>Bitte bedenken Sie, dass wir nur in folgenden Gebieten von Lübeck ausliefern:</p>
	    <p>Hochschulstadtteil, Bornkamp, Falkenwiesenviertel, Altstadtinsel</p>
        <p>Bestellungen werden nur von Montag bis Freitag 17 Uhr angenommen.</p>
        </div>
        <div className="modal-footer5">
            <a className="primary_btn m-x-15" id="noticed5">Verstanden</a>
        </div>
    </div>
    </div>
	
    <div id="mpopupBox6" className="mpopup6">
    <div className="modal-content6">
        <div className="modal-header6">
            <span className="close6">×</span>
            <h2 className="popuptitle6" id="logocolor6">SemmelBrothers</h2>
        </div>
        <div className="modal-body6">
            <p>Ihre Bestellung wurde erfolgreich an uns übermittelt!</p>
        </div>
        <div className="modal-footer6">
            <a className="primary_btn m-x-15" id="noticed6">Verstanden</a>
        </div>
    </div>
    </div>

    <section className="formm">
        <div className="formular">
            <h1>Bestellformular</h1>
            <form id="form">
                <h2>Wohin sollen wir liefern?</h2>
                <input type="text" id="Vorname" placeholder="Vorname" required></input>
                <input type="text" id="Nachname" placeholder="Nachname" required></input>
                <input type="number" id="Postleitzahl" placeholder="Postleitzahl"></input>
                <input type="text" id="Straße" placeholder="Straße" required></input>
                <input type="text" id="Hausnummer" placeholder="Hausnummer" required></input>
                <input type="number" id="Telefonnummer" placeholder="Telefonnummer" required></input>
                <input type="text" id="E-Mail" placeholder="E-Mailadresse" required></input>
                <h2>Ihre Bestellungsinformation</h2>
                <h2>Anlieferungstag</h2>
                <select name="Anlieferungstag" id="date">
                    <option value="stopdate">Bitte wählen Sie den Anlieferungstag!</option>
                    <option value="sa" id="sa">Samstag</option>
                    <option value="so" id="so">Sonntag</option>
                </select>
                <h2>Anlieferungszeit</h2>
                <select name="Anlieferungszeit" onChange={(event) => retrieve(event)} id="timespan">
                    <option value="stop">Bitte wählen Sie den Zeitraum!</option>
                    <option value="achteins" id="achteins">8:00 - 8:30</option>
                    <option value="achtzwei" id="achtzwei">8:30 - 9:00</option>
                    <option value="neuneins" id="neuneins">9:00 - 9:30</option>
                    <option value="neunzwei" id="neunzwei">9:30 - 10:00</option>
                    <option value="zehneins" id="neuneins">10:00 - 10:30</option>
                    <option value="zehnzwei" id="neunzwei">10:30 - 11:00</option>
                    <option value="elfeins" id="elfeins">11:00 - 11:30</option>
                    <option value="elfzwei" id="elfzwei">11:30 - 12:00</option>
                </select>
                <h2>Bezahlung</h2>
                <select name="Bezahlungsmethode" id="pay">
                    <option>Barzahlung</option>
                </select><br></br>
		        <input type="radio" name="marketing" id="marketing1" value="TRUE"></input>
		        <label for="marketing1">Wollen Sie eine Errinerungsmail erhalten?</label>
		        <br></br>
                <p id="agb">Mit der Bestellung erklären Sie sich einverstanden, dass Sie unsere Allgemeinen Geschäftsbedingungen gelesen und akzeptiert haben.</p>
                <a href="./agbs.html" className="agb">Allgemeine Geschäftsbedingungen</a>
		        <p id="agb">Stornierungen bitte an:</p>
                <a href="mailto:service@semmelbrothers.de" className="agb">info@semmelbrothers.de</a>
		        <p id="agb">Brauchen Sie Hilfe? Haben Sie Fragen?</p>
                <a href="./support.html" className="agb">Support</a>    
            </form>
        </div>
    </section>
     <section id="checkout-section" className="checkout-section">
         <div className="final"><a className="primary_btn m-x-15" id="checkout_cart">Bestellen</a></div>
    </section>
    </div>
  );
}

export default Cart;
