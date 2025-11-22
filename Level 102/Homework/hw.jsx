import React from 'react';
import AppStoreLogo from './appstore-logo.png'; 

export default function FreeTrialSection() {
  return (
    <div style={{
      backgroundColor: '#E6F5FF',
      padding: '50px 20px',
      borderRadius: '20px',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      flexWrap: 'wrap',
      maxWidth: '1000px',
      margin: 'auto'
    }}>

      <div style={{ maxWidth: '300px', marginBottom: '20px' }}>
        <h2 style={{ fontSize: '2rem', color: '#0B1F5C', marginBottom: '20px' }}>Join free for 7 days</h2>
        <button style={{
          backgroundColor: '#0B1F5C',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer'
        }}>
          <img src={AppStoreLogo} alt="App Store" style={{ width: '20px', marginRight: '10px' }} />
          Get on the App Store
        </button>
      </div>


      <div style={{ position: 'relative', width: '300px', height: '500px' }}>
        <img src="/mnt/data/a0e4adf4-bac7-46bc-9519-9c43005a03aa.png" alt="App mockup" style={{ width: '100%', borderRadius: '20px' }} />
      </div>
    </div>
  );
}