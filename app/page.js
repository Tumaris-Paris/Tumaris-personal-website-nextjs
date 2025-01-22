import React from 'react';
import Welcome from '../components/Welcome';
import Profile from '../components/Profile';
import InterestList from '../components/InterestList';
import ClientNavBar from '../components/ClientNavBar';

const WelcomePage = () => {
  return (
    <div style={{
      backgroundColor: '#DFF0FF', 
      color: '#543512', 
      width: '100%', 
      height: '100vh', 
      margin: '0', 
      padding: '0', 
      display: 'flex',       // Changed to flex to layout sidebar and content
      flexDirection: 'row',  // Horizontal stacking
      boxSizing: 'border-box', // Ensures padding is included in width/height calculations
    }}>
      <div style={{
        backgroundColor: '#92C9FB', 
        padding: '10px',
        width: '170px', 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'start',
        height: '100vh', // Ensures sidebar height matches viewport height
        boxSizing: 'border-box', // Ensures padding is included in width/height calculations
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
        height: '100%', // Ensures content height matches parent height
        boxSizing: 'border-box', // Ensures padding is included in width/height calculations
      }}>
        <Welcome />
        <Profile />
        <InterestList />
      </div>
    </div>
  );
}

export default WelcomePage;
