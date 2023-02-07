import './App.css';
import Supportimage from '../images/SemmelBrothersSupport.webp';
import React, { useLayoutEffect, useEffect, useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

function Support() {
    const [response, setResponse] = useState();

    const sendPostRequest = (data) => {
      return fetch('/fetchsupport', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
    };
  
    const HandSupportData = (event) => {
      var vornamedate = document.getElementById('Vorname').value;
      var nachnamedata = document.getElementById('Nachname').value;
      var emaildata = document.getElementById('Email').value;
      var teldata = document.getElementById('Tel').value;
      var contentdata = document.getElementById('content').value;

      const givenSet = "1234567890";

      let code = "";
      for(let i=0; i<8; i++) {
          let pos = Math.floor(Math.random()*givenSet.length);
          code += givenSet[pos];
      }
    
      let supportdata = [
        {vornamevalue: vornamedate, nachnamevalue: nachnamedata, emailvalue: emaildata, telvalue: teldata, contentvalue: contentdata, idvalue: code}
      ]
    
      console.log(supportdata);
    
      sendPostRequest(supportdata)
        .then((res) => res.json())
        .then((data) => {
          setResponse(data);
          if (data.data[0]['status'] === 'success') {
            setPop2();
          } else if (data.data[0]['status'] === 'failure') {
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
  return (
    <div className="Support">
        <Header></Header>
        <div id='mpopupBox' className='mpopup'>
            <div className='modal-content'>
                <div className='modal-header'>
                    <span onClick={() => popupclose()} className='close'>×</span>
                    <h2 className='popuptitle' id='logocolor'>SemmelBrothers</h2>
                </div>
                <div className='modal-body' onClick={() => popupwindow()}>
                    <p>Alle Eingabefelder müssen ausgefüllt werden!</p>
                </div>
                <div className='modal-footer'>
                    <a  id='noticed' className='primary_btn m-x-15' onClick={() => popupnoticed()}>Verstanden</a>
                </div>
            </div>
        </div>
        <div id='mpopupBox2' className='mpopup2'>
            <div className='modal-content2'>
                <div className='modal-header2'>
                    <span onClick={() => popupclose2()} className='close2'>×</span>
                    <h2 className='popuptitle2' id='logocolor'>SemmelBrothers</h2>
                </div>
                <div className='modal-body2' onClick={() => popupwindow2()}>
                    <p>Ihr Supportanliegen wurde an uns übermittelt!</p>
                </div>
                <div className='modal-footer2'>
                    <a  id='noticed2' className='primary_btn m-x-15' onClick={() => popupnoticed2()}>Verstanden</a>
                </div>
            </div>
        </div>
        <div className='supportcontainer'>
            <div className='supportformular'>
                <img src={Supportimage} className='supportimage'></img>
                <h1 className='textlogo'>Support</h1>
                <input type='text' placeholder='Vorname' className='supportinput' id='Vorname'></input>
                <input type='text' placeholder='Nachname' className='supportinput' id='Nachname'></input>
                <input type='text' placeholder='E-Mailadresse' className='supportinput' id='Email'></input>
                <input type='text' placeholder='Telefonnummer' className='supportinput' id='Tel'></input>
                <input type='text' placeholder='Ihr anliegen...' className='supportinput' id='content'></input>
                <a className='support-button' onClick={() => HandSupportData()}>Senden</a>
            </div>
        </div>
        <Footer></Footer>
    </div>
  );
}

export default Support;
