import './App.css';
import './Popup.css';
import React, { useLayoutEffect, useEffect, useState } from 'react';
import Header from '../components/header';
import Footeralt from '../components/footeralt';

function Aufnahme() {
  const [response, setResponse] = useState();

  const sendPostRequest = (data) => {
    return fetch('/fetchaufnahme', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
  };

  const HandleFormData = (event) => {
    console.log(event);
    var mpopup = document.getElementById('mpopupBox');
    var mpopup2 = document.getElementById('mpopupBox2');
    var namedata = document.getElementById('Name').value;
    var vornamedata = document.getElementById('Vorname').value;
    var telelfonnummerdata = document.getElementById('Telefonnummer').value;
    var emaildata = document.getElementById('E-Mail').value;
    var postleitzahldata = document.getElementById('Postleitzahl').value;
    var straßedata = document.getElementById('Straße').value;
    var hausnummerdata = document.getElementById('Hausnummer').value;
    var question1 = document.getElementById('question1').value;
    var question2 = document.getElementById('question2').value;
    var question3 = document.getElementById('question3').value;
    var datacheck = document.getElementById('data');
    console.log(datacheck);

    if (namedata.length === 0) {
      mpopup.style.display = 'flex';
      return;
    } else if (vornamedata.length === 0) {
      mpopup.style.display = 'flex';
      return;
    } else if (telelfonnummerdata.length === 0) {
      mpopup.style.display = 'flex';
      return;
    } else if (emaildata.length == 0) {
      mpopup.style.display = 'flex';
      return;
    } else if (postleitzahldata.length === 0) {
      mpopup.style.display = 'flex';
      return;
    } else if (straßedata.length === 0) {
      mpopup.style.display = 'flex';
      return;
    } else if (hausnummerdata.length === 0) {
      mpopup.style.display = 'flex';
      return;
    } else if (question1.length === 0) {
      mpopup.style.display = 'flex';
      return;
    } else if (question2.length === 0) {
      mpopup.style.display = 'flex';
      return;
    } else if (question3.length === 3) {
      mpopup.style.display = 'flex';
      return;
    } else if (!datacheck.checked) {
      mpopup.style.display = 'flex';
      return;
    }

    let codeid = Math.floor(100000 + Math.random() * 900000);
  
    let formdata = [
      {namevalue: namedata, vornamevalue: vornamedata, telelfonnummervalue: telelfonnummerdata, emailvalue: emaildata, postleitzahlvalue: postleitzahldata, straßevalue: straßedata, hausnummervalue: hausnummerdata, question1value: question1, question2value: question2, question3value: question3, idvalue: codeid}
    ]
  
    console.log(formdata);
  
    sendPostRequest(formdata)
      .then((res) => res.json())
      .then((data) => {
        setResponse(data);
        if (data.data[0]['status'] === 'success') {
          setPop2();
        } else {
          setPop();
        }
        console.log(data);
      });
  };

  function popupnoticed() {
      var mpopup = document.getElementById('mpopupBox');
      
      var noticed = document.getElementById("noticed");
  
      noticed.onclick = function() {
          mpopup.style.display = "none";
      };
    }
  
    function popupclose() {
      var mpopup = document.getElementById('mpopupBox');
      
      var close = document.getElementsByClassName("close")[0];
  
      close.onclick = function() {
          mpopup.style.display = "none";
      };
    }
  
    function popupwindow2() {
      var mpopup2 = document.getElementById('mpopupBox2');
  
      window.onclick = function(event) {
          if (event.target == mpopup2) {
            mpopup2.style.display = "none";
           }
      };
    }
  
    function popupnoticed2() {
      var mpopup2 = document.getElementById('mpopupBox2');
      
      var noticed2 = document.getElementById("noticed2");
  
      noticed2.onclick = function() {
          mpopup2.style.display = "none";
      };
    }
  
    function popupclose2() {
      var mpopup2 = document.getElementById('mpopupBox2');
      
      var close2 = document.getElementsByClassName("close2")[0];
  
      close2.onclick = function() {
          mpopup2.style.display = "none";
      };
    }
  
    function popupwindow() {
      var mpopup = document.getElementById('mpopupBox');
  
      window.onclick = function(event) {
          if (event.target == mpopup) {
            mpopup.style.display = "none";
           }
      };
    }
  
    function setPop() {
      var mpopup = document.getElementById('mpopupBox');
      mpopup.style.display = 'flex';
    }
  
    function setPop2() {
      var mpopup2 = document.getElementById('mpopupBox2');
      mpopup2.style.display = 'flex';
    }

    function checked() {
      const checkbox = document.getElementById("data");
      checkbox.checked = true;

      checkbox.addEventListener("click", function() {
      checkbox.checked = !checkbox.checked;
    });
    }
  return (
    <div className="Aufnahme">
        <Header></Header>
        <div id='mpopupBox' className='mpopup'>
            <div className='modal-content'>
                <div className='modal-header'>
                    <span onClick={() => popupclose()} className='close'>×</span>
                    <h2 className='popuptitle' id='logocolor'>OPTIMIND - Club</h2>
                </div>
                <div className='modal-body' onClick={() => popupwindow()}>
                    <p>Bitte füllen Sie alle Eingabefelder aus!</p>
                    <p>Dies kann auch an der fehlenden Akzeptierung der Datenschutzerklärung liegen!</p>
                </div>
                <div className='modal-footer'>
                    <a  id='noticed' className='primarybutton2' onClick={() => popupnoticed()}>Verstanden</a>
                </div>
            </div>
        </div>
        <div id='mpopupBox2' className='mpopup2'>
            <div className='modal-content2'>
                <div className='modal-header2'>
                    <span onClick={() => popupclose2()} className='close2'>×</span>
                    <h2 className='popuptitle2' id='logocolor'>OPTIMIND - Club</h2>
                </div>
                <div className='modal-body2' onClick={() => popupwindow2()}>
                    <p>Ihr Aufnahmeformular wurde erfolgreich übermittelt!</p>
                </div>
                <div className='modal-footer2'>
                    <a  id='noticed2' className='primarybutton2' onClick={() => popupnoticed2()}>Verstanden</a>
                </div>
            </div>
        </div>
        <div className='formsection'>
          <div className='formcontainer'>
            <p className='hometitle3'>Aufnahmeformular</p>
            <input className='information' id='Name' placeholder='Name' type='text' required=''></input>
            <input className='information' id='Vorname' placeholder='Vorname' type='text' required=''></input>
            <input className='information' id='Telefonnummer' placeholder='Telefonnummer' type='text' required=''></input>
            <input className='information' id='E-Mail' placeholder='E-Mail' type='text' required=''></input>
            <input className='information' id='Postleitzahl' placeholder='Postleitzahl' type='text' required=''></input>
            <input className='information' id='Straße' placeholder='Straße' type='text' required=''></input>
            <input className='information' id='Hausnummer' placeholder='Hausnummer' type='text' required=''></input>
            <br/>
            <input className='question' id='question1' placeholder='Was kannst du besonders gut?' type='text' required=''></input>
            <input className='question' id='question2' placeholder='Woran möchtest du noch arbeiten?' type='text' required=''></input>
            <input className='question' id='question3' placeholder='Was ist deine Motivation für deine Anfrage bei OPTIMIND?' type='text' required=''></input>
            <br/>
            <div className='dataprivacy'>
              <input type='checkbox' id='data' name='data' value='TRUE'></input>
              <label for='data'><a onClick={()=> window.open('https://optimind.tiiny.site/')}>Datenschutzerklärung</a></label>
            </div>
            <botton className='primarybutton2' onClick={() => HandleFormData()}>Abschicken</botton>
          </div>
        </div>
        <Footeralt></Footeralt>
    </div>
  );
}

export default Aufnahme;
