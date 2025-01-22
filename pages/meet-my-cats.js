import React from 'react';
import ClientNavBar from '../components/ClientNavBar';
import { buttonStyle } from '../components/styles';

const catData = [
  {
    src: 'Phoebe.png',
    alt: 'Phoebe',
    name: 'Phoebe',
    description: 'This is Phoebe. She loves to eat shrimp, and doesn\'t like anyone...'
  },
  {
    src: 'Nunu.png',
    alt: 'Nunu',
    name: 'Nunu',
    description: 'This is Nunu. She loves to eat canned chicken, and is very adventurous!'
  },
  {
    src: 'Joey.png',
    alt: 'Joey',
    name: 'Joey',
    description: 'This is Joey. He loves squeezie treats, and loves to nap under the sun~'
  }
];

const MeetMyCats = () => {
  return (
    <div style={{
      backgroundColor: '#DFF0FF', 
      color: '#543512', 
      width: '100%', 
      height: '100vh', 
      margin: '0', 
      padding: '0', 
      display: 'flex',       
      flexDirection: 'row',  
      boxSizing: 'border-box',
    }}>
      <div style={{
        backgroundColor: '#92C9FB', 
        padding: '10px',
        width: '170px', 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'start',
        height: '100vh', 
        boxSizing: 'border-box',
      }}>
        <ClientNavBar />
      </div>
      <div style={{
        flex: 1,
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'start',
        height: '100%', 
        boxSizing: 'border-box',
      }}>
        <h1 style={{ textAlign: 'center', fontSize: '48px', fontWeight: 'bold' }}>Meet my 3 kids!</h1>
        <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
          {catData.map((cat, index) => (
            <div key={index} style={{ textAlign: 'center', margin: '20px' }}>
              <img 
                src={cat.src} 
                alt={cat.alt} 
                style={{ 
                  width: '350px', 
                  height: '450px', 
                  borderRadius: '20px', 
                  objectFit: 'cover' 
                }} 
              />
              <h2 style={{ fontSize: '24px', color: '#543512' }}>{cat.name}</h2>
              <p style={{ fontSize: '18px', color: '#333' }}>{cat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MeetMyCats;
