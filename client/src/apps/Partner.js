import './App.css';
import Sponsor_TZL from '../images/Sponsor_IBIZ.webp';
import Sponsor_UNI from '../images/Sponsor_SEMMELBROTHERS.webp';
import React, { useLayoutEffect, useEffect, useState } from 'react';
import Header from '../components/header';
import Footeralt2 from '../components/footeralt2';

function Partner() {
  return (
    <div className="Partner">
        <Header></Header>
        <div className='homesponsorcontainer'>
        <div className='homesponsortitle'>
          <p className='hometitle2'>Unsere Sponsoren und Partner</p>
        </div>
        <div className='homesponsorrow'>
          <div className='sponsorcard' onClick={()=> window.open('http://bildung-in-zukunft.de/')}><img className='sponsorimage' src={Sponsor_TZL}></img></div>
          <div className='sponsorcard' onClick={()=> window.open('https://semmelbrothers.de/')}><img className='sponsorimage' src={Sponsor_UNI}></img></div>
        </div>
        </div>
        <Footeralt2></Footeralt2>
    </div>
  );
}

export default Partner;
